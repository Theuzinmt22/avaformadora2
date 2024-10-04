import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TecladoComponent } from "./teclado/teclado.component";
import { SobreComponent } from "./sobre/sobre.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TecladoComponent, SobreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'avaliacaoformadora2';
}
