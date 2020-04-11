import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  reponse = "";
  error: string;
  reqObj = {
    email : 'dineshgngwr@gmail.com',
    mobile : '9699288328',
    address : 'Delhi'
  }

  constructor(private userService: UserService) { 
    
  }

  ngOnInit(): void {
    this.userService.sendGetRequest().subscribe((data: any)=>{
      console.log("***************This is ngOnInit**************");
      this.reponse = data.key;
    });
  }

  public createPojo(jsonstr: string){
    console.log("jsonstr::"+jsonstr)
    if(null != jsonstr && "" != jsonstr && this.validateInputJson(jsonstr)){
      this.error = "";
      this.userService.sendPostRequest(jsonstr).subscribe(resp =>{
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
