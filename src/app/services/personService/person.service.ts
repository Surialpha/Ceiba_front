import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {ConfiguracionService} from './../configuration.service'
@Injectable({
  providedIn: 'root'
})

export class PersonServices {

  constructor(private httpClient: HttpClient, private urlRoot : ConfiguracionService) { }

  findAll(): Observable<any>{
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.httpClient.get(
      this.urlRoot.rootURL,
       {headers: headers}
      ).pipe(
           map((data) => {
             return data;
           }), catchError( error => {
             return throwError(error);
           })
        )
    }

    CreatePerson(person:any): Observable<any>{
      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('Accept', 'application/json');
      return this.httpClient.post(
        this.urlRoot.rootURL, person ,
         {headers: headers}
        ).pipe(
             map((data) => {
               return data;
             }), catchError( error => {
               return throwError(error );
             })
          )
      }



}
