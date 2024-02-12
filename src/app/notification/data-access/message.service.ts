import {inject, Injectable} from '@angular/core';
import {NzMessageDataOptions, NzMessageService} from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService{
  private readonly nzMessageService = inject(NzMessageService);
  error(content: string): void {
    const defaultOptions: NzMessageDataOptions = {
      nzDuration: 7_000,
      nzAnimate: true,
      nzPauseOnHover: true,
    };
    this.nzMessageService.create('error', content, defaultOptions);
  }

  success(content: string): void {
    const defaultOptions: NzMessageDataOptions = {
      nzDuration: 7_000,
      nzAnimate: true,
      nzPauseOnHover: true,
    };
    this.nzMessageService.create('success', content, defaultOptions);
  }
}
