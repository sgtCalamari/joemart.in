import { Injectable } from '@angular/core';
import { Project } from './project';
import { PROJECTS } from './mock-projects';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  getProjects(): Project[] {
    return PROJECTS;
  }

  constructor() { }
}
