import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor(private http: HttpClient) { }

  getInfo(): Observable<any> {
    return this.http.get(`${environment.nodeUrl}/info`);
  }

  getNodes(): Observable<any> {
    return this.http.get(`${environment.nodeUrl}/nodes`);
  }

  getHello(): Observable<any> {
    return this.http.get(`${environment.nodeUrl}/hello`);
  }

  postMessage(address: string, broadcast: boolean, message: string): Observable<any> {
    return this.http.post(`${environment.nodeUrl}/messages`, {
      address,
      broadcast,
      message
     });
  }

  getMessages(): Observable<any> {
    return this.http.get(`${environment.nodeUrl}/messages`);
  }

  deleteMessages(): Observable<any> {
    return this.http.delete(`${environment.nodeUrl}/messages`);
  }
}
