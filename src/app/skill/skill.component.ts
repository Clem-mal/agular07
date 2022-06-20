import { Component, Input, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  @Input() clement: Developer = new Developer(
    "", "", 30, "", "",
     [
     new Skill ("", "", ""),
     new Skill ("", "", ""),
     new Skill ("", "", "")
     ]
  );
  constructor() { }

  ngOnInit(): void {
    console.log(this.clement)
  }



}
