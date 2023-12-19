/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Category } from '../../models/category';

export interface CategoriesControllerFind$Params {
}

export function categoriesControllerFind(http: HttpClient, rootUrl: string, params?: CategoriesControllerFind$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Category>>> {
  const rb = new RequestBuilder(rootUrl, categoriesControllerFind.PATH, 'get');
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

categoriesControllerFind.PATH = '/categories';
