import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ComponentsModule } from '../components/components.module';
import { Clipboard } from '@ionic-native/clipboard';
import { Toast } from '@ionic-native/toast';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PricesPage } from '../pages/prices/prices';
import { CalculatorPage } from '../pages/calculator/calculator';
import { AboutPage } from '../pages/about/about';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    PricesPage,
    CalculatorPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    PricesPage,
    CalculatorPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Clipboard,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
