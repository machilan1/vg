/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Category } from '../../models/category';

export interface FindCategories$Params {
}

export function findCategories(http: HttpClient, rootUrl: string, params?: FindCategories$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Category>>> {
  const rb = new RequestBuilder(rootUrl, findCategories.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Category>>;
    })
  );
}

findCategories.PATH = '/categories';
