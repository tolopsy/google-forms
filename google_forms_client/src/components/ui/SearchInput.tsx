import {ComponentProps, useCallback, ChangeEventHandler} from "react";
import clsx from "clsx";
import {IconButton} from "@mui/material";
import {Search} from "@mui/icons-material";

export type SearchProps = Omit<ComponentProps<"div">, "children" | "onChange" | "onChangeCapture"> & {
  placeholder?: string
  disabled?: boolean
  value: string
  onChange?: (value: string) => void
}
export default function SearchInput({
                                      placeholder,
                                      disabled,
                                      value,
                                      className: classNameEx,
                                      onChange
                                    }: SearchProps) {
  const onInputChange = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    onChange && onChange(e.currentTarget.value)
  }, [onChange]);

  return (
    <div className={clsx("tw-flex tw-items-center", classNameEx)}>
      <IconButton>
        <Search/>
      </IconButton>
      <input
        className="tw-w-full tw-outline-none tw-h-10 tw-bg-transparent tw-border-none"
        type="text"
        placeholder={placeholder ?? "Search"}
        disabled={disabled}
        value={value}
        onChange={onInputChange}
      />
    </div>
  )
}
