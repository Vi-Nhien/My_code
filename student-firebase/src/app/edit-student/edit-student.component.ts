import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from '../shared/crud.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  editForm: FormGroup;
  constructor(
    private crudApi: CrudService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }
  ngOnInit() {
    this.updateStudentData();
    // paramMap Retrieves a single value for a parameter.
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi
      .GetStudent(id)
      .valueChanges()
      .subscribe((data) => {
        console.log(data)
        this.editForm.patchValue(data);
      });
  }
  get firstName() {
    return this.editForm.get('firstName');
  }
  get lastName() {
    return this.editForm.get('lastName');
  }
  get email() {
    return this.editForm.get('email');
  }
  get mobileNumber() {
    return this.editForm.get('mobileNumber');
  }
  updateStudentData() {
    this.editForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: [''],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ],
      ],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }
  goBack() {
    this.location.back();
  }
  updateForm() {
    this.crudApi.UpdateStudent(this.editForm.value);
    this.toastr.success(
      this.editForm.controls['firstName'].value + ' updated successfully'
    );
    this.router.navigate(['view-students']);
  }

}
