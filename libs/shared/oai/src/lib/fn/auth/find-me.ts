/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FindMeResponse } from '../../models/find-me-response';

export interface FindMe$Params {
  userId: number;
}

export function findMe(http: HttpClient, rootUrl: string, params: FindMe$Params, context?: HttpContext): Observable<StrictHttpResponse<FindMeResponse>> {
  const rb = new RequestBuilder(rootUrl, findMe.PATH, 'get');
  if (params) {
    rb.query('userId', params.userId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FindMeResponse>;
    })
  );
}

findMe.PATH = '/auth/me';
