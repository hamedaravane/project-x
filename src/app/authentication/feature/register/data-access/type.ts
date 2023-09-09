export interface User {
  userType: 'influencer' | 'business';
  email: string;
  password: string;
  businessName: string;
  instagramUsername: string;
  twitterUsername: string;
  persianFirstName: string;
  englishFirstName: string;
  persianLastName: string;
  englishLastName: string;
  phoneNumber: string;
  nationalIdNumber: string;
}

export interface UserBasicInfo {
  email: string;
  password: string;
}

export interface UserDetailedInfo {
  businessName: string;
  instagramUsername: string;
  twitterUsername: string;
  persianFirstName: string;
  englishFirstName: string;
  persianLastName: string;
  englishLastName: string;
  phoneNumber: string;
  nationalIdNumber: string;
}
