import {Injectable, inject} from '@angular/core';
import {User} from '@user/data-access/model/user.model';
import {UserDataService} from '@user/data-access/user.data.service';
import {BehaviorSubject, Observable, lastValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly userDataService: UserDataService = inject(UserDataService);
  private readonly userSubject: BehaviorSubject<User> = new BehaviorSubject<User>({} as User);

  get user$(): Observable<User> {
    return this.userSubject.asObservable();
  }
  set user$(value: User) {
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
