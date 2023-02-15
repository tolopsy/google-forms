import {useCallback} from "react"
import {FormControlLabel, Typography} from "@mui/material"
import {Question, Scalars} from "../../../schema"
import QuestionAccordion from "../../ui/QuestionAccordion"
import clsx from "clsx"

export type MultipleChoiceQuestionAreaProps = {
  question: Question
  open?: boolean
  onExpand?: (id: Scalars["ID"]) => void
}

export default function MultipleChoiceQuestionArea({question, open, onExpand}: MultipleChoiceQuestionAreaProps) {
  const {id: questionId} = question;

  const handleExpand = useCallback(() => {
    onExpand && onExpand(questionId)
  }, [onExpand, questionId]);

  return (
    <QuestionAccordion
      expanded={open}
      onChange={handleExpand}
    >
      <QuestionAccordion.Summary
        className={clsx({"!tw-hidden": open})}
      >
        <div>
          <Typography
            className="tw-text-base tw-font-normal tw-color-dark !tw-mb-2"
          >
            {question.text}
          </Typography>
          {question.options?.map((option, index) => (
            <div key={index} className="tw-flex">
              <FormControlLabel
                className="!tw-ml-0 !tw-mr-2.5"
                control={
                <div
                  className="tw-w-4 tw-h-4 tw-border-solid tw-rounded-[50%] tw-border-[1.5px] tw-mr-2.5 tw-border-[#00000042]"
                ></div>}
                label={
                  <Typography className="tw-font-family-brand tw-text-sm tw-font-normal tw-color-dark">
                    {option}
                  </Typography>
                }
                disabled
              />
            </div>
          ))}
        </div>
      </QuestionAccordion.Summary>
      <QuestionAccordion.Details>
        Just anything for now
      </QuestionAccordion.Details>
    </QuestionAccordion>
  )
}
