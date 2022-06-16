import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  tigeen_menu: boolean = false;
  toggleMenu(): void {
    this.tigeen_menu = !this.tigeen_menu;
    console.log('toggleMenu open');
  }

  constructor() {}

  ngOnInit(): void {}
}
