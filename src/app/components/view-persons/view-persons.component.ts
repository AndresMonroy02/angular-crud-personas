import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonsService } from 'src/app/persons.service';



@Component({
  selector: 'app-view-persons',
  templateUrl: './view-persons.component.html',
  styleUrls: ['./view-persons.component.css']
})
export class ViewPersonsComponent {
  users: any | undefined

  constructor(
    private personsService: PersonsService,
    private router: Router
    ){}

  ngOnInit(): void{
    this.personsService.getPerson().subscribe(data=>{
      this.users = data
      console.log(data)
    })
  }

  deletePerson(id:number){
    this.personsService.deletePersonById(id).subscribe(data=>{
      console.log(data)
      this.ngOnInit() //refresh the page
    })
  }

  onEditar(id:number) {
    this.router.navigate(['update/'+id, {}])
  }
}
