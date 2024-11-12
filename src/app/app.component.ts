import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component'; 
import { ProgramComponent } from './program/program.component'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, ProgramComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'yale';
}
