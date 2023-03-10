import {DragIndicator} from "@mui/icons-material";
import {ChangeEventHandler, useCallback, useState} from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import MultipleChoiceQuestionArea from "../../components/scenes/formManager/MultipleChoiceQuestionArea";
import {Question, QuestionType, Scalars} from "../../schema";

export type QuestionsTabProps = {
  formTitle: string
  formDescription?: string | null
  onSetTitle?: ChangeEventHandler
  onSetDescription?: ChangeEventHandler

  questions: Question[]
}

export default function QuestionsTab({
                                      formTitle,
                                      formDescription,
                                      onSetTitle,
                                      onSetDescription,
                                      questions,
                                    }: QuestionsTabProps) {
  
  const [openQuestionId, setOpenQuestionId] = useState<Scalars["ID"]>(questions[0].id);
  const handleQuestionAccordionExpand = useCallback((id: Scalars["ID"]) => {
    setOpenQuestionId(id)
  }, [setOpenQuestionId])

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

          <DragDropContext onDragEnd={() => null}>
            <Droppable droppableId="droppable-questions">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {questions.map((question, index) => (
                    <Draggable key={index} draggableId={`id-${index}`} index={index}>
                      {(provided, snapshot) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <div>
                            <div className="tw-mb-0">
                              <div className="tw-mb-0 tw-w-full">
                                <DragIndicator
                                  fontSize="small"
                                  className="coming soon"
                                />
                              </div>
                              {question.type === QuestionType.MULTIPLE_CHOICE &&
                                <MultipleChoiceQuestionArea
                                  question={question}
                                  onExpand={handleQuestionAccordionExpand}
                                  open={question.id === openQuestionId}
                                />
                              }
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  )
}
