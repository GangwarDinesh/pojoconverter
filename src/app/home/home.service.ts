import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {QuoteModel} from '../models/quote-model';
import {map} from 'rxjs/operators';
import {API_COMMON_URL} from '../utils/common-util'

@Injectable({
    providedIn: 'root'
})
export class HomeService{

    private FETCH_QUOTES = API_COMMON_URL+"/quote/getQuotes";

    private POST_QUOTES = API_COMMON_URL+"/quote/postQuote";

    constructor(private httpClient: HttpClient){

    }

    public sendGetRequest(): Observable<QuoteModel[]> {
        return this.httpClient.get<QuoteModel[]>(this.FETCH_QUOTES).pipe(
          map(data => data.map(data => new QuoteModel().deserialize(data)))
        );
      }

    public sendPostRequest(quoteModel: QuoteModel){
        return this.httpClient.post(this.POST_QUOTES,quoteModel);
    }

}