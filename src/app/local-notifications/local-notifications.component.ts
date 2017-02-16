import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LocalNotificationsService } from './local-notifications.service';

@Component({
  selector: 'page-home',
  templateUrl: 'local-notifications.html',
  providers: [LocalNotificationsService]
})
export class LocalNotificationsPage {

  constructor(public navCtrl: NavController, private localNotificationsService: LocalNotificationsService) {
    this.localNotificationsService.detectEnteringFromNotification();
  }

  scheduleNotificationWithDefaultIcon() {
    this.localNotificationsService.scheduleNotificationWithDefaultIcon();
  }

  scheduleNotificationResourceIcon() {
    this.localNotificationsService.scheduleNotificationResourceIcon();
  }

  scheduleNotificationResourceLargeAndSmallIcons() {
    this.localNotificationsService.scheduleNotificationResourceLargeAndSmallIcons();
  }

  //scheduleNotificationResourceIconAndCustomColor() {
  //  this.localNotificationsService.scheduleNotificationResourceIconAndCustomColor();
  //}

  scheduleNotificationFileIcon() {
    this.localNotificationsService.scheduleNotificationFileIcon();
  }

  scheduleNotificationWithSound() {
    this.localNotificationsService.scheduleNotificationWithSound();
  }

  scheduleRepeatingNotification() {
    this.localNotificationsService.scheduleRepeatingNotification();
  }

}
