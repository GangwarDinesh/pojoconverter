import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class PojoConverterService{
    private REST_API_URL = "http://192.168.0.108:8085/backend-services/home/welcome";

    private REST_POST_API_URL = "http://192.168.0.108:8085/backend-services/home/create";

    constructor(private httpClient: HttpClient){

    }

    public sendGetRequest(){
        const resp = this.httpClient.get(this.REST_API_URL);
        console.log("*******************"+resp)
        return resp;
    }

    public sendPostRequest(data: any){
        return this.httpClient.post(this.REST_POST_API_URL,data, {responseType: 'arraybuffer'});
    }
}