import {ComponentProps} from "react";
import clsx from "clsx";
import { IconButton } from "@mui/material"
import AppsIcon from "@mui/icons-material/Apps"

import formImage from "../../assets/img/forms_icon.png"
import MainMenu from "./parts/MainMenu"
import Avatar from "../ui/Avatar";
import SearchInput from "../ui/SearchInput";


export type HeaderProps = Omit<ComponentProps<"div">, "children">

export default function MainHeader({className: classNameEx, ...props}: HeaderProps) {
  return (
    <div
      className={clsx({
        "tw-sticky tw-flex tw-justify-between tw-items-center tw-gap-1": true,
        "tw-bg-white tw-text-white": true,
        "tw-my-0 tw-mx-10 tw-py-2": true
      }, classNameEx)}
      {...props}
    >
      <div className="tw-font-family-title tw-flex tw-items-center">
        <MainMenu/>
        <img src={formImage} alt="form" width="40px" height="40px" />
        <div className="tw-pl-4 tw-text-[22px] tw-color-neutral tw-hidden sm:tw-block">Forms</div>
      </div>

      <SearchInput className="tw-bg-gray-100 tw-h-12 tw-max-w-[720px] tw-rounded-md tw-grow tw-shrink"/>

      <div className="tw-flex tw-items-center">
        <IconButton>
          <AppsIcon/>
        </IconButton>
        <IconButton>
          <Avatar/>
        </IconButton>
      </div>
    </div>
  )
}
