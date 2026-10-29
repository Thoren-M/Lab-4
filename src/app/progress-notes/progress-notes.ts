import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, FormsModule],
  selector: 'app-progress-notes',
  styleUrl: './progress-notes.css',
  templateUrl: './progress-notes.html',
})
export class ProgressNotes {
  progressNote = 'Initial Progress Note';
  progressForm = new FormGroup({
  projectName: new FormControl(''),
  dueDate: new FormControl(''),
  currentStatus: new FormControl(''),
  teamMember: new FormControl(''),
  projectCode: new FormControl(''),
});
  errorMessage: 'Progress Code Not Found' | null = null
clearError() {
  this.errorMessage= null;
}

 
OnProjectCodeBlur() {
    const projectCodeControl = this.progressForm.controls.projectCode;
    const projectNameControl = this.progressForm.controls.projectName;
    const currentprojectCode = projectCodeControl.value?.trim();
   
    if (currentprojectCode == "PPT101") {
      projectNameControl.setValue('Project Progress Tracker')
    }
    if (currentprojectCode == "WEB202") {
      projectNameControl.setValue('Website Redesign')
    }
    if (currentprojectCode == "APP303") {
      projectNameControl.setValue('Mobile Application Development')
    }
    if (currentprojectCode == "DATA404") {
      projectNameControl.setValue('Data Analytics Dashboard')
    }
    if (currentprojectCode !== "PPT101" && currentprojectCode !== "WEB202" && currentprojectCode !== "APP303" && currentprojectCode !== "DATA404") {
      this.errorMessage = 'Progress Code Not Found';
      projectNameControl.setValue('')
    }
}

}