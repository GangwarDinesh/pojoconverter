import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {QuoteModel} from '../models/quote-model';
import {map} from 'rxjs/operators';
import {CONSTANTS_VALUES} from '../utils/common-util'

@Injectable({
    providedIn: 'root'
})
export class HomeService{
    private API_COMMON_URL =  CONSTANTS_VALUES.SERVER_PROTOCOL+
                              CONSTANTS_VALUES.SERVER_IP+
                              CONSTANTS_VALUES.SERVER_PORT+
                              CONSTANTS_VALUES.SERVER_CONTEXT_PATH+
                              CONSTANTS_VALUES.SERVER_API_VERSION;

    private FETCH_QUOTES = this.API_COMMON_URL+"/quote/getQuotes";

    private POST_QUOTES = this.API_COMMON_URL+"/quote/postQuote";

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