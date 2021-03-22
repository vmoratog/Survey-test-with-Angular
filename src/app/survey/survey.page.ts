import { Component, AfterViewInit } from '@angular/core';
import { Animation, AnimationKeyFrames, createAnimation } from '@ionic/angular';
import { QuestionAnswer } from '../models/answer';
import { Question } from '../models/question';
import { Router } from '@angular/router'

const backInUpKeyframes: AnimationKeyFrames = [
  {
    offset: 0,
    transform: "translateY(100vh) scale(0.7)",
    opacity: 0.7
  },
  {
    offset: 0.8,
    transform: "translateY(0px) scale(0.7)",
    opacity: 0.7
  },
  {
    offset: 1,
    transform: "scale(1)",
    opacity: 1
  }
]

const backOutUpKeyframes: AnimationKeyFrames = [
  {
    offset: 0,
    transform: "scale(1)",
  },
  {
    offset: 0.2,
    transform: "translateY(0px) scale(0.7)",
  },
  {
    offset: 1,
    transform: "translateY(-100vh) scale(0.7)",
  }
]


const showQuestion = (el: Element) => {
  const animation: Animation = createAnimation()
    .addElement(el)
    .delay(500)
    .duration(1000)
    .keyframes(backInUpKeyframes)
    .beforeStyles({ display: 'flex' })
  animation.play()
}

const hideQuestion = (el: Element) => {
  const animation: Animation = createAnimation()
    .addElement(el)
    .duration(800)
    .keyframes(backOutUpKeyframes)
    .afterStyles({ display: 'none' })
  animation.play()
}

const getPageByScore = (score: number) => {
  if (score <= 9) {
    return '/visual'
  } else if (score <= 18) {
    return '/auditive'
  } else {
    return '/kinesthetic'
  }
}

@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class SurveyPage implements AfterViewInit {
  currentQuestionCardEl: Element
  questions: Array<Question> = [
    {
      id: 1,
      question: "1. Si pudieras gastar cinco mil pesos en uno de los siguientes artículos, ¿qué escogerías?",
      answers: [
        {
          id: 'A',
          answer: "Un colchón nuevo",
          score: 1
        },
        {
          id: 'B',
          answer: "Un estereo nuevo",
          score: 2
        },
        {
          id: 'C',
          answer: "Un televisor nuevo",
          score: 3
        }
      ]
    },
    {
      id: 2,
      question: "¿2. Cuál es tu elección para pasar una tarde tranquila?",
      answers: [
        {
          id: 'A',
          answer: "Quedarte en casa y comer comida casera",
          score: 1
        },
        {
          id: 'B',
          answer: "Ir a un concierto",
          score: 2
        },
        {
          id: 'C',
          answer: "Ir al cine",
          score: 3
        }
      ]
    },
    {
      id: 3,
      question: "¿3. Cómo prefieres pasar un rato libre?",
      answers: [
        {
          id: 'A',
          answer: "Ir a la presentación de un libro",
          score: 1
        },
        {
          id: 'B',
          answer: "Hacer un paseo por los alrededores",
          score: 2
        },
        {
          id: 'C',
          answer: "Descansar y no ir a ninguna parte",
          score: 3
        }
      ]
    },
    {
      id: 4,
      question: "4. De vacaciones, ¿qué tipo de habitación solicitas en el hotel que te hospedas?",
      answers: [
        {
          id: 'A',
          answer: "Con vista panorámica de la ciudad",
          score: 1
        },
        {
          id: 'B',
          answer: "Que este lo más cerca de la playa",
          score: 2
        },
        {
          id: 'C',
          answer: "Totalment alejada del bullicio y del exterior",
          score: 3
        }
      ]
    },
    {
      id: 5,
      question: "¿5. Qué tipo de reunión social prefieres?",
      answers: [
        {
          id: 'A',
          answer: "Una boda",
          score: 1
        },
        {
          id: 'B',
          answer: "Una exposición de pintura",
          score: 2
        },
        {
          id: 'C',
          answer: "Una pequeña fiesta",
          score: 3
        }
      ]
    },
    {
      id: 6,
      question: "6. De estas tres opciones, ¿cuál te define mejor?",
      answers: [
        {
          id: 'A',
          answer: "Atlético",
          score: 1
        },
        {
          id: 'B',
          answer: "Intelectual",
          score: 2
        },
        {
          id: 'C',
          answer: "Humanitario",
          score: 3
        }
      ]
    },
    {
      id: 7,
      question: "¿7. Cuál es tu método de comunicación preferido?",
      answers: [
        {
          id: 'A',
          answer: "Correo electrónico o carta",
          score: 1
        },
        {
          id: 'B',
          answer: "Telefono",
          score: 2
        },
        {
          id: 'C',
          answer: "Persona a persona",
          score: 3
        }
      ]
    },
    {
      id: 8,
      question: "8. Si no encuentras tus llaves, ¿qué haces?",
      answers: [
        {
          id: 'A',
          answer: "Las busco mirando por todos lados",
          score: 1
        },
        {
          id: 'B',
          answer: "Sacudes los boolsillos o la cartera para oir el ruido",
          score: 2
        },
        {
          id: 'C',
          answer: "Buscas al tacto",
          score: 3
        }
      ]
    },
    {
      id: 9,
      question: "9. Si obtubieras el premio mayor. ¿qué harías con el dinero?",
      answers: [
        {
          id: 'A',
          answer: "Comprarte una hermosa casa y quedarte ahi",
          score: 1
        },
        {
          id: 'B',
          answer: "Viajar",
          score: 2
        },
        {
          id: 'C',
          answer: "Introducirte al mundo social",
          score: 3
        }
      ]
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngAfterViewInit() {
    this.currentQuestionCardEl = document.querySelector('.question-card:first-child')
    showQuestion(this.currentQuestionCardEl)
  }

  selectAnswer(qAnswer: QuestionAnswer) {
    this.questions = this.questions.map((question) => {

      if (question.id === qAnswer.questionId) {
        question.answers = question.answers.map((answer) => {

          return {
            ...answer,
            isSelected: answer.id === qAnswer.answerId
          }
        })
      }

      return question
    })
    hideQuestion(this.currentQuestionCardEl)
    this.currentQuestionCardEl = this.currentQuestionCardEl.nextElementSibling
    showQuestion(this.currentQuestionCardEl)
  }

  getScore() {
    const totalScore = this.questions.reduce((score, question) => {
      question.answers.forEach((answer) => {
        if (answer.isSelected) {
          score += answer.score
        }
      })
      return score
    }, 0)
    console.log(totalScore)
    this.router.navigate([getPageByScore(totalScore)])
  }

  trackByQuestion(_: number, question: Question) {
    return question.id
  }

}
