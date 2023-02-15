import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionProps,
  AccordionSummaryProps,
  AccordionDetailsProps,
} from "@mui/material"
import clsx from "clsx"
import {FunctionComponent} from "react"

const QuestionAccordion = (function QuestionAccordion({
                                                        expanded,
                                                        onChange,
                                                        className: classNameEx,
                                                        children,
                                                        ...props
                                                      }: AccordionProps) {
  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      className={clsx("!tw-rounded tw-px-4 tw-pb-6", {
        "tw-border-l-[6px] tw-border-l-[#4285f4]": expanded,
        "before:!tw-bg-transparent tw-border tw-border-[#dadce0]": !expanded,
      }, classNameEx)}
      {...props}
    >
      {children}
    </Accordion>
  )
} as FunctionComponent<AccordionProps> & {
  Summary: FunctionComponent<AccordionSummaryProps>
  Details: FunctionComponent<AccordionDetailsProps>
})

function QuestionAccordionSummary({className: classNameEx, children, ...props}: AccordionSummaryProps) {
  return (
    <AccordionSummary
      className={clsx("tw-px-6", classNameEx)}
      {...props}
    >
      {children}
    </AccordionSummary>
  )
}

function QuestionAccordionDetails({children,...props}: AccordionDetailsProps) {
  return (
    <AccordionDetails
      {...props}
    >
      {children}
    </AccordionDetails>
  )
}

QuestionAccordion.Summary = QuestionAccordionSummary
QuestionAccordion.Details = QuestionAccordionDetails

export default QuestionAccordion