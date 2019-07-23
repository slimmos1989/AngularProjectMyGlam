import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public login='' ;
  public password='';
  public isLogin= 0;
  public isPassword=0 ;
  constructor() { }

 

  ngOnInit() {
    
  }
  checkLogin(){
    if( this.login==='admin'){
      this.isLogin=1;
    }else {
      this.isLogin=2;
    }
    if(this.password==='admin'){
      this.isPassword=1;
    }else{
      this.isPassword=2;
    }
    
  }
}