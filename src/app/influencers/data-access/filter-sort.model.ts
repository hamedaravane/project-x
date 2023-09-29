import {BusinessValue} from '@shared/data-access/models/category.model';

export enum SortOption {
  rate = 'Rate',
  category = 'Category',
  name = 'Name',
  fee = 'Fee',
}

export enum SortOrder {
  ascending,
  descending,
}

export interface FilterSort {
  sortOption: SortOption | null;
  sortOrder: SortOrder;
  filterCategory: BusinessValue | null;
}

export interface InfluencerSummary {
  id: string;
  nickname: string;
  instagramId: string;
  profilePhotoSrc: string;
  rate: number;
  category: BusinessValue;
}

export interface ContactInfo {
  telegramId: string | null;
  phoneNumber: string | null;
  whatsApp: string | null;
}

export interface InstagramFee {
  story: number;
  postPhoto: number;
  postSlides: number;
  reel: number;
  photoShoot: number;
  videoEdit: number;
}

export interface InfluencerDetail {
  id: string;
  nickname: string;
  persianName: string;
  persianLastName: string;
  englishName: string;
  englishLastName: string;
  instagramId: string;
  profilePhotoSrc: string;
  rate: number;
  category: BusinessValue;
  description: string;
  city: string;
  contactInfo: ContactInfo;
  fee: InstagramFee;
}
