/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Category } from '../models/category';
import { findCategories } from '../fn/categories/find-categories';
import { FindCategories$Params } from '../fn/categories/find-categories';

@Injectable({ providedIn: 'root' })
export class CategoriesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findCategories()` */
  static readonly FindCategoriesPath = '/categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  findCategories$Response(
    params?: FindCategories$Params,
    context?: HttpContext,
  ): Observable<StrictHttpResponse<Array<Category>>> {
    return findCategories(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findCategories(
    params?: FindCategories$Params,
    context?: HttpContext,
  ): Observable<Array<Category>> {
    return this.findCategories$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Category>>): Array<Category> => r.body),
    );
  }
}
