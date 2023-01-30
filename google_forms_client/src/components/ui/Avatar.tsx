import {ComponentProps, useCallback, useState} from "react"
import clsx from "clsx";
import {PersonOutline} from "@mui/icons-material";

export type AvatarProps = ComponentProps<"div"> & {
  alt?: string
  src?: string
}
export default function Avatar({src, alt, className: classNameEx}: AvatarProps) {
  const [isValidImage, toggleIsValidImage] = useState(!!src);
  const onInvalidImageError = useCallback(() => toggleIsValidImage(false), [])
  alt = alt ?? "avatar"
  return (
    <div className={clsx("tw-overflow-hidden tw-rounded-full", classNameEx)}>
      {isValidImage ? (
          <img className="tw-w-full tw-h-full" src={src} alt={alt} onError={onInvalidImageError}/>
        ) : <PersonOutline/>
      }
    </div>
  )
}
