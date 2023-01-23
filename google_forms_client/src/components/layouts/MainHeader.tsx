import {ComponentProps} from "react";
import clsx from "clsx";
import { IconButton } from "@mui/material"
import AppsIcon from "@mui/icons-material/Apps"

import formImage from "../../assets/img/forms_icon.png"
import MainMenu from "./parts/MainMenu"


export type HeaderProps = Omit<ComponentProps<"div">, "children">

export default function MainHeader({className: classNameEx, ...props}: HeaderProps) {
  return (
    <div
      className={clsx({
        "tw-sticky tw-flex tw-justify-between tw-items-center": true,
        "tw-bg-white tw-text-white": true,
        "tw-h-64 tw-my-0 tw-mx-10 tw-py-5 tw-px-10": true
      }, classNameEx)}
    >
      <div className="tw-font-family-title tw-flex tw-items-center">
        <MainMenu/>
        <img src={formImage} alt="form" width="40px" height="40px" />
        <div className="tw-pl-4 tw-text-[22px] tw-color-neutral">Forms</div>
      </div>

      {/* Add SearchInput Component */}

      <div className="tw-flex tw-items-center">
        <IconButton>
          <AppsIcon/>
        </IconButton>
        {/* Add Avatar Component*/}
      </div>
    </div>
  )
}