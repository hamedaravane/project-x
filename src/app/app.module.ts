import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {fa_IR, en_US, NZ_I18N, NZ_DATE_CONFIG} from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import en from '@angular/common/locales/en';
import fa from '@angular/common/locales/fa';

registerLocaleData(en);
registerLocaleData(fa);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: NZ_I18N,
      useFactory: (localId: string) => {
        switch (localId) {
          case 'en':
            return en_US;
          case 'fa':
            return fa_IR;
          default:
            return fa_IR;
        }
      }, deps: [LOCALE_ID]
    },
    { provide: NZ_DATE_CONFIG, useValue: {
        firstDayOfWeek: 6,
        displayFormats: {
          veryShortWeekLabel: 'dd',
          dateInput: 'yyyy/MM/DD',
          dateTimeInput: 'yyyy-MM-DD HH:mm:ss',
        },
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
