import {Link, LinkProps} from "react-router-dom";
import {forwardRef} from "react";

export type LinkAdapterProps = Omit<LinkProps, "to"> & {
  to: string
  external?: boolean
};

const LinkAdapter = forwardRef<HTMLAnchorElement, LinkAdapterProps>(
  function RouterLink(
    {to, external, children, ...props},
    ref
  ) {
    if (external) {
      return <a target="_blank" rel="noreferrer" ref={ref} href={to} {...props}>{children}</a>
    } else {
      return <Link ref={ref} to={to} {...props}>{children}</Link>
    }
  }
)

export default LinkAdapter;
