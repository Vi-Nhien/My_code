import { DanhsachComponent } from './../danhsach.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-modal-option',
  templateUrl: './modal-option.component.html',
  styleUrls: ['./modal-option.component.scss']
})
export class ModalOptionComponent implements OnInit {
     
  users: User[] = []
  form ?: FormGroup
  constructor(private message: NzMessageService,
    private userService : UserService,
    private router : Router,
    private fb: FormBuilder) {}



  ngOnInit(): void {
  }

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }


  handleCancel(): void {
    this.isVisible = false;
  }

  // createMessage(type: string): void {
  //   this.message.success('This is a prompt message for success, and it will disappear in 10 seconds', {
  //     nzDuration: 10000;
  //   this.isVisible = false;
  // }

  deleteMessage(): void {
    this.message.success('Xóa Thành Công', {
      nzDuration: 3000
    });
    this.isVisible = false;
  }



  // deleteUser(user: User):void {
  //   if (user) {
  //     this.userService.deleteUser(user.id).subscribe(
  //       res => {
  //         console.log('complete');
  //         const index = this.users?.findIndex(m => m.id === user.id) || -1;
  //         if (index >= 0) {
  //           this.users?.splice(index, 1);
  //         }
  //       }
  //     )
  //   }
  //   this.router.navigate(['/user']);
  //   this.message.success('Xóa Thành Công', {
  //     nzDuration: 3000
  //   });
  //   this.isVisible = false;
  // }

}
