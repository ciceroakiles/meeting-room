import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SalaService } from 'src/app/service/sala.service';
import { Sala } from '../../model/sala';

@Component({
  selector: 'app-atualiza-sala',
  templateUrl: './atualiza-sala.component.html',
  styleUrls: ['./atualiza-sala.component.css']
})
export class AtualizaSalaComponent implements OnInit {

  id!: number;
  sala!: Sala;
  enviou = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private salaService: SalaService) { }

  ngOnInit() {
    this.sala = new Sala();
    this.id = this.route.snapshot.params['id'];
    this.salaService.getSala(this.id)
      .subscribe(
        data => {
          this.sala = data;
          console.log(data);
        },
        error => console.log(error)
      );
  }

  onSubmit() {
    this.atualizaSala();
  }

  atualizaSala() {
    this.salaService.atualizaSala(this.id, this.sala)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    this.sala = new Sala();
    this.list();
  }

  list() {
    this.router.navigate(['sala']);
  }

}
