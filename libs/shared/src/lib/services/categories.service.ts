/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { categoriesControllerFind } from '../fn/categories/categories-controller-find';
import { CategoriesControllerFind$Params } from '../fn/categories/categories-controller-find';
import { Category } from '../models/category';

@Injectable({ providedIn: 'root' })
export class CategoriesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `categoriesControllerFind()` */
  static readonly CategoriesControllerFindPath = '/categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoriesControllerFind()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoriesControllerFind$Response(params?: CategoriesControllerFind$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Category>>> {
    return categoriesControllerFind(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `categoriesControllerFind$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoriesControllerFind(params?: CategoriesControllerFind$Params, context?: HttpContext): Observable<Array<Category>> {
    return this.categoriesControllerFind$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Category>>): Array<Category> => r.body)
    );
  }

}
