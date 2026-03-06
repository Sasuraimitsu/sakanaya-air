// ══════════════════════════════════════════════════
// api.js — GAS API連携
// ══════════════════════════════════════════════════

const API = {

  /** 商品マスターをGASから取得 */
  async fetchProducts() {
    const url = `${CONFIG.API_URL}?action=products`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data.error) throw new Error(data.error);

    // GASのフィールド名をフロントエンド形式にマッピング
    const CAT_ICONS = Object.fromEntries(
      CONFIG.CATEGORIES.map(c => [c.id, c.icon])
    );

    const products = (data.products || []).map(p => ({
      id:          p.id,
      category:    p.category_ja,
      category_ja: p.category_ja,
      category_en: p.category_en,
      name_ja:     p.name_ja,
      name_en:     p.name_en,
      origin:      p.origin || "",
      size:        p.size || "",
      desc_ja:     p.desc_ja || "",
      desc_en:     p.desc_en || "",
      price:       p.price_usd || null,
      unit:        p.unit || "kg",
      min:         p.min_order || 1,
      step:        p.step || 0.5,
      featured:    p.featured === true || p.featured === "TRUE",
      note_ja:     p.stock_note_ja || "",
      note_en:     p.stock_note_en || "",
      image_url:   p.image_url || "",
      icon:        CAT_ICONS[p.category_ja] || "🐟",
    }));

    // featuredフラグから「本日のおすすめ」カテゴリーを生成
    const featured = products
      .filter(p => p.featured)
      .map(p => ({ ...p, id: p.id + "_feat", category: "本日のおすすめ" }));

    return [...products, ...featured];
  },

  /** 為替レートをGASから取得 */
  async fetchFxRate() {
    const url = `${CONFIG.API_URL}?action=fx`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  },
};
