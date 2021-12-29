import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    company: new FormControl(''),
    subject: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email]),
    description: new FormControl('', [Validators.required, Validators.minLength(1)]),
  })

  onSubmit(){
    if(!this.contactForm.invalid){
      console.log(this.contactForm.value)
    }
  }
  ngOnInit(): void {
  }

}
