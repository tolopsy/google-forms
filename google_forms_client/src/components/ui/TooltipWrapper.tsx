import {Tooltip, TooltipProps} from "@mui/material";
import {ReactElement, ReactNode} from "react";


export type TooltipWrapperProps = Pick<TooltipProps, "placement"> & {
  element?: ReactNode
  children: ReactElement
}
export default function TooltipWrapper({element, children, placement}: TooltipWrapperProps) {
  return (
    element ?
    <Tooltip title={element} placement={placement}>{children}</Tooltip>
    : <>{children}</>
  )
}