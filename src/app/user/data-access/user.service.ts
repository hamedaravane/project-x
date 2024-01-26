import {Injectable, inject} from '@angular/core';
import {UserDataService} from '@user/data-access/user.data.service';
import {BehaviorSubject, Observable, lastValueFrom, filter} from 'rxjs';
import {UserEntity} from '@user/data-access/model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly userDataService: UserDataService = inject(UserDataService);
  private readonly userSubject = new BehaviorSubject<UserEntity | null>(null);

  get user$(): Observable<UserEntity> {
    return this.userSubject.asObservable().pipe(filter(Boolean));
  }
  set user$(value: UserEntity) {
    this.userSubject.next(value);
  }

  async getUserData(): Promise<void> {
    this.user$ = await lastValueFrom(this.userDataService.getMockUserInfo());
  }

  private async _getUser(): Promise<void> {
    /*const user = await lastValueFrom();
    this.userSubject.next();*/
  }
}
