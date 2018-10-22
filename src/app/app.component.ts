import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Another Angular App';
  color = ['RED', 'YELLOW', 'XBlueXXX'];
  today = new Date();
  dollars = 123456;
  cost = 3.5589;
  percentcomplete = .85;
}
