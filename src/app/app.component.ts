import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tigeen_menu: boolean = false;
  toggleMenu(): void {
    this.tigeen_menu = !this.tigeen_menu;
    console.log('toggleMenu open');
  }
  // right = 'auto';

  // float = 'left';

  // tigeen_menu2: boolean = false;
  // addstyle(): void {
  //   // this.left = 'false';
  //   console.log('hi');
  //   // this.right = '0';

  //   this.tigeen_menu2 = !this.tigeen_menu2;
  // }
}
