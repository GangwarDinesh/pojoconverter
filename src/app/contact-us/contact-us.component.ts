import { Component, OnInit } from '@angular/core';
import { ContactUsModel } from '../models/contact-us-model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ContactUsService } from './contact-us-service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  submitted = false;
  message: string;

  public quotes: ContactUsModel[];

  constructor(private contactUsService: ContactUsService , private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
   });
  }
  
  
  onSubmit(){
    debugger
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    console.log("success.................."+this.contactForm);

    this.contactUsService.postQuery(this.contactForm.value).subscribe(resp=>{
      console.log("response from postquery:"+resp);
      this.submitted = false;
      this.contactForm.reset();
      if(resp){
        this.message = "<p style='color: green;font-weight: bold;'>Your query has been submitted successfully.</p>";
      }else{
        this.message = "<p style='color: red;font-weight: bold;'>Query submission failed. please try again.</p>";
      }
    });
  }

  get f() { return this.contactForm.controls; }

}
