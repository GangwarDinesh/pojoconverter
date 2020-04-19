import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {QuoteModel} from '../models/quote-model';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HomeService{

    private FETCH_QUOTES = "http://192.168.0.108:8085/backend-services/api/quote/getQuotes";

    private POST_QUOTES = "http://192.168.0.108:8085/backend-services/api/quote/postQuote";

    constructor(private httpClient: HttpClient){

    }

    public sendGetRequest(): Observable<QuoteModel[]> {
        return this.httpClient.get<QuoteModel[]>(this.FETCH_QUOTES).pipe(
          map(data => data.map(data => new QuoteModel().deserialize(data)))
        );
      }

    public sendPostRequest(data: any){
        return this.httpClient.post(this.POST_QUOTES,data, {responseType: 'json'});
    }

}