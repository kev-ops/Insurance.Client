import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BenefitsDetail } from 'src/app/models/benefits';
import { Consumer } from 'src/app/models/consumer';
import { BaseService } from 'src/app/shared/base-service';
import { GetResult, SaveResult } from 'src/app/shared/response';
import { environment as env } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService extends BaseService {

  private consumerUrl = `${env.baseUrl}/api/consumer`;

  httpOtions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    super();
  }
  getAllConsumer(): Observable<GetResult<Consumer>> {
    let url = `${this.consumerUrl}/getall`;

    return this.http.get<GetResult<Consumer>>(url, this.httpOtions).pipe(
      catchError(this.handleError<any>("getAllConsumer"))
    )
  }
  getConsumerWithDetails(id: number): Observable<Consumer> {
    let url = `${this.consumerUrl}/getconsumerwithdetails?id=${id}`;

    return this.http.get<Consumer>(url).pipe(
      catchError(this.handleError<any>("getConsumerWithDetails"))
    )
  }
  getPreviewBenefit(consumer: Consumer): Observable<GetResult<BenefitsDetail>> {
    let url = `${this.consumerUrl}/getpreviewbenefit?insuranceSetupId=${consumer.insuranceSetupId}` +
      `&consumerName=${consumer.consumerName}&basicSalary=${consumer.basicSalary}&birthDate=${consumer.birthDate}`;

    return this.http.get<GetResult<BenefitsDetail>>(url).pipe(
      catchError(this.handleError<any>("getPreviewBenefit"))
    )
  }
  getBenefitDetails(id: number): Observable<BenefitsDetail[]> {
    let url = `${this.consumerUrl}/getbenefitdetailsbyconsumerid?id=${id}`;

    return this.http.get<BenefitsDetail[]>(url, this.httpOtions).pipe(
      catchError(this.handleError<any>("getBenefitDetails"))
    )
  }

  addConsumer(consumer: Consumer): Observable<SaveResult> {
    return this.http.post<SaveResult>(this.consumerUrl, consumer, this.httpOtions).pipe(
      catchError(this.handleError<any>("addConsumer"))
    )
  }
  updateConsumer(consumer: Consumer): Observable<SaveResult> {
    return this.http.put<SaveResult>(this.consumerUrl, consumer, this.httpOtions).pipe(
      catchError(this.handleError<any>("updateConsumer"))
    )
  }
  deleteConsumer(id: number): Observable<SaveResult> {
    let url = `${this.consumerUrl}/?id=${id}`;
    return this.http.delete<SaveResult>(url, this.httpOtions).pipe(
      catchError(this.handleError<any>("deleteConsumer"))
    )
  }
}
