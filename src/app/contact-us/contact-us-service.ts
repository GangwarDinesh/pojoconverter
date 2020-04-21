import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_COMMON_URL} from '../utils/common-util';
import { ContactUsModel } from '../models/contact-us-model';

@Injectable({
    providedIn: 'root'
})
export class ContactUsService{

    private POST_QUERY = API_COMMON_URL+"/contactus/postQuery";

    constructor(private httpClient: HttpClient){

    }

    public postQuery(contactUsModel: ContactUsModel){
        debugger
        return this.httpClient.post(this.POST_QUERY, contactUsModel);
    }
}