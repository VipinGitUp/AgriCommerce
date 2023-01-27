import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../httpservice/http-service.service';
import { NotificationService } from '../snackbar/notification.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public myForm!: FormGroup;
  constructor(private httpService: HttpService, public notificationService: NotificationService) {

  }

  ngOnInit() {
    this.myForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      lastname: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      contactno: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      emailid: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      address: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      type: new FormControl('', [Validators.required])
    });
  }

  public myError = (controlName: string, errorName: string) => {
    return this.myForm.controls[controlName].hasError(errorName);
  }

  newUser: any = {};

  addUser() {
    console.log('data:: ', this.newUser);
    this.notificationService.openSnackBar('User created successfully.', 'close', 'blue-snackbar');
    let url: string = "http://localhost:8080/agricommerce/user";
    let data: any = this.newUser;
    this.httpService.postRequest(url, data).subscribe(
      (response) => {

        console.log(response);
      },
      (error) => {
        console.log(error);
      });
  }




}
