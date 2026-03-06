// ══════════════════════════════════════════════════
// config.js — 設定ファイル
// ここの値を変更してください
// ══════════════════════════════════════════════════

const CONFIG = {
  // GAS Web App URL（デプロイ後のURL）
  API_URL: "https://script.google.com/macros/s/AKfycbw7pWe_w-vxUKrsMTXpLMfRZwrrjqoxVbeZDRO-QSDDTlnghdES0Lu8d4pnI7E7hNCw/exec",

  // TelegramのBotユーザーネーム（@なし）
  TELEGRAM_BOT: "sakanaya_bot",

  // カテゴリー設定
  CATEGORIES: [
    { id: "all",            icon: "🌊", label_ja: "すべて",        label_en: "All" },
    { id: "本日のおすすめ", icon: "⭐", label_ja: "本日のおすすめ", label_en: "Today's Special" },
    { id: "マグロ",         icon: "🐟", label_ja: "マグロ",         label_en: "Tuna" },
    { id: "雲丹",           icon: "🦔", label_ja: "雲丹",           label_en: "Sea Urchin" },
    { id: "養殖",           icon: "🐠", label_ja: "養殖",           label_en: "Farmed" },
    { id: "魚介類",         icon: "🦞", label_ja: "魚介類",          label_en: "Seafood" },
    { id: "牡蠣",           icon: "🦪", label_ja: "牡蠣",           label_en: "Oyster" },
    { id: "冷凍品",         icon: "❄️", label_ja: "冷凍品",         label_en: "Frozen" },
  ],
};
