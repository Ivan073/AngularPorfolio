import { Injectable } from '@angular/core';
import {Tea} from "../shared/tea";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {baseURL} from "../shared/baseURL";

@Injectable({
  providedIn: 'root'
})
export class TeaServiceService {

  constructor(private http:HttpClient) { }

  public getTeas(): Observable<Tea[]> {
    return this.http.get<Tea[]>(baseURL + 'Teas');
  }

  getFeaturedTeas(): Observable<Tea[]>{
    return this.http.get<Tea[]>(baseURL + 'Teas'+"?featured=true");
  }
}
