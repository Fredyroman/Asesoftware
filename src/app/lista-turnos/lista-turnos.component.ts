import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { CargosService } from '../services/comercio/comercio.service';
import { ServiciosService } from '../services/servicios/servicio.service';
import { MercanciaService } from '../services/turnos/turnos.service';


@Component({
  selector: 'app-lista-turnos',
  templateUrl: './lista-turnos.component.html',
  styleUrls: ['./lista-turnos.component.css']
})
export class ListaTurnosComponent implements OnInit {


  turnoForm: FormGroup;
  servicios: any;
  comercios: any;
  turnos: any;

  constructor(
    public fb: FormBuilder,
    public cargosService: CargosService,
    public serviciosService: ServiciosService,
    public mercanciaService: MercanciaService,
  ){
    
  }
  ngOnInit(): void {
    this.turnoForm = this.fb.group({
      idTurno: [''],
      estado : true,
      fechaTurno :['',  Validators.required],
      horaFin : ['',  Validators.required],
      horaInicio : ['',  Validators.required],
      comercio : ['',  Validators.required],
      servicio : ['',  Validators.required]

    });

    this.cargarListaComercio();
    this.cargarListaTurnos();

    

    this.turnoForm.get('comercio').valueChanges.subscribe(value => {
      this.serviciosService.getAllServiciosByComercio(value.id).subscribe(resp =>{
        this.servicios = resp;
        console.log(resp);
      },
        error => { console.error(error)}
      )
    })

  }

  public cargarListaComercio(){
    this.cargosService.getAllComercios().subscribe(resp =>{
      this.comercios = resp;
      console.log(resp);
    },
      error => { console.error(error)}
    );
  }

  public cargarListaTurnos(){
    this.mercanciaService.getAllTurnos().subscribe(resp =>{
      this.turnos = resp;
       console.log(resp);
    },
      error => {console.error(error)}
    );
  }


  guardar():void{
    this.mercanciaService.saveTurnos(this.turnoForm.value).subscribe(resp =>{
      console.log(resp)
      this.turnoForm.reset();
      this.turnos = this.turnos.filter(turno => resp.idTurno !== turno.idTurno);
      this.turnos.push(resp);
    },
    error => {console.error(error)}
    )
  }

  eliminar(turno){
    this.mercanciaService.deleteTurnos(turno.idTurno).subscribe(resp => {
      console.log(resp)
      if(resp===false){
        console.log("entra resp===true ");
        this.turnos.pop(turno);

        this.cargarListaTurnos();
      }
    })
  }

  editar(turno){
    this.turnoForm.setValue({
      idTurno: turno.idTurno,
      estado: turno.estado,
      fechaTurno: turno.fechaTurno, 
      horaFin: turno.horaFin, 
      horaInicio: turno.horaInicio, 
      servicio: turno.servicio,
      comercio: turno.servicio.comercios, 
       
    })
  }

  
}

