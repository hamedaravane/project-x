import {PurpleDate} from '@date/data-access/model/date.model';

export enum UserType {
  BUSINESS = 'business',
  INFLUENCER = 'influencer',
}

export enum UserTypeLabel {
  BUSINESS = 'کسب و کار',
  INFLUENCER = 'تولید کننده محتوا',
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  NON_BINARY = 'nonBinary',
}

export enum MaritalStatus {
  MARRIED = 'married',
  SINGLE = 'single',
  DIVORCED = 'divorced',
  WIDOWED = 'widowed',
}

/**
 * @description username and password of user
 * @author Hamed Arghavan
 */
export interface UserAuthInfo {
  email: string;
  password: string;
}
/**
 * @description used for more complete user info
 * @author Hamed Arghavan
 */
export interface InfluencerRegistrationForm {
  name: string;
  lastName: string;
  persianName: string;
  persianLastName: string;
  birthDate: Date;
  gender: Gender;
  influencerType: string;
  instagramAccount: string;
  twitterAccount: string | null;
  country: string | null;
  state: string | null;
  city: string;
  mobilePhoneNumber: string;
  homePhoneNumber: string | null;
}
/**
 * @description raw value of form group for influencer form
 * @author Hamed Arghavan
 */
export interface InfluencerFormRawValue {
  persianInfluencerName: string | null;
  persianInfluencerLastName: string | null;
  englishInfluencerName: string | null;
  englishInfluencerLastName: string | null;
  birthDate: PurpleDate | null;
  gender: Gender | null;
  influencerType: string | null;
  instagramAccount: string | null;
  twitterAccount: string | null;
  influencerCity: any | null;
  mobilePhoneNumber: string | null;
}
/**
 * @convert influencer form controls into registration form
 * @param {InfluencerFormRawValue} rawValue
 * @return {InfluencerRegistrationForm}
 * @author Hamed Arghavan
 */
export function influencerFormRawValueToInfluencerDetailInfo(
  rawValue: InfluencerFormRawValue,
): InfluencerRegistrationForm {
  return {
    persianName: rawValue.persianInfluencerName as string,
    persianLastName: rawValue.persianInfluencerLastName as string,
    name: rawValue.englishInfluencerName as string,
    lastName: rawValue.englishInfluencerLastName as string,
    birthDate: rawValue.birthDate?.gregorianDate as Date,
    gender: rawValue.gender as Gender,
    influencerType: rawValue.influencerType as string,
    instagramAccount: rawValue.instagramAccount as string,
    twitterAccount: rawValue.twitterAccount as string,
    country: null,
    state: null,
    city: rawValue.influencerCity,
    mobilePhoneNumber: rawValue.mobilePhoneNumber as string,
    homePhoneNumber: null,
  };
}
export interface CombinedRegistrationForms {
  email: string;
  password: string;
  userType: UserType;
  firstName: string;
  lastName: string;
  persianFirstName: string;
  persianLastName: string;
  nationalIdNumber: string | null;
  nationalRegistrationCode: string | null;
  birthDate: Date;
  instagramUsername: string;
  twitterUsername: string | null;
  gender: Gender;
  maritalStatus: MaritalStatus | null;
  mobilePhoneNumber: string;
  homePhoneNumber: string | null;
  countryResidence: string | null;
  stateResidence: string | null;
  cityResidence: string;
  addressResidence: string | null;
  postalCode: string | null;
  businessName: string | null;
  businessInstagramUsername: string | null;
  businessTwitterUsername: string | null;
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

export function combineInfluencerInfo(
  userType: UserTypeDetail,
  authInfo: UserAuthInfo,
  registrationForm: InfluencerRegistrationForm,
): CombinedRegistrationForms {
  return {
    email: authInfo.email,
    password: authInfo.password,
    userType: userType.value,
    firstName: registrationForm.name,
    lastName: registrationForm.lastName,
    persianFirstName: registrationForm.persianName,
    persianLastName: registrationForm.persianLastName,
    nationalIdNumber: null,
    nationalRegistrationCode: null,
    birthDate: registrationForm.birthDate,
    instagramUsername: registrationForm.instagramAccount,
    twitterUsername: registrationForm.twitterAccount || null,
    gender: registrationForm.gender,
    maritalStatus: null,
    mobilePhoneNumber: registrationForm.mobilePhoneNumber,
    homePhoneNumber: null,
    countryResidence: null,
    stateResidence: registrationForm.state,
    cityResidence: registrationForm.city,
    addressResidence: null,
    postalCode: null,
    businessName: null,
    businessInstagramUsername: null,
    businessTwitterUsername: null,
  };
}

export function combinedFormDataToCreateUserDto(data: CombinedRegistrationForms): CreateUserDto {
  return {
    email: data.email,
    password: data.password,
    type: data.userType,
    first_name: data.firstName,
    last_name: data.lastName,
    persian_first_name: data.persianFirstName,
    persian_last_name: data.persianLastName,
    national_id_number: data.nationalIdNumber,
    national_registration_code: data.nationalRegistrationCode,
    date_of_birth: data.birthDate,
    instagram_username: data.instagramUsername,
    twitter_username: data.businessTwitterUsername,
    gender: data.gender,
    marital_status: data.maritalStatus,
    mobile_phone_number: data.mobilePhoneNumber,
    country_of_residence: data.countryResidence,
    state_of_residence: data.stateResidence,
    city_of_residence: data.cityResidence,
    address_of_residence: data.addressResidence,
    postal_code: data.postalCode,
    business_name: data.businessName,
    business_instagram_username: data.businessInstagramUsername,
    business_twitter_username: data.businessTwitterUsername,
  };
}

export interface CreateUserDto {
  email: string;
  password: string;
  type: UserType;
  first_name: string;
  last_name: string;
  persian_first_name: string;
  persian_last_name: string;
  national_id_number: string | null;
  national_registration_code: string | null;
  date_of_birth: Date;
  instagram_username: string;
  twitter_username: string | null;
  gender: Gender;
  marital_status: MaritalStatus | null;
  mobile_phone_number: string;
  country_of_residence: string | null;
  state_of_residence: string | null;
  city_of_residence: string;
  address_of_residence: string | null;
  postal_code: string | null;
  business_name: string | null;
  business_instagram_username: string | null;
  business_twitter_username: string | null;
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
  label: UserTypeLabel;
}

function addUserTypeDetail(value: string): UserTypeDetail {
  if (!value) {
    throw new Error('User type is not fetched or undefined');
  }
  const labels: Record<string, string> = {
    business: UserTypeLabel.BUSINESS,
    influencer: UserTypeLabel.INFLUENCER,
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
