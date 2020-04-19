import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {CONSTANTS_VALUES} from '../utils/common-util';

@Injectable({
    providedIn: 'root'
})

export class PojoConverterService{
    
    private API_COMMON_URL =  CONSTANTS_VALUES.SERVER_PROTOCOL+
                              CONSTANTS_VALUES.SERVER_IP+
                              CONSTANTS_VALUES.SERVER_PORT+
                              CONSTANTS_VALUES.SERVER_CONTEXT_PATH+
                              CONSTANTS_VALUES.SERVER_API_VERSION;

    private FETCH_API = this.API_COMMON_URL+"/pojoconverter/welcome";

    private POST_API = this.API_COMMON_URL+"/pojoconverter/create";


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