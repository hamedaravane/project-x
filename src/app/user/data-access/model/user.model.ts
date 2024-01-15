import {IndustryEnum, ProfessionEnum} from '@shared/data-access/models/category.model';

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

interface CommonRegistrationDetailForm {
  instagramAccount: string;
  mobilePhoneNumber: string;
  address: string | null;
  city: string;
}

interface OptionalRegistrationDetailForm {
  nationalIdNumber?: string;
  nationalRegistrationCode?: string;
  twitterAccount?: string;
  maritalStatus?: MaritalStatus;
  country?: string;
  state?: string;
  homePhoneNumber?: string;
  postalCode?: string;
}

interface BusinessRegistrationDetailForm {
  userType: UserType.BUSINESS;
  persianBusinessName: string;
  englishBusinessName: string;
  businessIndustry: IndustryEnum;
}

interface InfluencerRegistrationDetailForm {
  userType: UserType.INFLUENCER;
  persianInfluencerName: string;
  persianInfluencerLastName: string;
  englishInfluencerName: string;
  englishInfluencerLastName: string;
  birthDate: Date;
  gender: Gender;
  influencerType: ProfessionEnum;
}

type SpecialDetailRegistrationProperty = BusinessRegistrationDetailForm | InfluencerRegistrationDetailForm;

export type DetailRegistrationForm =
  CommonRegistrationDetailForm
  & OptionalRegistrationDetailForm
  & SpecialDetailRegistrationProperty;

export type CombinedRegistrationForm =
  UserAuthInfo
  & CommonRegistrationDetailForm
  & OptionalRegistrationDetailForm
  & SpecialDetailRegistrationProperty;

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

export function combineRegistrationProperties (
  authInfo: UserAuthInfo,
  detailedInfoRegistration: DetailRegistrationForm,
): CombinedRegistrationForm {
  switch (detailedInfoRegistration.userType) {
    case UserType.INFLUENCER:
      return {
        userType: UserType.INFLUENCER,
        email: authInfo.email,
        password: authInfo.password,
        persianInfluencerName: detailedInfoRegistration.persianInfluencerName,
        persianInfluencerLastName: detailedInfoRegistration.persianInfluencerLastName,
        englishInfluencerName: detailedInfoRegistration.englishInfluencerName,
        englishInfluencerLastName: detailedInfoRegistration.englishInfluencerLastName,
        birthDate: detailedInfoRegistration.birthDate,
        gender: detailedInfoRegistration.gender,
        instagramAccount: detailedInfoRegistration.instagramAccount,
        twitterAccount: detailedInfoRegistration.twitterAccount,
        influencerType: detailedInfoRegistration.influencerType,
        nationalIdNumber: detailedInfoRegistration.nationalIdNumber,
        nationalRegistrationCode: detailedInfoRegistration.nationalRegistrationCode,
        maritalStatus: detailedInfoRegistration.maritalStatus,
        country: detailedInfoRegistration.country,
        state: detailedInfoRegistration.state,
        city: detailedInfoRegistration.city,
        mobilePhoneNumber: detailedInfoRegistration.mobilePhoneNumber,
        homePhoneNumber: detailedInfoRegistration.homePhoneNumber,
        address: detailedInfoRegistration.address,
        postalCode: detailedInfoRegistration.postalCode,
      };
    case UserType.BUSINESS:
      return {
        userType: UserType.BUSINESS,
        email: authInfo.email,
        password: authInfo.password,
        persianBusinessName: detailedInfoRegistration.persianBusinessName,
        englishBusinessName: detailedInfoRegistration.englishBusinessName,
        businessIndustry: detailedInfoRegistration.businessIndustry,
        instagramAccount: detailedInfoRegistration.instagramAccount,
        twitterAccount: detailedInfoRegistration.twitterAccount,
        nationalIdNumber: detailedInfoRegistration.nationalIdNumber,
        nationalRegistrationCode: detailedInfoRegistration.nationalRegistrationCode,
        country: detailedInfoRegistration.country,
        state: detailedInfoRegistration.state,
        city: detailedInfoRegistration.city,
        address: detailedInfoRegistration.address,
        maritalStatus: detailedInfoRegistration.maritalStatus,
        mobilePhoneNumber: detailedInfoRegistration.mobilePhoneNumber,
        homePhoneNumber: detailedInfoRegistration.homePhoneNumber,
        postalCode: detailedInfoRegistration.postalCode,
      };
  }
}

