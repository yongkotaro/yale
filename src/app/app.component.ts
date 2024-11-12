import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component'; 
import { ProgramComponent } from './program/program.component'; 
import { AdmissionComponent } from './admission/admission.component';
import { EventComponent } from './event/event.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, ProgramComponent, AdmissionComponent, EventComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'yale';
}
