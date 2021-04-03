import { Component, OnInit } from '@angular/core';

import { Project } from '../project';
import { ProjectService } from '../project.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  project: Project = {
    id: 1,
    name: "Face Masks"
  };

  selectedProject?: Project;
  projects: Project[] = [];

  constructor(private projectService: ProjectService, private messageService:
    MessageService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
    this.messageService.add(`ProjectsComponent: Selected project id=${project.id}`);
  }

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

}
