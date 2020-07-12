import { Component, OnInit, OnDestroy, 
  ViewChild, ViewChildren, 
  ElementRef, QueryList } from '@angular/core';

import {ToggleCustomBindingComponent} from './toggle-custom-binding/toggle-custom-binding.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("templateVariableName") toggleComp: ToggleCustomBindingComponent;
  // OR : @ViewChild(ToggleCustomBindingComponent) toggleComp: ToggleCustomBindingComponent;

  toggleInside() {
    this.toggleComp.toggle();
  }

  @ViewChildren(ToggleCustomBindingComponent) toggleList: QueryList<ToggleCustomBindingComponent>; // return n components

  ngAfterViewInit() {
    console.log(this.toggleList);
  }

  inputType = 'text';

  user = {
    name: "user value",
    age: 20
  };

  two_way_bind = "two_way_bind_value";

  isCheck = true;

  onClickHanle() {
    alert('onClickHanle');
  }

  handlecustomChangeName(event){
    this.isCheck = event;
  }

  tsDataType(){
    let a:User; 
    
    a.name = "a"

    a.age= 123;
  }

}

interface User{
  name:string,
  age:number
}
