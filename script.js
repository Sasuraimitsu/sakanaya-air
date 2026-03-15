// ══════════════════════════════════════════════════
// config.js — 設定ファイル
// ここの値を変更してください
// ══════════════════════════════════════════════════

const CONFIG = {
  // GAS Web App URL（デプロイ後のURL）
  API_URL: "https://script.google.com/macros/s/AKfycbxR97eDr6u89XCtqyeRjGESUs5e2tFmP1DF8Zg0JODJvp8w-3QBBuudcdhSsJjTtkgT/exec",

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
// ══════════════════════════════════════════════════
// data.js — サンプルデータ（GAS未接続時のフォールバック）
// ══════════════════════════════════════════════════

const SAMPLE_PRODUCTS = [
  // ── マグロ ───────────────────────────────────────
  {
    id: "TUNA-001", category: "マグロ",
    name_ja: "愛媛県産養殖生本まぐろ 背上 UB",
    name_en: "Farmed Bluefin Tuna - Upper Back (UB)",
    origin: "愛媛 / Ehime", size: "70kgサイズ / 3-4kg個体",
    desc_ja: "愛媛県産養殖生本まぐろの背上部位。サイズ約3-4kg。",
    desc_en: "Upper back of farmed bluefin tuna from Ehime. Approx 3-4kg.",
    price: 62.93, unit: "kg", min: 0.5, step: 0.5, featured: false,
    note_ja: "3kg以下カット+$5", note_en: "Cut +$5 for under 3kg",
    icon: "🐟", image_url: "images/tuna/ub.jpg",
  },
  {
    id: "TUNA-002", category: "マグロ",
    name_ja: "愛媛県産養殖生本まぐろ 背中 MB",
    name_en: "Farmed Bluefin Tuna - Middle Back (MB)",
    origin: "愛媛 / Ehime", size: "70kgサイズ / 3-4kg個体",
    desc_ja: "背中部位。バランスの良い赤身と脂。",
    desc_en: "Middle back. Well-balanced lean and fat.",
    price: 86.36, unit: "kg", min: 0.5, step: 0.5, featured: false,
    note_ja: "3kg以下カット+$5", note_en: "Cut +$5 for under 3kg",
    icon: "🐟", image_url: "images/tuna/mb.jpg",
  },
  {
    id: "TUNA-003", category: "マグロ",
    name_ja: "愛媛県産養殖生本まぐろ 背下 BB",
    name_en: "Farmed Bluefin Tuna - Bottom Back (BB)",
    origin: "愛媛 / Ehime", size: "70kgサイズ / 3-4kg個体",
    desc_ja: "背下部位。旨みが凝縮した赤身寄りの部位。",
    desc_en: "Bottom back. Lean with concentrated umami.",
    price: 62.06, unit: "kg", min: 0.5, step: 0.5, featured: false,
    note_ja: "3kg以下カット+$5", note_en: "Cut +$5 for under 3kg",
    icon: "🐟", image_url: "images/tuna/bb.jpg",
  },
  {
    id: "TUNA-004", category: "マグロ",
    name_ja: "愛媛県産養殖生本まぐろ 腹上 UA（大トロ）",
    name_en: "Farmed Bluefin Tuna - Upper Abdomen UA (Otoro)",
    origin: "愛媛 / Ehime", size: "70kgサイズ / 3-4kg個体",
    desc_ja: "最高峰の大トロ部位。とろける脂が絶品。",
    desc_en: "Premium otoro. Melts in your mouth.",
    price: 102.86, unit: "kg", min: 0.5, step: 0.5, featured: true,
    note_ja: "3kg以下カット+$5", note_en: "Cut +$5 for under 3kg",
    icon: "🐟", image_url: "images/tuna/ua.jpg",
  },
  {
    id: "TUNA-005", category: "マグロ",
    name_ja: "愛媛県産養殖生本まぐろ 腹中 MA（中トロ）",
    name_en: "Farmed Bluefin Tuna - Middle Abdomen MA (Chutoro)",
    origin: "愛媛 / Ehime", size: "70kgサイズ / 3-4kg個体",
    desc_ja: "人気No.1の中トロ部位。赤身と脂の黄金バランス。",
    desc_en: "Most popular chutoro. Perfect balance of lean and fat.",
    price: 86.36, unit: "kg", min: 0.5, step: 0.5, featured: false,
    note_ja: "3kg以下カット+$5", note_en: "Cut +$5 for under 3kg",
    icon: "🐟", image_url: "images/tuna/ma.jpg",
  },
  {
    id: "TUNA-006", category: "マグロ",
    name_ja: "愛媛県産養殖生本まぐろ 腹下 BA",
    name_en: "Farmed Bluefin Tuna - Bottom Abdomen BA",
    origin: "愛媛 / Ehime", size: "70kgサイズ / 3-4kg個体",
    desc_ja: "腹下部位。脂と旨みのバランスが良い人気部位。",
    desc_en: "Bottom abdomen. Popular cut with great flavor balance.",
    price: 62.93, unit: "kg", min: 0.5, step: 0.5, featured: false,
    note_ja: "3kg以下カット+$5", note_en: "Cut +$5 for under 3kg",
    icon: "🐟", image_url: "images/tuna/ba.jpg",
  },

  // ── 雲丹 ─────────────────────────────────────────
  {
    id: "UNI-S01", category: "雲丹",
    name_ja: "雲丹 泰匠物産・艶然（ロシア産赤上並び）",
    name_en: "Uni - Taisho Enzen / Russian Red Grade",
    origin: "ロシア / Russia", size: "250g / pack",
    desc_ja: "ロシア産赤上並びの最高グレード。泰匠物産・艶然ブランド。",
    desc_en: "Top grade Russian Red uni. Taisho Enzen brand.",
    price: 159.46, unit: "pack", min: 1, step: 1, featured: true,
    note_ja: "仕入状況により変動あり", note_en: "Subject to supply conditions",
    icon: "🦔", image_url: "images/uni/s01.jpg",
  },
  {
    id: "UNI-S02", category: "雲丹",
    name_ja: "雲丹 倖永（ロシア）",
    name_en: "Uni - Kouei / Russia",
    origin: "ロシア / Russia", size: "250g / pack",
    desc_ja: "倖永ブランドのロシア産雲丹。濃厚な甘みと磯の香り。",
    desc_en: "Kouei brand Russian uni. Rich sweetness with ocean aroma.",
    price: 168.14, unit: "pack", min: 1, step: 1, featured: false,
    note_ja: "仕入状況により変動あり", note_en: "Subject to supply conditions",
    icon: "🦔", image_url: "images/uni/s02.jpg",
  },
  {
    id: "UNI-S03", category: "雲丹",
    name_ja: "雲丹 竹内（ロシア産赤上並び）",
    name_en: "Uni - Takeuchi / Russian Red",
    origin: "ロシア / Russia", size: "250g / pack",
    desc_ja: "竹内ブランドのロシア産赤上並び雲丹。",
    desc_en: "Takeuchi brand Russian Red grade uni.",
    price: 133.42, unit: "pack", min: 1, step: 1, featured: false,
    note_ja: "仕入状況により変動あり", note_en: "Subject to supply conditions",
    icon: "🦔", image_url: "images/uni/s03.jpg",
  },
  {
    id: "UNI-S04", category: "雲丹",
    name_ja: "雲丹 松浦（ロシア産黄色）",
    name_en: "Uni - Matsuura / Russian Yellow",
    origin: "ロシア / Russia", size: "250g / pack",
    desc_ja: "松浦ブランドのロシア産黄色雲丹。まろやかな風味。",
    desc_en: "Matsuura brand Russian Yellow uni. Mellow flavor.",
    price: 133.42, unit: "pack", min: 1, step: 1, featured: false,
    note_ja: "仕入状況により変動あり", note_en: "Subject to supply conditions",
    icon: "🦔", image_url: "images/uni/s04.jpg",
  },
  {
    id: "UNI-S07", category: "雲丹",
    name_ja: "雲丹 マルカワ（ロシア産赤上並び）",
    name_en: "Uni - Marukawa / Russian Red",
    origin: "ロシア / Russia", size: "250g / pack",
    desc_ja: "マルカワブランドのロシア産赤上並び雲丹。",
    desc_en: "Marukawa brand Russian Red grade uni.",
    price: 150.78, unit: "pack", min: 1, step: 1, featured: false,
    note_ja: "仕入状況により変動あり", note_en: "Subject to supply conditions",
    icon: "🦔", image_url: "images/uni/s07.jpg",
  },
  {
    id: "UNI-S11", category: "雲丹",
    name_ja: "雲丹 浜中小川（Bバラ）",
    name_en: "Uni - Hamanaka Ogawa / B Grade Bara",
    origin: "ロシア / Russia", size: "250g / pack",
    desc_ja: "リーズナブルなBバラグレード。料理用にも最適。",
    desc_en: "Value B grade bara uni. Great for cooking.",
    price: 98.70, unit: "pack", min: 1, step: 1, featured: false,
    note_ja: "仕入状況により変動あり", note_en: "Subject to supply conditions",
    icon: "🦔", image_url: "images/uni/s11.jpg",
  },
  {
    id: "UNI-S15", category: "雲丹",
    name_ja: "雲丹 壱（カナダBARA）",
    name_en: "Uni - Ichi / Canada Bara",
    origin: "カナダ / Canada", size: "250g / pack",
    desc_ja: "カナダ産のバラグレード雲丹。",
    desc_en: "Canadian bara grade uni.",
    price: 98.70, unit: "pack", min: 1, step: 1, featured: false,
    note_ja: "仕入状況により変動あり", note_en: "Subject to supply conditions",
    icon: "🦔", image_url: "images/uni/s15.jpg",
  },

  // ── 養殖 ─────────────────────────────────────────
  {
    id: "FARM-K01", category: "養殖",
    name_ja: "朝〆養殖たい（愛媛）",
    name_en: "Farmed Sea Bream Morning Kill (Ehime)",
    origin: "愛媛 / Ehime", size: "1.5kg前後",
    desc_ja: "愛媛県産の養殖真鯛。朝〆で新鮮さ抜群。",
    desc_en: "Farmed sea bream from Ehime. Morning-killed for peak freshness.",
    price: 31.70, unit: "kg", min: 0.5, step: 0.5, featured: false,
    note_ja: "朝〆", note_en: "Morning Kill",
    icon: "🐡", image_url: "images/farmed/k01.jpg",
  },
  {
    id: "FARM-K02", category: "養殖",
    name_ja: "朝〆養殖カンパチ（鹿児島）",
    name_en: "Farmed Amberjack Morning Kill (Kagoshima)",
    origin: "鹿児島 / Kagoshima", size: "2-3kg前後",
    desc_ja: "鹿児島産の養殖カンパチ。朝〆で旨みが凝縮。",
    desc_en: "Farmed amberjack from Kagoshima. Morning-killed.",
    price: 42.12, unit: "kg", min: 0.5, step: 0.5, featured: true,
    note_ja: "朝〆", note_en: "Morning Kill",
    icon: "🐠", image_url: "images/farmed/k02.jpg",
  },
  {
    id: "FARM-K03", category: "養殖",
    name_ja: "養殖ブリ新物（鹿児島）",
    name_en: "Farmed Yellowtail New Season (Kagoshima)",
    origin: "鹿児島 / Kagoshima", size: "3-4kg前後",
    desc_ja: "鹿児島産の養殖ブリ新物。脂乗り抜群。",
    desc_en: "New season farmed yellowtail from Kagoshima. Excellent fat content.",
    price: 37.34, unit: "kg", min: 0.5, step: 0.5, featured: false,
    note_ja: "新物", note_en: "New Season",
    icon: "🐟", image_url: "images/farmed/k03.jpg",
  },
  {
    id: "FARM-K04", category: "養殖",
    name_ja: "朝〆養殖シマアジ（愛媛）",
    name_en: "Farmed Striped Jack Morning Kill (Ehime)",
    origin: "愛媛 / Ehime", size: "0.9kg前後",
    desc_ja: "愛媛県産養殖シマアジ。朝〆の新鮮なシマアジは絶品。",
    desc_en: "Farmed striped jack from Ehime. Morning-killed.",
    price: 48.19, unit: "kg", min: 0.5, step: 0.5, featured: false,
    note_ja: "朝〆", note_en: "Morning Kill",
    icon: "🐟", image_url: "images/farmed/k04.jpg",
  },
  {
    id: "FARM-K05", category: "養殖",
    name_ja: "朝〆養殖平目（韓国）",
    name_en: "Farmed Flounder Morning Kill (Korea)",
    origin: "韓国 / Korea", size: "1kg前後",
    desc_ja: "韓国産養殖ヒラメ。朝〆で歯ごたえ抜群。",
    desc_en: "Farmed flounder from Korea. Morning-killed.",
    price: 51.64, unit: "kg", min: 0.5, step: 0.5, featured: false,
    note_ja: "朝〆", note_en: "Morning Kill",
    icon: "🐡", image_url: "images/farmed/k05.jpg",
  },

  // ── 魚介類 ───────────────────────────────────────
  {
    id: "SEA-K75", category: "魚介類",
    name_ja: "あん肝（北海道噴火湾・中）",
    name_en: "Monkfish Liver (Hokkaido Funka Bay, Medium)",
    origin: "北海道 / Hokkaido", size: "1kg",
    desc_ja: "北海道噴火湾産のあん肝。海のフォアグラ。",
    desc_en: "Monkfish liver from Hokkaido Funka Bay. Foie gras of the sea.",
    price: 153.20, unit: "kg", min: 0.5, step: 0.5, featured: false,
    note_ja: "", note_en: "",
    icon: "🫁", image_url: "images/seafood/k75.jpg",
  },
  {
    id: "SEA-K76", category: "魚介類",
    name_ja: "あん肝（青森・中大）",
    name_en: "Monkfish Liver (Aomori, Med-Large)",
    origin: "青森 / Aomori", size: "1kg",
    desc_ja: "青森産の中大サイズあん肝。濃厚な旨み。",
    desc_en: "Medium-large monkfish liver from Aomori.",
    price: 83.76, unit: "kg", min: 0.5, step: 0.5, featured: false,
    note_ja: "", note_en: "",
    icon: "🫁", image_url: "images/seafood/k76.jpg",
  },
  {
    id: "SEA-K83", category: "魚介類",
    name_ja: "アカガイ（宮城）",
    name_en: "Ark Shell (Miyagi)",
    origin: "宮城 / Miyagi", size: "100/140g前後",
    desc_ja: "宮城産の天然アカガイ。磯の香りと濃厚な旨み。",
    desc_en: "Wild ark shell from Miyagi. Rich ocean flavor.",
    price: 62.06, unit: "kg", min: 1, step: 1, featured: false,
    note_ja: "", note_en: "",
    icon: "🦪", image_url: "images/seafood/k83.jpg",
  },
  {
    id: "SEA-K88", category: "魚介類",
    name_ja: "サザエ（長崎）S",
    name_en: "Turban Shell (Nagasaki, S)",
    origin: "長崎 / Nagasaki", size: "100/130g前後",
    desc_ja: "長崎産のサザエ。壺焼きに最適。",
    desc_en: "Turban shell from Nagasaki. Perfect for grilling.",
    price: 40.36, unit: "kg", min: 1, step: 1, featured: false,
    note_ja: "", note_en: "",
    icon: "🐚", image_url: "images/seafood/k88.jpg",
  },
  {
    id: "SEA-P70", category: "魚介類",
    name_ja: "マダラ白子フレッシュパック（2特）",
    name_en: "Pacific Cod Milt Fresh Pack Grade 2",
    origin: "国内 / Japan", size: "0.5kg / pack",
    desc_ja: "新鮮なマダラの白子。とろける食感。",
    desc_en: "Fresh Pacific cod milt. Silky texture.",
    price: 43.03, unit: "pack", min: 1, step: 1, featured: false,
    note_ja: "", note_en: "",
    icon: "🫀", image_url: "images/seafood/p70.jpg",
  },

  // ── 牡蠣 ─────────────────────────────────────────
  {
    id: "OYS-P115", category: "牡蠣",
    name_ja: "カキ ヒロタ湾 M",
    name_en: "Oyster Hirota Bay M",
    origin: "広田湾", size: "131-200g前後",
    desc_ja: "広田湾産の牡蠣。濃厚な旨みが自慢。",
    desc_en: "Oyster from Hirota Bay. Rich and flavorful.",
    price: 6.60, unit: "pc", min: 1, step: 1, featured: false,
    note_ja: "", note_en: "",
    icon: "🦪", image_url: "images/oyster/p115.jpg",
  },
  {
    id: "OYS-P122", category: "牡蠣",
    name_ja: "兵庫県室津産 殻付冷凍牡蠣 2L（生食可）",
    name_en: "Frozen Oyster in Shell 2L Hyogo Murotsu (Sashimi Grade)",
    origin: "兵庫 室津 / Hyogo Murotsu", size: "2kg前後 / 20個",
    desc_ja: "生食可の高品質冷凍牡蠣。兵庫県室津産。",
    desc_en: "Sashimi grade frozen oyster in shell. Hyogo Murotsu.",
    price: 69.87, unit: "pack", min: 1, step: 1, featured: false,
    note_ja: "生食可", note_en: "Sashimi Grade",
    icon: "🦪", image_url: "images/oyster/p122.jpg",
  },
  {
    id: "OYS-P126", category: "牡蠣",
    name_ja: "カキ 広田湾 L",
    name_en: "Oyster Hirota Bay L",
    origin: "広田湾", size: "200/280g前後",
    desc_ja: "広田湾産の大粒牡蠣L。",
    desc_en: "Large oyster from Hirota Bay.",
    price: 9.30, unit: "pc", min: 1, step: 1, featured: false,
    note_ja: "", note_en: "",
    icon: "🦪", image_url: "images/oyster/p126.jpg",
  },

  // ── 冷凍品 ───────────────────────────────────────
  {
    id: "FRZ-P51", category: "冷凍品",
    name_ja: "冷凍鮭いくら（輸入）",
    name_en: "Frozen Salmon Roe / Ikura (Imported)",
    origin: "輸入 / Imported", size: "0.5kg前後 / pack",
    desc_ja: "輸入物の冷凍鮭いくら。コスパ抜群。",
    desc_en: "Imported frozen salmon roe. Excellent value.",
    price: 73.18, unit: "pack", min: 1, step: 1, featured: false,
    note_ja: "", note_en: "",
    icon: "🫧", image_url: "images/frozen/p51.jpg",
  },
  {
    id: "FRZ-P52", category: "冷凍品",
    name_ja: "冷凍新物鮭いくら（北海道 日高）",
    name_en: "Frozen Salmon Roe New Season (Hokkaido Hidaka)",
    origin: "北海道 日高 / Hokkaido Hidaka", size: "0.5kg前後 / pack",
    desc_ja: "北海道日高産の新物鮭いくら。大粒で濃厚。",
    desc_en: "New season salmon roe from Hokkaido Hidaka. Large grains.",
    price: 113.62, unit: "pack", min: 1, step: 1, featured: false,
    note_ja: "新物", note_en: "New Season",
    icon: "🫧", image_url: "images/frozen/p52.jpg",
  },
  {
    id: "FRZ-P55", category: "冷凍品",
    name_ja: "冷凍ボタンエビ 11-13入（ロシア）",
    name_en: "Frozen Botan Shrimp / Spot Prawn (Russia)",
    origin: "ロシア / Russia", size: "0.5kg / 11-13尾",
    desc_ja: "ロシア産の冷凍ボタンエビ。甘みと濃厚な旨み。",
    desc_en: "Frozen spot prawn from Russia. Sweet and rich.",
    price: 53.73, unit: "pack", min: 1, step: 1, featured: false,
    note_ja: "11-13尾入", note_en: "11-13 pcs",
    icon: "🦐", image_url: "images/frozen/p55.jpg",
  },
  {
    id: "FRZ-P57", category: "冷凍品",
    name_ja: "冷凍甘エビ 61-67入（ロシア）",
    name_en: "Frozen Sweet Shrimp / Amaebi (Russia)",
    origin: "ロシア / Russia", size: "1kg / 61-67尾",
    desc_ja: "ロシア産の冷凍甘エビ。たっぷり入り。",
    desc_en: "Frozen sweet shrimp from Russia. 61-67 pcs.",
    price: 55.32, unit: "pack", min: 1, step: 1, featured: false,
    note_ja: "61-67尾入", note_en: "61-67 pcs",
    icon: "🦐", image_url: "images/frozen/p57.jpg",
  },
  {
    id: "FRZ-P56", category: "冷凍品",
    name_ja: "冷凍煮穴子 5尾（250g）",
    name_en: "Frozen Boiled Conger Eel (5 pcs)",
    origin: "国内 / Japan", size: "0.25kg / 5尾",
    desc_ja: "ふっくら柔らかい煮穴子。5尾入り。",
    desc_en: "Tender boiled conger eel. 5 pieces.",
    price: 19.03, unit: "pack", min: 1, step: 1, featured: false,
    note_ja: "5尾入", note_en: "5 pcs",
    icon: "🐍", image_url: "images/frozen/p56.jpg",
  },
  {
    id: "FRZ-P99", category: "冷凍品",
    name_ja: "細もずく（沖縄）",
    name_en: "Mozuku Seaweed Thin Type (Okinawa)",
    origin: "沖縄 / Okinawa", size: "1kg / pack",
    desc_ja: "沖縄産の細もずく。磯の香りが豊か。",
    desc_en: "Thin mozuku seaweed from Okinawa.",
    price: 29.51, unit: "pack", min: 1, step: 1, featured: false,
    note_ja: "", note_en: "",
    icon: "🌿", image_url: "images/frozen/p99.jpg",
  },
];
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
// ══════════════════════════════════════════════════
// api.js — GAS API連携
// ══════════════════════════════════════════════════

const API = {

  /** 商品マスターをGASから取得 */
  async fetchProducts() {
    const url = `${CONFIG.API_URL}?action=products`;
    const res = await fetch(url, { redirect: 'follow' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data.error) throw new Error(data.error);

    // GASのフィールド名をフロントエンド形式にマッピング
    const CAT_ICONS = Object.fromEntries(
      CONFIG.CATEGORIES.map(c => [c.id, c.icon])
    );

    // 修正後（ここを差し替えてみてください）
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

// ★ ここが重要：products から抽出するように徹底する
const featuredItems = products
    .filter(p => p.featured)
    .map(p => ({ ...p, id: p.id + "_feat", category: "本日のおすすめ" }));

return [...products, ...featuredItems];
  },

  /** 為替レートをGASから取得 */
  async fetchFxRate() {
    const url = `${CONFIG.API_URL}?action=fx`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  },
};
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
