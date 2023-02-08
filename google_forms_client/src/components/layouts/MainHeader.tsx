import {ComponentProps} from "react";
import clsx from "clsx";
import {IconButton} from "@mui/material"
import AppsIcon from "@mui/icons-material/Apps"

import formImage from "../../assets/img/forms_icon.png"
import MainMenu from "./parts/MainMenu"
import Avatar from "../ui/Avatar";
import SearchInput from "../ui/SearchInput";
import UserSummaryCard from "../../extras/user-summary-card";


export type HeaderProps = Omit<ComponentProps<"div">, "children">

export default function MainHeader({className: classNameEx, ...props}: HeaderProps) {
  return (
    <div
      className={clsx({
        "tw-sticky tw-flex tw-justify-between tw-items-center tw-gap-1": true,
        "tw-bg-white tw-text-white": true,
        "tw-my-0 tw-px-2 tw-py-2": true
      }, classNameEx)}
      {...props}
    >
      <div className="tw-font-family-heading tw-flex tw-items-center">
        <MainMenu/>
        <img src={formImage} alt="form" width="40px" height="40px" className="tw-max-w-none" />
        <div className="tw-text-[22px] tw-color-neutral tw-hidden sm:tw-block">Forms</div>
      </div>

      <SearchInput className="tw-bg-gray-100 tw-h-12 tw-max-w-[720px] tw-rounded-md tw-grow tw-shrink tw-font-family-normal sm:tw-mx-4"/>

      <div className="tw-flex tw-items-center">
        <IconButton>
          <AppsIcon/>
        </IconButton>
        <Avatar
          element={<UserSummaryCard/>}
          placement="bottom"
          src="https://lh3.googleusercontent.com/ogw/AAEL6sjEOT4zQcorntK3zlQLt0p5pAG3x0HI9wtlc0jMaA=s64-c-mo"
        />
      </div>
    </div>
  )
}
