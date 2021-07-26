import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment as env } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class BaseService {

    protected handleError<T>(operation = '', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            alert(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.

            return of(result as T);
        };
    }
}
