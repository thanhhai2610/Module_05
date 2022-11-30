import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Classroom} from "../model/classroom";
import {StudentService} from "../service/student.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  studentForm: FormGroup;
  id: number;
  classRoomList: Classroom[];

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getById(this.id);
    });
  }

  ngOnInit(): void {
    this.studentService.findAllClassRoom().subscribe(data => {
      this.classRoomList = data;
    });
  }

  getById(id: number) {
    return this.studentService.findById(id).subscribe(data => {
      this.studentForm = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
        point: new FormControl(data.point),
        age: new FormControl(data.age),
        classRoom: new FormControl(data.classRoom.name)
      });
    });
  }

  delete(id: number) {
    this.studentService.delete(id).subscribe(data => {
      this.router.navigate(['/']);
    });
  }


}
