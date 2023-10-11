import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  pieces = ['🗿', '✂️', '📄', '🦎', '🖖'];
  empezar = false
  victory = ''
  existencia(message: string){
   const user2 = this.pieces[Math.floor((Math.random() * ((this.pieces.length - 1) - 0 + 1)) + 0)]
   let status
   const victorias = ((message == '🗿' && user2 == '🦎' ) || (message == '🦎' && user2 == '🖖') || (message == '🖖' && user2 == '✂️') || (message == '🦎' && user2 == '📄') || (message == '🖖' && user2 == '🗿'));
  if(message == user2 ){
    status = 'Empate'
  }else if(victorias){
    status = 'Ganaste'
  }else{
    status = 'Perdiste'
  }
  this.victory = `${status} tu utilizaste ${message}, tu adversario lanzo ${user2}`
  }
  startGame(){
    this.empezar = true;
    const button = document.querySelector('button')
    if(button){
      button.style.display = 'none'
    }
  }
}
