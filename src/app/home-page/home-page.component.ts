import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  touristDestinations: TouristDestination[] = [
    {
      name: 'Alpine Adventure',
      price: 1500,
      nights: 7,
      city: 'Chamonix',
      img: 'https://images.unsplash.com/photo-1567009694991-c26bee6f79ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80',
      description:
        'Experience the thrill of skiing and snowboarding on the slopes of the French Alps in Chamonix, a paradise for winter sports enthusiasts.',
    },
    {
      name: 'Snowy Wonderland',
      price: 1800,
      nights: 6,
      city: 'Aspen',
      img: 'https://images.unsplash.com/photo-1597776089867-1fbc459af100?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXNwZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=60',
      description:
        'Discover the charm of Aspen, renowned for its world-class ski resorts, breathtaking mountain views, and cozy winter ambiance.',
    },
    {
      name: 'Powder Paradise',
      price: 1600,
      nights: 5,
      city: 'Niseko',
      img: 'https://images.unsplash.com/photo-1590133604435-b3c70cb2de90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TmlzZWtvfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=60',
      description:
        'Immerse yourself in the deep powder snow of Niseko, Japan, offering excellent skiing, snowboarding, and relaxing hot springs.',
    },
    {
      name: 'Skiing Extravaganza',
      price: 1700,
      nights: 6,
      city: 'Zermatt',
      img: 'https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8WmVybWF0dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60',
      description:
        'Ski in the shadow of the iconic Matterhorn in Zermatt, Switzerland, known for its extensive ski terrain and charming alpine villages.',
    },
    {
      name: 'Winter Wonderland',
      price: 1400,
      nights: 7,
      city: 'Banff',
      img: 'https://images.unsplash.com/photo-1608235472173-d4918c4aeb49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEJhbmZmfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=60',
      description:
        'Explore the scenic slopes of Banff, Canada, amidst picturesque snow-covered landscapes, offering a perfect blend of adventure and relaxation.',
    },
    {
      name: 'Icy Adventures',
      price: 1550,
      nights: 6,
      city: 'Queenstown',
      img: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fFF1ZWVuc3Rvd24lMjB3aW50ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60',
      description:
        'Indulge in winter sports like skiing, snowboarding, and ice climbing in Queenstown, New Zealand, surrounded by stunning mountain ranges and serene lakes.',
    },
  ];
}

interface TouristDestination {
  name: string;
  price: number;
  nights: number;
  city: string;
  img: string;
  description: string;
}

////////////////////////////////
