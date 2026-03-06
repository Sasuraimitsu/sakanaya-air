// ══════════════════════════════════════════════════
// ui.js — 画面描画
// ══════════════════════════════════════════════════

const UI = {

  // ── カテゴリータブ ────────────────────────────────
  renderCategoryTabs(currentCat, allProducts, lang, onSelect) {
    const wrap = document.getElementById('catTabs');
    wrap.innerHTML = CONFIG.CATEGORIES.map(cat => {
      const count = cat.id === 'all'
        ? allProducts.filter(p => !p.id.endsWith('_feat') && p.category !== '本日のおすすめ').length
        : allProducts.filter(p => p.category === cat.id).length;
      if (cat.id !== 'all' && count === 0) return '';
      const label = lang === 'ja' ? cat.label_ja : cat.label_en;
      return `<button class="cat-tab${currentCat === cat.id ? ' active' : ''}"
        onclick="App.selectCat('${cat.id}')">
        <span>${cat.icon}</span>${label}
        <span style="opacity:0.6;font-size:10px">(${count})</span>
      </button>`;
    }).join('');
  },

  // ── 商品グリッド ──────────────────────────────────
  renderProducts(filtered, currentCat, lang) {
    const main = document.getElementById('productList');
    document.getElementById('resultCount').textContent =
      lang === 'ja' ? `${filtered.length}件` : `${filtered.length} items`;

    if (filtered.length === 0) {
      main.innerHTML = `<div class="empty-state">
        <div class="empty-icon">🔍</div>
        <p>${lang === 'ja' ? '該当する商品が見つかりませんでした' : 'No products found'}</p>
      </div>`;
      return;
    }

    const groups = currentCat !== 'all'
      ? [{ cat: CONFIG.CATEGORIES.find(c => c.id === currentCat) || { icon:'🐟', label_ja: currentCat, label_en: currentCat }, products: filtered }]
      : CONFIG.CATEGORIES.filter(c => c.id !== 'all').map(cat => ({
          cat, products: filtered.filter(p => p.category === cat.id)
        })).filter(g => g.products.length > 0);

    main.innerHTML = groups.map(({ cat, products }) => `
      <div class="cat-section">
        <div class="cat-header">
          <span class="cat-header-icon">${cat.icon}</span>
          <span class="cat-header-name">${lang === 'ja' ? cat.label_ja : cat.label_en}</span>
          <span class="cat-header-en">${lang === 'ja' ? cat.label_en : cat.label_ja}</span>
          <span class="cat-count">${products.length} ${lang === 'ja' ? '品' : 'items'}</span>
        </div>
        <div class="product-grid">
          ${products.map(p => this.renderCard(p, lang)).join('')}
        </div>
      </div>`).join('');
  },

  renderCard(p, lang) {
    const inCart    = Cart.items[p.id];
    const qty       = inCart ? inCart.qty : p.min;
    const name      = lang === 'ja' ? p.name_ja : p.name_en;
    const desc      = lang === 'ja' ? p.desc_ja : p.desc_en;
    const note      = lang === 'ja' ? p.note_ja : p.note_en;
    const unitLabel = p.unit === 'kg' ? '/kg' : `/${p.unit}`;
    const hasPrice  = p.price != null && p.price > 0;

    return `
    <div class="product-card${p.featured ? ' featured' : ''}" onclick="App.openModal('${p.id}')">
      <div class="card-img-wrap">
        ${p.image_url
          ? `<img class="card-img" src="${p.image_url}" alt="${name}" loading="lazy"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
          : ''}
        <div class="card-img-placeholder" style="${p.image_url ? 'display:none' : ''}">${p.icon || '🐟'}</div>
        ${p.featured ? `<span class="card-badge">${lang==='ja'?'⭐ おすすめ':'⭐ Special'}</span>` : ''}
      </div>
      <div class="card-body">
        <div class="card-origin">${p.origin || ''}</div>
        <div class="card-name">${name}</div>
        <div class="card-name-en">${lang === 'ja' ? p.name_en : p.name_ja}</div>
        <div class="card-desc">${desc || ''}</div>
        ${p.size ? `<span class="card-spec">📦 ${p.size}</span>` : ''}
        ${hasPrice ? `
          <div class="card-price-row">
            <div>
              <div class="card-price">$${p.price.toFixed(2)}<span>${unitLabel}</span></div>
              ${note ? `<div class="card-note">※ ${note}</div>` : ''}
            </div>
          </div>
          <div class="card-actions" onclick="event.stopPropagation()">
            <div class="qty-ctrl">
              <button class="qty-btn" onclick="App.changeCardQty('${p.id}',-${p.step})">−</button>
              <input class="qty-val" id="qty_${p.id}" type="number" value="${qty}" min="${p.min}" step="${p.step}">
              <button class="qty-btn" onclick="App.changeCardQty('${p.id}',${p.step})">＋</button>
            </div>
            <button class="add-btn${inCart?' added':''}" id="addbtn_${p.id}"
              onclick="App.addToCart('${p.id}')">
              ${inCart ? (lang==='ja'?'✓ 追加済':'✓ Added') : (lang==='ja'?'🛒 カートへ':'🛒 Add')}
            </button>
          </div>
        ` : `
          <div class="card-price-na">${lang==='ja'?'価格はお問い合わせください':'Please inquire for price'}</div>
          <button class="inquiry-btn" onclick="event.stopPropagation();App.inquireTelegram('${p.id}')">
            ${lang==='ja'?'📱 Telegramで問い合わせ':'📱 Inquire via Telegram'}
          </button>
        `}
      </div>
    </div>`;
  },

  // ── カートドロワー ────────────────────────────────
  renderCart(lang) {
    const items = Object.values(Cart.items);
    const wrap  = document.getElementById('cartItems');
    if (!items.length) {
      wrap.innerHTML = `<div class="cart-empty">
        <div style="font-size:48px;opacity:0.3">🛒</div>
        <p>${lang==='ja'?'カートは空です':'Your cart is empty'}</p>
      </div>`;
      return;
    }
    wrap.innerHTML = items.map(({ product: p, qty }) => {
      const name = lang === 'ja' ? p.name_ja : p.name_en;
      return `<div class="cart-item">
        <div style="font-size:26px">${p.icon||'🐟'}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${name}</div>
          <div class="cart-item-detail">${qty} ${p.unit} × $${p.price.toFixed(2)}</div>
        </div>
        <div style="text-align:right">
          <div class="cart-item-price">$${(p.price*qty).toFixed(2)}</div>
          <button class="cart-item-remove" onclick="App.removeFromCart('${p.id}')">🗑</button>
        </div>
      </div>`;
    }).join('');
  },

  // ── モーダル ──────────────────────────────────────
  renderModal(p, lang) {
    document.getElementById('modalOrigin').textContent = p.origin || '';
    document.getElementById('modalName').textContent   = lang==='ja' ? p.name_ja : p.name_en;
    document.getElementById('modalNameEn').textContent = lang==='ja' ? p.name_en : p.name_ja;
    document.getElementById('modalDesc').textContent   = lang==='ja' ? p.desc_ja : p.desc_en;

    const specs = [
      { label: lang==='ja'?'サイズ/規格':'Size/Spec', value: p.size || '—' },
      { label: lang==='ja'?'単位':'Unit',              value: p.unit },
      { label: lang==='ja'?'最低注文':'Min Order',     value: `${p.min} ${p.unit}` },
      { label: lang==='ja'?'注文刻み':'Step',          value: `${p.step} ${p.unit}` },
    ];
    document.getElementById('modalSpecs').innerHTML = specs.map(s =>
      `<div class="modal-spec-item">
        <div class="modal-spec-label">${s.label}</div>
        <div class="modal-spec-value">${s.value}</div>
      </div>`).join('');

    const hasPrice = p.price != null && p.price > 0;
    document.getElementById('modalPriceLabel').textContent =
      lang==='ja' ? '販売価格（輸送費込み）' : 'Selling Price (incl. freight)';
    document.getElementById('modalPrice').innerHTML = hasPrice
      ? `$${p.price.toFixed(2)}<span> /${p.unit}</span>`
      : `<span style="font-size:16px">${lang==='ja'?'お問い合わせください':'Please inquire'}</span>`;
    const note = lang==='ja' ? p.note_ja : p.note_en;
    document.getElementById('modalNoteText').textContent = note ? `※ ${note}` : '';

    document.getElementById('modalQtyRow').style.display = hasPrice ? 'flex' : 'none';

    const addBtn = document.getElementById('modalAddBtn');
    if (hasPrice) {
      addBtn.style.display = 'block';
      addBtn.textContent = lang==='ja' ? '🛒 カートに追加' : '🛒 Add to Cart';
      addBtn.onclick = () => App.addFromModal();
    } else {
      addBtn.textContent = lang==='ja' ? '📱 Telegramで問い合わせ' : '📱 Inquire via Telegram';
      addBtn.onclick = () => { App.inquireTelegram(p.id); App.closeModal(); };
    }

    const qtyInput = document.getElementById('modalQtyVal');
    qtyInput.value = Cart.items[p.id] ? Cart.items[p.id].qty : p.min;
    qtyInput.min   = p.min;
    qtyInput.step  = p.step;
    document.getElementById('modalUnit').textContent = p.unit;

    // 画像
    if (p.image_url) {
      document.getElementById('modalImg').src = p.image_url;
      document.getElementById('modalImg').classList.remove('hidden');
      document.getElementById('modalImgPlaceholder').classList.add('hidden');
    } else {
      document.getElementById('modalImgPlaceholder').textContent = p.icon || '🐟';
      document.getElementById('modalImgPlaceholder').classList.remove('hidden');
      document.getElementById('modalImg').classList.add('hidden');
    }
  },

  // ── ローディング ──────────────────────────────────
  showLoading(show) {
    const main = document.getElementById('productList');
    if (show) {
      main.innerHTML = `<div class="loading-wrap">
        <div class="spinner"></div>
        <p class="loading-txt">商品データを読み込み中... / Loading products...</p>
      </div>`;
    }
  },

  // ── エラー ────────────────────────────────────────
  showError(msg) {
    const main = document.getElementById('productList');
    main.innerHTML = `<div class="error-wrap">
      <div class="error-icon">⚠️</div>
      <div class="error-msg">${msg}</div>
      <button class="retry-btn" onclick="App.loadProducts()">再読み込み / Retry</button>
    </div>`;
  },

  // ── トースト ──────────────────────────────────────
  showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2200);
  },

  // ── カートUI更新 ──────────────────────────────────
  updateCartUI(lang) {
    const total = Cart.getTotal();
    const count = Cart.getCount();
    const qty   = Cart.getTotalQty();

    const cc = document.getElementById('cartCount');
    cc.textContent = count;
    cc.classList.toggle('show', count > 0);

    document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
    document.getElementById('orderBtn').disabled = Cart.isEmpty();

    const fb = document.getElementById('floatBar');
    fb.classList.toggle('show', count > 0);
    document.getElementById('floatCount').textContent =
      lang === 'ja' ? `${count}種類 / ${qty.toFixed(1)}点` : `${count} types / ${qty.toFixed(1)} qty`;
    document.getElementById('floatTotal').textContent = `$${total.toFixed(2)}`;
  },

  // ── 言語切り替え ──────────────────────────────────
  applyLang(lang) {
    document.getElementById('btnJA').classList.toggle('active', lang === 'ja');
    document.getElementById('btnEN').classList.toggle('active', lang === 'en');
    document.querySelectorAll('[data-ja]').forEach(el => {
      el.textContent = lang === 'ja' ? el.dataset.ja : el.dataset.en;
    });
    document.querySelectorAll('[data-placeholder-ja]').forEach(el => {
      el.placeholder = lang === 'ja' ? el.dataset.placeholderJa : el.dataset.placeholderEn;
    });
    document.getElementById('noticeJA').classList.toggle('hidden', lang !== 'ja');
    document.getElementById('noticeEN').classList.toggle('hidden', lang !== 'en');
  },
};
