import {Injectable, inject} from '@angular/core';
import {CollaborationsDataService} from '@user/data-access/collaborations.data.service';
import {CollaborationModel} from '@user/data-access/model/collaborations.model';
import {BehaviorSubject, Observable, firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CollaborationsService {
  private readonly collaborationsDataService: CollaborationsDataService = inject(CollaborationsDataService);
  private readonly collaborationsDataSubject$ = new BehaviorSubject<CollaborationModel[]>([]);

  get collaborationsData$(): Observable<CollaborationModel[]> {
    return this.collaborationsDataSubject$.asObservable();
  }
  async getCollaborationsData(): Promise<void> {
    const response: CollaborationModel[] = await firstValueFrom(
      this.collaborationsDataService.getMockCollaborationsData(),
    );
    this.collaborationsDataSubject$.next(response);
  }
}
