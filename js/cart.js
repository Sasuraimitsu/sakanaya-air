// ══════════════════════════════════════════════════
// cart.js — カート機能
// ══════════════════════════════════════════════════

const Cart = {
  items: {},  // { productId: { product, qty } }

  /** 商品をカートに追加/更新 */
  add(product, qty) {
    this.items[product.id] = { product, qty };
    this._update();
  },

  /** カートから削除 */
  remove(id) {
    delete this.items[id];
    this._update();
  },

  /** 数量を変更 */
  setQty(id, qty) {
    if (this.items[id]) {
      this.items[id].qty = qty;
      this._update();
    }
  },

  /** 合計金額 */
  getTotal() {
    return Object.values(this.items)
      .reduce((s, i) => s + i.product.price * i.qty, 0);
  },

  /** 合計数量 */
  getTotalQty() {
    return Object.values(this.items)
      .reduce((s, i) => s + i.qty, 0);
  },

  /** アイテム数 */
  getCount() {
    return Object.keys(this.items).length;
  },

  /** カートが空か */
  isEmpty() {
    return this.getCount() === 0;
  },

  /** UI更新（app.jsのupdateCartUI()を呼ぶ） */
  _update() {
    if (typeof updateCartUI === 'function') updateCartUI();
  },

  /** Telegram注文メッセージを生成 */
  buildOrderMessage(lang, notes) {
    const items = Object.values(this.items);
    const total = this.getTotal();

    let msg = lang === 'ja'
      ? `📦 【注文】SAKANAYA JAPON\n\n`
      : `📦 [ORDER] SAKANAYA JAPON\n\n`;

    items.forEach(({ product: p, qty }) => {
      const name = lang === 'ja' ? p.name_ja : p.name_en;
      msg += `・${name}\n  ${qty} ${p.unit} × $${p.price.toFixed(2)} = $${(p.price * qty).toFixed(2)}\n`;
    });

    msg += `\n${'─'.repeat(26)}\n`;
    msg += lang === 'ja'
      ? `💴 合計: $${total.toFixed(2)}（配送料別）\n`
      : `💴 Total: $${total.toFixed(2)} (excl. delivery)\n`;

    if (notes) {
      msg += `\n📝 ${lang === 'ja' ? '備考' : 'Notes'}: ${notes}`;
    }

    return msg;
  },

  /** 問い合わせメッセージを生成 */
  buildInquiryMessage(product, lang) {
    const name = lang === 'ja' ? product.name_ja : product.name_en;
    return lang === 'ja'
      ? `【価格問い合わせ】\n商品名: ${name}\n産地: ${product.origin}\n規格: ${product.size || '-'}\n\nよろしくお願いいたします。`
      : `[Price Inquiry]\nProduct: ${name}\nOrigin: ${product.origin}\nSpec: ${product.size || '-'}\n\nThank you.`;
  },
};
