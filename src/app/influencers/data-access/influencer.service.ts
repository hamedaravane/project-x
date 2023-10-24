import {Injectable, inject} from '@angular/core';
import {InfluencerDataService} from '@influencers/data-access/influencer.data.service';
import {InfluencerDetail, InfluencerSummary} from '@influencers/data-access/model/filter-sort.model';
import {CacheService} from '@cache/cache.service';
import {BehaviorSubject, Observable, firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfluencerService {
  private readonly influencerDataService: InfluencerDataService = inject(InfluencerDataService);
  private readonly influencerSummaryListSubject = new BehaviorSubject([] as InfluencerSummary[]);
  private readonly influencerSummaryListLoadingSubject = new BehaviorSubject<boolean>(false);
  private readonly selectedInfluencerSubject$ = new BehaviorSubject<InfluencerDetail>({} as InfluencerDetail);
  private readonly cacheService: CacheService = inject(CacheService);
  get influencerSummaryList$(): Observable<InfluencerSummary[]> {
    return this.influencerSummaryListSubject.asObservable();
  }
  getInfluencerSummaryList(cache = false): void {
    this._getInfluencerSummaryList(cache).then();
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
  get influencerSummaryListLoading$(): Observable<boolean> {
    return this.influencerSummaryListLoadingSubject.asObservable();
  }
  set influencerSummaryListLoading$(value: boolean) {
    this.influencerSummaryListLoadingSubject.next(value);
  }
  private async _getInfluencerSummaryList(cache: boolean): Promise<void> {
    let response!: InfluencerSummary[];
    if (this.cacheService.get('InfluencerSummaryList') && cache) {
      response = this.cacheService.get('InfluencerSummaryList') as InfluencerSummary[];
    } else {
      this.influencerSummaryListLoading$ = true;
      response = await firstValueFrom(this.influencerDataService.getMockInfluencerSummaryList());
      this.cacheService.set<InfluencerSummary[]>('InfluencerSummaryList', response);
      setTimeout(() => {
        this.influencerSummaryListLoading$ = false;
      }, 3000);
    }
    this.influencerSummaryListSubject.next(response);
  }
}
