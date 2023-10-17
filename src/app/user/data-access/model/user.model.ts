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
  englishBusinessName?: string;
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

export interface UserDto {
  id: number;
  type: userType;
  first_name: string;
  last_name: string;
  nick_name: string | null;
  english_first_name: string | null;
  english_last_name: string | null;
  profile_photo_src: string | null;
  persian_business_name: string;
  english_business_name: string | null;
  instagram_id: string;
  email_address: string;
  business_industry: string;
  business_city: string;
  mobile_phone_number: string;
  business_address: string;
}

export function userDtoToDomain(value: UserDto): User {
  return {
    id: value.id,
    type: value.type,
    firstName: value.first_name,
    lastName: value.last_name,
    nickName: value.nick_name || undefined,
    englishFirstName: value.english_first_name || undefined,
    englishLastName: value.english_last_name || undefined,
    profilePhotoSrc: value.profile_photo_src || undefined,
    persianBusinessName: value.persian_business_name,
    englishBusinessName: value.english_business_name || undefined,
    instagramAccountId: value.instagram_id,
    emailAddress: value.email_address,
    businessIndustry: value.business_industry,
    businessCity: value.business_city,
    mobilePhoneNumber: value.mobile_phone_number,
    businessAddress: value.business_address,
  };
}
