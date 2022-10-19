import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
})
export class GroupsComponent {

  groups = ["group 0001", "group 0002", "group 0003"];

  addGroup() {
    const randomId = Math.round(Math.random() * 1000)
      .toString()
      .padStart(4, "000");
    this.groups.push(`group ${randomId}`);
  }

  removeGroup(index: number) {
    this.groups.splice(index, 1)
  }

}