interface CommonCreateUserDtoProperties {
  instagram_account: string;
  mobile_phone_number: string;
  address: string | null;
  city: string;
}

interface OptionalCreateUserDtoProperties {
  national_id_number?: string;
  national_registration_code?: string;
  twitter_account?: string;
  marital_status?: MaritalStatus;
  country?: string;
  state?: string;
  home_phone_number?: string;
  postal_code?: string;
}

interface BusinessCreateUserDtoProperties {
  user_type: UserType.BUSINESS;
  persian_business_name: string;
  english_business_name: string;
  business_industry: IndustryEnum;

  persian_first_name: null;
  persian_last_name: null;
  first_name: null;
  last_name: null;
  birth_date: null;
  gender: null;
  influencer_type: null;
}

interface InfluencerCreateUserDtoProperties {
  user_type: UserType.INFLUENCER;
  persian_first_name: string;
  persian_last_name: string;
  first_name: string;
  last_name: string;
  birth_date: Date;
  gender: Gender;
  influencer_type: ProfessionEnum;

  persian_business_name: null;
  english_business_name: null;
  business_industry: null;
}

type SpecialCreateUserDtoProperty = BusinessCreateUserDtoProperties | InfluencerCreateUserDtoProperties;

export type CreateUserDto =
  UserAuthInfo
  & CommonCreateUserDtoProperties
  & OptionalCreateUserDtoProperties
  & SpecialCreateUserDtoProperty;

export function combinedFormDataToCreateUserDto(registrationForm: CombinedRegistrationForm): CreateUserDto {
  switch (registrationForm.userType) {
    case UserType.INFLUENCER:
      return {
        email: registrationForm.email,
        password: registrationForm.password,
        user_type: UserType.INFLUENCER,
        influencer_type: registrationForm.influencerType,
        instagram_account: registrationForm.instagramAccount,
        mobile_phone_number: registrationForm.mobilePhoneNumber,
        address: registrationForm.address,
        city: registrationForm.city,
        national_id_number: registrationForm.nationalIdNumber,
        national_registration_code: registrationForm.nationalRegistrationCode,
        twitter_account: registrationForm.twitterAccount,
        marital_status: registrationForm.maritalStatus,
        country: registrationForm.country,
        state: registrationForm.state,
        home_phone_number: registrationForm.homePhoneNumber,
        postal_code: registrationForm.postalCode,
        persian_first_name: registrationForm.persianInfluencerName,
        persian_last_name: registrationForm.persianInfluencerLastName,
        first_name: registrationForm.englishInfluencerName,
        last_name: registrationForm.englishInfluencerLastName,
        birth_date: registrationForm.birthDate,
        gender: registrationForm.gender,
        persian_business_name: null,
        english_business_name: null,
        business_industry: null,
      };
    case UserType.BUSINESS:
      return {
        email: registrationForm.email,
        password: registrationForm.password,
        user_type: UserType.BUSINESS,
        instagram_account: registrationForm.instagramAccount,
        mobile_phone_number: registrationForm.mobilePhoneNumber,
        address: registrationForm.address,
        city: registrationForm.city,
        national_id_number: registrationForm.nationalIdNumber,
        national_registration_code: registrationForm.nationalRegistrationCode,
        twitter_account: registrationForm.twitterAccount,
        marital_status: registrationForm.maritalStatus,
        country: registrationForm.country,
        state: registrationForm.state,
        home_phone_number: registrationForm.homePhoneNumber,
        postal_code: registrationForm.postalCode,
        persian_first_name: null,
        persian_last_name: null,
        first_name: null,
        last_name: null,
        birth_date: null,
        gender: null,
        influencer_type: null,
        persian_business_name: registrationForm.persianBusinessName,
        english_business_name: registrationForm.englishBusinessName,
        business_industry: registrationForm.businessIndustry,
      };
  }
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
