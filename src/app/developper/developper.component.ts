import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';
@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.scss']
})
export class DevelopperComponent implements OnInit {
  public Clement: Developer = new Developer(
    "Clement", "Mallambic", 30, "homme", "coucou",
     [
     new Skill ("Angular", "data:image/png;base64,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", "https://angular.io"),
     new Skill ("JS", "data:image/png;base64,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", "https://developer.mozilla.org/fr/docs/Web/JavaScript"),
     new Skill ("Css", "data:image/png;base64,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", "https://developer.mozilla.org/fr/docs/Web/CSS/Reference")
     ]
  );


  constructor() { }

  ngOnInit(): void {
  }

}
