import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material"
import {useCallback} from "react"
import {Question, Scalars} from "../../../schema"

export type QuestionAccordionProps = {
  question: Question
  open?: boolean
  onExpand?: (id: Scalars["ID"]) => void
}

export default function QuestionAccordion({
                                            question,
                                            open,
                                            onExpand
                                            }: QuestionAccordionProps) {
  const {id: questionId} = question

  const handleExpand = useCallback(() => {
    onExpand && onExpand(questionId)
  }, [onExpand, questionId])

  return (
    <Accordion expanded={open} onChange={handleExpand}>
      <AccordionSummary>
        {questionId}
      </AccordionSummary>
      <AccordionDetails>
        {question.text}
      </AccordionDetails>
    </Accordion>
  )
}
