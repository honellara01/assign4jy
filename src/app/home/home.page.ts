import { Component, OnInit } from '@angular/core';
import { Quotes } from './quotes.model';
import { QuoteService } from './quote.service';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
quotesCollection: Quotes[];

  constructor(private quoteService: QuoteService,
    private actionSheetController: ActionSheetController,
    private router: Router) {}

  ngOnInit() {
    this.quotesCollection = this.quoteService.quotes;
  }

  ionViewWillEnter() {
    this.quotesCollection = this.quoteService.quotes;
  }

onRemovingQuote(id:string) {
this.quoteService.RemoveQuote(id);
this.quotesCollection= this.quoteService.quotes;
}

}
