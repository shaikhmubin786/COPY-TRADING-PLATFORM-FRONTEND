import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  currentTime = '';

  ngOnInit() {

    this.updateTime();

    setInterval(() => {
      this.updateTime();
    }, 1000);

  }

  updateTime() {

    const now = new Date();

    this.currentTime = now.toLocaleTimeString(
      'en-IN',
      {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }
    );

  }

}