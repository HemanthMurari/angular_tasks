import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


const API_URL="https://fakestoreapi.com/products/";
@Injectable({
  providedIn: 'root'
})
export class ProdService {

  constructor(private http: HttpClient) { }

  public get(): Observable<any> {
    return this.http.get(API_URL).pipe(map(res => res));
    
  }
}