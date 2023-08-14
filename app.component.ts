import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mytest_project';
  name="prasad";
  location="HYBERABAD";
  amount="120000"
  date=new Date();

}
