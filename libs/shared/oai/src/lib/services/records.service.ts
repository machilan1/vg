/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createRecord } from '../fn/records/create-record';
import { CreateRecord$Params } from '../fn/records/create-record';
import { deleteRecord } from '../fn/records/delete-record';
import { DeleteRecord$Params } from '../fn/records/delete-record';
import { getRecordById } from '../fn/records/get-record-by-id';
import { GetRecordById$Params } from '../fn/records/get-record-by-id';
import { getRecords } from '../fn/records/get-records';
import { GetRecords$Params } from '../fn/records/get-records';
import { Record } from '../models/record';
import { updateRecord } from '../fn/records/update-record';
import { UpdateRecord$Params } from '../fn/records/update-record';

@Injectable({ providedIn: 'root' })
export class RecordsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getRecords()` */
  static readonly GetRecordsPath = '/records';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRecords()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecords$Response(params?: GetRecords$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Record>>> {
    return getRecords(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRecords$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecords(params?: GetRecords$Params, context?: HttpContext): Observable<Array<Record>> {
    return this.getRecords$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Record>>): Array<Record> => r.body)
    );
  }

  /** Path part for operation `createRecord()` */
  static readonly CreateRecordPath = '/records';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createRecord()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createRecord$Response(params: CreateRecord$Params, context?: HttpContext): Observable<StrictHttpResponse<Record>> {
    return createRecord(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createRecord$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createRecord(params: CreateRecord$Params, context?: HttpContext): Observable<Record> {
    return this.createRecord$Response(params, context).pipe(
      map((r: StrictHttpResponse<Record>): Record => r.body)
    );
  }

  /** Path part for operation `getRecordById()` */
  static readonly GetRecordByIdPath = '/records/{recordId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRecordById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecordById$Response(params: GetRecordById$Params, context?: HttpContext): Observable<StrictHttpResponse<Record>> {
    return getRecordById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRecordById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecordById(params: GetRecordById$Params, context?: HttpContext): Observable<Record> {
    return this.getRecordById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Record>): Record => r.body)
    );
  }

  /** Path part for operation `deleteRecord()` */
  static readonly DeleteRecordPath = '/records/{recordId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteRecord()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRecord$Response(params: DeleteRecord$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteRecord(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteRecord$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRecord(params: DeleteRecord$Params, context?: HttpContext): Observable<void> {
    return this.deleteRecord$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `updateRecord()` */
  static readonly UpdateRecordPath = '/records/{recordId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateRecord()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRecord$Response(params: UpdateRecord$Params, context?: HttpContext): Observable<StrictHttpResponse<Record>> {
    return updateRecord(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateRecord$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRecord(params: UpdateRecord$Params, context?: HttpContext): Observable<Record> {
    return this.updateRecord$Response(params, context).pipe(
      map((r: StrictHttpResponse<Record>): Record => r.body)
    );
  }

}
