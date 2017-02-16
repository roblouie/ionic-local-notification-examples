import { Component } from '@angular/core';

import { LocalNotificationsService } from './local-notifications.service';

@Component({
  selector: 'page-home',
  templateUrl: 'local-notifications.html',
  providers: [LocalNotificationsService]
})
export class LocalNotificationsPage {

  constructor(private localNotificationsService: LocalNotificationsService) {
    this.localNotificationsService.detectEnteringFromNotification();
  }

  scheduleWithDefaultIcon() {
    this.localNotificationsService.scheduleWithDefaultIcon();
  }

  scheduleResourceIcon() {
    this.localNotificationsService.scheduleResourceIcon();
  }

  scheduleResourceLargeAndSmallIcons() {
    this.localNotificationsService.scheduleResourceLargeAndSmallIcons();
  }

  //scheduleNotificationResourceIconAndCustomColor() {
  //  this.localNotificationsService.scheduleResourceIconAndCustomColor();
  //}

  scheduleFileIcon() {
    this.localNotificationsService.scheduleFileIcon();
  }

  scheduleWithSound() {
    this.localNotificationsService.scheduleWithSound();
  }

}
