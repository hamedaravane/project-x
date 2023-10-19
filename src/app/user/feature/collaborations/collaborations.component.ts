import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {Component, inject} from '@angular/core';
import {CollaborationsService} from '@user/data-access/collaborations.service';
import {CollaborationModel} from '@user/data-access/model/collaborations.model';
import {Observable} from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: ['./collaborations.component.scss'],
  imports: [NgIf, AsyncPipe, NgForOf, NgOptimizedImage],
})
export class CollaborationsComponent {
  private readonly collaborationService: CollaborationsService = inject(CollaborationsService);
  collaborationsData$: Observable<CollaborationModel[]> = this.collaborationService.collaborationsData$;
}
