import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { MainPage } from '../pages/main/main';
import { Login } from '../pages/login/login';
import { PaymentPage } from '../pages/payment/payment';
import { DispatchPage } from '../pages/dispatch/dispatch';
import { HistoryPage } from '../pages/history/history';
import { RatePage } from '../pages/rate/rate';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Profile', component: MainPage, icon: "contact" },
      { title: 'Payment', component: PaymentPage, icon: "card" },
      { title: 'My Dispatch', component: DispatchPage, icon: "subway" },
      { title: 'History', component: HistoryPage, icon: "star" },
      { title: 'Contact Us', component: Login, icon: "text" },
      { title: 'About', component: RatePage, icon: "people" }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (this.platform.is('android')) {
        this.statusBar.styleBlackOpaque();
      }
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
