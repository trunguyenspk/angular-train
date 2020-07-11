import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-self-train';

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

}
