import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { SkillModalComponent } from '../skill-modal/skill-modal.component';
import { Howl } from 'howler';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData: any = {};
  
  soundThankYou = new Howl({
    src: ['assets/thank-you.mp3'],
  });
  
  soundError = new Howl({
    src: ['assets/error.mp3'],
  });
  
  
  constructor(private http: HttpClient, public dialog: MatDialog) {}

  submitForm() {
    const formURL = 'https://formspree.io/f/xgejwplg'; // Replace with your Formspree form ID
    this.http.post(formURL, this.formData)
    .pipe(
      catchError((error: HttpErrorResponse) => {
      
        this.openModal('email-dialog-false');
        this.soundError.play();
        return throwError('Something went wrong. Please try again later.');
      })
    )
    .subscribe((response) => {
    
      this.formData = {
        email: '',
        message: ''
      };
      this.openModal('email-dialog-true');
      this.soundThankYou.play();
    });
  }
  
  openModal(id: string): void {
    const dialogRef = this.dialog.open(SkillModalComponent, {
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  
}
