import {useCallback, useState, useEffect, ComponentProps} from "react"
import {IconButton, IconButtonProps} from "@mui/material"
import clsx from "clsx";

import {PersonOutline} from "@mui/icons-material";
import TooltipWrapper, {TooltipWrapperProps} from "./TooltipWrapper";

export type AvatarProps = Pick<ComponentProps<"div">, "className"> & Pick<IconButtonProps, "size" | "disableRipple">  & {
  alt?: string
  src?: string

  hoverElement?: TooltipWrapperProps["element"]
  hoverElementPlacement?: TooltipWrapperProps["placement"]
}

export default function Avatar({hoverElement,hoverElementPlacement, src, alt, size, disableRipple, className: classNameEx, ...props}: AvatarProps) {
  const [isValidImage, toggleIsValidImage] = useState(!!src);
  const onInvalidImageError = useCallback(() => toggleIsValidImage(false), [])
  alt = alt ?? "avatar"

  useEffect(() => {
    toggleIsValidImage(!!src);
  }, [src])

  return (
    <TooltipWrapper
      placement={hoverElementPlacement}
      element={hoverElement}
      {...props}
    >
    <IconButton size={size ?? "small"} disableRipple={disableRipple ?? false}>
      {isValidImage ? (
        <div className={clsx("tw-overflow-hidden tw-rounded-full", classNameEx)}>
          <img className="tw-w-8 tw-h-8" src={src} alt={alt} onError={onInvalidImageError}/>
        </div>
        ): <PersonOutline/>
      }
    </IconButton>
    </TooltipWrapper>
  )
}