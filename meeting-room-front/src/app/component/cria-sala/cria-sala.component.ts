// Imports Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Outros
import { SalaService } from 'src/app/service/sala.service';
import { Sala } from '../../model/sala';

@Component({
  selector: 'app-cria-sala',
  templateUrl: './cria-sala.component.html',
  styleUrls: ['./cria-sala.component.css']
})
export class CriaSalaComponent implements OnInit {

  sala: Sala = new Sala();
  enviou = false;

  constructor(private salaService: SalaService,
              private router: Router) { }

  ngOnInit() {
  }

  novaSala(): void {
    this.enviou = false;
    this.sala = new Sala();
  }

  onSubmit() {
    this.enviou = true;
    this.salvar();
  }

  salvar() {
    this.salaService.criaSala(this.sala)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    this.sala = new Sala();
    this.listar();
  }

  listar() {
    this.router.navigate(['/sala']);
  }

}
