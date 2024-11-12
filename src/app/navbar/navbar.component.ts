import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showMenu = false;
  activeSection: string = ''; // Track the active section

  // Toggle menu visibility on small screens
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  // Update active section when an anchor is clicked
  setActiveSection(section: string) {
    this.activeSection = section;
  }

  // Check if a section is active
  isActive(section: string): boolean {
    return this.activeSection === section;
  }
}
