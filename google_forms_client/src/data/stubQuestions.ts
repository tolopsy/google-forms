import {Question, QuestionType} from "../schema";

const stubQuestions: Question[] = [
  {
    id: "1",
    text: "Have you tried any of our products?",
    type: QuestionType.SHORT_ANSWER,
    required: true,
  },
  {
    id: "2",
    text: "Rate our customer support quality?",
    type: QuestionType.MULTIPLE_CHOICE,
    options: ["1", "2", "3", "4", "5"],
    required: true,
  }
]

export default stubQuestions
