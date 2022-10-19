import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
})
export class ProjectsComponent {

  projects = ["project 0001", "project 0002", "project 0003"];

  addProject() {
    const randomId = Math.round(Math.random() * 1000)
      .toString()
      .padStart(4, "000");
    this.projects.push(`project ${randomId}`);
  }

  removeProject(index: number) {
    this.projects.splice(index, 1);
  }
}
