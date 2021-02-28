import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  constructor() { }
  public readonly rootURL = 'http://localhost:8080/api/person/';

}
