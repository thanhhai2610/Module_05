import {Component, OnInit} from '@angular/core';
import {Student} from '../model/student';
import {StudentService} from '../service/student.service';
import {Classroom} from '../model/classroom';

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
  p: number; // cài cho page
  deleteStudent: Student;

  message: string;


  constructor(private  studentService: StudentService) {
  }

  ngOnInit(): void {
    this.nameSearch = '';
    this.classroomSearch = '';
    this.p = 1;
    this.studentService.getList().subscribe(
      data => {
        this.students = data;
      });
    this.studentService.findAllClassRoom().subscribe(data => {
      this.classroomList = data;
    });
  }

  search(value1: string, value2: string) {
    this.nameSearch = value1;
    this.classroomSearch = value2;
    this.studentService.searchByNameAnd(this.nameSearch, this.classroomSearch).subscribe(data => {
      this.students = data;
    });
  }

  // modal xoa
  modalById(id: number) {
    this.studentService.findById(id).subscribe(data => {
      console.log(data);
      this.deleteStudent = data;
    });
  }

  deleteStudentById(id: number) {
    this.studentService.delete(id).subscribe(data => {
      this.message = 'Xoa Thanh cong!';
      this.ngOnInit();
    }, error => {
      this.message = 'Delete not success!';
    });
  }

}
