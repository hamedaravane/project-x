import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  private readonly forgottenPassEmail: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  get forgottenPasswordEmail(): Observable<string | null> {
    return this.forgottenPassEmail.asObservable();
  }
  setForgottenPassEmail(value: string | null) {
    this.forgottenPassEmail.next(value);
  }
}
