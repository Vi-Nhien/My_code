import { ListSchemaService } from './../list-kanban/list-schema.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-form-add',
  templateUrl: './modal-form-add.component.html',
  styleUrls: ['./modal-form-add.component.scss']
})
export class ModalFormAddComponent implements OnInit {

  form?: FormGroup
  constructor(
    private listSchemaSer: ListSchemaService,
    private fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      name: ['', Validators.required]
    })
  }

  // --modal-from-add--

  isVisible = false;
  isOkLoading = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
    this.form?.reset()
  }

  onSubmit() {
    console.log(this.form);
    this.listSchemaSer.addList(this.form?.value).subscribe(
      res=>{
        console.log(res)
      }
    )
  }
}

