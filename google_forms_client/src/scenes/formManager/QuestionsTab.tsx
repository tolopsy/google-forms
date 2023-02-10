import { ChangeEventHandler } from "react"

export type QuestionsTabProps = {
  formTitle: string
  formDescription?: string | null
  onSetTitle?: ChangeEventHandler
  onSetDescription?: ChangeEventHandler
}

export default function QuestionsTab({
                                      formTitle,
                                      formDescription,
                                      onSetTitle,
                                      onSetDescription
                                    }: QuestionsTabProps) {

  return (
    <div>
      <div className="tw-h-full tw-pb-7">
        <div className="tw-w-6/12 tw-m-auto">
          <div>
            <div className="tw-bg-white tw-border-t-solid tw-border-t-8 tw-border-t-purple-800 tw-rounded-lg tw-py-[30px] tw-px-[25px]">
              <input
                type="text"
                className="tw-font-normal tw-box-border tw-text-[32px] tw-leading-10 tw-w-full
                  tw-color-dark tw-border-none tw-outline-none tw-border-b tw-border-b-[#f4f4f9] tw-h-12"
                value={formTitle}
                onChange={onSetTitle}
              />
              <input
                type="text"
                placeholder="Form Description"
                className="tw-font-normal tw-box-border tw-text-[13px] tw-mt-2.5 tw-leading-10 tw-w-full
                  tw-color-dark tw-border-none tw-outline-none tw-border-b tw-border-b-[#f4f4f9] tw-h-5"
                value={formDescription ?? ""}
                onChange={onSetDescription}
              />
            </div>
          </div>
          {/*TODO: Draggable Context*/}
        </div>
      </div>
    </div>
  )
}
