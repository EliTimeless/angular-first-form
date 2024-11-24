import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
