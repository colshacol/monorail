import { Colors } from '@monorail/helpers/color';
export declare enum EventState {
    Active = "active",
    Canceled = "canceled",
    Finished = "finished",
    Scheduled = "scheduled",
    Requested = "requested",
    Inactive = "inactive"
}
export declare const convertEventStateToColor: (eventState: EventState) => Colors;
