import { Component, OnInit } from '@angular/core';
import {Student} from "../model/student";
import {FormControl, FormGroup} from "@angular/forms";
import {StudentService} from "../service/student.service";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {


  studentList: Student[] = [];

  studentForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    point: new FormControl(),
    age: new FormControl(),
    classRoom: new FormControl()
  });


  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.findAllClassRoom().subscribe(data => {
      this.studentList = data;
    });
  }


  submit() {
    const product = this.studentForm.value;
    this.studentService.save(product).subscribe(data => {
      this.studentForm.reset();
    });
  }
}
