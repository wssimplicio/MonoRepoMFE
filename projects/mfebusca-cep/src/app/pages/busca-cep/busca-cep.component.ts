import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BuscaCepService } from './service/busca-cep.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Cep } from './interface/cep';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-busca-cep',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  providers: [BuscaCepService],
  templateUrl: './busca-cep.component.html',
  styleUrl: './busca-cep.component.css'
})
export class BuscaCepComponent  implements OnInit {

  constructor(
    private sanitizer: DomSanitizer,
    private readonly service: BuscaCepService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  cep : Cep = {
    cep: "",
    city: "",
    state: "",
    neighborhood: "",
    street: ""
  }

  maps: SafeHtml = "";

  consultaCep(cep: string){
    this.service.buscaCep(parseInt(cep)).subscribe((retorno) => {
      this.cep = retorno
      this.mapsRetorno(this.cep.cep.substring(0,5), this.cep.cep.substring(5,8))
    })
  }

 mapsRetorno(c1: string, c2: string){
    let cep = c1 + '-' + c2
    this.maps = this.sanitizer.bypassSecurityTrustHtml(
      `<iframe src="https://www.google.com.br/maps?q=${cep},%20Brasil&output=embed"
      width="100%" height="250px" style="border:0;"
      allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>`
      )
  }

  voltar() {
    this.router.navigate(['/home'])
  }
}
