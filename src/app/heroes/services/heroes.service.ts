import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private httpClient:HttpClient) { }

  getHeroes():Observable<Heroe[]> {
    return this.httpClient.get<Heroe[]>(`${environment.baseUrl}/heroes`);
  }

  getHeroe(id:string):Observable<Heroe> {
    return this.httpClient.get<Heroe>(`${environment.baseUrl}/heroes/${id}`);
  }

  getSuggest(term:string): Observable<Heroe []> {
    return this.httpClient.get<Heroe[]>(`${environment.baseUrl}/heroes?q=${term}&_limit=6`)
  }
}
