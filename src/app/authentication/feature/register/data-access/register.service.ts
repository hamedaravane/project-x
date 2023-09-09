import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private readonly userType = new Subject<'influencer' | 'business'>();

  selectUserType(type: 'influencer' | 'business') {
    this.userType.next(type);
  }

  get UserTypeState(): Observable<'influencer' | 'business'> {
    return this.userType.asObservable();
  }
}
