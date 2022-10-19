import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
})
export class UsersComponent {
  users = ["User 0001", "User 0002", "User 0003"];

  addUser() {
    const randomId = Math.round(Math.random() * 1000)
      .toString()
      .padStart(4, "000");
    this.users.push(`User ${randomId}`);
  }

  removeUser(index: number) {
    this.users.splice(index, 1)
  }
}
