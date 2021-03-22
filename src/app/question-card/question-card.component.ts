import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Answer, QuestionAnswer } from '../models/answer';
import { Question } from '../models/question';

@Component({
  selector: 'question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
})
export class QuestionCardComponent implements OnInit {
  @Input()
  data: Question
  @Output()
  selectAnswerEvent = new EventEmitter<QuestionAnswer>()

  constructor() { }

  ngOnInit() { }

  onClick(answer: Answer) {
    this.selectAnswerEvent.emit({
      answerId: answer.id,
      questionId: this.data.id
    })
  }

  trackByAnswer(_: number, answer: Answer) {
    return answer.id
  }
}
