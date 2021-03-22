export class Answer {
  id: number | string
  answer: string
  score: number
  isSelected?: boolean
}

export interface QuestionAnswer {
  questionId: number | string
  answerId: Answer["id"]
}