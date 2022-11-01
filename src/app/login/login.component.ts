import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../servicioLogin/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin!: FormGroup;

  constructor(private fb:FormBuilder, private loginProvider:AutenticacionService) { }

  ngOnInit(): void {
    this.formLogin = this.createMyForm();
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      usuario:['', Validators.required],
      password:['', Validators.required]
    });
  }

  public submitFormulario(){
   if(this.formLogin.invalid){
    Object.values(this.formLogin.controls).forEach(control=>{
      control.markAllAsTouched();
    });
      return;
   }

   if(!this.loginProvider.ingresarAplicacion(this.formLogin.value))
        alert("Usuario o contraseña invalido")
  }

  public get f():any{
    return this.formLogin.controls;
  }
 

}
