import {UnfoldMore, MoreVert} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import blankFormImg from "../../../assets/img/forms-blank-googlecolors.png"
import defaultFormImg from "../../../assets/img/work-request-form-bg.png"
import templates from "../../../data/templates";

export default function TemplateOverview() {
  const recentlyUsedTemplates = templates.slice(0,5)
  return (
    <div className="tw-bg-gray-100 tw-pb-10 tw-pt-1.5 tw-color-dark">
      <div className="tw-flex tw-items-center tw-justify-between tw-mx-40">
        <div className="tw-text-base">Start a new form</div>
        <div className="tw-flex">
          <div className="tw-flex tw-items-center tw-justify-between tw-bg-transparent">
            Template Gallery
            <UnfoldMore fontSize="small"/>
          </div>
          <IconButton>
            <MoreVert fontSize="small"/>
          </IconButton>
        </div>
      </div>
      <div className="tw-flex tw-mx-40">
        <div className="tw-mt-4">
          <img
            src={blankFormImg}
            alt="blank form"
            className="tw-h-[128px] tw-w-[171px] tw-box-border tw-cursor-pointer tw-rounded
              tw-border-[0.2px] tw-border-solid tw-border-slate-300 hover:tw-border hover:tw-border-purple-900"
          />
          <p className="tw-font-medium tw-text-sm tw-mt-0.5">Blank</p>
        </div>

        {recentlyUsedTemplates.map(template => (
          <div className="tw-mt-4 tw-ml-5">
            <img
              src={template.img ?? defaultFormImg}
              alt={template.name}
              className="tw-h-[128px] tw-w-[171px] tw-box-border tw-cursor-pointer tw-rounded
                tw-border-[0.2px] tw-border-solid tw-border-slate-300 hover:tw-border hover:tw-border-purple-800"
            />
            <p className="tw-font-medium tw-text-sm tw-mt-2.5">{template.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}