export interface INotificationsState {
  displaying: boolean;
}

enum NotificationsActionTypes {
  DISPLAYING_NOTIFICATION = "DISPLAYING_NOTIFICATION",
}

export interface IDisplayingNotification {
  type: NotificationsActionTypes.DISPLAYING_NOTIFICATION;
}

export type NotificationAction = IDisplayingNotification;
