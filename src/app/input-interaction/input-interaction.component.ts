import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-interaction',
  templateUrl: './input-interaction.component.html',
  styleUrls: ['./input-interaction.component.css']
})
export class InputInteractionComponent implements OnInit {

  @Input() backgroundColor: string;
  @Input() progressColor: string;
  @Input() progress = 0;
  @Input() align = "";

  //Alias Property
  @Input('externalPropAlias') internalPropName: string = "";

  _valueFromInput: string;

  constructor() {}

  //use this when need to validate input value
  @Input()
  set validateProp(value: string) {
    this._valueFromInput = value.trim();
  }
  get validateProp(){
    return this._valueFromInput;
  }

  ngOnInit(): void {
    if (!this.progress) {
      throw new Error('avatarUrl is required!');
    }
  }

}
