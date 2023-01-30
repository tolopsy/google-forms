
import {ComponentProps, MouseEventHandler, useCallback, useState} from "react"
import {Drawer, IconButton, List, ListItem, ListItemText, Divider} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import {FiSettings} from "react-icons/fi";
import {BsQuestionCircle} from "react-icons/bs";

import driveIcon from "../../../assets/img/drive_icon.png";
import docsIcon from "../../../assets/img/docs_icon.png";
import formsIcon from "../../../assets/img/forms_icon.png";
import sheetsIcon from "../../../assets/img/sheets_icon.png";
import slidesIcon from "../../../assets/img/slides_icon.png";

import {url} from "../../../routing"
import LinkAdapter from "../../../routing/LinkAdapter"
import clsx from "clsx";

type MenuItem = {
  id: string
  icon: string | JSX.Element
  label: string
  to?: string
  external?: boolean
  onClick?: MouseEventHandler
}

export default function MainMenu() {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpenMenu = useCallback(() => {
    setOpen(true)
  }, [setOpen])

  const handleCloseMenu = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  const section1MenuItems: MenuItem[] = [
    {id: "docs", icon: docsIcon, label: "Docs", to: "https://docs.google.com/document/u/0/", external: true},
    {id: "sheets", icon: sheetsIcon, label: "Sheets", to: "https://docs.google.com/spreadsheets/u/0/", external: true},
    {id: "slides", icon: slidesIcon, label: "Slides", to: "https://docs.google.com/presentation/u/0/", external: true},
    {id: "forms", icon: formsIcon, label: "Forms", to: url("home"), external: false},
  ]

  // TODO: Handle Settings and Help click event
  const section2MenuItems: MenuItem[] = [
    {id: "settings", icon: <FiSettings/>, label: "Settings", onClick: undefined},
    {id: "help", icon: <BsQuestionCircle/>, label: "Help and Feedback", onClick: undefined}
  ]

  const section3MenuItems: MenuItem[] = [
    {id: "drive", icon: driveIcon, label: "Drive", to: "https://drive.google.com/drive/my-drive?ths=true", external: true}
  ]

  return (
    <div>
      <IconButton onClick={handleOpenMenu}>
        <MenuIcon />
      </IconButton>
      <Drawer open={open} anchor='left' onClose={handleCloseMenu}>
        <div className="tw-w-[280px]" role="presentation">
          <List>
            <ListItem>
              <ListItemText className="tw-ml-1 tw-text-5xl">
                <span className="tw-color-neutral tw-text-[22px] tw-font-medium">Google Forms</span>
              </ListItemText>
            </ListItem>
          </List>
          <Divider/>
          <MenuList items={section1MenuItems}/>
          <Divider/>
          <MenuList items={section2MenuItems}/>
          <Divider/>
          <MenuList items={section3MenuItems}/>
          <Divider/>
  
        </div>
      </Drawer>
    </div>
  )
}

type MenuListProps = Omit<ComponentProps<typeof List>, "children"> & {
  items: MenuItem[]
}

function MenuList({className: classNameEx, items, ...props}: MenuListProps) {

  return (
    <List className={clsx("tw-mx-2 tw-mt-3.5", classNameEx)} {...props}>
      {items.map(item => (
        item.to !== undefined ? (
          <LinkAdapter to={item.to} external={item.external} onClick={item.onClick} key={item.id}>
            <ListItem className="tw-mr-2.5">
              <MenuItemIcon icon={item.icon} alt={item.id}/>
              <div className="tw-ml-5 tw-font-medium tw-text-sm tw-color-menu">{item.label}</div>
            </ListItem>
          </LinkAdapter>
        ) : (
          <ListItem className="tw-mr-2.5" onClick={item.onClick} key={item.id}>
            <MenuItemIcon icon={item.icon} alt={item.id}/>
            <div className="tw-ml-5 tw-font-medium tw-text-sm tw-color-menu">{item.label}</div>
          </ListItem>
        )
      ))}
    </List>
  )
}

type MenuItemIconProps = {
  icon: string | JSX.Element
  alt?: MenuItem["id"]
}

function MenuItemIcon({icon, alt}: MenuItemIconProps) {
  if (typeof icon === "string") {
    return <img src={icon} alt={alt} className="tw-h-5 tw-w-5"/>
  }
  return icon
}
