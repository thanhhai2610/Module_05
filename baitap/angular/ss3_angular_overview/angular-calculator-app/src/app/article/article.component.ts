import {Component, OnInit} from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article = {};
  articles: Article[] = [
    {
      title: 'Sơn Thiểu Năng',
      url: 'https://www.facebook.com/phamtheson.95'
    },
    {
      title: 'Lê Bá Hoàng Giang',
      url: 'https://www.facebook.com/giang.hoang.39566'
    },
    {
      title: 'Uyên hơn Sơn Thiểu Năng',
      url: 'https://www.facebook.com/catuyen.nguyen.1'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  addNewArticle() {
    this.articles.push(this.article);
  }
}
