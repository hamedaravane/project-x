import {BusinessValue, IndustryValue} from '@shared/data-access/models/category.model';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  standalone: true,
  name: 'typeToIcon',
})
export class TypeToIconPipe implements PipeTransform {
  transform(value: string, arg?: string): string {
    const typeIcons: Record<string, string> = {
      ready_story: 'fa-rectangle-vertical',
      content_create_story: 'fa-layer-plus',
      text_story_series: 'fa-align-left',
      gift_story_series: 'fa-gifts',
      post_reels: 'fa-photo-film',
      in_person: 'fa-store',
    };
    const iconStyle = 'fa fa-solid ';
    const icon = iconStyle + typeIcons[value] + (arg ? ' ' : '');
    return icon + (arg ?? '');
  }
}
