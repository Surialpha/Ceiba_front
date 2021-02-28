import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Person } from './../../../models/person.model';
import { Subject } from 'rxjs';
import {PersonServices} from './../../../services/personService/person.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private service: PersonServices,
    private toastr: ToastrService,
    private fb: FormBuilder) {
      this.minDate = new Date();
      this.maxDate = new Date();
      this.maxDate = this.getDate(this.maxDate);
     }
  minDate: any;
  maxDate: any;
  result: any;
  person:Person | any;
  PersonForm: FormGroup | any;

  ngOnInit(): void {

    this.PersonForm = this.fb.group({
      id: [''],
      nombre: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.pattern('^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$')]],
      apellidos: ['', [Validators.required,Validators.minLength(5), Validators.maxLength(50), Validators.pattern('^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$')]],
      cedula: ['', [Validators.required,Validators.pattern(/^[0-9]\d*$/), Validators.minLength(5), Validators.maxLength(20)]],
      fechaNac: ['', [Validators.required]],
    });
  }

  getDate(date:any) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');

  }

  CreatePerson() {
    if (this.PersonForm.valid) {

        this.service.CreatePerson(this.PersonForm.value)
          .subscribe((res:any) => {
              if(res){
                this.toastr.success("El usuarios fue registrado con éxito", "")
                this.PersonForm.reset()
              }
          });
    }
  }

}
