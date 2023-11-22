import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseUrl:string='';

  constructor(
    private http:HttpClient
  ) {
    this.baseUrl = environment.urlData;
  }


  getProfileData():Observable<Profile>{
    return this.http.get<Profile>(this.baseUrl);
  }
}
