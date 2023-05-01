import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { PersonsService } from 'src/app/persons.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {

  constructor(private personService:PersonsService, private router:Router){}
  
  data: any

  form = new FormGroup({
    nombres: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    programa: new FormControl('', Validators.required),
  })

  addPerson(){
    this.data = this.form.value
    this.personService.addPerson(this.data).subscribe(data=>{
      this.router.navigate(['/']) //redirect to homepage
    })
  }
}
