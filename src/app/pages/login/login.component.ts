import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username?: string;
  password?: string;

  constructor(private router: Router,private toastr: ToastrService) {
  }

  onSubmit() {
    if (this.username == 'admin' && this.password == "Aaa@1234") {
      this.router.navigate(['/dashboard']);
    }else this.toastr.error('User Name or Password are wrong', 'Error');
  }
}
