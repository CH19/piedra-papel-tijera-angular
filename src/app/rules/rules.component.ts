import { Component } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent {
  rules = [
    ' 🗿 Piedra aplasta lagarto.',
    '🦎 Lagarto envenena Spock.',
    ' 🖖 Spock destruye tijeras.',
    ' ✂️ Tijeras decapitan lagarto.',
    ' 🦎 Lagarto devora papel.',
    ' 📄 Papel desautoriza Spock.',
    '🖖 Spock vaporiza piedra.',
  ]
}
