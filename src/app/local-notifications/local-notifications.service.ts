import { Injectable } from '@angular/core';
import { LocalNotifications } from 'ionic-native';

@Injectable()
export class LocalNotificationsService {

  scheduleWithDefaultIcon() {
    // Will show the small icon only if you have it stored in the res/drawable-* folders as ic_popup_reminder.png
    // If you don't have those images in those folders you will get the default bell icon.
    LocalNotifications.schedule({
      id: 1,
      text: 'No icon set, will use default if present',
      data: { testData: "ABC" }
    });
  }

  scheduleResourceIcon() {
    // Here we specify the icon as a specific png file in a specific res drawable folder.  This will work as well.
    LocalNotifications.schedule({
      id: 2,
      text: 'Resource icon',
      data: { testData: "ABC" },
      icon: 'res://drawable-hdpi/icon.png'
    });
  }

  scheduleResourceLargeAndSmallIcons() {
    // Here we set both the icon and the small icon, this is the only way to get a large icon.
    // If you only put icon, it will become the small icon.
    LocalNotifications.schedule({
      id: 3,
      text: 'Large and small icons',
      data: { testData: "ABC" },
      icon: 'res://drawable-hdpi/icon.png',
      smallIcon: 'res://drawable-hdpi/icon.png'
    });
  }

  //scheduleResourceIconAndCustomColor() {
  //  // Here we go one step further and declare the background color for the small icon.
  //  // In Ionic 2 you can only do this if you add color to the ILocalNotification interface (until my PR is merged anyway)
  //  LocalNotifications.schedule({
  //    id: 4,
  //    text: 'Icons and color',
  //    data: { testData: "ABC" },
  //    icon: 'res://drawable-hdpi/icon.png',
  //    smallIcon: 'res://drawable-hdpi/icon.png',
  //    color: 'FF0000'
  //  });
  //}

  scheduleFileIcon() {
    // If you want to serve your large image from the file system you can!
    // But you must serve the small icon from the res folder.
    LocalNotifications.schedule({
      id: 5,
      text: 'Icon from file',
      data: { testData: "ABC" },
      icon: 'file://assets/icon/icon-small.png',
      smallIcon: 'res://drawable-hdpi/icon.png'
    });
  }

  scheduleWithSound() {
    LocalNotifications.schedule({
      id: 5,
      text: 'Custom sound',
      data: { testData: "ABC" },
      icon: 'file://assets/icon/icon-small.png',
      smallIcon: 'res://drawable-hdpi/icon.png',
      sound: 'file://assets/sound/sound-effect.mp3'
    });
  }

  detectEnteringFromNotification() {
      LocalNotifications.on('click', notification => {
        const notificationData = JSON.parse(notification.data);
        alert(`You clicked: ${notification.text}. Your data is: ${notificationData.testData}`);
      });
  }
}
