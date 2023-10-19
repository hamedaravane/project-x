import {NgForOf, NgOptimizedImage} from '@angular/common';
import {Component, OnInit, inject} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {CitiesListService} from '@shared/data-access/cities-list.service';
import {CategoryToIconPipe} from '@shared/util/pipes/category-to-icon.pipe';
import {CategoryToLabelPipe} from '@shared/util/pipes/category-to-label.pipe';
import {PersianDigitPipe} from '@shared/util/pipes/persian-digit.pipe';
import {ToCurrencyPipe} from '@shared/util/pipes/to-currency.pipe';
import {NzAlertModule} from 'ng-zorro-antd/alert';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {feeDetailAnimation} from 'src/app/influencers/data-access/animations/animations';
import {InfluencerService} from 'src/app/influencers/data-access/influencer.service';
import {InfluencerDetail} from 'src/app/influencers/data-access/model/filter-sort.model';
import {TypeToIconPipe} from 'src/app/influencers/data-access/util/type-to-icon.pipe';

@Component({
  standalone: true,
  selector: 'app-influencer-detail',
  templateUrl: './influencer-detail.component.html',
  styleUrls: ['./influencer-detail.component.scss'],
  imports: [
    NgOptimizedImage,
    RouterOutlet,
    CategoryToLabelPipe,
    CategoryToIconPipe,
    PersianDigitPipe,
    ToCurrencyPipe,
    NgForOf,
    TypeToIconPipe,
    NzAlertModule,
    NzButtonModule,
  ],
  animations: [feeDetailAnimation],
})
export class InfluencerDetailComponent implements OnInit {
  private readonly router: Router = inject(Router);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly influencerService: InfluencerService = inject(InfluencerService);
  private readonly citiesListService: CitiesListService = inject(CitiesListService);
  influencerId: string | null = this.route.snapshot.paramMap.get('id');
  influencer!: InfluencerDetail;

  ngOnInit(): void {
    const influencerDetails: InfluencerDetail = this.influencerService.getInfluencerDetailsById(this.influencerId);
    this.influencer = {
      ...influencerDetails,
      city: this.citiesListService.getCityByEnglishName(influencerDetails.city).faName,
    };
  }

  submitRequest(selectedInfluencer: InfluencerDetail): void {
    this.influencerService.selectInfluencer(selectedInfluencer);
    this.router.navigate(['home', this.influencerId, 'request']).then();
  }
}
