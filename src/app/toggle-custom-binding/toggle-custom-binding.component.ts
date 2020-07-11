import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-custom-binding',
  templateUrl: './toggle-custom-binding.component.html',
  styleUrls: ['./toggle-custom-binding.component.css']
})
export class ToggleCustomBindingComponent implements OnInit {
  @Input() checked : boolean;

  @Output()  customChangeName= new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {}

  toggle() {
    this.customChangeName.emit(!this.checked);
  }
}
