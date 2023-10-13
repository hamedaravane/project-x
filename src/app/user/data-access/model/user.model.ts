export interface User {
  id: number;
  type: userType;
  firstName: string;
  lastName: string;
  nickName?: string;
  englishFirstName?: string;
  englishLastName?: string;
  profilePhotoSrc?: string;
  persianBusinessName: string;
  englishBusinessName: string;
  instagramAccountId: string;
  emailAddress: string;
  businessIndustry: string;
  businessCity: string;
  mobilePhoneNumber: string;
  businessAddress: string;
}

type userType = 'influencer' | 'business';

export interface SideMenuOption {
  title: string;
  icon: string;
  url: string;
}
