import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-body',
  templateUrl: './content-body.component.html',
  styleUrls: ['./content-body.component.scss']
})

export class ContentBodyComponent implements OnInit {
  title: 'Great Plains Tech, LLC';

  constructor() { }

  ngOnInit() {
  }

}
