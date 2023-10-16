import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
})
export class AboutPageComponent implements OnInit {
  aboutHeading: string = 'About Us';
  aboutparagraph1: string =
    'Welcome to Winter Tour, where passion meets expertise. Established with a vision to redefine experiences, we are dedicated to providing exceptional services and creating unforgettable moments for our clients. Our team consists of dedicated professionals who are driven by creativity, innovation, and a genuine love for what they do.';
  aboutparagraph2: string =
    'At Winter Tour, we believe in the power of personalized service. Whether you are planning a vacation, organizing a corporate event, or seeking adventure, we are here to turn your dreams into reality. With a focus on quality, integrity, and customer satisfaction, we strive to exceed expectations and deliver beyond ordinary.';
  aboutparagraph3: string =
    'Our journey began with a simple idea: to curate unique and tailored experiences that resonate with your aspirations. Over the years, we have evolved, but our commitment to excellence remains unwavering. From meticulously planned vacations to adrenaline-pumping adventures, we take pride in crafting journeys that leave a lasting impression.';
  aboutparagraph4: string =
    'Explore our website to discover a world of possibilities. Join us as we embark on a voyage filled with discovery, adventure, and unparalleled hospitality. Thank you for considering Winter Tour as your travel and event partner. We look forward to being a part of your memorable moments.';
  aboutparagraph5: string = 'Winter Tour - Where Dreams Take Flight.';
  constructor() {}

  ngOnInit(): void {}
}
