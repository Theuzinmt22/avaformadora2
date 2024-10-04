import { Component } from "@angular/core";

@Component({
  selector: "app-teclado",
  standalone: true,
  imports: [],
  templateUrl: "./teclado.component.html",
  styleUrl: "./teclado.component.css",
})
export class TecladoComponent {
  public tela: string = "";

  calculadoraInput(value: string) {
    this.tela += value;
  }

  calculadoraResultado() {
    try {
      this.tela = this.calcularExpressao(this.tela).toString();
    } catch (e) {
      this.tela = "Erro";
    }
  }

  calcularExpressao(expressao: string): number {
    try {
      return new Function("return " + expressao)();
    } catch (error) {
      console.error("Erro", error);
      throw new Error("Expressão inválida");
    }
  }

  calculadoraLimpar() {
    this.tela = "";
  }
}
