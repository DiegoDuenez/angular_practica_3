import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EdadGuard implements CanActivate {
  route!: ActivatedRoute;
  edad: any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      this.edad = route.paramMap.get('edad');
      if (this.edad >= 18){
        return true;
        console.log("eres mayor")
      }
      return false;
      
  }
  
}
