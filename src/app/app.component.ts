import { Component,OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-self-train';

  user = {
    name: "user name",
    age: 20
  };

  type = 'text';

  onClickHanle() {
    alert("Inside Angular Component method");
  }

}
