import {Injectable} from '@angular/core';
import {InfluencerDetail, InfluencerSummary} from '@influencers/data-access/model/filter-sort.model';
import {BusinessValue} from '@shared/data-access/models/category.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfluencerDataService {
  getMockInfluencerSummaryList(): Observable<InfluencerSummary[]> {
    const mockData: InfluencerSummary[] = [
      {
        id: '1',
        nickname: 'neg.r',
        instagramId: 'neg.r',
        profilePhotoSrc: 'assets/mock/profile-photos/1.jpg',
        rate: 4,
        category: BusinessValue.Food,
      },
      {
        id: '2',
        nickname: 'Hamed Purple',
        instagramId: 'aboutpurple',
        profilePhotoSrc: 'assets/mock/profile-photos/2.jpg',
        rate: 2.5,
        category: BusinessValue.Fitness,
      },
      {
        id: '3',
        nickname: 'نگین میرصالحی',
        instagramId: 'neginmirsalehi',
        profilePhotoSrc: 'assets/mock/profile-photos/3.jpg',
        rate: 4,
        category: BusinessValue.Fashion,
      },
      {
        id: '4',
        nickname: 'آیسان اسلامی',
        instagramId: 'aisan_eslami',
        profilePhotoSrc: 'assets/mock/profile-photos/4.jpg',
        rate: 3.5,
        category: BusinessValue.Fitness,
      },
      {
        id: '5',
        nickname: 'نیوشا',
        instagramId: 'niusha_sss',
        profilePhotoSrc: 'assets/mock/profile-photos/5.jpg',
        rate: 1,
        category: BusinessValue.Book,
      },
      {
        id: '6',
        nickname: 'سپیده اخلاقی',
        instagramId: 'sssepii',
        profilePhotoSrc: 'assets/mock/profile-photos/6.jpg',
        rate: 2.5,
        category: BusinessValue.Beauty,
      },
    ];
    console.log('getting getMockInfluencerSummaryList from backend...');
    return of(mockData);
  }

  getMockInfluencerDetailDetailsById(id: string | null): InfluencerDetail {
    const influencerListDetailMock: InfluencerDetail[] = [
      {
        persianName: 'نگار',
        persianLastName: 'رجبی',
        englishName: 'Negar',
        englishLastName: 'Rajaby',
        description: 'عشق به طهارت گیاه‌خواری و راهنمایی در دنیای طعم‌ها و خوشمزگی‌های آشپزی.',
        city: 'Mashhad',
        contactInfo: {telegramId: 'negarjby', phoneNumber: null, whatsApp: null},
        id: '1',
        nickname: 'neg.r',
        instagramId: 'neg.r',
        profilePhotoSrc: 'assets/mock/profile-photos/1.jpg',
        rate: 4,
        category: BusinessValue.Food,
        fee: [
          {name: 'ready_story', value: 800000, currency: 'IRT', description: 'معرفی با استوری آماده'},
          {
            name: 'content_create_story',
            value: 1200000,
            currency: 'IRT',
            description: 'تولید محتوا جهت معرفی با استوری',
          },
          {
            name: 'text_story_series',
            value: 1400000,
            currency: 'IRT',
            description: 'معرفی کسب و کار با توضیحات کتبی و استوری سریالی',
          },
          {
            name: 'gift_story_series',
            value: 1600000,
            currency: 'IRT',
            description: 'معرفی با گیفت ارسالی شما و استوری سریالی',
          },
          {name: 'post_reels', value: 2000000, currency: 'IRT', description: 'معرفی با استوری سریالی و پست یا ریلز'},
          {name: 'in_person', value: 1900000, currency: 'IRT', description: 'معرفی حضوری در محل کسب و کار شما'},
        ],
        feeNotes: 'در صورت عودت محصول، به این مبالغ ۵۰۰ هزار تومان اضافه می‌شود.',
      },
      {
        persianName: 'حامد',
        persianLastName: 'ارغوان',
        englishName: 'Hamed',
        englishLastName: 'Arghavan',
        description: 'ترکیبی از سلامتی و ورزش، از راه‌های ساده تا راه‌های پیشرفته',
        city: 'Mashhad',
        contactInfo: {telegramId: 'colorpurple', phoneNumber: '+989017701599', whatsApp: '+989017701599'},
        id: '2',
        nickname: 'Hamed Purple',
        instagramId: 'aboutpurple',
        profilePhotoSrc: 'assets/mock/profile-photos/2.jpg',
        rate: 2.5,
        category: BusinessValue.Fitness,
        fee: [
          {name: 'ready_story', value: 800000, currency: 'IRT', description: 'معرفی با استوری آماده'},
          {
            name: 'content_create_story',
            value: 1200000,
            currency: 'IRT',
            description: 'تولید محتوا جهت معرفی با استوری',
          },
          {
            name: 'text_story_series',
            value: 1400000,
            currency: 'IRT',
            description: 'معرفی کسب و کار با توضیحات کتبی و استوری سریالی',
          },
          {
            name: 'gift_story_series',
            value: 1600000,
            currency: 'IRT',
            description: 'معرفی با گیفت ارسالی شما و استوری سریالی',
          },
          {name: 'post_reels', value: 2000000, currency: 'IRT', description: 'معرفی با استوری سریالی و پست یا ریلز'},
          {name: 'in_person', value: 1900000, currency: 'IRT', description: 'معرفی حضوری در محل کسب و کار شما'},
        ],
        feeNotes: 'در صورت عودت محصول، به این مبالغ ۵۰۰ هزار تومان اضافه می‌شود.',
      },
      {
        persianName: 'نگین',
        persianLastName: 'میرصالحی',
        englishName: 'Negin',
        englishLastName: 'Mirsalehi',
        description: 'روزمره خود را با مد و لباس‌های جدید به روز کنید',
        city: 'Shiraz',
        contactInfo: {telegramId: 'neginmirsalehi', phoneNumber: null, whatsApp: null},
        id: '3',
        nickname: 'نگین میرصالحی',
        instagramId: 'neginmirsalehi',
        profilePhotoSrc: 'assets/mock/profile-photos/3.jpg',
        rate: 4,
        category: BusinessValue.Fashion,
        fee: [
          {name: 'ready_story', value: 800000, currency: 'IRT', description: 'معرفی با استوری آماده'},
          {
            name: 'content_create_story',
            value: 1200000,
            currency: 'IRT',
            description: 'تولید محتوا جهت معرفی با استوری',
          },
          {
            name: 'text_story_series',
            value: 1400000,
            currency: 'IRT',
            description: 'معرفی کسب و کار با توضیحات کتبی و استوری سریالی',
          },
          {
            name: 'gift_story_series',
            value: 1600000,
            currency: 'IRT',
            description: 'معرفی با گیفت ارسالی شما و استوری سریالی',
          },
          {name: 'post_reels', value: 2000000, currency: 'IRT', description: 'معرفی با استوری سریالی و پست یا ریلز'},
          {name: 'in_person', value: 1900000, currency: 'IRT', description: 'معرفی حضوری در محل کسب و کار شما'},
        ],
        feeNotes: 'در صورت عودت محصول، به این مبالغ ۵۰۰ هزار تومان اضافه می‌شود.',
      },
      {
        persianName: 'آیسان',
        persianLastName: 'اسلامی',
        englishName: 'Aisan',
        englishLastName: 'Eslami',
        description: 'تمرینات و تغذیه مناسب برای بهترین شکل فیزیکی و سلامتی.',
        city: 'Tehran',
        contactInfo: {telegramId: 'aisanesss', phoneNumber: '+1145553254', whatsApp: null},
        id: '4',
        nickname: 'آیسان اسلامی',
        instagramId: 'aisan_eslami',
        profilePhotoSrc: 'assets/mock/profile-photos/4.jpg',
        rate: 3.5,
        category: BusinessValue.Fitness,
        fee: [
          {name: 'ready_story', value: 800000, currency: 'IRT', description: 'معرفی با استوری آماده'},
          {
            name: 'content_create_story',
            value: 1200000,
            currency: 'IRT',
            description: 'تولید محتوا جهت معرفی با استوری',
          },
          {
            name: 'text_story_series',
            value: 1400000,
            currency: 'IRT',
            description: 'معرفی کسب و کار با توضیحات کتبی و استوری سریالی',
          },
          {
            name: 'gift_story_series',
            value: 1600000,
            currency: 'IRT',
            description: 'معرفی با گیفت ارسالی شما و استوری سریالی',
          },
          {name: 'post_reels', value: 2000000, currency: 'IRT', description: 'معرفی با استوری سریالی و پست یا ریلز'},
          {name: 'in_person', value: 1900000, currency: 'IRT', description: 'معرفی حضوری در محل کسب و کار شما'},
        ],
        feeNotes: 'در صورت عودت محصول، به این مبالغ ۵۰۰ هزار تومان اضافه می‌شود.',
      },
      {
        persianName: 'نیوشا',
        persianLastName: 'رضایی',
        englishName: 'Newsha',
        englishLastName: 'Rezaei',
        description: 'جهان کتاب را از زبان نیوشا بشنوید و از دنیای کتاب‌ها لذت ببرید',
        city: 'Tehran',
        contactInfo: {telegramId: 'newshaaaa', phoneNumber: '+989159001138', whatsApp: null},
        id: '5',
        nickname: 'نیوشا',
        instagramId: 'niusha_sss',
        profilePhotoSrc: 'assets/mock/profile-photos/5.jpg',
        rate: 1,
        category: BusinessValue.Book,
        fee: [
          {name: 'ready_story', value: 800000, currency: 'IRT', description: 'معرفی با استوری آماده'},
          {
            name: 'content_create_story',
            value: 1200000,
            currency: 'IRT',
            description: 'تولید محتوا جهت معرفی با استوری',
          },
          {
            name: 'text_story_series',
            value: 1400000,
            currency: 'IRT',
            description: 'معرفی کسب و کار با توضیحات کتبی و استوری سریالی',
          },
          {
            name: 'gift_story_series',
            value: 1600000,
            currency: 'IRT',
            description: 'معرفی با گیفت ارسالی شما و استوری سریالی',
          },
          {name: 'post_reels', value: 2000000, currency: 'IRT', description: 'معرفی با استوری سریالی و پست یا ریلز'},
          {name: 'in_person', value: 1900000, currency: 'IRT', description: 'معرفی حضوری در محل کسب و کار شما'},
        ],
        feeNotes: 'در صورت عودت محصول، به این مبالغ ۵۰۰ هزار تومان اضافه می‌شود.',
      },
      {
        persianName: 'سپیده',
        persianLastName: 'اخلاقی',
        englishName: 'Sepideh',
        englishLastName: 'Akhlaghi',
        description: 'کات و راهکارهای زیبایی را برای مراقبت از پوست و مو بیابید.',
        city: 'Shiraz',
        contactInfo: {telegramId: 'sepiak', phoneNumber: '+989172351124', whatsApp: null},
        id: '6',
        nickname: 'سپیده اخلاقی',
        instagramId: 'sssepii',
        profilePhotoSrc: 'assets/mock/profile-photos/6.jpg',
        rate: 2.5,
        category: BusinessValue.Beauty,
        fee: [
          {name: 'ready_story', value: 800000, currency: 'IRT', description: 'معرفی با استوری آماده'},
          {
            name: 'content_create_story',
            value: 1200000,
            currency: 'IRT',
            description: 'تولید محتوا جهت معرفی با استوری',
          },
          {
            name: 'text_story_series',
            value: 1400000,
            currency: 'IRT',
            description: 'معرفی کسب و کار با توضیحات کتبی و استوری سریالی',
          },
          {
            name: 'gift_story_series',
            value: 1600000,
            currency: 'IRT',
            description: 'معرفی با گیفت ارسالی شما و استوری سریالی',
          },
          {name: 'post_reels', value: 2000000, currency: 'IRT', description: 'معرفی با استوری سریالی و پست یا ریلز'},
          {name: 'in_person', value: 1900000, currency: 'IRT', description: 'معرفی حضوری در محل کسب و کار شما'},
        ],
        feeNotes: 'در صورت عودت محصول، به این مبالغ ۵۰۰ هزار تومان اضافه می‌شود.',
      },
    ];
    const influencer: InfluencerDetail | undefined = influencerListDetailMock.find(
      (influencerDetail: InfluencerDetail): boolean => {
        return influencerDetail.id === id;
      },
    );
    console.log('getting getMockInfluencerDetailDetailsById from backend...');
    if (influencer) return influencer;
    throw new Error('influencer doesnt find');
  }
}
