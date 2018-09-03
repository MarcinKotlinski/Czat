import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import {ChatPage} from "../pages/chat/chat";
import {AngularFireDatabaseModule} from "angularfire2/database";

var config = {
  apiKey: "AIzaSyBilnLS0kkXfNjuOt9_9E9aA2r3pVzcmbQ",
  authDomain: "chat-8350b.firebaseapp.com",
  databaseURL: "https://chat-8350b.firebaseio.com",
  projectId: "chat-8350b",
  storageBucket: "chat-8350b.appspot.com",
  messagingSenderId: "943425743495"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config,'chat'),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
