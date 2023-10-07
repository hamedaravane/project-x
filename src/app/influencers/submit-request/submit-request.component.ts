import {Observable} from 'rxjs';
import {PurpleDate} from '@shared/data-access/models/date.model';
import {PurpleDatePickerComponent} from '@shared/ui/purple-date-picker/purple-date-picker.component';
import {ToCurrencyPipe} from '@shared/util/to-currency.pipe';
import {NzAlertModule} from 'ng-zorro-antd/alert';
import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {InfluencerService} from '../data-access/influencer.service';
import {FeeDetail, InfluencerDetail} from '../data-access/model/filter-sort.model';
import {TypeToIconPipe} from '../data-access/util/type-to-icon.pipe';

@Component({
  standalone: true,
  selector: 'app-submit-request',
  templateUrl: './submit-request.component.html',
  styleUrls: ['./submit-request.component.scss'],
  imports: [
    NgIf,
    AsyncPipe,
    NgOptimizedImage,
    NzAlertModule,
    NgForOf,
    ToCurrencyPipe,
    TypeToIconPipe,
    FormsModule,
    PurpleDatePickerComponent,
  ],
})
export class SubmitRequestComponent {
  private readonly influencerService: InfluencerService = inject(InfluencerService);
  selectedInfluencer$: Observable<InfluencerDetail | null> = this.influencerService.selectedInfluencer$;
  selectedItem: boolean[] = new Array<boolean>(6).fill(false);
  selectedDate: (PurpleDate | null)[] = new Array<PurpleDate | null>(6).fill(null);

  selectItem(item: FeeDetail, index: number): void {
    this.selectedItem[index] = !this.selectedItem[index];
    if (!this.selectedItem[index]) {
      this.selectedDate[index] = null;
    }
  }
}
