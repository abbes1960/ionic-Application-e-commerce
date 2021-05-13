import { Component } from '@angular/core';
import { ArticleService} from '../service/article.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  constructor(public service: ArticleService) {}
  trackByFn(index, item) {
    //Bonne pratique
    return item.id;
  }
  ngOnInit() {

    this.getData();
  }

  getData() {
    this.service.getAll().subscribe(
      response =>{this.service.list = response;}
     );

  }
  addToCart()
  {
  
    
  }
  removeFromCart()
  {
  
    
  }
  formatNumberBeforeDigit = (x) => {
    return Math.trunc(x);
  };
  formatNumberAfterDigit = (x) => {
    const res = (x % 1).toFixed(3).substring(2);
    return res;
  };
}
