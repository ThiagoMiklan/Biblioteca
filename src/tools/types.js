//@flow

export type TabItem = {|
    onClick?: ()=>void,
    definition?: string,
    icon_name?: string,
    icon_definition?: string,
    value: string
|}

export type BreadCrumbItem = {|
    key?: Object,
    definition?:string,
    href?: string,
    value:Object,
    onClick?: ()=>void
|}

export type CardItem = {|
    value?: Object,
    onClick?: ()=> void,
    custom?: Object
|}

export type DropDownItem = {|
    link?: boolean,
    onClick?: ()=> void,
    value: Object,
    icon_name?: string,
    href?: string,
    custom?: Object,
    definition?: string
|}

export type LevelItem ={|
    key?: Object,
    definition?: string,
    onClick?: ()=> void,
    href?: string,
    custom?: Object,
    left?: boolean,
    right?: boolean,
    value: Object
|}

export type MediaObjectItem = {|
    key?: number,
    left?: boolean,
    onClick?: () => void,
    value?:Object
|}



export type MenuItemItem = {|
    onClick?: ()=> void,
    value?: Object,
    definition?: string,
    sub_itens?: Array<|{| onClick: () => void, value: string |}| {| value: string |}>
|}


export type NavigationBarItem = {|
    definition?: string,
    onClick?: ()=> void,
    value?: Object,
    itens_start?: {|
        definition?: string,
        onClick?: () => void,
        value?: string|},
    itens_end?: {|
        definition?: string,
        onClick?: () => void,
        value?: string|},
        custom?: Object
|}

export type PaginationItem={|
    definition?: string,
    value?: Object,
    onClick?:()=> void,
    disabled?: boolean,
    href?: string
|}

export type PanelItemItem={|
    onClick?: ()=> void,
    icon_name?: string,
    icon_definition?: string,
    value?: Object
|}

export type PanelItemTabs={|
    onClick?: ()=> void,
    value?: string
|}

export type RadioItem = {|
    onClick?: ()=> void,
    checked?: boolean,
    custom?: Object,
    value: Object, 
    disabled?: boolean
|}

export type TableItem ={|
    key?: number,
    value?: Object
|}

export type TagItem = {|
    value?: Object,
    definition?: string
|}