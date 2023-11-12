import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent implements OnInit {
  options: any;

  overlays: any[] = [];

  dialogVisible: boolean = false;

  markerTitle: string = '';

  selectedPosition: any;

  infoWindow: any;

  draggable: boolean = false;

  name: string = '';

  email: string = '';

  message: string = '';
  content: any[] = [
    { icon: 'pi pi-fw pi-phone', title: 'Phone', info: '+971569757996' },
    {
      icon: 'pi pi-fw pi-envelope',
      title: 'Email',
      info: 'reem_tai@hotmail.com',
    },
    {
      icon: 'pi pi-fw pi-instagram',
      title: 'Instagram',
      info: 'https://www.instagram.com/rimtaiii/',
    },
  ];

  contactForm!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly http: HttpClient,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      placeHolder: 'Contact Form',
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  submitForm() {
    const url = 'https://formspree.io/f/maygzyqk';
    this.http.post(url, this.contactForm.value).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Message Sent',
      });
    });
  }

  navigate(item: any): void {
    let url = '';
    switch (item.title.toLowerCase()) {
      case 'phone':
        url = `https://wa.me/${item.info}`;
        break;
      case 'email':
        url = `mailto:${item.info}`;
        break;
      case 'instagram':
        url = item.info;
        break;
      default:
        url = '#';
        break;
    }
    window.open(url, '_blank');
  }
}
