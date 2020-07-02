import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Author } from '../authors';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: Author;
  @Output() deleteAuthor = new EventEmitter<Author>();

  constructor() { }

  ngOnInit(): void {

  }

  handleDelete() {
    this.deleteAuthor.emit(this.author);
  }

}
