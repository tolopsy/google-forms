import {ChangeEventHandler} from "react"
import {IoMdFolderOpen} from "react-icons/io"
import {AiOutlineEye, AiOutlineStar, AiFillStar} from "react-icons/ai"
import {BiUndo, BiRedo} from "react-icons/bi"
import formImage from "../../../assets/img/forms_icon.png"
import {Button, IconButton} from "@mui/material"
import {MoreVert, ColorLensOutlined} from "@mui/icons-material"
import {useNavigate} from "react-router-dom"
import {ActivityHint} from "../../../schema"
import {getPath} from "../../../routing"
import TooltipWrapper from "../../ui/TooltipWrapper"
import Avatar from "../../ui/Avatar";
import UserSummaryCard from "../../../extras/user-summary-card";
import useCurrentUser from "../../../hooks/useCurrentUser";

export type FormHeaderProps = {
  formTitle?: string
  setFormTitle?: ChangeEventHandler
  isStarred?: boolean
  activityHint: ActivityHint

  onSendForm?: () => void
}

export default function FormHeader({formTitle, setFormTitle, isStarred, activityHint, onSendForm}: FormHeaderProps) {
  const navigate = useNavigate();
  const {photo} = useCurrentUser();

  return (
    <div className="tw-flex tw-items-center tw-justify-between tw-bg-white tw-my-1.5 tw-mx-4">
      <div className="tw-flex tw-items-center tw-justify-evenly">
        <img
          src={formImage}
          height="40px"
          width="40px"
          className="tw-cursor-pointer tw-max-w-none"
          alt="logo"
          onClick={() => navigate(getPath("home"))}
        />

        <input
          type="text"
          value={formTitle ?? "Untitled Form"}
          onChange={setFormTitle}
          className="tw-border-none tw-outline-none tw-font-family-brand tw-text-lg 
            tw-font-normal tw-color-dark tw-ml-4 tw-leading-6 tw-w-[120px] focus:tw-border focus:tw-border-black"
        />
        <IoMdFolderOpen className="tw-mr-2.5 tw-color-dark tw-text-xl"/>

        {isStarred ? 
          <AiFillStar className="tw-mr-2.5 tw-color-dark tw-text-xl"/>
          : <AiOutlineStar className="tw-mr-2.5 tw-color-dark tw-text-xl"/>
        }

        <TooltipWrapper element={activityHint.state} placement="bottom">
          <span className="tw-text-xs tw-font-semibold">{activityHint.summary}</span>
        </TooltipWrapper>
      </div>

      <div className="tw-flex tw-items-center tw-justify-between">
        <IconButton className="!tw-mr-2.5 tw-color-dark tw-text-xl">
          <ColorLensOutlined fontSize="medium"/>
        </IconButton>
        <IconButton className="!tw-mr-2.5 tw-color-dark tw-text-xl">
          <AiOutlineEye/>
        </IconButton>
        <IconButton className="!tw-mr-2.5 tw-color-dark tw-text-xl">
          <BiUndo/>
        </IconButton>
        <IconButton className="!tw-mr-2.5 tw-color-dark tw-text-xl">
          <BiRedo/>
        </IconButton>

        <Button variant="contained" href="#contained-button" className="!tw-mx-2.5 !tw-bg-brand hover:!tw-bg-[#673ab7db]">Send</Button>

        <IconButton>
          <MoreVert className="!tw-mr-2.5 tw-color-dark tw-text-xl"/>
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
