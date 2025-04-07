import { Component, OnInit } from '@angular/core';//importation des decorateurs pour creer un composant angular
import { CommonModule } from '@angular/common';//importation de commonModule pour utiliser les directives angular
import { FormsModule } from '@angular/forms';//importation de FormsModule pour utiliser les formulaires angular
import { StudentService } from './student.service';//importation de StudentService pour utiliser le service de l'app
@Component({
  selector: 'app-root',//definition du selector de l'app
  standalone: true,//indique que l'app est standalone
  imports: [CommonModule, FormsModule],//liste des modules importés
  templateUrl: './app.component.html',//chemin du template de l'app
  styleUrls: ['./app.component.css']//chemin du style de l'app
})
export class AppComponent implements OnInit {//definition de la classe AppComponent qui implemente OnInit
  students: any[] = [];//declaration d'un tableau d'objets students
  newStudent = { id: 0, name: '', age: 0 };//declaration d'un objet newStudent avec des valeurs par defaut
  constructor(private readonly studentService: StudentService) {}//constructeur de la classe AppComponent qui injecte le service StudentService
  ngOnInit(): void {//methode qui s'execute lors de l'initialisation du composant
    this.getStudents();//appelle la methode getStudents pour recuperer les etudiants
  }
  getStudents(): void {//methode pour recuperer les etudiants
    this.studentService.getStudents().subscribe(data => {//apelle le service getStudents et s'abonne aux donnees
      this.students = data;//met a jour le tableau students avec les donnees recuperees
    });
  }
  addStudent(): void {//methode pour ajouter un etudiant
    this.studentService.addStudent(this.newStudent).subscribe(data => {//appelle le service addStudent et s'abonne aux donnees
      this.students.push(data);//ajoute l'etudiant recupere au tableau students
      this.newStudent = { id: 0, name: '', age: 0 };//reinitialise l'objet newStudent avec des valeurs par defaut
    });
  }
}
