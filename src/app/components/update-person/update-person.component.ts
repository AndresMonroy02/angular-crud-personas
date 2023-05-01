import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { PersonsService } from 'src/app/persons.service';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent {
  person:any
  data: any

  constructor(private personService:PersonsService, private route: ActivatedRoute, private router:Router){}

  ngOnInit(): void{
    let id = this.route.snapshot.params['id']
    this.personService.getPersonById(id).subscribe(data=>{
      this.person = data
      console.log(data)
    })
  }

  form = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    programa: new FormControl('', Validators.required),
  })

  submit(){
    this.data = this.form.value
    this.person.nombres = this.data.nombres
    this.person.apellidos = this.data.apellidos
    this.person.programa = this.data.programa

    console.log(this.data)

    this.personService.updatePerson(this.person?.id, this.person).subscribe(data=>{
      console.log(data)
    })

    this.router.navigate(['/'])
  }
}
