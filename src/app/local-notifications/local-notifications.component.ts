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

  scheduleNotificationResourceIconAndCustomColor() {
    this.localNotificationsService.scheduleNotificationResourceIconAndCustomColor();
  }

  scheduleNotificationFileIconAndCustomColor() {
    this.localNotificationsService.scheduleNotificationFileIconAndCustomColor();
  }

}
