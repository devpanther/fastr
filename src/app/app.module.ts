import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MainPage } from '../pages/main/main';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { Login } from '../pages/login/login';
import { BulkPage } from '../pages/bulk/bulk';
import { PaymentPage } from '../pages/payment/payment';
import { DispatchPage } from '../pages/dispatch/dispatch';
import { HistoryPage } from '../pages/history/history';
import { RatePage } from '../pages/rate/rate';
import { ModalPage } from '../pages/modal/modal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    Login,
    MainPage,
    BulkPage,
    PaymentPage,
    DispatchPage,
    HistoryPage,
    RatePage,
    ModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    Login,
    MainPage,
    BulkPage,
    PaymentPage,
    DispatchPage,
    HistoryPage,
    RatePage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
