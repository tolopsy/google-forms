import {ComponentProps} from "react";

export type RootProps = ComponentProps<"div">

export default function Root({className: classNameEx, ...props}: RootProps) {
  return <div className={classNameEx} {...props}/>
}