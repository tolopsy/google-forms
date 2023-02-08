import {useCallback, useState, useEffect} from "react"
import {IconButton, IconButtonProps} from "@mui/material"
import clsx from "clsx";

import {PersonOutline} from "@mui/icons-material";

export type AvatarProps = IconButtonProps & {
  alt?: string
  src?: string
}
export default function Avatar({src, alt, size, disableRipple, className: classNameEx}: AvatarProps) {
  const [isValidImage, toggleIsValidImage] = useState(!!src);
  const onInvalidImageError = useCallback(() => toggleIsValidImage(false), [])
  alt = alt ?? "avatar"

  useEffect(() => {
    toggleIsValidImage(!!src);
  }, [src])

  return (
    <IconButton size={size ?? "small"} disableRipple={disableRipple ?? false}>
      {isValidImage ? (
        <div className={clsx("tw-overflow-hidden tw-rounded-full", classNameEx)}>
          <img className="tw-w-8 tw-h-8" src={src} alt={alt} onError={onInvalidImageError}/>
        </div>
        ): <PersonOutline/>
      }
    </IconButton>
  )
}