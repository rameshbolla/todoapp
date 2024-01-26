import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuModule } from '../_Models/MenuModule';

@Injectable({
  providedIn: 'root'
})
export class MenuModuleService {

  constructor(protected httpClient: HttpClient) {}

 public GetAllModules(): Observable<any[]> {
    return this.httpClient.get<MenuModule[]>('/api/MenuModule/all');
  }

  public GetModuleDetails(moduleId: number){
    return this.httpClient.get<MenuModule>('/api/MenuModule',{ params: new HttpParams().set('moduleId', moduleId )});
  }

  public DeleteModuleDetails(moduleId: number){
    return this.httpClient.delete<any>('/api/MenuModule',{ params: new HttpParams().set('moduleId', moduleId )});
  }

  public CreateModule(data: MenuModule){
    return this.httpClient.post<any>('/api/MenuModule',{data});
  }

  public UpdateModule(data: MenuModule){
    return this.httpClient.put<any>('/api/MenuModule',{data});
  }
}
