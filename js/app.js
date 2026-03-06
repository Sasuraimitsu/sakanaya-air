// ══════════════════════════════════════════════════
// app.js — メインコントローラー
// ══════════════════════════════════════════════════

const App = {
  lang:           'ja',
  currentCat:     'all',
  searchQuery:    '',
  allProducts:    [],
  currentProduct: null,

  // ── 初期化 ────────────────────────────────────────
  async init() {
    // 検索イベント
    document.getElementById('searchInput').addEventListener('input', e => {
      this.searchQuery = e.target.value;
      this.renderProducts();
    });
    // 商品データ読み込み
    await this.loadProducts();
  },

  // ── 商品データ読み込み ────────────────────────────
  async loadProducts() {
    UI.showLoading(true);
    try {
      this.allProducts = await API.fetchProducts();
      this.renderCategoryTabs();
      this.renderProducts();
    } catch (err) {
      console.warn('API取得失敗、サンプルデータを使用:', err.message);
      // フォールバック: サンプルデータ
      const featured = SAMPLE_PRODUCTS
        .filter(p => p.featured)
        .map(p => ({ ...p, id: p.id + '_feat', category: '本日のおすすめ' }));
      this.allProducts = [...SAMPLE_PRODUCTS, ...featured];
      this.renderCategoryTabs();
      this.renderProducts();
      UI.showToast(this.lang === 'ja' ? '⚠️ オフラインモード' : '⚠️ Offline mode');
    }
  },

  // ── 言語切り替え ──────────────────────────────────
  setLang(l) {
    this.lang = l;
    UI.applyLang(l);
    this.renderCategoryTabs();
    this.renderProducts();
    UI.renderCart(l);
  },

  // ── カテゴリー選択 ────────────────────────────────
  selectCat(id) {
    this.currentCat = id;
    this.renderCategoryTabs();
    this.renderProducts();
  },

  // ── フィルター済み商品を取得 ──────────────────────
  getFiltered() {
    return this.allProducts.filter(p => {
      const inCat = this.currentCat === 'all'
        ? p.category !== '本日のおすすめ' && !p.id.endsWith('_feat')
        : p.category === this.currentCat;
      const q = this.searchQuery.toLowerCase();
      const inSearch = !q ||
        p.name_ja.toLowerCase().includes(q) ||
        p.name_en.toLowerCase().includes(q) ||
        (p.origin || '').toLowerCase().includes(q);
      return inCat && inSearch;
    });
  },

  // ── 描画 ──────────────────────────────────────────
  renderCategoryTabs() {
    UI.renderCategoryTabs(this.currentCat, this.allProducts, this.lang);
  },

  renderProducts() {
    UI.renderProducts(this.getFiltered(), this.currentCat, this.lang);
  },

  // ── カート操作 ────────────────────────────────────
  changeCardQty(id, delta) {
    const input = document.getElementById(`qty_${id}`);
    if (!input) return;
    const p = this.allProducts.find(x => x.id === id);
    if (!p) return;
    let val = Math.round((parseFloat(input.value) + delta) * 10) / 10;
    val = Math.max(p.min, val);
    input.value = val;
    if (Cart.items[id]) { Cart.setQty(id, val); }
  },

  addToCart(id) {
    const p = this.allProducts.find(x => x.id === id);
    if (!p || !p.price) return;
    const input = document.getElementById(`qty_${id}`);
    const qty   = input ? parseFloat(input.value) : p.min;
    Cart.add(p, qty);
    UI.showToast(this.lang === 'ja' ? '🛒 カートに追加しました' : '🛒 Added to cart');
    this.renderProducts();
  },

  removeFromCart(id) {
    Cart.remove(id);
    this.renderProducts();
    UI.renderCart(this.lang);
  },

  // ── カートドロワー ────────────────────────────────
  openCart() {
    UI.renderCart(this.lang);
    document.getElementById('cartDrawer').classList.add('open');
    document.getElementById('cartOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  closeCart() {
    document.getElementById('cartDrawer').classList.remove('open');
    document.getElementById('cartOverlay').classList.remove('open');
    document.body.style.overflow = '';
  },

  // ── モーダル ──────────────────────────────────────
  openModal(id) {
    const p = this.allProducts.find(x => x.id === id);
    if (!p) return;
    this.currentProduct = p;
    UI.renderModal(p, this.lang);
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  },

  modalQtyChange(delta) {
    if (!this.currentProduct) return;
    const input = document.getElementById('modalQtyVal');
    let val = Math.round((parseFloat(input.value) + delta * this.currentProduct.step) * 10) / 10;
    val = Math.max(this.currentProduct.min, val);
    input.value = val;
  },

  addFromModal() {
    if (!this.currentProduct || !this.currentProduct.price) return;
    const qty = parseFloat(document.getElementById('modalQtyVal').value);
    Cart.add(this.currentProduct, qty);
    UI.showToast(this.lang === 'ja' ? '🛒 カートに追加しました' : '🛒 Added to cart');
    this.closeModal();
    this.renderProducts();
  },

  // ── Telegram ──────────────────────────────────────
  sendToTelegram() {
    if (Cart.isEmpty()) return;
    const notes = document.getElementById('cartNotes').value;
    const msg   = Cart.buildOrderMessage(this.lang, notes);
    window.open(`https://t.me/${CONFIG.TELEGRAM_BOT}?text=${encodeURIComponent(msg)}`, '_blank');
  },

  inquireTelegram(id) {
    const p = this.allProducts.find(x => x.id === id);
    if (!p) return;
    const msg = Cart.buildInquiryMessage(p, this.lang);
    window.open(`https://t.me/${CONFIG.TELEGRAM_BOT}?text=${encodeURIComponent(msg)}`, '_blank');
  },
};

// ── グローバル関数（HTML onclickから呼ぶ用） ────────
function setLang(l)          { App.setLang(l); }
function openCart()          { App.openCart(); }
function closeCart()         { App.closeCart(); }
function closeModalDirect()  { App.closeModal(); }
function closeModal(e)       { if (e.target === document.getElementById('modalOverlay')) App.closeModal(); }
function modalQtyChange(d)   { App.modalQtyChange(d); }
function addFromModal()      { App.addFromModal(); }
function sendToTelegram()    { App.sendToTelegram(); }
function updateCartUI()      { UI.updateCartUI(App.lang); }

// ── 起動 ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => App.init());
