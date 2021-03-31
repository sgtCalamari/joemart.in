import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';

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

  projects: Project[] = [];

  selectedProject: Project;
  onSelect(project: Project): void {
    this.selectedProject = project;
  }

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projects = this.projectService.getProjects();
  }

}
