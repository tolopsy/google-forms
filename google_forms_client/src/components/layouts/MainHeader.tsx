import {ComponentProps} from "react";
import clsx from "clsx";
import {IconButton} from "@mui/material"
import AppsIcon from "@mui/icons-material/Apps"

import formImage from "../../assets/img/forms_icon.png"
import MainMenu from "./parts/MainMenu"
import Avatar from "../ui/Avatar";
import SearchInput from "../ui/SearchInput";
import UserSummaryCard from "../../extras/user-summary-card";
import useCurrentUser from "../../hooks/useCurrentUser";


export type HeaderProps = Omit<ComponentProps<"div">, "children">

export default function MainHeader({className: classNameEx, ...props}: HeaderProps) {
  const {photo} = useCurrentUser();
  return (
    <div
      className={clsx({
        "tw-sticky tw-flex tw-justify-between tw-items-center tw-gap-1": true,
        "tw-bg-white tw-text-white": true,
        "tw-my-0 tw-px-2 tw-py-2": true
      }, classNameEx)}
      {...props}
    >
      <div className="tw-font-family-brand tw-flex tw-items-center">
        <MainMenu/>
        <img src={formImage} alt="form" width="48px" height="48px" className="tw-max-w-none tw-cursor-pointer" />
        <div className="tw-text-[22px] tw-color-neutral tw-hidden sm:tw-block">Forms</div>
      </div>

      <SearchInput className="tw-bg-gray-100 tw-h-12 tw-max-w-[720px] tw-rounded-md tw-grow tw-shrink tw-font-family-brand sm:tw-mx-4"/>

      <div className="tw-flex tw-items-center">
        <IconButton>
          <AppsIcon/>
        </IconButton>
        <Avatar
          hoverElement={<UserSummaryCard/>}
          hoverElementPlacement="bottom"
          src={photo ?? ""}
        />
      </div>
    </div>
  )
}
