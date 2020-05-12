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
import hero_props from './HeroProps';
import control_props from './ControlProps';
import columns_props from './ColumnsProps';
import column_props from './ColumnProps';
import section_props from './SectionProps';
import text_area_props from './TextAreaProps';
import select_props from './SelectProps';
import file_props from './FileProps';
import tag_list_props from './TagListProps';

const component_path = {
    "Button": button_props,"ButtonList" :button_list,
    "ProgressBar": progress_bar_props,"Table": table_props,
    "Tag": tag_props,"Content": content_props,
    "Box": box_props,"Image" : image_props,
    "Notification" : notification_props,"NavigationBar" : navigation_bar_props,
    "DropDown" : drop_down_props,"Menu": menu_props,
    "Message": message_props,"BreadCrumb" : bread_crumb_props,
    "Title": title_props,"Pagination" : pagination_props,
    "Card" : card_props, "Panel" : panel_props,
    "Input" : input_props,"Tabs" : tabs_props,
    "Icon": icon_props,"List" : list_props,
    "Hero" : hero_props,"Control" : control_props,
    "Columns" : columns_props,"Column" : column_props,
    "Section" : section_props,"Text": text_area_props,
    "Select": select_props,"File": file_props,
    "TagList": tag_list_props
}

function getComponentProps(component_name){
     var component_props = component_path[component_name];
     return component_props;
}

export default getComponentProps;