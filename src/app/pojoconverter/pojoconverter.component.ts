import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PojoConverterService } from './pojoconverter.service'

@Component({
  selector: 'app-pojoconverter',
  templateUrl: './pojoconverter.component.html',
  styleUrls: ['./pojoconverter.component.css']
})

export class PojoconverterComponent implements OnInit {

  reponse = "";
  error: string;
  reqObj = {
    email : 'dineshgngwr@gmail.com',
    mobile : '9699288328',
    address : 'Delhi'
  }

  constructor(private pojoConverterService: PojoConverterService) { 
    
  }

  ngOnInit(): void {
    this.pojoConverterService.sendGetRequest().subscribe((data: any)=>{
      console.log("***************This is ngOnInit**************");
      this.reponse = data.key;
    });
  }

  public createPojo(jsonstr: string){
    console.log("jsonstr::"+jsonstr)
    if(null != jsonstr && "" != jsonstr && this.validateInputJson(jsonstr)){
      this.error = "";
      this.pojoConverterService.sendPostRequest(jsonstr).subscribe(resp =>{
        console.log("***************This is postData**************");
        const blob = new Blob([resp], {
          type: 'application/zip'
        });
        const url = window.URL.createObjectURL(blob);
        var anchor = document.createElement("a");
        anchor.download = "JsonPojo.zip";
        anchor.href = url;
        anchor.click();
      });
    }else{
      return;
    }
  }
  public validateInputJson(jsonstr: string){
    try {
      JSON.parse(jsonstr);
    } catch (e) {
      this.error = "Invalid Json. Please try with valid Json.";
      console.log("Json parse exception : "+e);
      return false;
    }
    return true;
  }

}
