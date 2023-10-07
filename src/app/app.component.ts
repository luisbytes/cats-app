import { Component, OnInit } from '@angular/core';

import { StatusBar } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const native = Capacitor.isNativePlatform();

    if (!native) {
      return;
    }

    StatusBar.setBackgroundColor({
      color: '#3880ff'
    });

    SplashScreen.hide();
  }
}
