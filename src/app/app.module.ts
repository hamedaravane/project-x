import {NZ_DATE_CONFIG, NZ_I18N, en_US, fa_IR} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import en from '@angular/common/locales/en';
import fa from '@angular/common/locales/fa';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

registerLocaleData(en);
registerLocaleData(fa);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule],
  providers: [
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
