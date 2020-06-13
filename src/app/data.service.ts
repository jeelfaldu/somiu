import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private _url = "https://crudaip.herokuapp.com/";
  constructor(private _http: HttpClient) { }

  public UserData(id){
    return this._http.get<any>("https://crudaip.herokuapp.com/usredata/"+,{headers:this.headers});
  }
}
