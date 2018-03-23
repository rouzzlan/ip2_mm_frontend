import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {User} from "../../../../model/user";
import {UserService} from "../../../../services/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;
  options = [
    {name: 'ROLE_LEERLING', checked:false},
    {name: 'ROLE_LESGEVER', checked:false},
    {name: 'ROLE_BEHEERDER', checked:false},
  ];

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private ref:ChangeDetectorRef) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.getUser(params['email'])
        .subscribe(
          resUser => {
            this.user = resUser;

            for (let role of this.user.roles) {
              this.setChecked(role);
            }

            console.log(this.selectedRoles)
            this.ref.detectChanges();
          })
    });
  }

  setChecked(role: string) {
    this.options.map(obj => {
      if (obj.name == role) {
        console.log(obj.name + " checked")
        obj.checked = true;
      }
    });
  }

  get selectedRoles() {
    return this.options
      .filter(opt => opt.checked)
      .map(opt => opt.name)
  }

  public editUser(userForm: NgForm): void {
    this.user.roles = this.selectedRoles
    this.userService.editUser(this.user)
      .subscribe(response => {
               this.router.navigate(['/admin/users']);
                window.alert(this.user.email + " is aangepast");
              },
              err => console.log(err.toString())
            );
  }

  // public createUser(userForm: NgForm): void {
  //   // for(let role of this.selectedRoles) {
  //   //   console.log(role)
  //   // }
  //   this.newUser.roles = this.selectedRoles
  //
  //   this.userService.createUser(this.newUser)
  //     .subscribe(response => {
  //         this.router.navigate(['/admin/users']);
  //         window.alert(this.newUser.email + " is aangemaakt");
  //         userForm.reset();
  //       },
  //       err => console.log(err.toString())
  //     );
  // }
}
