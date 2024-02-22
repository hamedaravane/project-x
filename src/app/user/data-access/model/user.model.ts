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
  uuid: string;
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
  const uuid = crypto.randomUUID();
  switch (registrationForm.userType) {
    case UserType.INFLUENCER:
      return {
        uuid,
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
        uuid,
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

export type UserEntity = CommonUserEntityProperties & (InfluencerUserEntityProperties | BusinessUserEntityProperties);
export type UserDto = CommonUserDtoProperties & (InfluencerUserDtoProperties | BusinessUserDtoProperties);

export function userEntityToDto(data: UserEntity): UserDto {
  switch (data.type) {
    case UserType.INFLUENCER:
      return {
        uuid: data.uuid,
        email: data.email,
        profile_photo_src: data.profilePhotoSrc,
        mobile_phone_number: data.mobilePhoneNumber,
        country: data.country,
        state: data.state,
        city: data.city,
        address: data.address,
        postal_code: data.postalCode,
        type: UserType.INFLUENCER,
        influencer_type: data.influencerType,
        first_name: data.firstName,
        last_name: data.lastName,
        persian_first_name: data.persianFirstName,
        persian_last_name: data.persianLastName,
        national_id_number: data.nationalIdNumber,
        national_registration_code: data.nationalRegistrationCode,
        birth: data.birth,
        instagram_username: data.instagramUsername,
        twitter_username: data.twitterUsername,
        gender: data.gender,
        maritalStatus: data.maritalStatus,
      };
    case UserType.BUSINESS:
      return {
        uuid: data.uuid,
        email: data.email,
        profile_photo_src: data.profilePhotoSrc,
        mobile_phone_number: data.mobilePhoneNumber,
        country: data.country,
        state: data.state,
        city: data.city,
        address: data.address,
        postal_code: data.postalCode,
        type: UserType.BUSINESS,
        business_type: data.businessType,
        business_name: data.businessName,
        persian_business_name: data.persianBusinessName,
        business_instagram_username: data.businessInstagramUsername,
        business_twitter_username: data.businessTwitterUsername
      };
  }
}
export function userDtoToEntity(data: UserDto): UserEntity {
  switch (data.type) {
    case UserType.INFLUENCER:
      return {
        uuid: data.uuid,
        typeLabel: UserTypeLabel.INFLUENCER,
        email: data.email,
        profilePhotoSrc: data.profile_photo_src,
        mobilePhoneNumber: data.mobile_phone_number,
        country: data.country,
        state: data.state,
        city: data.city,
        address: data.address,
        postalCode: data.postal_code,
        type: UserType.INFLUENCER,
        influencerType: data.influencer_type,
        firstName: data.first_name,
        lastName: data.last_name,
        persianFirstName: data.persian_first_name,
        persianLastName: data.persian_last_name,
        nationalIdNumber: data.national_id_number,
        nationalRegistrationCode: data.national_registration_code,
        birth: data.birth,
        instagramUsername: data.instagram_username,
        twitterUsername: data.twitter_username,
        gender: data.gender,
        maritalStatus: data.maritalStatus,
      };
    case UserType.BUSINESS:
      return {
        uuid: data.uuid,
        email: data.email,
        profilePhotoSrc: data.profile_photo_src,
        mobilePhoneNumber: data.mobile_phone_number,
        country: data.country,
        state: data.state,
        city: data.city,
        address: data.address,
        postalCode: data.postal_code,
        type: UserType.BUSINESS,
        typeLabel: UserTypeLabel.BUSINESS,
        persianBusinessName: data.persian_business_name,
        businessType: data.business_type,
        businessName: data.business_name,
        businessInstagramUsername: data.business_instagram_username,
        businessTwitterUsername: data.business_twitter_username
      };
  }
}
export interface SideMenuOption {
  id: number;
  title: string;
  icon: string;
  url: string;
}
export interface UserTypeDetail {
  value: UserType;
  label: UserTypeLabel;
}
interface CommonUserEntityProperties {
  uuid: string;
  email: string;
  profilePhotoSrc: string;
  mobilePhoneNumber: string;
  country: string;
  state: string;
  city: string;
  address: string;
  postalCode: string;
}
interface InfluencerUserEntityProperties {
  type: UserType.INFLUENCER;
  typeLabel: UserTypeLabel.INFLUENCER;
  influencerType: ProfessionEnum;
  firstName: string;
  lastName: string;
  persianFirstName: string;
  persianLastName: string;
  nationalIdNumber: string;
  nationalRegistrationCode: string;
  birth: Date;
  instagramUsername: string;
  twitterUsername: string;
  gender: Gender;
  maritalStatus: MaritalStatus;
}
interface BusinessUserEntityProperties {
  type: UserType.BUSINESS;
  typeLabel: UserTypeLabel.BUSINESS;
  businessType: IndustryEnum;
  businessName: string;
  persianBusinessName: string;
  businessInstagramUsername: string;
  businessTwitterUsername: string;
}
interface CommonUserDtoProperties {
  uuid: string;
  email: string;
  profile_photo_src: string;
  mobile_phone_number: string;
  country: string;
  state: string;
  city: string;
  address: string;
  postal_code: string;
}
interface InfluencerUserDtoProperties {
  type: UserType.INFLUENCER;
  influencer_type: ProfessionEnum;
  first_name: string;
  last_name: string;
  persian_first_name: string;
  persian_last_name: string;
  national_id_number: string;
  national_registration_code: string;
  birth: Date;
  instagram_username: string;
  twitter_username: string;
  gender: Gender;
  maritalStatus: MaritalStatus;
}
interface BusinessUserDtoProperties {
  type: UserType.BUSINESS;
  business_type: IndustryEnum;
  business_name: string;
  persian_business_name: string;
  business_instagram_username: string;
  business_twitter_username: string;
}
