import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animation, AnimationKeyFrames, createAnimation } from '@ionic/angular';


const fadeInRight: AnimationKeyFrames = [
  {
    offset: 0,
    opacity: 0,
    transform: 'translate3d(100%, 0, 0)',
  },
  {
    offset: 1,
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
  }
]

const fadeInDown: AnimationKeyFrames = [
  {
    offset: 0,
    opacity: 0,
    transform: 'translate3d(0, -100%, 0)',
  },
  {
    offset: 1,
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
  }
]

const fadeInUp: AnimationKeyFrames = [
  {
    offset: 0,
    opacity: 0,
    transform: 'translate3d(0, 100%, 0)',
  },
  {
    offset: 1,
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
  }
]

const showImage = (el: Element, keyframes: AnimationKeyFrames) => {
  const animation: Animation = createAnimation()
    .addElement(el)
    .duration(1000)
    .keyframes(keyframes)
    .beforeStyles({ opacity: 0.2 })
  animation.play()
}

const pageContent = {
  'auditive': {
    title: 'Personalidad auditiva',
    image: './../../assets/images/auditive.jpg',
    description: 'Las personas que son más auditivas tienden a recordar mejor la información siguiendo y rememorando una explicación oral. Este sistema no permite abstraer o relacionar conceptos con la misma facilidad que el visual, pero resulta fundamental para el aprendizaje de cosas como la música y los idiomas.'
  },
  'visual': {
    title: 'Personalidad visual',
    image: './../../assets/images/visual.jpg',
    description: 'El sistema de representación visual tiende a ser el sistema de representación dominante en la mayoría de las personas. Ocurre cuando uno tiende a pensar en imágenes y a relacionarlas con ideas y conceptos. Como por ejemplo cuando uno recurre a mapas conceptuales para recordar ideas, conceptos y procesos complejos. Por lo mismo, éste sistema está directamente relacionado con nuestra capacidad de abstracción y planificación.'
  },
  'kinesthetic': {
    title: 'Personalidad kinestésica',
    image: './../../assets/images/kinest.jpg',
    description: 'Se trata del aprendizaje relacionado a nuestras sensaciones y movimientos. En otras palabras, es lo que ocurre cuando aprendemos más fácilmente al movernos y tocar las cosas, como cuando caminamos al recitar información o hacemos un experimento manipulando instrumentos de laboratorio. Este sistema es más lento que los otros dos, pero tiende a generar un aprendizaje más profundo y difícil de olvidar, como cuando aprendemos a andar en bicicleta.'
  }
}

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage {
  public id: string;
  image: string
  description: string
  title: string

  constructor(private activatedRoute: ActivatedRoute) { }

  ionViewWillEnter() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    const content = pageContent[this.id]
    if (content) {
      this.title = content.title
      this.image = content.image
      this.description = content.description
    }
  }

  ionViewDidEnter() {
    setTimeout(() => {
      showImage(document.querySelector('ion-title'), fadeInDown)
      showImage(document.querySelector('.wrapper-img'), fadeInRight)
      showImage(document.querySelector('p'), fadeInUp)
    }, 200)
  }

}
