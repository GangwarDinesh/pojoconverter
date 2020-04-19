import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import {QuoteModel} from '../models/quote-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public quotes: QuoteModel[];
  error: string;
  constructor(private homeService: HomeService) { 
    
  }

  ngOnInit(): void {
    this.homeService.sendGetRequest().subscribe(quotes=> this.quotes = quotes);
  }

  public createPojo(jsonstr: string){
    console.log("jsonstr::"+jsonstr)
      this.homeService.sendPostRequest(jsonstr).subscribe(resp =>{
        console.log("***************This is postData**************");
      });   
  }

}
