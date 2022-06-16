import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  get auth(): any{
    return localStorage.getItem('authenticated');
  }

  delete(){
    localStorage.removeItem('authenticated');
  }

  get(){
    localStorage.setItem("authenticated", "false");
  }
  
}
