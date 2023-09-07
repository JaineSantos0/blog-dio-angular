import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {dataFake} from "../../data/dataFake";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  contentCover : string =  '';
  descriptionCover : string = '';
  contentTitle : string = '';
  ingredientsTitle : string = '';
  prepareTitle : string = '';
  descriptionPrepare : string = '';
  ingredientsList : string [] = [''];
  id : string | null = '0';

  constructor(
    private route : ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id === id)[0]

    this.contentTitle = result.title;
    this.contentCover = result.photo;
    this.descriptionCover = result.photoName;
    this.ingredientsTitle = result.ingredientsTitle;
    this.ingredientsList = result["ingredients []"];
    this.prepareTitle = result.prepareTitle;
    this.descriptionPrepare = result.prepare;
  }
}
