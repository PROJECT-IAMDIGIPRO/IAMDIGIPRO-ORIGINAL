import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: any;

  
  constructor(private router: Router) {}
 

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateRouteFlags(event.url);
      }
    });
  }
  
isServiceRoute = false;
isSEORoute = false;
isSEMRoute = false;
isSMORoute = false;
isIMRoute = false;
isWADRoute = false;
isCDMRoute = false;
isLGRoute = false;
isConsultingRoute = false;
isEMRoute = false;
isAboutRoute = false;
isTrainingRoute = false;
isInternshipRoute = false;
isJORoute = false;
isPortfolioRoute = false;
isBlogsRoute = false;
isCURoute = false;
isLoginRoute = false;
isSignUpRoute = false;
isRegisterRoute = false;
isPPRoute = false;
isCPRoute = false;
isTOURoute = false;

updateRouteFlags(url: string): void {
  this.isSEORoute = url.startsWith('/searchengineoptimization');
  this.isSEMRoute = url.startsWith('/searchenginemarketing');
  this.isSMORoute = url.startsWith('/socialmediaoptimization');
  this.isIMRoute = url.startsWith('/influencermarketing');
  this.isWADRoute = url.startsWith('/webappdevelopment');
  this.isCDMRoute = url.startsWith('/contentdevelopmenmMarketing');
  this.isLGRoute = url.startsWith('/leadgeneration');
  this.isConsultingRoute = url.startsWith('/consulting');
  this.isEMRoute = url.startsWith('/emailmarketing');
  this.isAboutRoute = url.startsWith('/aboutus');
  this.isTrainingRoute = url.startsWith('/training');
  this.isInternshipRoute = url.startsWith('/internship');
  this.isJORoute = url.startsWith('/jobopportunity');
  this.isPortfolioRoute = url.startsWith('/portfolio');
  this.isBlogsRoute = url.startsWith('/blogs');
  this.isCURoute = url.startsWith('/consultus');
  this.isLoginRoute = url.startsWith('/static-data');
  this.isSignUpRoute = url.startsWith('/signup');
  this.isRegisterRoute = url.startsWith('/registration');
  this.isPPRoute = url.startsWith('/privacypolicy');
  this.isCPRoute = url.startsWith('/cookiepolicy');
  this.isTOURoute = url.startsWith('/terms');

  this.isServiceRoute = this.isSEORoute || this.isSEMRoute ||
   this.isSMORoute || this.isIMRoute || this.isWADRoute ||
    this.isCDMRoute || this.isLGRoute || this.isConsultingRoute ||
     this.isEMRoute || this.isAboutRoute || this.isTrainingRoute || 
     this.isInternshipRoute || this.isJORoute || this.isPortfolioRoute ||
     this.isBlogsRoute || this.isCURoute || this.isLoginRoute ||  this.isSignUpRoute ||
     this.isRegisterRoute ||  this.isPPRoute || this.isCPRoute || this.isTOURoute ;
}
  
visibleSection = 1;

toggleSection(currentSection: number) {
  switch (currentSection) {
    case 1:
      this.visibleSection = 2;
      break;
    case 2:
      this.visibleSection = 3;
      break;
    case 3:
      this.visibleSection = 4;
      break;
    case 4:
      this.visibleSection = 5;
      break;
    case 5:
      this.visibleSection = 1;
      break;
    default:
      this.visibleSection = 1;
      break;
  }
}

faqs = [
  {
    question: 'What is digital marketing and why is it important for my business?',
    answer: 'Digital marketing encompasses all marketing efforts that use the internet or an electronic device. It is important because it allows businesses to reach a larger audience, target specific demographics, and measure the effectiveness of their campaigns in real time.',
    isOpen: false
  },
  {
    question: 'What is the process for developing a website with your company?',
    answer: 'Digital marketing encompasses all marketing efforts that use the internet or an electronic device. It is important because it allows businesses to reach a larger audience, target specific demographics, and measure the effectiveness of their campaigns in real time.',
    isOpen: false
  },
  {
    question: 'What graphic design services do you offer?',
    answer: 'Digital marketing encompasses all marketing efforts that use the internet or an electronic device. It is important because it allows businesses to reach a larger audience, target specific demographics, and measure the effectiveness of their campaigns in real time.',
    isOpen: false
  },
  {
    question: 'What is influencer marketing and how can it benefit my business?',
    answer: 'Digital marketing encompasses all marketing efforts that use the internet or an electronic device. It is important because it allows businesses to reach a larger audience, target specific demographics, and measure the effectiveness of their campaigns in real time.',
    isOpen: false
  },
  {
    question: 'Can you work with influencers on different social media platforms?',
    answer: 'Digital marketing encompasses all marketing efforts that use the internet or an electronic device. It is important because it allows businesses to reach a larger audience, target specific demographics, and measure the effectiveness of their campaigns in real time.',
    isOpen: false
  }
];

toggleFaq(index: number) {
  this.faqs[index].isOpen = !this.faqs[index].isOpen;
}

}

