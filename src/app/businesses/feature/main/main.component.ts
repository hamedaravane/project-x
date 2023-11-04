import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {Component, inject} from '@angular/core';
import {CollaborationsService} from '@user/data-access/collaborations.service';
import {CollaborationModel} from '@user/data-access/model/collaborations.model';
import {CardComponent} from '@shared/ui/card/card.component';
import {Observable} from 'rxjs';

@Component({
  standalone: true,
  selector: 'businesses-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [CardComponent, NgIf, AsyncPipe, NgOptimizedImage, NgForOf],
})
export class MainComponent {
  private readonly collaborationService: CollaborationsService = inject(CollaborationsService);
  collaborationsData$: Observable<CollaborationModel[]> = this.collaborationService.collaborationsData$;
}
