import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  students: any[] = [];
  newStudent = { id: 0, name: '', age: 0 };

  constructor(private readonly studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  addStudent(): void {
    this.studentService.addStudent(this.newStudent).subscribe(data => {
      this.students.push(data);
      this.newStudent = { id: 0, name: '', age: 0 };
    });
  }
}
