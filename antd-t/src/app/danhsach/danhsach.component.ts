import { User } from './../model/user';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danhsach',
  templateUrl: './danhsach.component.html',
  styleUrls: ['./danhsach.component.scss']
})
export class DanhsachComponent implements OnInit {


  users: User[] = []
  constructor(
    private userSerive: UserService
  ) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    this.userSerive.getAllUser().subscribe(
      res => {
        this.users = res;
        console.log(this.users)
      },
      err =>{
        console.log(err)
      }
    )
  }


  expandSet = new Set<string>();
  onExpandChange(id: string, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
}


