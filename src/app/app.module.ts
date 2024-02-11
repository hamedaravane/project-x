import {registerLocaleData} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import en from '@angular/common/locales/en';
import fa from '@angular/common/locales/fa';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NZ_DATE_CONFIG, NZ_I18N, en_US, fa_IR} from 'ng-zorro-antd/i18n';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {ErrorInterceptor} from '@shared/data-access/interceptor/error.interceptor';
// import {AuthInterceptor} from '@authentication/data-access/interceptor/auth.interceptor';

registerLocaleData(en);
registerLocaleData(fa);

@NgModule({
  declarations: [AppComponent],
  imports: [NzMessageModule, BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: 'API_URL',
      useValue: environment.apiUrl,
    },
    {
      provide: NZ_I18N,
      /* eslint-disable-next-line */
      useFactory: (localId: string) => {
        switch (localId) {
          case 'en':
            return en_US;
          case 'fa':
            return fa_IR;
          default:
            return fa_IR;
        }
      },
      deps: [LOCALE_ID],
    },
    {
      provide: NZ_DATE_CONFIG,
      useValue: {
        firstDayOfWeek: 6,
        displayFormats: {
          veryShortWeekLabel: 'dd',
          dateInput: 'yyyy/MM/DD',
          dateTimeInput: 'yyyy-MM-DD HH:mm:ss',
        },
      },
    },
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
