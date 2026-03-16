
export const ARABIC_LETTERS = [
  'أ', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ',
  'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص',
  'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق',
  'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'
];

export const CATEGORIES = [
  { id: 'name', label: 'اسم', icon: '👤', color: '#60a5fa' },
  { id: 'animal', label: 'حيوان', icon: '🦁', color: '#f97316' },
  { id: 'plant', label: 'نبات', icon: '🌿', color: '#22c55e' },
  { id: 'object', label: 'جماد', icon: '🪨', color: '#a78bfa' },
  { id: 'country', label: 'بلاد', icon: '🌍', color: '#14b8a6' },
  { id: 'food', label: 'أكلة', icon: '🍽️', color: '#f43f5e' },
  { id: 'city', label: 'مدينة', icon: '🏙️', color: '#eab308' },
  { id: 'color', label: 'لون', icon: '🎨', color: '#ec4899' },
];

export interface Question {
  letter: string;
  category: string;
  categoryLabel: string;
  question: string;
  answers: string[];
  difficulty: 'easy' | 'medium' | 'hard';
}

// Comprehensive question bank organized by letter
export const QUESTIONS: Record<string, Question[]> = {
  'أ': [
    { letter: 'أ', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف الألف', answers: ['أحمد', 'أمل', 'أسامة', 'أمينة', 'إبراهيم', 'أنس', 'آدم', 'إيمان', 'أسماء'], difficulty: 'easy' },
    { letter: 'أ', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف الألف', answers: ['أسد', 'أرنب', 'أفعى', 'إوزة', 'أخطبوط'], difficulty: 'easy' },
    { letter: 'أ', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف الألف', answers: ['أرز', 'أناناس', 'أقحوان', 'إكليل الجبل'], difficulty: 'easy' },
    { letter: 'أ', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف الألف', answers: ['إبريق', 'أريكة', 'إطار', 'أرجوحة'], difficulty: 'easy' },
    { letter: 'أ', category: 'country', categoryLabel: 'بلاد', question: 'بلد يبدأ بحرف الألف', answers: ['الأردن', 'الإمارات', 'ألمانيا', 'إيطاليا', 'أمريكا', 'إسبانيا', 'أستراليا', 'إندونيسيا', 'أفغانستان'], difficulty: 'easy' },
    { letter: 'أ', category: 'food', categoryLabel: 'أكلة', question: 'أكلة تبدأ بحرف الألف', answers: ['أرز باللحم', 'إيدام', 'أم علي'], difficulty: 'medium' },
    { letter: 'أ', category: 'city', categoryLabel: 'مدينة', question: 'مدينة تبدأ بحرف الألف', answers: ['أبها', 'الإسكندرية', 'أنقرة', 'أثينا', 'أمستردام', 'إسطنبول'], difficulty: 'easy' },
    { letter: 'أ', category: 'color', categoryLabel: 'لون', question: 'لون يبدأ بحرف الألف', answers: ['أحمر', 'أزرق', 'أبيض', 'أصفر', 'أسود', 'أخضر'], difficulty: 'easy' },
  ],
  'ب': [
    { letter: 'ب', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف الباء', answers: ['بدر', 'بشرى', 'باسم', 'بلال', 'بثينة', 'بسمة', 'براء'], difficulty: 'easy' },
    { letter: 'ب', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف الباء', answers: ['بطة', 'ببغاء', 'بقرة', 'بومة', 'بطريق', 'بغل'], difficulty: 'easy' },
    { letter: 'ب', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف الباء', answers: ['بطاطس', 'بصل', 'بقدونس', 'بامية', 'بطيخ', 'برتقال', 'بازلاء'], difficulty: 'easy' },
    { letter: 'ب', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف الباء', answers: ['باب', 'بئر', 'بركة', 'برج', 'بساط'], difficulty: 'easy' },
    { letter: 'ب', category: 'country', categoryLabel: 'بلاد', question: 'بلد يبدأ بحرف الباء', answers: ['البحرين', 'بريطانيا', 'البرازيل', 'بلجيكا', 'باكستان', 'بنغلاديش', 'بولندا'], difficulty: 'easy' },
    { letter: 'ب', category: 'food', categoryLabel: 'أكلة', question: 'أكلة تبدأ بحرف الباء', answers: ['برياني', 'بيتزا', 'بسبوسة', 'بابا غنوج', 'بان كيك'], difficulty: 'easy' },
    { letter: 'ب', category: 'city', categoryLabel: 'مدينة', question: 'مدينة تبدأ بحرف الباء', answers: ['بغداد', 'بيروت', 'برلين', 'باريس', 'بكين', 'برشلونة', 'بريدة'], difficulty: 'easy' },
    { letter: 'ب', category: 'color', categoryLabel: 'لون', question: 'لون يبدأ بحرف الباء', answers: ['بنفسجي', 'بني', 'برتقالي', 'بيج'], difficulty: 'easy' },
  ],
  'ت': [
    { letter: 'ت', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف التاء', answers: ['تميم', 'تالا', 'تركي', 'تهاني', 'توفيق'], difficulty: 'easy' },
    { letter: 'ت', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف التاء', answers: ['تمساح', 'تيس', 'تنين كومودو', 'ثعلب'], difficulty: 'easy' },
    { letter: 'ت', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف التاء', answers: ['تفاح', 'تمر', 'توت', 'ترمس', 'تين'], difficulty: 'easy' },
    { letter: 'ت', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف التاء', answers: ['تلفاز', 'تاج', 'تمثال', 'ترس'], difficulty: 'easy' },
    { letter: 'ت', category: 'country', categoryLabel: 'بلاد', question: 'بلد يبدأ بحرف التاء', answers: ['تونس', 'تركيا', 'تايلاند', 'تشيلي', 'تنزانيا'], difficulty: 'easy' },
    { letter: 'ت', category: 'food', categoryLabel: 'أكلة', question: 'أكلة تبدأ بحرف التاء', answers: ['تبولة', 'تشيز كيك', 'ترمس'], difficulty: 'medium' },
    { letter: 'ت', category: 'city', categoryLabel: 'مدينة', question: 'مدينة تبدأ بحرف التاء', answers: ['تبوك', 'طوكيو', 'تورنتو', 'تونس'], difficulty: 'easy' },
  ],
  'ث': [
    { letter: 'ث', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف الثاء', answers: ['ثامر', 'ثناء', 'ثابت', 'ثريا'], difficulty: 'medium' },
    { letter: 'ث', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف الثاء', answers: ['ثعلب', 'ثعبان', 'ثور'], difficulty: 'easy' },
    { letter: 'ث', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف الثاء', answers: ['ثوم', 'ثمر'], difficulty: 'easy' },
    { letter: 'ث', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف الثاء', answers: ['ثلاجة', 'ثوب', 'ثريا'], difficulty: 'easy' },
    { letter: 'ث', category: 'country', categoryLabel: 'بلاد', question: 'بلد يبدأ بحرف الثاء', answers: ['ثيوبيا'], difficulty: 'hard' },
  ],
  'ج': [
    { letter: 'ج', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف الجيم', answers: ['جاسم', 'جميلة', 'جمال', 'جنى', 'جابر', 'جواهر'], difficulty: 'easy' },
    { letter: 'ج', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف الجيم', answers: ['جمل', 'جاموس', 'جراد', 'جندب'], difficulty: 'easy' },
    { letter: 'ج', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف الجيم', answers: ['جزر', 'جوز', 'جوافة', 'جرجير'], difficulty: 'easy' },
    { letter: 'ج', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف الجيم', answers: ['جدار', 'جرس', 'جسر', 'جرة'], difficulty: 'easy' },
    { letter: 'ج', category: 'country', categoryLabel: 'بلاد', question: 'بلد يبدأ بحرف الجيم', answers: ['الجزائر', 'جنوب أفريقيا', 'جورجيا', 'جامايكا'], difficulty: 'easy' },
    { letter: 'ج', category: 'food', categoryLabel: 'أكلة', question: 'أكلة تبدأ بحرف الجيم', answers: ['جريش', 'جلاش'], difficulty: 'medium' },
  ],
  'ح': [
    { letter: 'ح', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف الحاء', answers: ['حسن', 'حنان', 'حمد', 'حياة', 'حسين', 'حليمة'], difficulty: 'easy' },
    { letter: 'ح', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف الحاء', answers: ['حصان', 'حمار', 'حلزون', 'حمامة', 'حوت', 'حرباء'], difficulty: 'easy' },
    { letter: 'ح', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف الحاء', answers: ['حبق', 'حلبة', 'حمص'], difficulty: 'easy' },
    { letter: 'ح', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف الحاء', answers: ['حقيبة', 'حبل', 'حذاء', 'حجر'], difficulty: 'easy' },
    { letter: 'ح', category: 'country', categoryLabel: 'بلاد', question: 'بلد يبدأ بحرف الحاء', answers: ['حبشة'], difficulty: 'hard' },
  ],
  'خ': [
    { letter: 'خ', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف الخاء', answers: ['خالد', 'خديجة', 'خليل', 'خلود', 'خالص'], difficulty: 'easy' },
    { letter: 'خ', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف الخاء', answers: ['خروف', 'خنزير', 'خفاش', 'خيل', 'خلد'], difficulty: 'easy' },
    { letter: 'خ', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف الخاء', answers: ['خس', 'خيار', 'خوخ', 'خبيزة'], difficulty: 'easy' },
    { letter: 'خ', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف الخاء', answers: ['خاتم', 'خزانة', 'خريطة', 'خيمة'], difficulty: 'easy' },
    { letter: 'خ', category: 'country', categoryLabel: 'بلاد', question: 'بلد يبدأ بحرف الخاء', answers: ['خوارزم'], difficulty: 'hard' },
  ],
  'د': [
    { letter: 'د', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف الدال', answers: ['دانة', 'داود', 'دلال', 'ديما'], difficulty: 'easy' },
    { letter: 'د', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف الدال', answers: ['دب', 'دجاجة', 'ديك', 'دولفين', 'ديناصور'], difficulty: 'easy' },
    { letter: 'د', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف الدال', answers: ['دراق', 'ذرة'], difficulty: 'medium' },
    { letter: 'د', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف الدال', answers: ['دفتر', 'درج', 'دلو', 'دراجة'], difficulty: 'easy' },
    { letter: 'د', category: 'country', categoryLabel: 'بلاد', question: 'بلد يبدأ بحرف الدال', answers: ['الدنمارك', 'دومينيكا'], difficulty: 'medium' },
  ],
  'ر': [
    { letter: 'ر', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف الراء', answers: ['رائد', 'رنا', 'رشيد', 'ريم', 'رامي', 'ريان'], difficulty: 'easy' },
    { letter: 'ر', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف الراء', answers: ['راكون', 'رنة'], difficulty: 'medium' },
    { letter: 'ر', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف الراء', answers: ['رمان', 'ريحان', 'رشاد'], difficulty: 'easy' },
    { letter: 'ر', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف الراء', answers: ['رف', 'ركن', 'رمح', 'رسالة'], difficulty: 'easy' },
    { letter: 'ر', category: 'country', categoryLabel: 'بلاد', question: 'بلد يبدأ بحرف الراء', answers: ['روسيا', 'رومانيا', 'رواندا'], difficulty: 'easy' },
  ],
  'س': [
    { letter: 'س', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف السين', answers: ['سالم', 'سارة', 'سعود', 'سلمى', 'سامي', 'سعاد'], difficulty: 'easy' },
    { letter: 'س', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف السين', answers: ['سمكة', 'سلحفاة', 'سنجاب', 'سحلية'], difficulty: 'easy' },
    { letter: 'س', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف السين', answers: ['سبانخ', 'سمسم', 'سدر'], difficulty: 'easy' },
    { letter: 'س', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف السين', answers: ['سيارة', 'سرير', 'ساعة', 'سجادة', 'سيف'], difficulty: 'easy' },
    { letter: 'س', category: 'country', categoryLabel: 'بلاد', question: 'بلد يبدأ بحرف السين', answers: ['السعودية', 'السودان', 'سوريا', 'سويسرا', 'سنغافورة', 'السويد'], difficulty: 'easy' },
  ],
  'ش': [
    { letter: 'ش', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف الشين', answers: ['شهد', 'شادي', 'شيماء', 'شريف'], difficulty: 'easy' },
    { letter: 'ش', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف الشين', answers: ['شمبانزي'], difficulty: 'hard' },
    { letter: 'ش', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف الشين', answers: ['شعير', 'شمندر', 'شبت'], difficulty: 'medium' },
    { letter: 'ش', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف الشين', answers: ['شمعة', 'شباك', 'شوكة', 'شاشة'], difficulty: 'easy' },
    { letter: 'ش', category: 'country', categoryLabel: 'بلاد', question: 'بلد يبدأ بحرف الشين', answers: ['الشيشان'], difficulty: 'hard' },
  ],
  'ص': [
    { letter: 'ص', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف الصاد', answers: ['صالح', 'صفاء', 'صلاح', 'صفية'], difficulty: 'easy' },
    { letter: 'ص', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف الصاد', answers: ['صقر', 'صرصور'], difficulty: 'easy' },
    { letter: 'ص', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف الصاد', answers: ['صبار', 'صنوبر'], difficulty: 'easy' },
    { letter: 'ص', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف الصاد', answers: ['صندوق', 'صحن', 'صاروخ'], difficulty: 'easy' },
    { letter: 'ص', category: 'country', categoryLabel: 'بلاد', question: 'بلد يبدأ بحرف الصاد', answers: ['الصومال', 'الصين', 'صربيا'], difficulty: 'easy' },
  ],
  'ع': [
    { letter: 'ع', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف العين', answers: ['عبدالله', 'عائشة', 'عمر', 'علي', 'عبدو', 'عهود'], difficulty: 'easy' },
    { letter: 'ع', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف العين', answers: ['عصفور', 'عنكبوت', 'عقرب', 'عنزة', 'عجل'], difficulty: 'easy' },
    { letter: 'ع', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف العين', answers: ['عنب', 'عدس', 'عباد الشمس'], difficulty: 'easy' },
    { letter: 'ع', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف العين', answers: ['عربة', 'عقد', 'علم', 'عملة'], difficulty: 'easy' },
    { letter: 'ع', category: 'country', categoryLabel: 'بلاد', question: 'بلد يبدأ بحرف العين', answers: ['العراق', 'عمان', 'عمان'], difficulty: 'easy' },
  ],
  'غ': [
    { letter: 'غ', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف الغين', answers: ['غادة', 'غازي', 'غالية', 'غسان'], difficulty: 'medium' },
    { letter: 'غ', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف الغين', answers: ['غزال', 'غراب', 'غوريلا'], difficulty: 'easy' },
    { letter: 'غ', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف الغين', answers: ['غار'], difficulty: 'hard' },
    { letter: 'غ', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف الغين', answers: ['غطاء', 'غرفة', 'غسالة'], difficulty: 'easy' },
    { letter: 'غ', category: 'country', categoryLabel: 'بلاد', question: 'بلد يبدأ بحرف الغين', answers: ['غانا', 'غينيا', 'غواتيمالا'], difficulty: 'medium' },
  ],
  'ف': [
    { letter: 'ف', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف الفاء', answers: ['فهد', 'فاطمة', 'فيصل', 'فدوى', 'فارس'], difficulty: 'easy' },
    { letter: 'ف', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف الفاء', answers: ['فيل', 'فهد', 'فراشة', 'فأر'], difficulty: 'easy' },
    { letter: 'ف', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف الفاء', answers: ['فراولة', 'فلفل', 'فول', 'فجل'], difficulty: 'easy' },
    { letter: 'ف', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف الفاء', answers: ['فنجان', 'فرشاة', 'فانوس'], difficulty: 'easy' },
    { letter: 'ف', category: 'country', categoryLabel: 'بلاد', question: 'بلد يبدأ بحرف الفاء', answers: ['فرنسا', 'فلسطين', 'فنلندا', 'فيتنام', 'فنزويلا'], difficulty: 'easy' },
  ],
  'ق': [
    { letter: 'ق', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف القاف', answers: ['قاسم', 'قمر', 'قصي'], difficulty: 'medium' },
    { letter: 'ق', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف القاف', answers: ['قط', 'قرد', 'قنفذ', 'قرش'], difficulty: 'easy' },
    { letter: 'ق', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف القاف', answers: ['قمح', 'قرنفل', 'قصب'], difficulty: 'easy' },
    { letter: 'ق', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف القاف', answers: ['قلم', 'قارب', 'قفل', 'قميص'], difficulty: 'easy' },
    { letter: 'ق', category: 'country', categoryLabel: 'بلاد', question: 'بلد يبدأ بحرف القاف', answers: ['قطر', 'قبرص', 'قيرغيزستان'], difficulty: 'easy' },
  ],
  'ك': [
    { letter: 'ك', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف الكاف', answers: ['كريم', 'كوثر', 'كمال', 'كنان'], difficulty: 'easy' },
    { letter: 'ك', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف الكاف', answers: ['كلب', 'كنغر', 'كوالا', 'كبش'], difficulty: 'easy' },
    { letter: 'ك', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف الكاف', answers: ['كوسا', 'كرز', 'كمثرى', 'كركم'], difficulty: 'easy' },
    { letter: 'ك', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف الكاف', answers: ['كتاب', 'كرسي', 'كوب', 'كمبيوتر'], difficulty: 'easy' },
    { letter: 'ك', category: 'country', categoryLabel: 'بلاد', question: 'بلد يبدأ بحرف الكاف', answers: ['الكويت', 'كندا', 'كوريا', 'كينيا', 'كولومبيا', 'كمبوديا'], difficulty: 'easy' },
  ],
  'ل': [
    { letter: 'ل', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف اللام', answers: ['ليلى', 'لؤي', 'لينا', 'لطيفة'], difficulty: 'easy' },
    { letter: 'ل', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف اللام', answers: ['لقلق', 'ليمور'], difficulty: 'medium' },
    { letter: 'ل', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف اللام', answers: ['ليمون', 'لوبيا', 'لوز', 'لافندر'], difficulty: 'easy' },
    { letter: 'ل', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف اللام', answers: ['لوحة', 'لعبة', 'لمبة'], difficulty: 'easy' },
    { letter: 'ل', category: 'country', categoryLabel: 'بلاد', question: 'بلد يبدأ بحرف اللام', answers: ['لبنان', 'ليبيا', 'لاوس', 'لوكسمبورغ'], difficulty: 'easy' },
  ],
  'م': [
    { letter: 'م', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف الميم', answers: ['محمد', 'مريم', 'مصطفى', 'منى', 'ماجد', 'مها'], difficulty: 'easy' },
    { letter: 'م', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف الميم', answers: ['ماعز', 'مهر', 'موظ'], difficulty: 'easy' },
    { letter: 'م', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف الميم', answers: ['موز', 'مانجو', 'ملوخية', 'نعناع'], difficulty: 'easy' },
    { letter: 'م', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف الميم', answers: ['مفتاح', 'مرآة', 'مظلة', 'منضدة'], difficulty: 'easy' },
    { letter: 'م', category: 'country', categoryLabel: 'بلاد', question: 'بلد يبدأ بحرف الميم', answers: ['مصر', 'المغرب', 'ماليزيا', 'المكسيك', 'موريتانيا'], difficulty: 'easy' },
  ],
  'ن': [
    { letter: 'ن', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف النون', answers: ['نور', 'ناصر', 'نجلاء', 'نواف', 'نادية', 'نبيل'], difficulty: 'easy' },
    { letter: 'ن', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف النون', answers: ['نمر', 'نسر', 'نحلة', 'نعامة', 'نمس'], difficulty: 'easy' },
    { letter: 'ن', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف النون', answers: ['نخلة', 'نعناع', 'نرجس'], difficulty: 'easy' },
    { letter: 'ن', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف النون', answers: ['ناقوس', 'نافذة', 'نظارة'], difficulty: 'easy' },
    { letter: 'ن', category: 'country', categoryLabel: 'بلاد', question: 'بلد يبدأ بحرف النون', answers: ['نيجيريا', 'النرويج', 'نيوزيلندا', 'النيجر'], difficulty: 'easy' },
  ],
  'ه': [
    { letter: 'ه', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف الهاء', answers: ['هند', 'هاشم', 'هالة', 'هاني', 'هبة'], difficulty: 'easy' },
    { letter: 'ه', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف الهاء', answers: ['هدهد'], difficulty: 'medium' },
    { letter: 'ه', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف الهاء', answers: ['هيل', 'هليون'], difficulty: 'medium' },
    { letter: 'ه', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف الهاء', answers: ['هاتف', 'هرم'], difficulty: 'easy' },
    { letter: 'ه', category: 'country', categoryLabel: 'بلاد', question: 'بلد يبدأ بحرف الهاء', answers: ['الهند', 'هولندا', 'هنغاريا'], difficulty: 'easy' },
  ],
  'و': [
    { letter: 'و', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف الواو', answers: ['وليد', 'وداد', 'وائل', 'وفاء'], difficulty: 'easy' },
    { letter: 'و', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف الواو', answers: ['وحيد القرن', 'وطواط', 'وعل'], difficulty: 'medium' },
    { letter: 'و', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف الواو', answers: ['ورد', 'وردة'], difficulty: 'easy' },
    { letter: 'و', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف الواو', answers: ['وسادة', 'ورقة'], difficulty: 'easy' },
    { letter: 'و', category: 'country', categoryLabel: 'بلاد', question: 'بلد يبدأ بحرف الواو', answers: ['واشنطن'], difficulty: 'hard' },
  ],
  'ي': [
    { letter: 'ي', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف الياء', answers: ['ياسر', 'يمنى', 'يوسف', 'ياسمين', 'يزيد'], difficulty: 'easy' },
    { letter: 'ي', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف الياء', answers: ['يمامة', 'يعسوب'], difficulty: 'medium' },
    { letter: 'ي', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف الياء', answers: ['يقطين', 'ياسمين'], difficulty: 'easy' },
    { letter: 'ي', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف الياء', answers: ['يخت'], difficulty: 'hard' },
    { letter: 'ي', category: 'country', categoryLabel: 'بلاد', question: 'بلد يبدأ بحرف الياء', answers: ['اليمن', 'اليابان', 'اليونان'], difficulty: 'easy' },
  ],
  'ذ': [
    { letter: 'ذ', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف الذال', answers: ['ذئب', 'ذبابة'], difficulty: 'easy' },
    { letter: 'ذ', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف الذال', answers: ['ذرة'], difficulty: 'easy' },
    { letter: 'ذ', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف الذال', answers: ['ذهب'], difficulty: 'easy' },
  ],
  'ز': [
    { letter: 'ز', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف الزاي', answers: ['زياد', 'زينب', 'زكريا'], difficulty: 'easy' },
    { letter: 'ز', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف الزاي', answers: ['زرافة', 'زواحف'], difficulty: 'easy' },
    { letter: 'ز', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف الزاي', answers: ['زيتون', 'زعتر', 'زنجبيل', 'زعفران'], difficulty: 'easy' },
    { letter: 'ز', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف الزاي', answers: ['زجاجة', 'زهرية'], difficulty: 'easy' },
  ],
  'ض': [
    { letter: 'ض', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف الضاد', answers: ['ضبع', 'ضفدع'], difficulty: 'easy' },
    { letter: 'ض', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف الضاد', answers: ['ضوء'], difficulty: 'medium' },
  ],
  'ط': [
    { letter: 'ط', category: 'name', categoryLabel: 'اسم', question: 'اسم يبدأ بحرف الطاء', answers: ['طلال', 'طارق', 'طيف'], difficulty: 'easy' },
    { letter: 'ط', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف الطاء', answers: ['طاووس', 'طائر'], difficulty: 'easy' },
    { letter: 'ط', category: 'plant', categoryLabel: 'نبات', question: 'نبات يبدأ بحرف الطاء', answers: ['طماطم'], difficulty: 'easy' },
    { letter: 'ط', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف الطاء', answers: ['طاولة', 'طائرة', 'طبل'], difficulty: 'easy' },
  ],
  'ظ': [
    { letter: 'ظ', category: 'animal', categoryLabel: 'حيوان', question: 'حيوان يبدأ بحرف الظاء', answers: ['ظبي'], difficulty: 'medium' },
    { letter: 'ظ', category: 'object', categoryLabel: 'جماد', question: 'جماد يبدأ بحرف الظاء', answers: ['ظرف', 'ظل'], difficulty: 'medium' },
  ],
};

// Hex board layout for the game (5x5 grid letters)
export const HEX_BOARD_LETTERS = [
  ['أ', 'ب', 'ت', 'ث', 'ج'],
  ['ح', 'خ', 'د', 'ر', 'ز'],
  ['س', 'ش', 'ص', 'ع', 'غ'],
  ['ف', 'ق', 'ك', 'ل', 'م'],
  ['ن', 'ه', 'و', 'ي', 'ض'],
];

export function getRandomQuestion(letter: string, usedCategories: string[] = []): Question | null {
  const letterQuestions = QUESTIONS[letter];
  if (!letterQuestions || letterQuestions.length === 0) return null;

  // Filter out used categories
  const available = letterQuestions.filter(q => !usedCategories.includes(q.category));
  if (available.length === 0) {
    // Reset: allow all
    const idx = Math.floor(Math.random() * letterQuestions.length);
    return letterQuestions[idx];
  }

  const idx = Math.floor(Math.random() * available.length);
  return available[idx];
}

export function getRandomCategory(): typeof CATEGORIES[number] {
  return CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
}

export function normalizeArabic(text: string): string {
  return text
    .replace(/[\u064B-\u0652]/g, '') // Remove diacritics
    .replace(/\u0622|\u0623|\u0625/g, '\u0627') // Normalize alef
    .replace(/\u0629/g, '\u0647') // taa marbuta to haa
    .trim();
}

export function checkAnswer(given: string, correctAnswers: string[]): boolean {
  const normalizedGiven = normalizeArabic(given.trim());
  return correctAnswers.some(ans => {
    const normalizedAns = normalizeArabic(ans);
    return normalizedGiven === normalizedAns || 
           normalizedGiven.includes(normalizedAns) || 
           normalizedAns.includes(normalizedGiven);
  });
}
