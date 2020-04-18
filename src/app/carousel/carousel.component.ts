import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [  
    { img: "../assets/img/carousel1.jpg" },  
    { img: "../assets/img/carousel1.jpg" },  
    { img: "../assets/img/carousel2.jpg" },  
    { img: "../assets/img/carousel2.jpg" }  
  ];  
  
  slideConfig = {  
    "slidesToShow": 1,  
    "slidesToScroll": 4,  
    "dots": true,  
    "infinite": true  
  }; 

}
