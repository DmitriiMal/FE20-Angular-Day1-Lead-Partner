import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  heroHeading1: string = 'We are your ultimate';
  heroHeading2: string = 'Winter experience Provider!';
  heroText: string =
    `With hundreds of winter holiday destinations offered, we are your natural
  choice for planning it all out`!;
  heroBtnText: string = 'Lern more';
  heroBtnURL: string = '#';

  constructor() {}
  ngOnInit(): void {}
}
