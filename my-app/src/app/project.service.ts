import { Injectable } from '@angular/core';
import { Project } from './project';
import { PROJECTS } from './mock-projects';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  getProjects(): Observable<Project[]> {
    const projects = of(PROJECTS);
    this.messageService.add('ProjectService: fetched projects');
    return projects;
  }

  constructor(private messageService: MessageService) { }
}
