import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SalaService } from '../../service/sala.service';
import { Sala } from '../../model/sala';

@Component({
  selector: 'app-sala-list',
  templateUrl: './sala-list.component.html',
  styleUrls: ['./sala-list.component.css']
})
export class SalaListComponent implements OnInit {

  salas!: Observable<Sala[]>;

  constructor(private salaService: SalaService,
              private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.salas = this.salaService.listAll();
  }

  salaDetails(id: number) {
    this.router.navigate(['/details', id]);
  }

  atualizaSala(id: number) {
    this.router.navigate(['/update', id]);
  }

  // DELETE
  deleteSala(id: number) {
    this.salaService.deleteSala(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error)
      );
  }

}
