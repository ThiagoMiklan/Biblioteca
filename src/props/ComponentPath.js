import progress_bar_props from './ProgressBarProps';
import table_props from './TableProps';
import tag_props from './TagProps';
import content_props from './ContentProps';
import box_props from './BoxProps';
import image_props from './ImageProps';
import notification_props from './NotificationProps';
import navigation_bar_props from './NavigationBarProps';
import drop_down_props from './DropDown';
import menu_props from './MenuProps';
import message_props from './MessageProps';

const component_path = {
    "ProgressBar": progress_bar_props,
    "Table": table_props,
    "Tag": tag_props,
    "Content": content_props,
    "Box": box_props,
    "Image" : image_props,
    "Notification" : notification_props,
    "NavigationBar" : navigation_bar_props,
    "DropDown" : drop_down_props,
    "Menu": menu_props,
    "Message": message_props
}

export default component_path;