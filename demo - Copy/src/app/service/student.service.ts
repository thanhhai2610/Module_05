import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Student} from "../model/student";
import {Observable} from "rxjs";
import {Classroom} from "../model/classroom";

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(private httpClient: HttpClient) {
  }


  getList() {
    return this.httpClient.get<Student[]>(
      environment.api_url_student);
  }

  findAllClassRoom() {
    return this.httpClient.get<Classroom[]>(environment.api_url_classRoom);
  }

  save(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(
      environment.api_url_student, student);
  }

  findById(id: number) {
    return this.httpClient.get<Student>(environment.api_url_student + '/' + id);
  }

  delete(id: number): Observable<Student> {
    return this.httpClient.delete<Student>(environment.api_url_student + '/' + id);
  }

  update(id: number, student: Student): Observable<Student> {
    return this.httpClient.put<Student>(environment.api_url_student + '/' + id, student);
  }

  searchByNameAndCategory(name: string, classroom: string): Observable<Student[]>{
    return this.httpClient.get<Student[]>(environment.api_url_student+`?name_like=${name}&classRoom.name_like=${classroom}`);
  }

}
