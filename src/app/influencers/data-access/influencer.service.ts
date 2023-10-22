import {Injectable, inject} from '@angular/core';
import {InfluencerDataService} from '@influencers/data-access/influencer.data.service';
import {InfluencerDetail, InfluencerSummary} from '@influencers/data-access/model/filter-sort.model';
import {BehaviorSubject, Observable, firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfluencerService {
  private readonly influencerDataService: InfluencerDataService = inject(InfluencerDataService);
  private readonly influencerSummaryListSubject = new BehaviorSubject([] as InfluencerSummary[]);
  private readonly selectedInfluencerSubject$ = new BehaviorSubject<InfluencerDetail>({} as InfluencerDetail);
  get influencerSummaryList$(): Observable<InfluencerSummary[]> {
    return this.influencerSummaryListSubject.asObservable();
  }
  set influencerSummaryList$(value: InfluencerSummary[]) {
    this.influencerSummaryListSubject.next(value);
  }
  getInfluencerSummaryList(): void {
    this._getInfluencerSummaryList().then();
  }
  getInfluencerDetailsById(id: string | null): InfluencerDetail {
    return this.influencerDataService.getMockInfluencerDetailDetailsById(id);
  }
  get selectedInfluencer$(): Observable<InfluencerDetail | null> {
    return this.selectedInfluencerSubject$.asObservable();
  }
  set selectedInfluencer$(value: InfluencerDetail) {
    this.selectedInfluencerSubject$.next(value);
  }
  private async _getInfluencerSummaryList(): Promise<void> {
    const response = await firstValueFrom(this.influencerDataService.getMockInfluencerSummaryList());
    this.influencerSummaryListSubject.next(response);
  }
}
