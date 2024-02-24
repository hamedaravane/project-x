import {Injectable} from '@angular/core';

export interface City {
  name: string;
  faName: string;
}

@Injectable({
  providedIn: 'root',
})
export class CitiesListService {
  cityList: City[] = [
    {
      name: 'Azarshahr',
      faName: 'آذرشهر',
    },
    {
      name: 'Teymurlu',
      faName: 'تیمورلو',
    },
    {
      name: 'Gugan',
      faName: 'گوگان',
    },
    {
      name: 'Mamqan',
      faName: 'ممقان',
    },
    {
      name: 'Osku',
      faName: 'اسکو',
    },
    {
      name: 'Ilkhchi',
      faName: 'ایلخچی',
    },
    {
      name: 'Sahand',
      faName: 'سهند',
    },
    {
      name: 'Ahar',
      faName: 'اهر',
    },
    {
      name: 'Hurand',
      faName: 'هوراند',
    },
    {
      name: 'Bostanabad',
      faName: 'بستان آباد',
    },
    {
      name: 'Tekmeh Dash',
      faName: 'تیکمه داش',
    },
    {
      name: 'Bonab',
      faName: 'بناب',
    },
    {
      name: 'Basmenj',
      faName: 'باسمنج',
    },
    {
      name: 'Tabriz',
      faName: 'تبریز',
    },
    {
      name: 'Khosrowshah',
      faName: 'خسروشاه',
    },
    {
      name: 'Sardrud',
      faName: 'سردرود',
    },
    {
      name: 'Jolfa',
      faName: 'جلفا',
    },
    {
      name: 'Siah Rud',
      faName: 'سیه رود',
    },
    {
      name: 'Hadishahr',
      faName: 'هادیشهر',
    },
    {
      name: 'Qarah Aghaj',
      faName: 'قره آغاج',
    },
    {
      name: 'Khomarlu',
      faName: 'خمارلو',
    },
    {
      name: 'Duzduzan',
      faName: 'دوزدوزان',
    },
    {
      name: 'Sarab',
      faName: 'سراب',
    },
    {
      name: 'Sharabian',
      faName: 'شربیان',
    },
    {
      name: 'Mehraban',
      faName: 'مهربان',
    },
    {
      name: 'Tasuj',
      faName: 'تسوج',
    },
    {
      name: 'Khamaneh',
      faName: 'خامنه',
    },
    {
      name: 'Sis',
      faName: 'سیس',
    },
    {
      name: 'Shabestar',
      faName: 'شبستر',
    },
    {
      name: 'Sharafkhaneh',
      faName: 'شرفخانه',
    },
    {
      name: 'Shendabad',
      faName: 'شندآباد',
    },
    {
      name: 'Sufian',
      faName: 'صوفیان',
    },
    {
      name: 'Kuzeh Kanan',
      faName: 'کوزه کنان',
    },
    {
      name: 'Vayqan',
      faName: 'وایقان',
    },
    {
      name: 'Javan Qala',
      faName: 'جوان قلعه',
    },
    {
      name: 'Ajab Shir',
      faName: 'عجب شیر',
    },
    {
      name: 'Abeshahmad',
      faName: 'آبش احمد',
    },
    {
      name: 'Kaleybar',
      faName: 'کلیبر',
    },
    {
      name: 'Kharajoo ',
      faName: 'خداجو (خراجو)',
    },
    {
      name: 'Maragheh',
      faName: 'مراغه',
    },
    {
      name: 'Benab e Marand',
      faName: 'بناب مرند',
    },
    {
      name: 'Zonouz',
      faName: 'زنوز',
    },
    {
      name: 'Koshksaray',
      faName: 'کشکسرای',
    },
    {
      name: 'Marand',
      faName: 'مرند',
    },
    {
      name: 'Yamchi',
      faName: 'یامچی',
    },
    {
      name: 'Leylan',
      faName: 'لیلان',
    },
    {
      name: 'Mobarak Shahr',
      faName: 'مبارک شهر',
    },
    {
      name: 'Malekan',
      faName: 'ملکان',
    },
    {
      name: 'Aqkand',
      faName: 'آقکند',
    },
    {
      name: 'Achachi',
      faName: 'اچاچی',
    },
    {
      name: 'Tark',
      faName: 'ترک',
    },
    {
      name: 'Torkamanchay',
      faName: 'ترکمانچای',
    },
    {
      name: 'Mianeh',
      faName: 'میانه',
    },
    {
      name: 'Kharvana',
      faName: 'خاروانا',
    },
    {
      name: 'Varzaqan',
      faName: 'ورزقان',
    },
    {
      name: 'Bakhshayesh',
      faName: 'بخشایش',
    },
    {
      name: 'Khajeh',
      faName: 'خواجه',
    },
    {
      name: 'Zarnaq',
      faName: 'زرنق',
    },
    {
      name: 'Kelvanaq',
      faName: 'کلوانق',
    },
    {
      name: 'Heris',
      faName: 'هریس',
    },
    {
      name: 'Nazarkahrizi',
      faName: 'نظرکهریزی',
    },
    {
      name: 'Hashtrud',
      faName: 'هشترود',
    },
    {
      name: 'Urmia',
      faName: 'ارومیه',
    },
    {
      name: 'Serow',
      faName: 'سرو',
    },
    {
      name: 'Silvaneh',
      faName: 'سیلوانه',
    },
    {
      name: 'Qushchi',
      faName: 'قوشچی',
    },
    {
      name: 'Nushin',
      faName: 'نوشین',
    },
    {
      name: 'Oshnavieh',
      faName: 'اشنویه',
    },
    {
      name: 'Nalus',
      faName: 'نالوس',
    },
    {
      name: 'Bukan',
      faName: 'بوکان',
    },
    {
      name: 'Simmineh',
      faName: 'سیمینه',
    },
    {
      name: 'Poldasht',
      faName: 'پلدشت',
    },
    {
      name: 'Nazok-e Olya',
      faName: 'نازک علیا',
    },
    {
      name: 'Piranshahr',
      faName: 'پیرانشهر',
    },
    {
      name: 'Gerd Kashaneh',
      faName: 'گردکشانه',
    },
    {
      name: 'Takab',
      faName: 'تکاب',
    },
    {
      name: 'Avajiq',
      faName: 'آواجیق',
    },
    {
      name: 'Siah Cheshmeh',
      faName: 'سیه چشمه',
    },
    {
      name: 'Qarah Zia od Din',
      faName: 'قره ضیاء الدین',
    },
    {
      name: 'Ivaowghli',
      faName: 'ایواوغلی',
    },
    {
      name: 'Khoy',
      faName: 'خوی',
    },
    {
      name: 'Dizaj Diz',
      faName: 'دیزج دیز',
    },
    {
      name: 'Zarabad',
      faName: 'زرآباد',
    },
    {
      name: 'Firuraq',
      faName: 'فیرورق',
    },
    {
      name: 'Qatur',
      faName: 'قطور',
    },
    {
      name: 'Rabat',
      faName: 'ربط',
    },
    {
      name: 'Sardasht',
      faName: 'سردشت',
    },
    {
      name: 'Mirabad',
      faName: 'میرآباد',
    },
    {
      name: 'Tazeh Shahr',
      faName: 'تازه شهر',
    },
    {
      name: 'Salmas',
      faName: 'سلماس',
    },
    {
      name: 'Shahin Dezh',
      faName: 'شاهین دژ',
    },
    {
      name: 'Keshavarz',
      faName: 'کشاورز',
    },
    {
      name: 'Mahmudabad',
      faName: 'محمودآباد',
    },
    {
      name: 'Showt',
      faName: 'شوط',
    },
    {
      name: 'Marganlar',
      faName: 'مرگنلر',
    },
    {
      name: 'Bazargan',
      faName: 'بازرگان',
    },
    {
      name: 'Maku',
      faName: 'ماکو',
    },
    {
      name: 'Khalifan',
      faName: 'خلیفان',
    },
    {
      name: 'Mahabad',
      faName: 'مهاباد',
    },
    {
      name: 'Baruq',
      faName: 'باروق',
    },
    {
      name: 'Chahar Borj',
      faName: 'چهاربرج',
    },
    {
      name: 'Miandoab',
      faName: 'میاندوآب',
    },
    {
      name: 'Mohammadyar',
      faName: 'محمدیار',
    },
    {
      name: 'Naqadeh',
      faName: 'نقده',
    },
    {
      name: 'Ardabil',
      faName: 'اردبیل',
    },
    {
      name: 'Hir',
      faName: 'هیر',
    },
    {
      name: 'Bileh Savar',
      faName: 'بیله سوار',
    },
    {
      name: 'Jafarabad',
      faName: 'جعفرآباد',
    },
    {
      name: 'Eslamabad',
      faName: 'اسلام اباد',
    },
    {
      name: 'Aslan Duz',
      faName: 'اصلاندوز',
    },
    {
      name: 'Parsabad',
      faName: 'پارس آباد',
    },
    {
      name: 'Tazeh Kand',
      faName: 'تازه کند',
    },
    {
      name: 'Khalkhal',
      faName: 'خلخال',
    },
    {
      name: 'Kolur',
      faName: 'کلور',
    },
    {
      name: 'Hashatjin',
      faName: 'هشتجین',
    },
    {
      name: "Sar'eyn",
      faName: 'سرعین',
    },
    {
      name: 'Givi',
      faName: 'گیوی',
    },
    {
      name: 'Tazeh Kand-e Angut',
      faName: 'تازه کندانگوت',
    },
    {
      name: 'Germi',
      faName: 'گرمی',
    },
    {
      name: 'Rizi',
      faName: 'رضی',
    },
    {
      name: 'Fakhrabad',
      faName: 'فخراباد',
    },
    {
      name: 'Qosabeh',
      faName: 'قصابه',
    },
    {
      name: 'Lahrud',
      faName: 'لاهرود',
    },
    {
      name: 'Moradlu',
      faName: 'مرادلو',
    },
    {
      name: 'Meshginshahr',
      faName: 'مشگین شهر',
    },
    {
      name: 'Abi Beyglu',
      faName: 'آبی بیگلو',
    },
    {
      name: 'Anbaran',
      faName: 'عنبران',
    },
    {
      name: 'Namin',
      faName: 'نمین',
    },
    {
      name: 'Kuraim',
      faName: 'کوراییم',
    },
    {
      name: 'Nir',
      faName: 'نیر',
    },
    {
      name: 'Aran va Bidgol',
      faName: 'آران و بیدگل',
    },
    {
      name: 'Abuzeydabad',
      faName: 'ابوزیدآباد',
    },
    {
      name: 'Sefidshahr',
      faName: 'سفیدشهر',
    },
    {
      name: 'Nushabad',
      faName: 'نوش آباد',
    },
    {
      name: 'Ardestan',
      faName: 'اردستان',
    },
    {
      name: 'Istgah-e Zavareh',
      faName: 'زواره',
    },
    {
      name: 'Ezhiyeh',
      faName: 'اژیه',
    },
    {
      name: 'Isfahan',
      faName: 'اصفهان',
    },
    {
      name: 'Baharestan',
      faName: 'بهارستان',
    },
    {
      name: 'Tudeshk',
      faName: 'تودشک',
    },
    {
      name: 'Hasanabad',
      faName: 'حسن اباد',
    },
    {
      name: 'Ziar',
      faName: 'زیار',
    },
    {
      name: 'Sejzi',
      faName: 'سجزی',
    },
    {
      name: 'Qahjavarestan',
      faName: 'قهجاورستان',
    },
    {
      name: 'Kuhpayeh',
      faName: 'کوهپایه',
    },
    {
      name: 'Mohammadabad',
      faName: 'محمدآباد',
    },
    {
      name: 'Nasrabad',
      faName: 'نصرآباد',
    },
    {
      name: 'Nikabad',
      faName: 'نیک آباد',
    },
    {
      name: 'Varzaneh',
      faName: 'ورزنه',
    },
    {
      name: 'Harand',
      faName: 'هرند',
    },
    {
      name: 'Habibabad',
      faName: 'حبیب آباد',
    },
    {
      name: 'Khowrzuq',
      faName: 'خورزوق',
    },
    {
      name: 'Dastgerd',
      faName: 'دستگرد',
    },
    {
      name: 'Dowlatabad',
      faName: 'دولت آباد',
    },
    {
      name: 'Sin',
      faName: 'سین',
    },
    {
      name: 'Shapur Abad',
      faName: 'شاپورآباد',
    },
    {
      name: 'Komeshcheh',
      faName: 'کمشچه',
    },
    {
      name: 'Afus',
      faName: 'افوس',
    },
    {
      name: 'Buin va Miandasht',
      faName: 'بویین ومیاندشت',
    },
    {
      name: 'Tiran',
      faName: 'تیران',
    },
    {
      name: 'Rezvanshahr',
      faName: 'رضوانشهر',
    },
    {
      name: 'Asgaran',
      faName: 'عسگران',
    },
    {
      name: 'Chadegan',
      faName: 'چادگان',
    },
    {
      name: 'Rozveh',
      faName: 'رزوه',
    },
    {
      name: 'Asgharabad',
      faName: 'اصغرآباد',
    },
    {
      name: 'Khomeyni Shahr',
      faName: 'خمینی شهر',
    },
    {
      name: 'Darreh Chah',
      faName: 'درچه',
    },
    {
      name: 'Kushk',
      faName: 'کوشک',
    },
    {
      name: 'Khansar',
      faName: 'خوانسار',
    },
    {
      name: 'Jandaq',
      faName: 'جندق',
    },
    {
      name: 'Khur',
      faName: 'خور',
    },
    {
      name: 'Farrokhi',
      faName: 'فرخی',
    },
    {
      name: 'Dehaqan',
      faName: 'دهاقان',
    },
    {
      name: 'Golshan',
      faName: 'گلشن',
    },
    {
      name: 'Hanna',
      faName: 'حنا',
    },
    {
      name: 'Semirom',
      faName: 'سمیرم',
    },
    {
      name: 'Komeh',
      faName: 'کمه',
    },
    {
      name: 'Vanak',
      faName: 'ونک',
    },
    {
      name: 'Shahin Shahr',
      faName: 'شاهین شهر',
    },
    {
      name: 'Gorgab',
      faName: 'گرگاب',
    },
    {
      name: 'Gazborkhar',
      faName: 'گزبرخوار',
    },
    {
      name: 'Lay Bid',
      faName: 'لای بید',
    },
    {
      name: 'Meymeh',
      faName: 'میمه',
    },
    {
      name: 'Vazvan',
      faName: 'وزوان',
    },
    {
      name: 'Shahreza',
      faName: 'شهرضا',
    },
    {
      name: 'Manzariyeh',
      faName: 'منظریه',
    },
    {
      name: 'Daran',
      faName: 'داران',
    },
    {
      name: 'Damaneh',
      faName: 'دامنه',
    },
    {
      name: 'Barf Anbar',
      faName: 'برف انبار',
    },
    {
      name: 'Fereydunshahr',
      faName: 'فریدونشهر',
    },
    {
      name: 'Abrisham',
      faName: 'ابریشم',
    },
    {
      name: 'Imanshahr',
      faName: 'ایمانشهر',
    },
    {
      name: 'Baharan Shahr',
      faName: 'بهاران شهر',
    },
    {
      name: 'Pir Bakran',
      faName: 'پیربکران',
    },
    {
      name: 'Zazeran',
      faName: 'زازران',
    },
    {
      name: 'Falavarjan',
      faName: 'فلاورجان',
    },
    {
      name: 'Qahderijan',
      faName: 'قهدریجان',
    },
    {
      name: 'Kelishad va Sudarjan',
      faName: 'کلیشاد و سودرجان',
    },
    {
      name: 'Barzok',
      faName: 'برزک',
    },
    {
      name: 'Jowsheqan-e Qali',
      faName: 'جوشقان قالی',
    },
    {
      name: 'Qamsar',
      faName: 'قمصر',
    },
    {
      name: 'Kashan',
      faName: 'کاشان',
    },
    {
      name: 'Kamu va Chugan',
      faName: 'کامو و چوگان',
    },
    {
      name: 'Meshkat',
      faName: 'مشکات',
    },
    {
      name: 'Neyasar',
      faName: 'نیاسر',
    },
    {
      name: 'Golpayegan',
      faName: 'گلپایگان',
    },
    {
      name: 'Golshahr',
      faName: 'گلشهر',
    },
    {
      name: 'Guged',
      faName: 'گوگد',
    },
    {
      name: 'Bagh-e Bahadoran',
      faName: 'باغ بهادران',
    },
    {
      name: 'Baghshad',
      faName: 'باغشاد',
    },
    {
      name: 'Chermahin',
      faName: 'چرمهین',
    },
    {
      name: 'Chamgardan',
      faName: 'چمگردان',
    },
    {
      name: 'Zayandeh Rud',
      faName: 'زاینده رود',
    },
    {
      name: 'Zarrin Shahr',
      faName: 'زرین شهر',
    },
    {
      name: 'Sedeh Lenjan',
      faName: 'سده لنجان',
    },
    {
      name: 'Fuladshahr',
      faName: 'فولادشهر',
    },
    {
      name: 'Varnamkhvast',
      faName: 'ورنامخواست',
    },
    {
      name: 'Dizicheh',
      faName: 'دیزیچه',
    },
    {
      name: 'Zibashahr',
      faName: 'زیباشهر',
    },
    {
      name: 'Talkhvoncheh',
      faName: 'طالخونچه',
    },
    {
      name: 'Karkevand',
      faName: 'کرکوند',
    },
    {
      name: 'Mobarakeh',
      faName: 'مبارکه',
    },
    {
      name: 'Majlesi',
      faName: 'مجلسی',
    },
    {
      name: 'Anarak',
      faName: 'انارک',
    },
    {
      name: 'Bafran',
      faName: 'بافران',
    },
    {
      name: 'Nain',
      faName: 'نایین',
    },
    {
      name: 'Jowzdan',
      faName: 'جوزدان',
    },
    {
      name: 'Dehaq',
      faName: 'دهق',
    },
    {
      name: 'Alavijeh',
      faName: 'علویجه',
    },
    {
      name: 'Kahrizsang',
      faName: 'کهریزسنگ',
    },
    {
      name: 'Goldasht',
      faName: 'گلدشت',
    },
    {
      name: 'Najafabad',
      faName: 'نجف آباد',
    },
    {
      name: 'Badrud',
      faName: 'بادرود',
    },
    {
      name: 'Khaledabad',
      faName: 'خالدآباد',
    },
    {
      name: 'Tarq Rud',
      faName: 'طرق رود',
    },
    {
      name: 'Natanz',
      faName: 'نطنز',
    },
    {
      name: 'Eshtehard',
      faName: 'اشتهارد',
    },
    {
      name: 'Chaharbagh',
      faName: 'چهارباغ',
    },
    {
      name: 'Shahr-e Jadid-e Hashtgerd',
      faName: 'شهر جدید هشتگرد',
    },
    {
      name: 'Kuhsar',
      faName: 'کوهسار',
    },
    {
      name: 'Golsar',
      faName: 'گلسار',
    },
    {
      name: 'Hashtgerd',
      faName: 'هشتگرد',
    },
    {
      name: 'Taleqan',
      faName: 'طالقان',
    },
    {
      name: 'Fardis',
      faName: 'فردیس',
    },
    {
      name: 'Meshkin Dasht',
      faName: 'مشکین دشت',
    },
    {
      name: 'Asara',
      faName: 'آسارا',
    },
    {
      name: 'Karaj',
      faName: 'کرج',
    },
    {
      name: 'Kamal Shahr',
      faName: 'کمال شهر',
    },
    {
      name: 'Garmdareh',
      faName: 'گرمدره',
    },
    {
      name: 'Mahdasht',
      faName: 'ماهدشت',
    },
    {
      name: 'Mohammadshahr',
      faName: 'محمدشهر',
    },
    {
      name: 'Tankaman',
      faName: 'تنکمان',
    },
    {
      name: 'Nazarabad',
      faName: 'نظرآباد',
    },
    {
      name: 'Abdanan',
      faName: 'آبدانان',
    },
    {
      name: 'Sarab Bagh',
      faName: 'سراب باغ',
    },
    {
      name: 'Murmuri',
      faName: 'مورموری',
    },
    {
      name: 'Ilam',
      faName: 'ایلام',
    },
    {
      name: 'Chavar',
      faName: 'چوار',
    },
    {
      name: 'Eyvan',
      faName: 'ایوان',
    },
    {
      name: 'Zarneh',
      faName: 'زرنه',
    },
    {
      name: 'Badreh',
      faName: 'بدره',
    },
    {
      name: 'Asemanabad',
      faName: 'آسمان آباد',
    },
    {
      name: 'Belavah ',
      faName: 'بلاوه',
    },
    {
      name: 'Towhid',
      faName: 'توحید',
    },
    {
      name: 'Sarableh',
      faName: 'سرابله',
    },
    {
      name: 'Shabab',
      faName: 'شباب',
    },
    {
      name: 'Darreh Shahr',
      faName: 'دره شهر',
    },
    {
      name: 'Mazhin',
      faName: 'ماژین',
    },
    {
      name: 'Pahleh',
      faName: 'پهله',
    },
    {
      name: 'Dehloran',
      faName: 'دهلران',
    },
    {
      name: 'Musian',
      faName: 'موسیان',
    },
    {
      name: 'Lumar',
      faName: 'لومار',
    },
    {
      name: 'Arkavaz',
      faName: 'ارکواز',
    },
    {
      name: 'Delgosha',
      faName: 'دلگشا',
    },
    {
      name: 'Mohr',
      faName: 'مهر',
    },
    {
      name: 'Salehabad',
      faName: 'صالح آباد',
    },
    {
      name: 'Mehran',
      faName: 'مهران',
    },
    {
      name: 'Bushehr',
      faName: 'بوشهر',
    },
    {
      name: 'Choghadak',
      faName: 'چغادک',
    },
    {
      name: 'Kharg',
      faName: 'خارک',
    },
    {
      name: 'Alishahr',
      faName: 'عالی شهر',
    },
    {
      name: 'Abad',
      faName: 'آباد',
    },
    {
      name: 'Ahram',
      faName: 'اهرم',
    },
    {
      name: 'Delvar',
      faName: 'دلوار',
    },
    {
      name: 'Anarestan',
      faName: 'انارستان',
    },
    {
      name: 'Jam',
      faName: 'جم',
    },
    {
      name: 'Riz',
      faName: 'ریز',
    },
    {
      name: 'Ab Pakhsh',
      faName: 'آب پخش',
    },
    {
      name: 'Borazjan',
      faName: 'برازجان',
    },
    {
      name: 'Bushkan',
      faName: 'بوشکان',
    },
    {
      name: 'Tang-e Eram',
      faName: 'تنگ ارم',
    },
    {
      name: 'Dalaki',
      faName: 'دالکی',
    },
    {
      name: 'Sa`dabad',
      faName: 'سعد آباد',
    },
    {
      name: 'Shabankareh',
      faName: 'شبانکاره',
    },
    {
      name: 'Kalameh',
      faName: 'کلمه',
    },
    {
      name: 'Vahdatiyeh',
      faName: 'وحدتیه',
    },
    {
      name: 'Baduleh',
      faName: 'بادوله',
    },
    {
      name: 'Khormoj',
      faName: 'خورموج',
    },
    {
      name: 'Shanbeh',
      faName: 'شنبه',
    },
    {
      name: 'Kaki',
      faName: 'کاکی',
    },
    {
      name: 'Abadan',
      faName: 'آبدان',
    },
    {
      name: 'Bord Khun',
      faName: 'بردخون',
    },
    {
      name: 'Bardestan',
      faName: 'بردستان',
    },
    {
      name: 'Bandar-e Deyr',
      faName: 'بندردیر',
    },
    {
      name: 'Dorahak',
      faName: 'دوراهک',
    },
    {
      name: 'Imam Hassan',
      faName: 'امام حسن',
    },
    {
      name: 'Bandar Deylam',
      faName: 'بندردیلم',
    },
    {
      name: 'Asaluyeh',
      faName: 'عسلویه',
    },
    {
      name: 'Nakhl Taqi',
      faName: 'نخل تقی',
    },
    {
      name: 'Bandar-e Kangan',
      faName: 'بندرکنگان',
    },
    {
      name: 'Bank',
      faName: 'بنک',
    },
    {
      name: 'Siraf',
      faName: 'سیراف',
    },
    {
      name: 'Bandar Rig',
      faName: 'بندرریگ',
    },
    {
      name: 'Bandar Ganaveh',
      faName: 'بندرگناوه',
    },
    {
      name: 'Ahmadabad-e Mostowfi',
      faName: 'احمد آباد مستوفی',
    },
    {
      name: 'Eslamshahr',
      faName: 'اسلامشهر',
    },
    {
      name: 'Chahardangeh',
      faName: 'چهاردانگه',
    },
    {
      name: 'Salehieh',
      faName: 'صالحیه',
    },
    {
      name: 'Golestan',
      faName: 'گلستان',
    },
    {
      name: 'Nasim Shahr',
      faName: 'نسیم شهر',
    },
    {
      name: 'Pakdasht',
      faName: 'پاکدشت',
    },
    {
      name: 'Sharifabad',
      faName: 'شریف آباد',
    },
    {
      name: 'Ferunabad',
      faName: 'فرون آباد',
    },
    {
      name: 'Bumehen',
      faName: 'بومهن',
    },
    {
      name: 'Pardis',
      faName: 'پردیس',
    },
    {
      name: 'Pishva',
      faName: 'پیشوا',
    },
    {
      name: 'Tehran',
      faName: 'تهران',
    },
    {
      name: 'Absard',
      faName: 'آبسرد',
    },
    {
      name: 'Abali',
      faName: 'آبعلی',
    },
    {
      name: 'Damavand',
      faName: 'دماوند',
    },
    {
      name: 'Rudehen',
      faName: 'رودهن',
    },
    {
      name: 'Kilan',
      faName: 'کیلان',
    },
    {
      name: 'Parand',
      faName: 'پرند',
    },
    {
      name: 'Robat Karim',
      faName: 'رباط کریم',
    },
    {
      name: 'Nasirshahr',
      faName: 'نصیرشهر',
    },
    {
      name: 'Baqershahr',
      faName: 'باقرشهر',
    },
    {
      name: 'Hasanabad',
      faName: 'حسن آباد',
    },
    {
      name: 'Shahr-e-Rey',
      faName: 'ری',
    },
    {
      name: 'Kahrizak',
      faName: 'کهریزک',
    },
    {
      name: 'Tajrish',
      faName: 'تجریش',
    },
    {
      name: 'Shemshak',
      faName: 'شمشک',
    },
    {
      name: 'Fasham',
      faName: 'فشم',
    },
    {
      name: 'Lavasan',
      faName: 'لواسان',
    },
    {
      name: 'Andisheh',
      faName: 'اندیشه',
    },
    {
      name: 'Baghestan',
      faName: 'باغستان',
    },
    {
      name: 'Shahedshahr',
      faName: 'شاهدشهر',
    },
    {
      name: 'Shahriar',
      faName: 'شهریار',
    },
    {
      name: 'Sabashahr',
      faName: 'صباشهر',
    },
    {
      name: 'Ferdowsieh',
      faName: 'فردوسیه',
    },
    {
      name: 'Vahidieh',
      faName: 'وحیدیه',
    },
    {
      name: 'Arjomand',
      faName: 'ارجمند',
    },
    {
      name: 'Firuzkuh',
      faName: 'فیروزکوه',
    },
    {
      name: 'Qods',
      faName: 'قدس',
    },
    {
      name: 'Qarchak',
      faName: 'قرچک',
    },
    {
      name: 'Safadasht',
      faName: 'صفادشت',
    },
    {
      name: 'Malard',
      faName: 'ملارد',
    },
    {
      name: 'Javadabad',
      faName: 'جوادآباد',
    },
    {
      name: 'Varamin',
      faName: 'ورامین',
    },
    {
      name: 'Ardal',
      faName: 'اردل',
    },
    {
      name: 'Dashtak',
      faName: 'دشتک',
    },
    {
      name: 'Sorkhun',
      faName: 'سرخون',
    },
    {
      name: 'Kaj',
      faName: 'کاج',
    },
    {
      name: 'Borujen',
      faName: 'بروجن',
    },
    {
      name: 'Boldaji',
      faName: 'بلداجی',
    },
    {
      name: 'Sefiddasht',
      faName: 'سفیددشت',
    },
    {
      name: 'Faradonbeh',
      faName: 'فرادبنه',
    },
    {
      name: 'Gandoman',
      faName: 'گندمان',
    },
    {
      name: 'Naqneh',
      faName: 'نقنه',
    },
    {
      name: 'Ben',
      faName: 'بن',
    },
    {
      name: 'Vardanjan',
      faName: 'وردنجان',
    },
    {
      name: 'Saman',
      faName: 'سامان',
    },
    {
      name: 'Sudjan',
      faName: 'سودجان',
    },
    {
      name: 'Sureshjan',
      faName: 'سورشجان',
    },
    {
      name: 'Shahr-e Kord',
      faName: 'شهرکرد',
    },
    {
      name: 'Taqanak',
      faName: 'طاقانک',
    },
    {
      name: 'Farrokh Shahr',
      faName: 'فرخ شهر',
    },
    {
      name: 'Kian',
      faName: 'کیان',
    },
    {
      name: 'Nafech',
      faName: 'نافچ',
    },
    {
      name: 'Haruni',
      faName: 'هارونی',
    },
    {
      name: 'Hafshejan',
      faName: 'هفشجان',
    },
    {
      name: 'Babaheydar',
      faName: 'باباحیدر',
    },
    {
      name: 'Pardanjan',
      faName: 'پردنجان',
    },
    {
      name: 'Junqan',
      faName: 'جونقان',
    },
    {
      name: 'Cholicheh',
      faName: 'چلیچه',
    },
    {
      name: 'Farsan',
      faName: 'فارسان',
    },
    {
      name: 'Gujan',
      faName: 'گوجان',
    },
    {
      name: 'Bazoft',
      faName: 'بازفت',
    },
    {
      name: 'Chelgard',
      faName: 'چلگرد',
    },
    {
      name: 'Samsami',
      faName: 'صمصامی',
    },
    {
      name: 'Dastana',
      faName: 'دستنا',
    },
    {
      name: 'Shalamzar',
      faName: 'شلمزار',
    },
    {
      name: 'Gahru',
      faName: 'گهرو',
    },
    {
      name: 'Naghan',
      faName: 'ناغان',
    },
    {
      name: 'Aluni',
      faName: 'آلونی',
    },
    {
      name: 'Lordegan',
      faName: 'لردگان',
    },
    {
      name: 'Mal-e Khalifeh',
      faName: 'مال خلیفه',
    },
    {
      name: 'Monj',
      faName: 'منج',
    },
    {
      name: 'Eresk',
      faName: 'ارسک',
    },
    {
      name: 'Boshruyeh',
      faName: 'بشرویه',
    },
    {
      name: 'Birjand',
      faName: 'بیرجند',
    },
    {
      name: 'Khusf',
      faName: 'خوسف',
    },
    {
      name: 'Asadiyeh',
      faName: 'اسدیه',
    },
    {
      name: 'Tabas-e Masina',
      faName: 'طبس مسینا',
    },
    {
      name: 'Qohestan',
      faName: 'قهستان',
    },
    {
      name: 'Gazik',
      faName: 'گزیک',
    },
    {
      name: 'Hajjiabad',
      faName: 'حاجی آباد',
    },
    {
      name: 'Dehkadeh',
      faName: 'زهان',
    },
    {
      name: 'Ayask',
      faName: 'آیسک',
    },
    {
      name: 'Sarayan',
      faName: 'سرایان',
    },
    {
      name: 'Seh Qaleh',
      faName: 'سه قلعه',
    },
    {
      name: 'Sarbisheh',
      faName: 'سربیشه',
    },
    {
      name: 'Mud',
      faName: 'مود',
    },
    {
      name: 'Deyhuk',
      faName: 'دیهوک',
    },
    {
      name: 'Tabas',
      faName: 'طبس',
    },
    {
      name: 'Eshqabad',
      faName: 'عشق آباد',
    },
    {
      name: 'Eslamiyeh',
      faName: 'اسلامیه',
    },
    {
      name: 'Ferdows',
      faName: 'فردوس',
    },
    {
      name: 'Arian Shahr',
      faName: 'آرین شهر',
    },
    {
      name: 'Esfeden',
      faName: 'اسفدن',
    },
    {
      name: 'Khezri Dashtebayaz',
      faName: 'خضری دشت بیاض',
    },
    {
      name: 'Qaen',
      faName: 'قاین',
    },
    {
      name: 'Nimbeluk',
      faName: 'نیمبلوک',
    },
    {
      name: 'Shusef',
      faName: 'شوسف',
    },
    {
      name: 'Nehbandan',
      faName: 'نهبندان',
    },
    {
      name: 'Bakharz',
      faName: 'باخرز',
    },
    {
      name: 'Bajestan',
      faName: 'بجستان',
    },
    {
      name: 'Yunesi',
      faName: 'یونسی',
    },
    {
      name: 'Anabad',
      faName: 'انابد',
    },
    {
      name: 'Bardaskan',
      faName: 'بردسکن',
    },
    {
      name: 'Shahrabad',
      faName: 'شهراباد',
    },
    {
      name: 'Shandiz',
      faName: 'شاندیز',
    },
    {
      name: 'Torqabeh',
      faName: 'طرقبه',
    },
    {
      name: 'Taybad',
      faName: 'تایباد',
    },
    {
      name: 'Kariz',
      faName: 'کاریز',
    },
    {
      name: 'Ahmadabad',
      faName: 'احمدابادصولت',
    },
    {
      name: 'Torbat-e Jam',
      faName: 'تربت جام',
    },
    {
      name: 'Nil Shahr',
      faName: 'نیل شهر',
    },
    {
      name: 'Bayg',
      faName: 'بایک',
    },
    {
      name: 'Torbat-e Heydarieh',
      faName: 'تربت حیدریه',
    },
    {
      name: 'Robat-e Sang',
      faName: 'رباط سنگ',
    },
    {
      name: 'Kadkan',
      faName: 'کدکن',
    },
    {
      name: 'Joghtay',
      faName: 'جغتای',
    },
    {
      name: 'Neqab',
      faName: 'نقاب',
    },
    {
      name: 'Chenaran',
      faName: 'چناران',
    },
    {
      name: 'Golbahar',
      faName: 'گلبهار',
    },
    {
      name: 'Golmakan',
      faName: 'گلمکان',
    },
    {
      name: 'Khalilabad',
      faName: 'خلیل آباد',
    },
    {
      name: 'Kondor',
      faName: 'کندر',
    },
    {
      name: 'Khaf',
      faName: 'خواف',
    },
    {
      name: 'Salami',
      faName: 'سلامی',
    },
    {
      name: 'Sangan',
      faName: 'سنگان',
    },
    {
      name: 'Qasemabad',
      faName: 'قاسم آباد',
    },
    {
      name: 'Nashtifan',
      faName: 'نشتیفان',
    },
    {
      name: 'Soltanabad',
      faName: 'سلطان آباد',
    },
    {
      name: 'Davarzan',
      faName: 'داورزن',
    },
    {
      name: 'Chapeshlu',
      faName: 'چاپشلو',
    },
    {
      name: 'Dargaz',
      faName: 'درگز',
    },
    {
      name: 'Lotfabad',
      faName: 'لطف آباد',
    },
    {
      name: 'Nowkhandan',
      faName: 'نوخندان',
    },
    {
      name: 'Jangal',
      faName: 'جنگل',
    },
    {
      name: 'Roshtkhvar',
      faName: 'رشتخوار',
    },
    {
      name: 'Rud Ab',
      faName: 'روداب',
    },
    {
      name: 'Sabzevar',
      faName: 'سبزوار',
    },
    {
      name: 'Sheshtamad',
      faName: 'ششتمد',
    },
    {
      name: 'Sarakhs',
      faName: 'سرخس',
    },
    {
      name: 'Mazdavand',
      faName: 'مزدآوند',
    },
    {
      name: 'Sefid Sang',
      faName: 'سفیدسنگ',
    },
    {
      name: 'Farhadgerd',
      faName: 'فرهادگرد',
    },
    {
      name: 'Fariman',
      faName: 'فریمان',
    },
    {
      name: 'Qalandarabad',
      faName: 'قلندرآباد',
    },
    {
      name: 'Firuzeh',
      faName: 'فیروزه',
    },
    {
      name: 'Hemmatabad',
      faName: 'همت آباد',
    },
    {
      name: 'Bajgiran',
      faName: 'باجگیران',
    },
    {
      name: 'Quchan',
      faName: 'قوچان',
    },
    {
      name: 'Rivash',
      faName: 'ریوش',
    },
    {
      name: 'Kashmar',
      faName: 'کاشمر',
    },
    {
      name: 'Shahrezu',
      faName: 'شهرزو',
    },
    {
      name: 'Kalat',
      faName: 'کلات',
    },
    {
      name: 'Bidokht',
      faName: 'بیدخت',
    },
    {
      name: 'Kakhk',
      faName: 'کاخک',
    },
    {
      name: 'Gonabad',
      faName: 'گناباد',
    },
    {
      name: 'Razaviyeh',
      faName: 'رضویه',
    },
    {
      name: 'Mashhad',
      faName: 'مشهد',
    },
    {
      name: 'Mashhad Samen',
      faName: 'مشهد ثامن',
    },
    {
      name: 'Malekabad',
      faName: 'ملک آباد',
    },
    {
      name: 'Shadmehr',
      faName: 'شادمهر',
    },
    {
      name: 'Feyzabad',
      faName: 'فیض آباد',
    },
    {
      name: 'Bar',
      faName: 'بار',
    },
    {
      name: 'Chakaneh',
      faName: 'چکنه',
    },
    {
      name: 'Kharv',
      faName: 'خرو',
    },
    {
      name: 'Darrud',
      faName: 'درود',
    },
    {
      name: 'Qadamgah',
      faName: 'قدمگاه',
    },
    {
      name: 'Nishapur',
      faName: 'نیشابور',
    },
    {
      name: 'Esfarayen',
      faName: 'اسفراین',
    },
    {
      name: 'Safiabad',
      faName: 'صفی آباد',
    },
    {
      name: 'Bojnord',
      faName: 'بجنورد',
    },
    {
      name: 'Chenaran',
      faName: 'چناران شهر',
    },
    {
      name: 'Hesar-e Garmkhan',
      faName: 'حصارگرمخان',
    },
    {
      name: 'Jajarm',
      faName: 'جاجرم',
    },
    {
      name: 'Istgah-e Sankhvast',
      faName: 'سنخواست',
    },
    {
      name: 'Showqan',
      faName: 'شوقان',
    },
    {
      name: 'Raz',
      faName: 'راز',
    },
    {
      name: 'Ziarat',
      faName: 'زیارت',
    },
    {
      name: 'Shirvan',
      faName: 'شیروان',
    },
    {
      name: 'Qush Khaneh',
      faName: 'قوشخانه',
    },
    {
      name: 'Lujali',
      faName: 'لوجلی',
    },
    {
      name: 'Titkanlu',
      faName: 'تیتکانلو',
    },
    {
      name: 'Faruj',
      faName: 'فاروج',
    },
    {
      name: 'Ayur',
      faName: 'ایور',
    },
    {
      name: 'Daraq',
      faName: 'درق',
    },
    {
      name: 'Garmeh',
      faName: 'گرمه',
    },
    {
      name: 'Ashkhaneh',
      faName: 'آشخانه',
    },
    {
      name: 'Ava',
      faName: 'آوا',
    },
    {
      name: 'Pish Qaleh',
      faName: 'پیش قلعه',
    },
    {
      name: 'Qazi',
      faName: 'قاضی',
    },
    {
      name: 'Abadan',
      faName: 'آبادان',
    },
    {
      name: 'Arvandkenar',
      faName: 'اروندکنار',
    },
    {
      name: 'Chavibdeh',
      faName: 'چویبده',
    },
    {
      name: 'Aghajari',
      faName: 'آغاجاری',
    },
    {
      name: 'Omidiyeh',
      faName: 'امیدیه',
    },
    {
      name: 'Jayezan',
      faName: 'جایزان',
    },
    {
      name: 'Abozhdan',
      faName: 'آبژدان',
    },
    {
      name: 'Qal`eh Khvajeh',
      faName: 'قلعه خواجه',
    },
    {
      name: 'Azadkhan',
      faName: 'آزادی',
    },
    {
      name: 'Andimeshk',
      faName: 'اندیمشک',
    },
    {
      name: 'Bidrubeh',
      faName: 'بیدروبه',
    },
    {
      name: 'Cham Golak',
      faName: 'چم گلک',
    },
    {
      name: 'Hoseyniyeh',
      faName: 'حسینیه',
    },
    {
      name: 'Elhayi',
      faName: 'الهایی',
    },
    {
      name: 'Ahvaz',
      faName: 'اهواز',
    },
    {
      name: 'Izeh',
      faName: 'ایذه',
    },
    {
      name: 'Dehdez',
      faName: 'دهدز',
    },
    {
      name: 'Bagh-e Malek',
      faName: 'باغ ملک',
    },
    {
      name: 'Seydun',
      faName: 'صیدون',
    },
    {
      name: 'Qal`eh Tol',
      faName: 'قلعه تل',
    },
    {
      name: 'Meydavud',
      faName: 'میداود',
    },
    {
      name: 'Sheyban',
      faName: 'شیبان',
    },
    {
      name: 'Mollasani',
      faName: 'ملاثانی',
    },
    {
      name: 'Veys',
      faName: 'ویس',
    },
    {
      name: 'Bandar Imam Khomeini',
      faName: 'بندر امام خمینی',
    },
    {
      name: 'Bandar Mahshahr',
      faName: 'بندرماهشهر',
    },
    {
      name: 'Chamran',
      faName: 'چمران',
    },
    {
      name: 'Behbahan',
      faName: 'بهبهان',
    },
    {
      name: 'Tashan',
      faName: 'تشان',
    },
    {
      name: 'Mansuriyeh',
      faName: 'منصوریه',
    },
    {
      name: 'Hamidiyeh',
      faName: 'حمیدیه',
    },
    {
      name: 'Khorramshahr',
      faName: 'خرمشهر',
    },
    {
      name: 'Moqavemat',
      faName: 'مقاومت',
    },
    {
      name: 'Minushahr',
      faName: 'مینوشهر',
    },
    {
      name: 'Choghamish',
      faName: 'چغامیش',
    },
    {
      name: 'Hamzeh',
      faName: 'حمزه',
    },
    {
      name: 'Dezful',
      faName: 'دزفول',
    },
    {
      name: 'Saland',
      faName: 'سالند',
    },
    {
      name: 'Siah Mansur',
      faName: 'سیاه منصور',
    },
    {
      name: 'Shamsabad',
      faName: 'شمس آباد',
    },
    {
      name: 'Dezab',
      faName: 'شهر امام',
    },
    {
      name: 'Mianrud',
      faName: 'میانرود',
    },
    {
      name: 'Abou Homeyzeh',
      faName: 'ابوحمیظه',
    },
    {
      name: 'Bostan',
      faName: 'بستان',
    },
    {
      name: 'Susangerd',
      faName: 'سوسنگرد',
    },
    {
      name: 'Kut-e Seyyed Naim',
      faName: 'کوت سیدنعیم',
    },
    {
      name: 'Ramshir',
      faName: 'رامشیر',
    },
    {
      name: 'Moshrageh',
      faName: 'مشراگه',
    },
    {
      name: 'Ramhormoz',
      faName: 'رامهرمز',
    },
    {
      name: 'Khanafereh',
      faName: 'خنافره',
    },
    {
      name: 'Darkhovin',
      faName: 'دارخوین',
    },
    {
      name: 'Shadegan',
      faName: 'شادگان',
    },
    {
      name: 'Alvan',
      faName: 'الوان',
    },
    {
      name: 'Horr',
      faName: 'حر',
    },
    {
      name: 'Seyyed Shavur',
      faName: 'شاوور',
    },
    {
      name: 'Shush',
      faName: 'شوش',
    },
    {
      name: 'Jariyeh Seyyed Karm',
      faName: 'فتح المبین',
    },
    {
      name: 'Sardaran',
      faName: 'سرداران',
    },
    {
      name: 'Sherafat',
      faName: 'شرافت',
    },
    {
      name: 'Shushtar',
      faName: 'شوشتر',
    },
    {
      name: 'Guriyeh',
      faName: 'گوریه',
    },
    {
      name: 'Kut Abdollah',
      faName: 'کوت عبداله',
    },
    {
      name: 'Torkalaki',
      faName: 'ترکالکی',
    },
    {
      name: 'Jannat Makan',
      faName: 'جنت مکان',
    },
    {
      name: 'Semaleh',
      faName: 'سماله',
    },
    {
      name: 'Saleh Shahr',
      faName: 'صالح شهر',
    },
    {
      name: 'Gotvand',
      faName: 'گتوند',
    },
    {
      name: 'Lali',
      faName: 'لالی',
    },
    {
      name: 'Golgir',
      faName: 'گلگیر',
    },
    {
      name: 'Masjed Soleyman',
      faName: 'مسجد سلیمان',
    },
    {
      name: 'Haftkel',
      faName: 'هفتگل',
    },
    {
      name: 'Zahreh',
      faName: 'زهره',
    },
    {
      name: 'Hendijan',
      faName: 'هندیجان',
    },
    {
      name: 'Rafi',
      faName: 'رفیع',
    },
    {
      name: 'Hoveyzeh',
      faName: 'هویزه',
    },
    {
      name: 'Abhar',
      faName: 'ابهر',
    },
    {
      name: 'Sain Qaleh',
      faName: 'صایین قلعه',
    },
    {
      name: 'Hidaj',
      faName: 'هیدج',
    },
    {
      name: 'Halab',
      faName: 'حلب',
    },
    {
      name: 'Zarrinabad',
      faName: 'زرین آباد',
    },
    {
      name: 'Zarrin Rud',
      faName: 'زرین رود',
    },
    {
      name: 'Sojas',
      faName: 'سجاس',
    },
    {
      name: 'Sohrevard',
      faName: 'سهرورد',
    },
    {
      name: 'Qeydar',
      faName: 'قیدار',
    },
    {
      name: 'Karasf',
      faName: 'کرسف',
    },
    {
      name: 'Garmab',
      faName: 'گرماب',
    },
    {
      name: 'Nour Abad(Nour Bahar)',
      faName: 'نوربهار',
    },
    {
      name: 'Khorramdarreh',
      faName: 'خرمدره',
    },
    {
      name: 'Armaghankhaneh',
      faName: 'ارمغانخانه',
    },
    {
      name: 'Zanjan',
      faName: 'زنجان',
    },
    {
      name: 'Nik Pey',
      faName: 'نیک پی',
    },
    {
      name: 'Soltaniyeh',
      faName: 'سلطانیه',
    },
    {
      name: 'Abbar',
      faName: 'آب بر',
    },
    {
      name: 'Chavarzaq',
      faName: 'چورزق',
    },
    {
      name: 'Dandi',
      faName: 'دندی',
    },
    {
      name: 'Mahneshan',
      faName: 'ماه نشان',
    },
    {
      name: 'Aradan',
      faName: 'آرادان',
    },
    {
      name: 'Kohanabad',
      faName: 'کهن آباد',
    },
    {
      name: 'Amiriyeh',
      faName: 'امیریه',
    },
    {
      name: 'Damghan',
      faName: 'دامغان',
    },
    {
      name: 'Dibaj',
      faName: 'دیباج',
    },
    {
      name: 'Kalateh',
      faName: 'کلاته',
    },
    {
      name: 'Sorkheh',
      faName: 'سرخه',
    },
    {
      name: 'Semnan',
      faName: 'سمنان',
    },
    {
      name: 'Bastam',
      faName: 'بسطام',
    },
    {
      name: 'Beyarjomand',
      faName: 'بیارجمند',
    },
    {
      name: 'Rudian',
      faName: 'رودیان',
    },
    {
      name: 'Shahrud',
      faName: 'شاهرود',
    },
    {
      name: 'Kalateh-ye Khij',
      faName: 'کلاته خیج',
    },
    {
      name: 'Mojen',
      faName: 'مجن',
    },
    {
      name: 'Eyvanki',
      faName: 'ایوانکی',
    },
    {
      name: 'Garmsar',
      faName: 'گرمسار',
    },
    {
      name: 'Darjazin',
      faName: 'درجزین',
    },
    {
      name: 'Shahmirzad',
      faName: 'شهمیرزاد',
    },
    {
      name: 'MehdiShahr',
      faName: 'مهدی شهر',
    },
    {
      name: 'Meyami',
      faName: 'میامی',
    },
    {
      name: 'Iranshahr',
      faName: 'ایرانشهر',
    },
    {
      name: 'Bazman',
      faName: 'بزمان',
    },
    {
      name: 'Bampur',
      faName: 'بمپور',
    },
    {
      name: 'Mohammadan',
      faName: 'محمدان',
    },
    {
      name: 'Chabahar',
      faName: 'چابهار',
    },
    {
      name: 'Negur',
      faName: 'نگور',
    },
    {
      name: 'Khash',
      faName: 'خاش',
    },
    {
      name: 'Nukabad',
      faName: 'نوک آباد',
    },
    {
      name: 'Golmurti',
      faName: 'گلمورتی',
    },
    {
      name: 'Bonjar',
      faName: 'بنجار',
    },
    {
      name: 'Zabol',
      faName: 'زابل',
    },
    {
      name: 'Zahedan',
      faName: 'زاهدان',
    },
    {
      name: 'Nosratabad',
      faName: 'نصرت آباد',
    },
    {
      name: 'Zehak',
      faName: 'زهک',
    },
    {
      name: 'Jaleq',
      faName: 'جالق',
    },
    {
      name: 'Saravan',
      faName: 'سراوان',
    },
    {
      name: 'Sirkan',
      faName: 'سیرکان',
    },
    {
      name: 'Gosht',
      faName: 'گشت',
    },
    {
      name: 'Mohamadi',
      faName: 'محمدی',
    },
    {
      name: 'Pishin',
      faName: 'پیشین',
    },
    {
      name: 'Rask',
      faName: 'راسک',
    },
    {
      name: 'Sarbaz',
      faName: 'سرباز',
    },
    {
      name: 'Suran',
      faName: 'سوران',
    },
    {
      name: 'Hiduch',
      faName: 'هیدوچ',
    },
    {
      name: 'Fanuj',
      faName: 'فنوج',
    },
    {
      name: 'Qasr-e Qand',
      faName: 'قصرقند',
    },
    {
      name: 'Konarak',
      faName: 'کنارک',
    },
    {
      name: 'Zaboli',
      faName: 'مهرستان',
    },
    {
      name: 'Mirjaveh',
      faName: 'میرجاوه',
    },
    {
      name: 'Espakeh',
      faName: 'اسپکه',
    },
    {
      name: 'Bent',
      faName: 'بنت',
    },
    {
      name: 'Nik Shahr',
      faName: 'نیک شهر',
    },
    {
      name: 'Adimi',
      faName: 'ادیمی',
    },
    {
      name: 'Akbarabad',
      faName: 'شهرک علی اکبر',
    },
    {
      name: 'Dust Mohammad',
      faName: 'دوست محمد',
    },
    {
      name: 'Abadeh',
      faName: 'آباده',
    },
    {
      name: 'Izadkhast',
      faName: 'ایزدخواست',
    },
    {
      name: 'Bahman',
      faName: 'بهمن',
    },
    {
      name: 'Surmaq',
      faName: 'سورمق',
    },
    {
      name: 'Soghad',
      faName: 'صغاد',
    },
    {
      name: 'Arsanjan',
      faName: 'ارسنجان',
    },
    {
      name: 'Estahban',
      faName: 'استهبان',
    },
    {
      name: 'Ij',
      faName: 'ایج',
    },
    {
      name: 'Runiz ',
      faName: 'رونیز',
    },
    {
      name: 'Eqlid',
      faName: 'اقلید',
    },
    {
      name: 'Deh-e now',
      faName: 'دژکرد',
    },
    {
      name: 'Sedeh',
      faName: 'سده',
    },
    {
      name: 'Bavanat',
      faName: 'بوانات',
    },
    {
      name: 'Hesami',
      faName: 'حسامی',
    },
    {
      name: "Korreh'i",
      faName: 'کره ای',
    },
    {
      name: 'Mazayjan',
      faName: 'مزایجان',
    },
    {
      name: 'Saadat Shahr',
      faName: 'سعادت شهر',
    },
    {
      name: 'Madar-e-Soleyman',
      faName: 'مادرسلیمان',
    },
    {
      name: 'Bab Anar',
      faName: 'باب انار',
    },
    {
      name: 'Jahrom',
      faName: 'جهرم',
    },
    {
      name: 'Khavaran',
      faName: 'خاوران',
    },
    {
      name: 'Duzeh',
      faName: 'دوزه',
    },
    {
      name: 'Qotbabad',
      faName: 'قطب آباد',
    },
    {
      name: 'Kharameh',
      faName: 'خرامه',
    },
    {
      name: 'Soltan Shahr',
      faName: 'سلطان شهر',
    },
    {
      name: 'Safashahr',
      faName: 'صفاشهر',
    },
    {
      name: 'Qaderabad',
      faName: 'قادراباد',
    },
    {
      name: 'Khonj',
      faName: 'خنج',
    },
    {
      name: 'Jannat Shahr',
      faName: 'جنت شهر',
    },
    {
      name: 'Darab',
      faName: 'داراب',
    },
    {
      name: 'Doborji',
      faName: 'دوبرجی',
    },
    {
      name: 'Fadami',
      faName: 'فدامی',
    },
    {
      name: 'Kopen',
      faName: 'کوپن',
    },
    {
      name: 'Masiri',
      faName: 'مصیری',
    },
    {
      name: 'Dobiran',
      faName: 'دبیران',
    },
    {
      name: 'Pir City',
      faName: 'شهرپیر',
    },
    {
      name: 'Ardakan',
      faName: 'اردکان',
    },
    {
      name: 'Beyza',
      faName: 'بیضا',
    },
    {
      name: 'Hamashahr',
      faName: 'هماشهر',
    },
    {
      name: 'Sarvestan',
      faName: 'سروستان',
    },
    {
      name: 'Kuhenjan',
      faName: 'کوهنجان',
    },
    {
      name: 'Khaneh Zenyan',
      faName: 'خانه زنیان',
    },
    {
      name: 'Darian',
      faName: 'داریان',
    },
    {
      name: 'Zarqan',
      faName: 'زرقان',
    },
    {
      name: 'Sadra',
      faName: 'صدرا',
    },
    {
      name: 'Shiraz',
      faName: 'شیراز',
    },
    {
      name: 'Lapui',
      faName: 'لپویی',
    },
    {
      name: 'Dehram',
      faName: 'دهرم',
    },
    {
      name: 'Farashband',
      faName: 'فراشبند',
    },
    {
      name: 'Nowjeyn',
      faName: 'نوجین',
    },
    {
      name: 'Zahedshahr',
      faName: 'زاهدشهر',
    },
    {
      name: 'Sheshdeh',
      faName: 'ششده',
    },
    {
      name: 'Fasa',
      faName: 'فسا',
    },
    {
      name: 'Qarah Bolagh',
      faName: 'قره بلاغ',
    },
    {
      name: 'Miyanshahr',
      faName: 'میانشهر',
    },
    {
      name: 'No Bandegan',
      faName: 'نوبندگان',
    },
    {
      name: 'Firuzabad',
      faName: 'فیروزآباد',
    },
    {
      name: 'Meymand',
      faName: 'میمند',
    },
    {
      name: 'Efzar',
      faName: 'افزر',
    },
    {
      name: 'Emam Shahr',
      faName: 'امام شهر',
    },
    {
      name: 'Qir',
      faName: 'قیر',
    },
    {
      name: 'Karzin',
      faName: 'کارزین (فتح آباد)',
    },
    {
      name: 'Mobarakabad',
      faName: 'مبارک آباددیز',
    },
    {
      name: 'Baladeh',
      faName: 'بالاده',
    },
    {
      name: 'Khesht',
      faName: 'خشت',
    },
    {
      name: 'Qaemiyeh',
      faName: 'قایمیه',
    },
    {
      name: 'Kazerun',
      faName: 'کازرون',
    },
    {
      name: 'Konartakhteh',
      faName: 'کنارتخته',
    },
    {
      name: 'Nowdan',
      faName: 'نودان',
    },
    {
      name: 'Kavar',
      faName: 'کوار',
    },
    {
      name: 'Gerash',
      faName: 'گراش',
    },
    {
      name: 'Owz',
      faName: 'اوز',
    },
    {
      name: 'Banaruyeh',
      faName: 'بنارویه',
    },
    {
      name: 'Beyram',
      faName: 'بیرم',
    },
    {
      name: 'Juyom',
      faName: 'جویم',
    },
    {
      name: 'Emad Deh',
      faName: 'عمادده',
    },
    {
      name: 'Lar',
      faName: 'لار',
    },
    {
      name: 'Latifi',
      faName: 'لطیفی',
    },
    {
      name: 'Ashkanan',
      faName: 'اشکنان',
    },
    {
      name: 'Ahel',
      faName: 'اهل',
    },
    {
      name: 'Alamarvdasht',
      faName: 'علامرودشت',
    },
    {
      name: 'Lamerd',
      faName: 'لامرد',
    },
    {
      name: 'Khaniman',
      faName: 'خانیمن',
    },
    {
      name: 'Koushkak',
      faName: 'رامجرد',
    },
    {
      name: 'Seydan',
      faName: 'سیدان',
    },
    {
      name: 'Kamfiruz',
      faName: 'کامفیروز',
    },
    {
      name: 'Marvdasht',
      faName: 'مرودشت',
    },
    {
      name: 'Baba Monir',
      faName: 'بابامنیر',
    },
    {
      name: 'Khumeh Zar',
      faName: 'خومه زار',
    },
    {
      name: 'Nurabad',
      faName: 'نورآباد',
    },
    {
      name: 'Asir',
      faName: 'اسیر',
    },
    {
      name: 'Khuzi',
      faName: 'خوزی',
    },
    {
      name: 'Galleh Dar',
      faName: 'گله دار',
    },
    {
      name: 'Varavi',
      faName: 'وراوی',
    },
    {
      name: 'Abadeh Tashk',
      faName: 'آباده طشک',
    },
    {
      name: 'Qatruyeh',
      faName: 'قطرویه',
    },
    {
      name: 'Meshkan',
      faName: 'مشکان',
    },
    {
      name: 'Neyriz',
      faName: 'نی ریز',
    },
    {
      name: 'Abyek',
      faName: 'آبیک',
    },
    {
      name: 'Khakali',
      faName: 'خاکعلی',
    },
    {
      name: 'Abgarm',
      faName: 'آبگرم',
    },
    {
      name: 'Avaj',
      faName: 'آوج',
    },
    {
      name: 'Alvand',
      faName: 'الوند',
    },
    {
      name: 'Bidestan',
      faName: 'بیدستان',
    },
    {
      name: 'Sharifiyeh',
      faName: 'شریفیه',
    },
    {
      name: 'Mohammadiyeh',
      faName: 'محمدیه',
    },
    {
      name: 'Ardak',
      faName: 'ارداق',
    },
    {
      name: 'Buin Zahra',
      faName: 'بویین زهرا',
    },
    {
      name: 'Danesfahan',
      faName: 'دانسفهان',
    },
    {
      name: 'Sagzabad',
      faName: 'سگزآباد',
    },
    {
      name: 'Shal',
      faName: 'شال',
    },
    {
      name: 'Asfarvarin',
      faName: 'اسفرورین',
    },
    {
      name: 'Takestan',
      faName: 'تاکستان',
    },
    {
      name: 'Khorramdasht',
      faName: 'خرمدشت',
    },
    {
      name: 'Ziaabad',
      faName: 'ضیاڈآباد',
    },
    {
      name: 'Narjeh',
      faName: 'نرجه',
    },
    {
      name: 'Eqbaliyeh',
      faName: 'اقبالیه',
    },
    {
      name: 'Razmian',
      faName: 'رازمیان',
    },
    {
      name: 'Sirdan',
      faName: 'سیردان',
    },
    {
      name: 'Qazvin',
      faName: 'قزوین',
    },
    {
      name: 'Kuhin',
      faName: 'کوهین',
    },
    {
      name: 'Mahmudabad Nemuneh',
      faName: 'محمود آباد نمونه',
    },
    {
      name: 'Moallem Kelayeh',
      faName: 'معلم کلایه',
    },
    {
      name: 'Ja`fariyeh',
      faName: 'جعفریه',
    },
    {
      name: 'Dastjerd',
      faName: 'دستجرد',
    },
    {
      name: 'Salafchegan',
      faName: 'سلفچگان',
    },
    {
      name: 'Qom',
      faName: 'قم',
    },
    {
      name: 'Qanavat',
      faName: 'قنوات',
    },
    {
      name: 'Kahak',
      faName: 'کهک',
    },
    {
      name: 'Armardeh',
      faName: 'آرمرده',
    },
    {
      name: 'Baneh',
      faName: 'بانه',
    },
    {
      name: 'Boeen-e-Sofla',
      faName: 'بویین سفلی',
    },
    {
      name: 'Kani Sur',
      faName: 'کانی سور',
    },
    {
      name: 'Babarashani',
      faName: 'بابارشانی',
    },
    {
      name: 'Bijar',
      faName: 'بیجار',
    },
    {
      name: 'Pir Taj',
      faName: 'پیرتاج',
    },
    {
      name: 'Tup Aghaj',
      faName: 'توپ آغاج',
    },
    {
      name: 'Yasukand',
      faName: 'یاسوکند',
    },
    {
      name: 'Bolbanabad',
      faName: 'بلبان آباد',
    },
    {
      name: 'Dehgolan',
      faName: 'دهگلان',
    },
    {
      name: 'Divandarreh',
      faName: 'دیواندره',
    },
    {
      name: 'Zarrineh',
      faName: 'زرینه',
    },
    {
      name: 'Aavraman Takht',
      faName: 'اورامان تخت',
    },
    {
      name: 'Sarvabad',
      faName: 'سروآباد',
    },
    {
      name: 'Saqqez',
      faName: 'سقز',
    },
    {
      name: 'Saheb',
      faName: 'صاحب',
    },
    {
      name: 'Sanandaj',
      faName: 'سنندج',
    },
    {
      name: 'Shuyesheh',
      faName: 'شویشه',
    },
    {
      name: 'Dezej',
      faName: 'دزج',
    },
    {
      name: 'Delbaran',
      faName: 'دلبران',
    },
    {
      name: 'Serishabad',
      faName: 'سریش آباد',
    },
    {
      name: 'Qorveh',
      faName: 'قروه',
    },
    {
      name: 'Kamyaran',
      faName: 'کامیاران',
    },
    {
      name: 'Muchesh',
      faName: 'موچش',
    },
    {
      name: 'Bardeh Rasheh',
      faName: 'برده رشه',
    },
    {
      name: 'Chenareh',
      faName: 'چناره',
    },
    {
      name: 'Kani Dinar',
      faName: 'کانی دینار',
    },
    {
      name: 'Marivan',
      faName: 'مریوان',
    },
    {
      name: 'Orzueeyeh',
      faName: 'ارزوییه',
    },
    {
      name: 'AminShahr',
      faName: 'امین شهر',
    },
    {
      name: 'Anar',
      faName: 'انار',
    },
    {
      name: 'Baft',
      faName: 'بافت',
    },
    {
      name: 'Bezenjan',
      faName: 'بزنجان',
    },
    {
      name: 'Bardsir',
      faName: 'بردسیر',
    },
    {
      name: 'Dashtkar',
      faName: 'دشتکار',
    },
    {
      name: 'Golzar',
      faName: 'گلزار',
    },
    {
      name: 'Lalehzar',
      faName: 'لاله زار',
    },
    {
      name: 'Negar',
      faName: 'نگار',
    },
    {
      name: 'Baravat',
      faName: 'بروات',
    },
    {
      name: 'Bam',
      faName: 'بم',
    },
    {
      name: 'Boluk',
      faName: 'بلوک',
    },
    {
      name: 'Jebalbarez',
      faName: 'جبالبارز',
    },
    {
      name: 'Jiroft',
      faName: 'جیرفت',
    },
    {
      name: 'Darb-e Behesht',
      faName: 'درب بهشت',
    },
    {
      name: 'Rabor',
      faName: 'رابر',
    },
    {
      name: 'Hanza',
      faName: 'هنزا',
    },
    {
      name: 'Ravar',
      faName: 'راور',
    },
    {
      name: 'Hojdak',
      faName: 'هجدک',
    },
    {
      name: 'Bahreman',
      faName: 'بهرمان',
    },
    {
      name: 'Rafsanjan',
      faName: 'رفسنجان',
    },
    {
      name: 'Safayyeh',
      faName: 'صفاییه',
    },
    {
      name: 'Koshkoueieh',
      faName: 'کشکوییه',
    },
    {
      name: 'Mes-e Sarcheshmeh',
      faName: 'مس سرچشمه',
    },
    {
      name: 'Rudbar',
      faName: 'رودبار',
    },
    {
      name: 'Zehkalut',
      faName: 'زهکلوت',
    },
    {
      name: 'Gonbaki',
      faName: 'گنبکی',
    },
    {
      name: 'Khanuk',
      faName: 'خانوک',
    },
    {
      name: 'Rijan',
      faName: 'ریحان',
    },
    {
      name: 'Zarand',
      faName: 'زرند',
    },
    {
      name: 'Yazdan Shahr',
      faName: 'یزدان شهر',
    },
    {
      name: 'Balvard',
      faName: 'بلورد',
    },
    {
      name: 'Pariz',
      faName: 'پاریز',
    },
    {
      name: 'Khvaju Shahr',
      faName: 'خواجو شهر',
    },
    {
      name: 'Zeydabad',
      faName: 'زیدآباد',
    },
    {
      name: 'Sirjan',
      faName: 'سیرجان',
    },
    {
      name: 'Najaf Shahr',
      faName: 'نجف شهر',
    },
    {
      name: 'Jowzam',
      faName: 'جوزم',
    },
    {
      name: 'Khatunabad',
      faName: 'خاتون اباد',
    },
    {
      name: 'Khursand',
      faName: 'خورسند',
    },
    {
      name: 'Dehaj',
      faName: 'دهج',
    },
    {
      name: 'Shahr-e Babak',
      faName: 'شهر بابک',
    },
    {
      name: 'Dow Sari',
      faName: 'دوساری',
    },
    {
      name: 'Anbarabad',
      faName: 'عنبرآباد',
    },
    {
      name: 'Mardehek',
      faName: 'مردهک',
    },
    {
      name: 'Faryab',
      faName: 'فاریاب',
    },
    {
      name: 'Fahraj',
      faName: 'فهرج',
    },
    {
      name: 'Qaleh Ganj',
      faName: 'قلعه گنج',
    },
    {
      name: 'Ekhtiarabad',
      faName: 'اختیارآباد',
    },
    {
      name: 'Anduhjerd',
      faName: 'اندوهجرد',
    },
    {
      name: 'Baghin',
      faName: 'باغین',
    },
    {
      name: 'Jupar',
      faName: 'جوپار',
    },
    {
      name: 'Chatrud',
      faName: 'چترود',
    },
    {
      name: 'Rayen',
      faName: 'راین',
    },
    {
      name: 'Zangiabad',
      faName: 'زنگی آباد',
    },
    {
      name: 'Shahdad',
      faName: 'شهداد',
    },
    {
      name: 'Kazemabad',
      faName: 'کاظم آباد',
    },
    {
      name: 'Kerman',
      faName: 'کرمان',
    },
    {
      name: 'Golbaf',
      faName: 'گلباف',
    },
    {
      name: 'Mahan',
      faName: 'ماهان',
    },
    {
      name: 'Mohiabad',
      faName: 'محی آباد',
    },
    {
      name: 'Kuhbanan',
      faName: 'کوهبنان',
    },
    {
      name: 'Kian Shahr',
      faName: 'کیانشهر',
    },
    {
      name: 'Kahnuj',
      faName: 'کهنوج',
    },
    {
      name: 'Manujan',
      faName: 'منوجان',
    },
    {
      name: 'Nodej',
      faName: 'نودژ',
    },
    {
      name: 'Narmashir',
      faName: 'نرماشیر',
    },
    {
      name: 'Nezamabad',
      faName: 'نظام شهر',
    },
    {
      name: 'Eslamabad-e Gharb',
      faName: 'اسلام آبادغرب',
    },
    {
      name: 'Hamil',
      faName: 'حمیل',
    },
    {
      name: 'Banevreh',
      faName: 'بانوره',
    },
    {
      name: 'Bayangan',
      faName: 'باینگان',
    },
    {
      name: 'Paveh',
      faName: 'پاوه',
    },
    {
      name: 'Nowdeshah',
      faName: 'نودشه',
    },
    {
      name: 'Nowsud',
      faName: 'نوسود',
    },
    {
      name: 'Ozgoleh',
      faName: 'ازگله',
    },
    {
      name: 'Tazehabad',
      faName: 'تازه آباد',
    },
    {
      name: 'Javanrud',
      faName: 'جوانرود',
    },
    {
      name: 'Rijab',
      faName: 'ریجاب',
    },
    {
      name: 'Karand',
      faName: 'کرند',
    },
    {
      name: 'Gahvareh',
      faName: 'گهواره',
    },
    {
      name: 'Ravansar',
      faName: 'روانسر',
    },
    {
      name: 'Shahu',
      faName: 'شاهو',
    },
    {
      name: 'Sarpol-e Zahab',
      faName: 'سرپل ذهاب',
    },
    {
      name: 'Satar',
      faName: 'سطر',
    },
    {
      name: 'Sonqor',
      faName: 'سنقر',
    },
    {
      name: 'Sahneh',
      faName: 'صحنه',
    },
    {
      name: 'Mian Rahan',
      faName: 'میان راهان',
    },
    {
      name: 'Sumar',
      faName: 'سومار',
    },
    {
      name: 'Qasr-e Shirin',
      faName: 'قصرشیرین',
    },
    {
      name: 'Rabat',
      faName: 'رباط',
    },
    {
      name: 'Kermanshah',
      faName: 'کرمانشاه',
    },
    {
      name: 'Kuzaran',
      faName: 'کوزران',
    },
    {
      name: 'Halashi',
      faName: 'هلشی',
    },
    {
      name: 'Kangavar',
      faName: 'کنگاور',
    },
    {
      name: 'Gowdin',
      faName: 'گودین',
    },
    {
      name: 'Sarmast',
      faName: 'سرمست',
    },
    {
      name: 'Gilan-e Gharb',
      faName: 'گیلانغرب',
    },
    {
      name: 'Bisotun',
      faName: 'بیستون',
    },
    {
      name: 'Harsin',
      faName: 'هرسین',
    },
    {
      name: 'Basht',
      faName: 'باشت',
    },
    {
      name: 'Chitab',
      faName: 'چیتاب',
    },
    {
      name: 'Garab-e Sofla',
      faName: 'گراب سفلی',
    },
    {
      name: 'Madavan',
      faName: 'مادوان',
    },
    {
      name: 'Margown',
      faName: 'مارگون',
    },
    {
      name: 'Yasuj',
      faName: 'یاسوج',
    },
    {
      name: 'Likak',
      faName: 'لیکک',
    },
    {
      name: 'Charam',
      faName: 'چرام',
    },
    {
      name: 'Sarfaryab',
      faName: 'سرفاریاب',
    },
    {
      name: 'Pataveh',
      faName: 'پاتاوه',
    },
    {
      name: 'Sisakht',
      faName: 'سی سخت',
    },
    {
      name: 'Dehdasht',
      faName: 'دهدشت',
    },
    {
      name: 'Dishmok',
      faName: 'دیشموک',
    },
    {
      name: 'Suq',
      faName: 'سوق',
    },
    {
      name: 'Qaleh Raisi',
      faName: 'قلعه رییسی',
    },
    {
      name: 'Dogonbadan',
      faName: 'دوگنبدان',
    },
    {
      name: 'Landeh',
      faName: 'لنده',
    },
    {
      name: 'Azadshahr',
      faName: 'آزادشهر',
    },
    {
      name: 'Neginshahr',
      faName: 'نگین شهر',
    },
    {
      name: 'Nowdeh Khanduz',
      faName: 'نوده خاندوز',
    },
    {
      name: 'AqQala',
      faName: 'آق قلا',
    },
    {
      name: 'Anbar Olum',
      faName: 'انبارآلوم',
    },
    {
      name: 'Bandar-e Gaz',
      faName: 'بندرگز',
    },
    {
      name: 'Nowkandeh',
      faName: 'نوکنده',
    },
    {
      name: 'Bandar Torkaman',
      faName: 'بندرترکمن',
    },
    {
      name: 'Tatar Olia',
      faName: 'تاتارعلیا',
    },
    {
      name: 'Khan Bebin',
      faName: 'خان ببین',
    },
    {
      name: 'Daland',
      faName: 'دلند',
    },
    {
      name: 'Ramian',
      faName: 'رامیان',
    },
    {
      name: 'Sangdevin',
      faName: 'سنگدوین',
    },
    {
      name: 'Aliabad-e Katul',
      faName: 'علی ‌آباد کتول',
    },
    {
      name: 'Fazelabad',
      faName: 'فاضل آباد',
    },
    {
      name: 'Mazraeh',
      faName: 'مزرعه',
    },
    {
      name: 'Kordkuy',
      faName: 'کردکوی',
    },
    {
      name: 'Faraghi',
      faName: 'فراغی',
    },
    {
      name: 'Kalaleh',
      faName: 'کلاله',
    },
    {
      name: 'Galikash',
      faName: 'گالیکش',
    },
    {
      name: 'Jelin-e Olya',
      faName: 'جلین',
    },
    {
      name: 'Sarkhon Kalateh',
      faName: 'سرخنکلاته',
    },
    {
      name: 'Gorgan',
      faName: 'گرگان',
    },
    {
      name: 'SiminShahr',
      faName: 'سیمین شهر',
    },
    {
      name: 'Kumush depe',
      faName: 'گمیش تپه',
    },
    {
      name: 'Incheboron',
      faName: 'اینچه برون',
    },
    {
      name: 'Gonbad Kavus',
      faName: 'گنبدکاووس',
    },
    {
      name: 'Maraveh Tappeh',
      faName: 'مراوه',
    },
    {
      name: 'Minudasht',
      faName: 'مینودشت',
    },
    {
      name: 'Astara',
      faName: 'آستارا',
    },
    {
      name: 'Lavandevil',
      faName: 'لوندویل',
    },
    {
      name: 'Astaneh-ye Ashrafiyeh',
      faName: 'آستانه اشرفیه',
    },
    {
      name: 'Kiashahr',
      faName: 'کیاشهر',
    },
    {
      name: 'Amlash',
      faName: 'املش',
    },
    {
      name: 'Rankuh',
      faName: 'رانکوه',
    },
    {
      name: 'Bandar-e Anzali',
      faName: 'بندرانزلی',
    },
    {
      name: 'Khoshk-e Bijar',
      faName: 'خشکبیجار',
    },
    {
      name: 'Khomam',
      faName: 'خمام',
    },
    {
      name: 'Rasht',
      faName: 'رشت',
    },
    {
      name: 'Sangar',
      faName: 'سنگر',
    },
    {
      name: 'Kuchesfahan',
      faName: 'کوچصفهان',
    },
    {
      name: 'Lasht-e Nesha',
      faName: 'لشت نشاء',
    },
    {
      name: 'Loleman',
      faName: 'لولمان',
    },
    {
      name: 'Pareh Sar',
      faName: 'پره سر',
    },
    {
      name: 'Barehsar',
      faName: 'بره سر',
    },
    {
      name: 'Tutkabon',
      faName: 'توتکابن',
    },
    {
      name: 'Jirandeh',
      faName: 'جیرنده',
    },
    {
      name: 'Rostamabad',
      faName: 'رستم آباد',
    },
    {
      name: 'Lowshan',
      faName: 'لوشان',
    },
    {
      name: 'Manjil',
      faName: 'منجیل',
    },
    {
      name: 'Chaboksar',
      faName: 'چابکسر',
    },
    {
      name: 'Rahimabad',
      faName: 'رحیم آباد',
    },
    {
      name: 'Rudsar',
      faName: 'رودسر',
    },
    {
      name: 'Kelachay',
      faName: 'کلاچای',
    },
    {
      name: 'Vajargah',
      faName: 'واجارگاه',
    },
    {
      name: 'Deylaman',
      faName: 'دیلمان',
    },
    {
      name: 'Siahkal',
      faName: 'سیاهکل',
    },
    {
      name: 'Ahmadsargurab',
      faName: 'احمدسرگوراب',
    },
    {
      name: 'Sharaft',
      faName: 'شفت',
    },
    {
      name: "Sowme'eh Sara",
      faName: 'صومعه سرا',
    },
    {
      name: 'Gurab Zarmikh',
      faName: 'گوراب زرمیخ',
    },
    {
      name: 'Marjaghal',
      faName: 'مرجقل',
    },
    {
      name: 'Asalem',
      faName: 'اسالم',
    },
    {
      name: 'Chubar',
      faName: 'چوبر',
    },
    {
      name: 'Haviq',
      faName: 'حویق',
    },
    {
      name: 'Lisar',
      faName: 'لیسار',
    },
    {
      name: 'Hashtpar',
      faName: 'هشتپر',
    },
    {
      name: 'Fuman',
      faName: 'فومن',
    },
    {
      name: 'Masuleh',
      faName: 'ماسوله',
    },
    {
      name: 'Maklavan',
      faName: 'ماکلوان',
    },
    {
      name: 'Rudboneh',
      faName: 'رودبنه',
    },
    {
      name: 'Lahijan',
      faName: 'لاهیجان',
    },
    {
      name: 'Otaghvar',
      faName: 'اطاقور',
    },
    {
      name: 'Chaf and Chamkhaleh',
      faName: 'چاف و چمخاله',
    },
    {
      name: 'Shalman',
      faName: 'شلمان',
    },
    {
      name: 'Kumeleh',
      faName: 'کومله',
    },
    {
      name: 'Langarud',
      faName: 'لنگرود',
    },
    {
      name: 'Bazar Jomeh',
      faName: 'بازار جمعه',
    },
    {
      name: 'Masal',
      faName: 'ماسال',
    },
    {
      name: 'Azna',
      faName: 'ازنا',
    },
    {
      name: 'Momenabad',
      faName: 'مومن آباد',
    },
    {
      name: 'Aligudarz',
      faName: 'الیگودرز',
    },
    {
      name: 'Shool Abad',
      faName: 'شول آباد',
    },
    {
      name: 'Oshtorinan',
      faName: 'اشترینان',
    },
    {
      name: 'Borujerd',
      faName: 'بروجرد',
    },
    {
      name: 'Pol Dokhtar',
      faName: 'پلدختر',
    },
    {
      name: 'Mamulan',
      faName: 'معمولان',
    },
    {
      name: 'Bayranshahr',
      faName: 'بیران شهر',
    },
    {
      name: 'Khorramabad',
      faName: 'خرم آباد',
    },
    {
      name: 'Zagheh',
      faName: 'زاغه',
    },
    {
      name: 'Sepiddasht',
      faName: 'سپیددشت',
    },
    {
      name: 'Haft Cheshmeh',
      faName: 'هفت چشمه',
    },
    {
      name: 'Chalanchulan',
      faName: 'چالانچولان',
    },
    {
      name: 'Dorud',
      faName: 'دورود',
    },
    {
      name: 'Sarab-e Dowreh',
      faName: 'سراب دوره',
    },
    {
      name: 'Veysian',
      faName: 'ویسیان',
    },
    {
      name: 'Chaqabol',
      faName: 'چقابل',
    },
    {
      name: 'Aleshtar',
      faName: 'الشتر',
    },
    {
      name: 'Darb-e Gonbad',
      faName: 'درب گنبد',
    },
    {
      name: 'Kuhdasht',
      faName: 'کوهدشت',
    },
    {
      name: 'Kunani',
      faName: 'کوهنانی',
    },
    {
      name: 'Garab',
      faName: 'گراب',
    },
    {
      name: 'Amol',
      faName: 'آمل',
    },
    {
      name: 'Amamzadeh Abdallah',
      faName: 'امامزاده عبدالله',
    },
    {
      name: 'Dabudasht',
      faName: 'دابودشت',
    },
    {
      name: 'Rineh',
      faName: 'رینه',
    },
    {
      name: 'Gazanak',
      faName: 'گزنک',
    },
    {
      name: 'Amirkola',
      faName: 'امیرکلا',
    },
    {
      name: 'Babol',
      faName: 'بابل',
    },
    {
      name: 'Khush Rudpey',
      faName: 'خوش رودپی',
    },
    {
      name: 'Zargarmahalleh',
      faName: 'زرگرمحله',
    },
    {
      name: 'Gatab',
      faName: 'گتاب',
    },
    {
      name: 'Galugah',
      faName: 'گلوگاه',
    },
    {
      name: 'Marzikola',
      faName: 'مرزیکلا',
    },
    {
      name: 'Babolsar',
      faName: 'بابلسر',
    },
    {
      name: 'Bahnamir',
      faName: 'بهنمیر',
    },
    {
      name: 'HadiShahr',
      faName: 'هادی شهر',
    },
    {
      name: 'Behshahr',
      faName: 'بهشهر',
    },
    {
      name: 'Khalil Shahr',
      faName: 'خلیل شهر',
    },
    {
      name: 'Rostamkola',
      faName: 'رستمکلا',
    },
    {
      name: 'Tonekabon',
      faName: 'تنکابن',
    },
    {
      name: 'Shirud',
      faName: 'شیرود',
    },
    {
      name: 'Nashtarud',
      faName: 'نشتارود',
    },
    {
      name: 'Juybar',
      faName: 'جویبار',
    },
    {
      name: 'Kuhi Kheyl',
      faName: 'کوهی خیل',
    },
    {
      name: 'Chalus',
      faName: 'چالوس',
    },
    {
      name: 'Marzanabad',
      faName: 'مرزن آباد',
    },
    {
      name: 'Hachirud',
      faName: 'هچیرود',
    },
    {
      name: 'Ramsar',
      faName: 'رامسر',
    },
    {
      name: 'Katalom',
      faName: 'کتالم و سادات شهر',
    },
    {
      name: 'Paein Hoular',
      faName: 'پایین هولار',
    },
    {
      name: 'Sari',
      faName: 'ساری',
    },
    {
      name: 'Farim',
      faName: 'فریم',
    },
    {
      name: 'Kiasar',
      faName: 'کیاسر',
    },
    {
      name: 'Alasht',
      faName: 'آلاشت',
    },
    {
      name: 'Pol Sefid',
      faName: 'پل سفید',
    },
    {
      name: 'Zirab',
      faName: 'زیرآب',
    },
    {
      name: 'Shirgah',
      faName: 'شیرگاه',
    },
    {
      name: 'Kia Kola',
      faName: 'کیاکلا',
    },
    {
      name: 'Salman Shahr',
      faName: 'سلمان شهر',
    },
    {
      name: 'Abbasabad',
      faName: 'عباس اباد',
    },
    {
      name: 'Kelarabad',
      faName: 'کلارآباد',
    },
    {
      name: 'Fereydunkenar',
      faName: 'فریدونکنار',
    },
    {
      name: 'Arateh',
      faName: 'ارطه',
    },
    {
      name: 'Qaemshahr',
      faName: 'قایم شهر',
    },
    {
      name: 'Kelardasht',
      faName: 'کلاردشت',
    },
    {
      name: 'Sorkhrud',
      faName: 'سرخرود',
    },
    {
      name: 'Surak',
      faName: 'سورک',
    },
    {
      name: 'Neka',
      faName: 'نکا',
    },
    {
      name: 'Izadshahr',
      faName: 'ایزدشهر',
    },
    {
      name: 'Baladeh',
      faName: 'بلده',
    },
    {
      name: 'Chamestan',
      faName: 'چمستان',
    },
    {
      name: 'Royan',
      faName: 'رویان',
    },
    {
      name: 'Nur',
      faName: 'نور',
    },
    {
      name: 'Pul',
      faName: 'پول',
    },
    {
      name: 'Kojur',
      faName: 'کجور',
    },
    {
      name: 'Nowshahr',
      faName: 'نوشهر',
    },
    {
      name: 'Ashtian',
      faName: 'آشتیان',
    },
    {
      name: 'Arak',
      faName: 'اراک',
    },
    {
      name: 'Davudabad',
      faName: 'داودآباد',
    },
    {
      name: 'Saruq',
      faName: 'ساروق',
    },
    {
      name: 'Karchan',
      faName: 'کارچان',
    },
    {
      name: 'Tafresh',
      faName: 'تفرش',
    },
    {
      name: 'Khomein',
      faName: 'خمین',
    },
    {
      name: 'Qurchi Bashi',
      faName: 'قورچی باشی',
    },
    {
      name: 'Javarseyan',
      faName: 'جاورسیان',
    },
    {
      name: 'Khondab',
      faName: 'خنداب',
    },
    {
      name: 'Delijan',
      faName: 'دلیجان',
    },
    {
      name: 'Naraq',
      faName: 'نراق',
    },
    {
      name: 'Parandak',
      faName: 'پرندک',
    },
    {
      name: 'Khoshkrud',
      faName: 'خشکرود',
    },
    {
      name: 'Razeqan',
      faName: 'رازقان',
    },
    {
      name: 'Zaviyeh',
      faName: 'زاویه',
    },
    {
      name: 'Mamuniyeh',
      faName: 'مامونیه',
    },
    {
      name: 'Aveh',
      faName: 'آوه',
    },
    {
      name: 'Saveh',
      faName: 'ساوه',
    },
    {
      name: 'Gharqabad',
      faName: 'غرق آباد',
    },
    {
      name: 'Nowbaran',
      faName: 'نوبران',
    },
    {
      name: 'Astaneh',
      faName: 'آستانه',
    },
    {
      name: 'Tureh',
      faName: 'توره',
    },
    {
      name: 'Shazand',
      faName: 'شازند',
    },
    {
      name: 'Shahbaz',
      faName: 'شهباز',
    },
    {
      name: 'Mohajeran',
      faName: 'مهاجران',
    },
    {
      name: 'Hendoudar',
      faName: 'هندودر',
    },
    {
      name: 'Khenejin',
      faName: 'خنجین',
    },
    {
      name: 'Farmahin',
      faName: 'فرمهین',
    },
    {
      name: 'Komijan',
      faName: 'کمیجان',
    },
    {
      name: 'Milajerd',
      faName: 'میلاجرد',
    },
    {
      name: 'Mahallat',
      faName: 'محلات',
    },
    {
      name: 'Nimvar',
      faName: 'نیمور',
    },
    {
      name: 'Abu Musa',
      faName: 'ابوموسی',
    },
    {
      name: 'Bastak',
      faName: 'بستک',
    },
    {
      name: 'Janah',
      faName: 'جناح',
    },
    {
      name: 'Gowharan',
      faName: 'گوهران',
    },
    {
      name: 'Bandar Abbas',
      faName: 'بندرعباس',
    },
    {
      name: 'Tazian',
      faName: 'تازیان پایین',
    },
    {
      name: 'Takht',
      faName: 'تخت',
    },
    {
      name: 'Fin',
      faName: 'فین',
    },
    {
      name: 'Qaleh Qazi',
      faName: 'قلعه قاضی',
    },
    {
      name: 'Bandar Lengeh',
      faName: 'بندرلنگه',
    },
    {
      name: 'Bandar e Charak',
      faName: 'چارک',
    },
    {
      name: 'Kong',
      faName: 'کنگ',
    },
    {
      name: 'Kish',
      faName: 'کیش',
    },
    {
      name: 'Lamazan',
      faName: 'لمزان',
    },
    {
      name: 'Parsian',
      faName: 'پارسیان',
    },
    {
      name: 'Dashti',
      faName: 'دشتی',
    },
    {
      name: 'Koshkonar',
      faName: 'کوشکنار',
    },
    {
      name: 'Bandar-e-Jask',
      faName: 'بندر جاسک',
    },
    {
      name: 'Hajjiabad',
      faName: 'حاجی اباد',
    },
    {
      name: 'Sargaz',
      faName: 'سرگز',
    },
    {
      name: 'Fareghan',
      faName: 'فارغان',
    },
    {
      name: 'Khamir',
      faName: 'خمیر',
    },
    {
      name: 'Ruydar',
      faName: 'رویدر',
    },
    {
      name: 'Bikah',
      faName: 'بیکاء',
    },
    {
      name: 'Dehbarez',
      faName: 'دهبارز',
    },
    {
      name: 'Ziarat-e Ali',
      faName: 'زیارت علی',
    },
    {
      name: 'Sirik',
      faName: 'سیریک',
    },
    {
      name: 'Kouhestak',
      faName: 'کوهستک',
    },
    {
      name: 'Garuk',
      faName: 'گروک',
    },
    {
      name: 'Dargahan',
      faName: 'درگهان',
    },
    {
      name: 'Suza',
      faName: 'سوزا',
    },
    {
      name: 'Qeshm',
      faName: 'قشم',
    },
    {
      name: 'Hormuz',
      faName: 'هرمز',
    },
    {
      name: 'Tirur',
      faName: 'تیرور',
    },
    {
      name: 'Senderk',
      faName: 'سندرک',
    },
    {
      name: 'Minab',
      faName: 'میناب',
    },
    {
      name: 'Hasht bandi',
      faName: 'هشتبندی',
    },
    {
      name: 'Ajin',
      faName: 'آجین',
    },
    {
      name: 'Asadabad',
      faName: 'اسدآباد',
    },
    {
      name: 'Bahar',
      faName: 'بهار',
    },
    {
      name: 'Lalejin',
      faName: 'لالجین',
    },
    {
      name: 'Tuyserkan',
      faName: 'تویسرکان',
    },
    {
      name: 'Sarkan',
      faName: 'سرکان',
    },
    {
      name: 'Farasfaj',
      faName: 'فرسفج',
    },
    {
      name: 'Damaq',
      faName: 'دمق',
    },
    {
      name: 'Razan',
      faName: 'رزن',
    },
    {
      name: 'Qorveh-e Darjazin',
      faName: 'قروه درجزین',
    },
    {
      name: 'Famenin',
      faName: 'فامنین',
    },
    {
      name: 'Shirin Su',
      faName: 'شیرین سو',
    },
    {
      name: 'Kabudarahang',
      faName: 'کبودرآهنگ',
    },
    {
      name: 'Gol Tappeh',
      faName: 'گل تپه',
    },
    {
      name: 'Azandarian',
      faName: 'ازندریان',
    },
    {
      name: 'Jowkar',
      faName: 'جوکار',
    },
    {
      name: 'Zangeneh',
      faName: 'زنگنه',
    },
    {
      name: 'Samen',
      faName: 'سامن',
    },
    {
      name: 'Malayer',
      faName: 'ملایر',
    },
    {
      name: 'Barzul',
      faName: 'برزول',
    },
    {
      name: 'Firuzan',
      faName: 'فیروزان',
    },
    {
      name: 'Giyan',
      faName: 'گیان',
    },
    {
      name: 'Nahavand',
      faName: 'نهاوند',
    },
    {
      name: 'Juraqan',
      faName: 'جورقان',
    },
    {
      name: 'Qahavand',
      faName: 'قهاوند',
    },
    {
      name: 'Maryanaj',
      faName: 'مریانج',
    },
    {
      name: 'Hamadan',
      faName: 'همدان',
    },
    {
      name: 'Abarkuh',
      faName: 'ابرکوه',
    },
    {
      name: 'Mehrdasht',
      faName: 'مهردشت',
    },
    {
      name: 'Ahmadabad',
      faName: 'احمدآباد',
    },
    {
      name: 'Aqda',
      faName: 'عقدا',
    },
    {
      name: 'Ashkezar',
      faName: 'اشکذر',
    },
    {
      name: 'Khezrabad',
      faName: 'خضرآباد',
    },
    {
      name: 'Bafq',
      faName: 'بافق',
    },
    {
      name: 'Behabad',
      faName: 'بهاباد',
    },
    {
      name: 'Taft',
      faName: 'تفت',
    },
    {
      name: 'Marvast',
      faName: 'مروست',
    },
    {
      name: 'Herat',
      faName: 'هرات',
    },
    {
      name: 'Mehriz',
      faName: 'مهریز',
    },
    {
      name: 'Bafruiyeh',
      faName: 'بفروییه',
    },
    {
      name: 'Meybod',
      faName: 'میبد',
    },
    {
      name: 'Nodoushan',
      faName: 'ندوشن',
    },
    {
      name: 'Hamidiya',
      faName: 'حمیدیا',
    },
    {
      name: 'Zarach',
      faName: 'زارچ',
    },
    {
      name: 'Shahedieh',
      faName: 'شاهدیه',
    },
    {
      name: 'Yazd',
      faName: 'یزد',
    },
  ];

  getCity(value: string | null): City[] {
    if (!value) return this.cityList;
    return this.cityList.filter(
      city => city.name.toLowerCase().includes(value.toLowerCase()) || city.faName.includes(value),
    );
  }

  getCityByEnglishName(englishName: string): City {
    const foundCity: City | undefined = this.cityList.find(city => city.name === englishName);
    if (foundCity) {
      return foundCity;
    }
    throw new Error('city not found');
  }
}
