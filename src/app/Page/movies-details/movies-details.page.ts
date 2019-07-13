import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MovieService } from 'src/app/services/movie.service';
@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.page.html',
  styleUrls: ['./movies-details.page.scss'],
})
export class MoviesDetailsPage implements OnInit {
  information = null;
  constructor(private activatedRoute: ActivatedRoute, private movieServiec: MovieService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.movieServiec.getDetails(id).subscribe(result => {
      console.log("details : ", result)
      this.information = result;
    });
  }
  openWebSite() {
    window.open(this.information.Website, '_blank');
  }
}
