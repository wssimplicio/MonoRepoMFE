import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { BuscaCepComponent } from './pages/busca-cep/busca-cep.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BuscaCepComponent, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MFEBuscaCep';
}
