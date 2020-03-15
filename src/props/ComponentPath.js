import progress_bar_props from './ProgressBarProps';
import table_props from './TableProps';
import tag_props from './TagProps';
import list_props from './ListProps';
import box_props from './BoxProps';
import image_props from './ImageProps';
import notification_props from './NotificationProps';
import navigation_bar_props from './NavigationBarProps';
import drop_down_props from './DropDown';
import menu_props from './MenuProps';
import message_props from './MessageProps';
import bread_crumb_props from './BreadCrumbProps';
import title_props from './TitleProps';
import pagination_props from './PaginationProps';
import card_props from './CardProps';
import panel_props from './PanelProps';
import input_props from './InputProps';
import tabs_props from './TabsProps';
import button_props from './ButtonProps';
import button_list from './ButtonListProps';
import icon_props from './IconProps';
import content_props from './ContentProps';

const component_path = {
    "Button": button_props,
    "ButtonList" :button_list,
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
    "Message": message_props,
    "BreadCrumb" : bread_crumb_props,
    "Title": title_props,
    "Pagination" : pagination_props,
    "Card" : card_props,
    "Panel" : panel_props,
    "Input" : input_props,
    "Tabs" : tabs_props,
    "Icon": icon_props,
    "List" : list_props
}

export default component_path;