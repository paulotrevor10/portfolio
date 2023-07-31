import { Component, ElementRef, HostListener } from '@angular/core';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  
  constructor(private elementRef: ElementRef) {}
  
  scrollToHome(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  scrollToAbout(): void {
    const element = this.elementRef.nativeElement.querySelector('#about-page');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  scrollToContact(): void {
    const element = this.elementRef.nativeElement.querySelector('#contact-page');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  scrollToSkill(): void {
    const element = this.elementRef.nativeElement.querySelector('#skill-page');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  scrollToResume(): void {
    const element = this.elementRef.nativeElement.querySelector('#resume-page');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  redirectToFb() {
    const url = 'https://www.facebook.com/paulo.trevor.regacho.10';
    const win = window.open(url, '_blank');
    if (win) {
      win.opener = null;
    }
  }
  
  redirectToIg() {
    const url = 'https://www.instagram.com/trevrrtttt';
    const win = window.open(url, '_blank');
    if (win) {
      win.opener = null;
    }
  }
  
  redirectToLinkedIn() {
    const url = 'https://www.linkedin.com/in/paulo-trevor-regacho-5b5a00260';
    const win = window.open(url, '_blank');
    if (win) {
      win.opener = null;
    }
  }
  
  redirectToGithub() {
   
    const url = 'https://github.com/paulotrevor10';
    const win = window.open(url, '_blank');
    if (win) {
      win.opener = null;
    }
  }
}
