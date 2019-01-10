import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSingup(form: NgForm) {
    console.log('test');
    console.log(form.value.email);
    console.log(form.value.password);

    const email = form.value.email;
    const password = form.value.password;
    this.authService.singupUser(email, password);
  }
}
