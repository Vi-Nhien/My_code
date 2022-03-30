
import { Infor, InformationService } from './../services/information.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';



export class NgbdModalContent {
  constructor(public activeModal: NgbActiveModal) { }
}



@Component({
  selector: 'app-list-information',
  templateUrl: './list-information.component.html',
  styleUrls: ['./list-information.component.scss']
})
export class ListInformationComponent implements OnInit {

  page = 1;
  pageSize = 10;

  public isCollapsed = true;

  public allInfors : Array<Infor> = []


  constructor(
    private modalService: NgbModal,
    private inforService: InformationService,
  ) { }

  ngOnInit(): void {
    this.getInfor();
  }

  getInfor() {
    this.inforService.getAllInfor().subscribe(
      res => {
        this.allInfors = res;
        console.log(this.allInfors)
      }
    )
  }


  open(content: any) {
    this.modalService.open(content);
  }







}
