import {Component, OnInit} from '@angular/core';
import {Student} from '../model/student';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../service/student.service';
import {Classroom} from '../model/classroom';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  classRoom: Classroom[] = [];

  rfStudent: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    point: new FormControl(),
    age: new FormControl(),
    classRoom: new FormControl()
  });

  message: string;


  constructor(private studentService: StudentService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.studentService.findAllClassRoom().subscribe(data => {

      this.rfStudent = this.formBuilder.group(
        {
          name: ['',
            [Validators.required, Validators.minLength(5)]],
          point: ['',
            [Validators.required]],
          age: ['',
            [Validators.required]],
          classRoom: ['',
            [Validators.required]]
        });

      this.classRoom = data;

    });
  }


  submit() {
    const product = this.rfStudent.value;
    this.studentService.save(product).subscribe(data => {
      this.router.navigate(['/']);
      this.rfStudent.reset();
      this.message = 'Them moi thanh cong!';

    });
  }

}
