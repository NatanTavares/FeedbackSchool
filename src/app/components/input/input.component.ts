import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  
  constructor() { }

  @Input('tipo')
  tipo: string = 'number';
  
  @Input('legenda')
  legenda: string = 'A definir';

  @Input('nome')
  nome: string = 'input';

  ngOnInit() {}

}
