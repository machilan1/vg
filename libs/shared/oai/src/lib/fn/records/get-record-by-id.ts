/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Record } from '../../models/record';

export interface GetRecordById$Params {
  recordId: number;
}

export function getRecordById(http: HttpClient, rootUrl: string, params: GetRecordById$Params, context?: HttpContext): Observable<StrictHttpResponse<Record>> {
  const rb = new RequestBuilder(rootUrl, getRecordById.PATH, 'get');
  if (params) {
    rb.path('recordId', params.recordId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Record>;
    })
  );
}

getRecordById.PATH = '/records/{recordId}';
