import { Answer } from "./answer"

export class Question {
  id: number | string
  question: string
  answers: Array<Answer>
}