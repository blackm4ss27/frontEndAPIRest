import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { async, BehaviorSubject, Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Socio } from '../interfaces/socio.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { AsyncScheduler } from "rxjs/internal/scheduler/AsyncScheduler";

@Injectable({
    providedIn: 'root'
})

export class IngresarService{

    constructor(private rout: Router, private http: HttpClient) { }
    socio: Socio[] = [];
    Login: string=''
    Password: string=''

    async validacion(login: string, password: string):Promise<Boolean>{
        await localStorage.setItem("socioactivo","");
        await this.validarsocio(login, password);
        if(await this.validarsocio(login, password)){
            return true;
        }
        else{
            return false;
        }
    }

    async validarsocio(login: string, password: string):Promise<Boolean>{
        let socioact: number=0;
        await this.http.get<number>('http://127.0.0.1:8080/api/socio'+"/"+login+"/"+password).toPromise().then(((resp:number)=>{
            if(resp!=null){
                socioact=resp;
                localStorage.setItem("socioactivo", resp.toString());
            };
        }));
        if(socioact==0){
            return false;
        }
        else{
            return true;
        }
    }
     async ingresar(){
         if(await this.validacion(this.Login, this.Password)){
             this.rout.navigate(['espacio'])
         }
         else{
             alert('ERROR: Usuario Invalido');
         }
     }

    // validar(login:string, password: string){
    //     socioacs: Number;
    //     this.http.get<Number>('http://127.0.0.1:8080/api/socio)
    // }


    // validarUsuario(login:string, password:string):Boolean{
    //     const existente:Socio[]=this.socio.filter(buscar => (buscar.login==login && buscar.contrasena==password))
    //     if(existente.length!=0){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }
    // acceder():void{
    //     if(this.validarUsuario(this.login, this.password)){
    //         this.rout.navigate(['./espaciomain.component.html'])
    //     }
    //     else{
    //         alert('ERROR: Usuario Invalido')
    //     }
    // }

    // ESTUVE PROBANDO CON EL DE ABAJO Y NO FUNCIONA
    // private currentUserSubject: BehaviorSubject<Socio>;
    // public currentUser: Observable<Socio>;

    // constructor(private http: HttpClient) {
    //     this.currentUserSubject = new BehaviorSubject<Socio>(JSON.parse(localStorage.getItem('currentUser')));
    //     this.currentUser = this.currentUserSubject.asObservable();
    // }

    // public get currentUserValue(): Socio{
    //     return this.currentUserSubject.value;
    // }

    // login(username: string, password: string){
    //     return this.http.post<any>('http://127.0.0.1:8080/api/socio/{login}', {username, password})
    //     .pipe(map(user => {
    //         user.authdata = window.btoa(username + ':' + password);
    //         localStorage.setItem('currentUser', JSON.stringify(user));
    //         this.currentUserSubject.next(user);
    //         return user;
    //     }));
    // }

    // logout(){
    //     localStorage.removeItem('currentUser');
    //     this.currentUserSubject.next(null);
    // }
}