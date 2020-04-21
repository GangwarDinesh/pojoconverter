import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import {QuoteModel} from '../models/quote-model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quotationForm: FormGroup;
  submitted = false;
  public quotes: QuoteModel[];
  error: string;

  constructor(private homeService: HomeService, private formBuilder: FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.quotationForm = this.formBuilder.group({
      quoteOwnerName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      quoteText: ['', Validators.required]
   });
    this.homeService.sendGetRequest().subscribe(quotes=> this.quotes = quotes);
  }

  get f() { return this.quotationForm.controls; }

  onSubmit(){
    this.submitted = true;
    if (this.quotationForm.invalid) {
      return;
    }
      this.homeService.sendPostRequest(this.quotationForm.value).subscribe(resp =>{
        this.homeService.sendGetRequest().subscribe(quotes=> this.quotes = quotes);
        this.submitted = false;
        this.quotationForm.reset();
      });   
  }
  onReset() {
    this.submitted = false;
    this.quotationForm.reset();
  }

}
