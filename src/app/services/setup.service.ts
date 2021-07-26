import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Setup } from '../models/setup';
import { Observable } from 'rxjs';
import { GetResult, SaveResult } from '../shared/response';
import { BaseService } from '../shared/base-service';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SetupService extends BaseService {

  private setupUrl = `${env.baseUrl}/api/insurancesetup`;

  httpOtions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    super();
  }

  addSetup(setup: Setup): Observable<SaveResult> {
    return this.http.post<SaveResult>(this.setupUrl, setup, this.httpOtions).pipe(
      catchError(this.handleError<any>("addSetup"))
    )
  }

  getAllSetup(): Observable<GetResult<Setup>> {
    return this.http.get<GetResult<Setup>>(this.setupUrl).pipe(
      catchError(this.handleError<any>("getAllSetup"))
    )
  }
  updateSetup(setup: Setup): Observable<SaveResult> {
    return this.http.put<SaveResult>(this.setupUrl, setup, this.httpOtions).pipe(
      catchError(this.handleError<any>("updateSetup"))
    )
  }
  deleteSetup(id: number): Observable<SaveResult> {
    // let deleteHttp = {
    //   headers: this.httpOtions.headers,
    //   body: id
    // }
    return this.http.delete<SaveResult>(`${this.setupUrl}?id=${id}`, this.httpOtions).pipe(
      catchError(this.handleError<any>("deleteSetup"))
    )
  }
  // return this.http.delete<SaveResult>(this.setupUrl, deleteHttp).pipe(
  //   catchError(this.handleError<any>("deleteSetup"))
  // )
}



