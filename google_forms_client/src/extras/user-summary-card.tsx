import clsx from "clsx";
import { ComponentProps } from "react";
import useCurrentUser from "../hooks/useCurrentUser";

type UserSummaryCardProps = ComponentProps<"div">

export default function UserSummaryCard({className: classNameEx}: UserSummaryCardProps) {
  const {firstName, lastName, email} = useCurrentUser();
  return (
    <div className={clsx("tw-text-xs tw-tracking-wide tw-text-neutral-300", classNameEx)}>
      <h6 className="tw-text-white">Google Clone Account</h6>
      <p>{firstName} {lastName}</p>
      <p>{email}</p>
    </div>
  )
}
