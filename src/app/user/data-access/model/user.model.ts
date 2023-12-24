export interface UserBasicInfo {
  email: string;
  password: string;
}
export interface InfluencerDetailInfo {
  persianName: string;
  persianLastName: string;
  name: string;
  lastName: string;
  birthDate: Date;
  gender: Gender;
  type: string;
  instagramAccount: string;
  twitterAccount: string;
  country?: string;
  state?: string;
  city: string;
  mobilePhoneNumber: string;
  homePhoneNumber?: string;
}
export interface UserEntity {
  uuid: string;
  email: string;
  password: string;
  type: UserType;
  firstName: string;
  lastName: string;
  persianFirstName: string;
  persianLastName: string;
  nationalIdNumber: string;
  nationalRegistrationCode: string;
  birthDate: Date;
  instagramUsername: string;
  twitterUsername: string;
  gender: Gender;
  maritalStatus: MaritalStatus;
  mobilePhoneNumber: string;
  homePhoneNumber: string;
  countryResidence: string;
  stateResidence: string;
  cityResidence: string;
  addressResidence: string;
  postalCode: string;
  businessName: string;
  businessInstagramUsername: string;
  businessTwitterUsername: string;
}

export interface UserEntityDto {
  uuid: string;
  email: string;
  password: string;
  user_type: UserType;
  first_name: string;
  last_name: string;
  persian_first_name: string;
  persian_last_name: string;
  national_id_number: string;
  national_registration_code: string;
  date_of_birth: Date;
  instagram_username: string;
  twitter_username: string;
  gender: Gender;
  marital_status: MaritalStatus;
  mobile_phone_number: string;
  country_of_residence: string;
  state_of_residence: string;
  city_of_residence: string;
  address_of_residence: string;
  postal_code: string;
  business_name: string;
  business_instagram_username: string;
  business_twitter_username: string;
}

export enum UserType {
  BUSINESS = 'business',
  INFLUENCER = 'influencer',
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export enum MaritalStatus {
  MARRIED = 'married',
  SINGLE = 'single',
  DIVORCED = 'divorced',
  WIDOWED = 'widowed',
}

export interface UserDto {
  id: number;
  type: string;
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

export interface User {
  id: number;
  type: UserTypeDetail;
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

export interface SideMenuOption {
  title: string;
  icon: string;
  url: string;
}

export interface UserTypeDetail {
  value: UserType;
  label: string;
}

function addUserTypeDetail(value: string): UserTypeDetail {
  if (!value) {
    throw new Error('User type is not fetched or undefined');
  }
  const labels: Record<string, string> = {
    business: 'کسب و کار',
    influencer: 'تولید کننده محتوا',
  };
  return {value, label: labels[value]} as UserTypeDetail;
}

export function userDtoToDomain(value: UserDto): User {
  return {
    id: value.id,
    type: addUserTypeDetail(value.type),
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
