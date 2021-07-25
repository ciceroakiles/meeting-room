// Imports Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// Outros
import { SalaService } from '../../service/sala.service';
import { Sala } from '../../model/sala';

@Component({
  selector: 'app-sala-details',
  templateUrl: './sala-details.component.html',
  styleUrls: ['./sala-details.component.css']
})
export class SalaDetailsComponent implements OnInit {

  sala: Sala | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private salaService: SalaService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.salaService.getSala(id)
      .subscribe(
        data => {
          this.sala = data;
          console.log(data);
        },
        error => console.log(error)
      );
  }

  list() {
    this.router.navigate(['/sala']);
  }

}
