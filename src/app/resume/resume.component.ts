import { Component  } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  
  private pdfUrl = 'assets/Paulo-Trevor-D.-Regacho-Resume.pdf';

  openResume() {
    window.open(this.pdfUrl, '_blank');
  }
  
  downloadResume() {
    const pdfUrl = 'assets/Paulo-Trevor-D.-Regacho-Resume.pdf';
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.download = 'Paulo Trevor D. Regacho Resume.pdf';
    anchor.click();
  }
}
