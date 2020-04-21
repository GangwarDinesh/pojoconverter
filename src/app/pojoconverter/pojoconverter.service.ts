import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {API_COMMON_URL} from '../utils/common-util';

@Injectable({
    providedIn: 'root'
})

export class PojoConverterService{

    private FETCH_API = API_COMMON_URL+"/pojoconverter/welcome";

    private POST_API = API_COMMON_URL+"/pojoconverter/create";


    constructor(private httpClient: HttpClient){

    }

    public sendGetRequest(){
        const resp = this.httpClient.get(this.FETCH_API);
        return resp;
    }

    public sendPostRequest(data: any){
        return this.httpClient.post(this.POST_API,data, {responseType: 'arraybuffer'});
    }
}