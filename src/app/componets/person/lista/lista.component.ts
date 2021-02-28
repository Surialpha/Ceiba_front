import { Component, OnInit,OnDestroy } from '@angular/core';
import {Person } from './../../../models/person.model';
import { Subject } from 'rxjs';
import {PersonServices} from './../../../services/personService/person.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  data:Person[] = [];
  table:any;
  dtTrigger = new Subject<any>();
  constructor(private service:PersonServices,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
    },
    scrollX:true,
    };
    this.GetAll();
  }

  GetAll(){
    this.service.findAll().subscribe((res:any)=>{
      if(res){
        this.data = res
        this.dtTrigger.next()
      }
      else{
        this.toastr.error('Recarga la pagina por favor', 'Algo salió mal!');
      }

    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
