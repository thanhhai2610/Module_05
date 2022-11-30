import {Component, OnInit} from '@angular/core';
import {Student} from "../model/student";
import {StudentService} from "../service/student.service";
import {Classroom} from "../model/classroom";

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  students: Student[] = [];
  classroomList: Classroom[] = [];
  nameSearch: string;
  classroomSearch: string;
  detailStudent: Student;
  p: number = 1; // cài cho page


  constructor(private  studentService: StudentService) {
  }

  ngOnInit(): void {
    this.nameSearch = '';
    this.classroomSearch = '';
    this.studentService.getList().subscribe(
      data => {
        this.students = data;
      });
    this.studentService.findAllClassRoom().subscribe(data=>{
      this.classroomList = data;
    });
  }

  search(value1: string, value2: string) {
    this.nameSearch = value1;
    this.classroomSearch = value2;
    this.studentService.searchByNameAndCategory(this.nameSearch, this.classroomSearch).subscribe(data => {
      this.students = data;
    });
  }

}
