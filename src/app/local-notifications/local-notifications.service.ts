import { Injectable } from '@angular/core';
import { LocalNotifications } from 'ionic-native';

@Injectable()
export class LocalNotificationsService {

  scheduleNotificationWithDefaultIcon() {
    // Will show the small icon only if you have it stored in the res/drawable-* folders as ic_popup_reminder.png
    // If you don't have those images in those folders you will get the default bell icon.
    LocalNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
      data: { testData: "ABC" }
    });
  }

  scheduleNotificationResourceIcon() {
    // Here we specify the icon as a specific png file in a specific res drawable folder.  This will work as well.
    LocalNotifications.schedule({
      id: 2,
      text: 'Single ILocalNotification',
      data: { testData: "ABC" },
      icon: 'res://drawable-hdpi/icon.png'
    });
  }

  scheduleNotificationResourceLargeAndSmallIcons() {
    // Here we set both the icon and the small icon, this is the only way to get a large icon.
    // If you only put icon, it will become the small icon.
    LocalNotifications.schedule({
      id: 3,
      text: 'Single ILocalNotification',
      data: { testData: "ABC" },
      icon: 'res://drawable-hdpi/icon.png',
      smallIcon: 'res://drawable-hdpi/icon.png'
    });
  }

  scheduleNotificationResourceIconAndCustomColor() {
    // Here we go one step further and declare the background color for the small icon.
    // In Ionic 2 you can only do this if you add color to the ILocalNotification interface (until my PR is merged anyway)
    LocalNotifications.schedule({
      id: 3,
      text: 'Single ILocalNotification',
      data: { testData: "ABC" },
      icon: 'res://drawable-hdpi/icon.png',
      smallIcon: 'res://drawable-hdpi/icon.png',
      color: 'FF0000'
    });
  }

  scheduleNotificationFileIconAndCustomColor() {
    // If you want to serve your large image from the file system you can!
    // But you must serve the small icon from the res folder.
    LocalNotifications.schedule({
      id: 4,
      text: 'Single ILocalNotification',
      data: { testData: "ABC" },
      icon: 'file://assets/icon/icon-small.png',
      smallIcon: 'res://drawable-hdpi/icon.png',
      color: 'FF0000'
    });
  }
}
