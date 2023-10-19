import {currencyHelper} from '@shared/util/utility-functions/currency-helper';
import {readableNumbers} from '@shared/util/utility-functions/readable-numbers';

export interface CollaborationDto {
  collaboration_id: number;
  collaboration_item: string;
  charge_value: number;
  charge_iso_code_currency: string;
  status: string;
  collaboration_date: string;
  your_rate: number | null;
  profile_photo_src: string | null;
  first_name: string;
  last_name: string;
  nick_name: string;
  collaborator_id: number;
  is_favourite: boolean;
}

export interface CollaborationModel {
  collaborationId: number;
  collaborationItem: CollaborationItem;
  chargeDetail: ChargeDetail;
  status: string;
  collaborationDate: string;
  yourRate: number | null;
  profilePhotoSrc: string | null;
  firstName: string;
  lastName: string;
  nickName: string;
  collaboratorId: number;
  isFavourite: boolean;
}

export type CollaborationItemName =
  | 'ready_story'
  | 'content_create_story'
  | 'text_story_series'
  | 'gift_story_series'
  | 'post_reels'
  | 'in_person';

export type CollaborationItemDescription =
  | 'معرفی با استوری آماده'
  | 'تولید محتوا جهت معرفی با استوری'
  | 'معرفی کسب و کار با توضیحات کتبی و استوری سریالی'
  | 'معرفی با گیفت ارسالی شما و استوری سریالی'
  | 'معرفی با استوری سریالی و پست یا ریلز'
  | 'معرفی حضوری در محل کسب و کار شما';

export type CollaborationItemIcon =
  | 'fa-rectangle-vertical'
  | 'fa-layer-plus'
  | 'fa-align-left'
  | 'fa-gifts'
  | 'fa-photo-film'
  | 'fa-store';

export interface CollaborationItem {
  name: CollaborationItemName;
  description: CollaborationItemDescription;
  icon: CollaborationItemIcon;
}

export interface ChargeDetail {
  value: number;
  readableValue: string;
  isoCodeCurrency: string;
  currency: string;
}

export function generateCollaborationItem(value: CollaborationItemName): CollaborationItem {
  const description: Record<CollaborationItemName, CollaborationItemDescription> = {
    ready_story: 'معرفی با استوری آماده',
    content_create_story: 'تولید محتوا جهت معرفی با استوری',
    text_story_series: 'معرفی کسب و کار با توضیحات کتبی و استوری سریالی',
    gift_story_series: 'معرفی با گیفت ارسالی شما و استوری سریالی',
    post_reels: 'معرفی با استوری سریالی و پست یا ریلز',
    in_person: 'معرفی حضوری در محل کسب و کار شما',
  };
  const icon: Record<CollaborationItemName, CollaborationItemIcon> = {
    ready_story: 'fa-rectangle-vertical',
    content_create_story: 'fa-layer-plus',
    text_story_series: 'fa-align-left',
    gift_story_series: 'fa-gifts',
    post_reels: 'fa-photo-film',
    in_person: 'fa-store',
  };
  return {name: value, description: description[value], icon: icon[value]};
}

export function toChargeDetail(value: number, isoCodeCurrency: string): ChargeDetail {
  return {
    value: value,
    isoCodeCurrency: isoCodeCurrency,
    readableValue: readableNumbers(value),
    currency: currencyHelper(isoCodeCurrency),
  };
}

export function collaborationItemDtoToDomain(value: CollaborationDto): CollaborationModel {
  return {
    collaborationId: value.collaboration_id,
    collaborationItem: generateCollaborationItem(value.collaboration_item as CollaborationItemName),
    chargeDetail: toChargeDetail(value.charge_value, value.charge_iso_code_currency),
    status: value.status,
    collaborationDate: value.collaboration_date,
    yourRate: value.your_rate,
    profilePhotoSrc: value.profile_photo_src,
    firstName: value.first_name,
    lastName: value.last_name,
    nickName: value.nick_name,
    collaboratorId: value.collaborator_id,
    isFavourite: value.is_favourite,
  };
}
