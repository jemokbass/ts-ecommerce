import { INotificationsState, NotificationAction } from "../../utils/types/notifications.types";

const initialState: INotificationsState = {
  displaying: false,
};

export const notificationsReducer = (
  state = initialState,
  action: NotificationAction
): INotificationsState => {
  switch (action.type) {
    default:
      return state;
  }
};
