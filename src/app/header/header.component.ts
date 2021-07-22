import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  formLogin: any;
  constructor(private fb:FormBuilder) { }

  ngOnInit():any {
    console.log('Component app-header iniciado...')
    this.formLogin = this.fb.group({
      cpf: ['']
    })
  }

}
