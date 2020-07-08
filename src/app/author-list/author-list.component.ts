import { Component, OnInit } from '@angular/core';

import { authors, Author } from '../authors';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors = authors;

  currentAuthor = authors[0];

  constructor() { }

  ngOnInit(): void {

  }

  handleDeleteOnParent(author: Author) {
    this.authors = this.authors.filter((item) => item.id !== author.id);
  }

  handleSelectOnParent(author: Author){
    this.currentAuthor = author;
  }

}
