import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';

import { ClientMessage} from './clientMessage.model';


@Injectable({
  providedIn: 'root'
})
export class FormAppService {

  constructor(private http: HttpClient) { }

  getAllMessages(): Observable<ClientMessage[]> {
    const url = `${environment.apiServerUrl}/api/Message/GetAllMessages`;
    return this.http.get<any>(url)
      .pipe(catchError(this.handleError));
  }

  sendClientMessages(clientMessage: string): Observable<ClientMessage> {
    const url = `${environment.apiServerUrl}/api/Message/InsertMessage?messageText=${clientMessage}`;
    console.log(url);
    return this.http.post<ClientMessage>(url, null)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return observableThrowError(errMsg);
  }
}

