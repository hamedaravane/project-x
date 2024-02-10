import {inject, Injectable} from '@angular/core';
import {NzMessageDataOptions, NzMessageService} from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService{
  nzMessageService = inject(NzMessageService);
  error(content: string): void {
    const defaultOptions: NzMessageDataOptions = {
      nzDuration: 40,
      nzAnimate: true,
      nzPauseOnHover: true,
    };
    this.nzMessageService.create('error', content, defaultOptions);
  }

  success(content: string): void {
    const defaultOptions: NzMessageDataOptions = {
      nzDuration: 20,
      nzAnimate: true,
      nzPauseOnHover: true,
    };
    this.nzMessageService.create('error', content, defaultOptions);
  }
}
