import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {ProjectsListModel} from "../model/projects-list.model";

@Injectable()
export class ProjectsListService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProjectsListModel[]>{
    return this._httpClient.get<ProjectsListModel[]>('assets/data/projects.json')
  }
}
