import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  // Ensure both ActivatedRoute and Router are imported
import { QuoteService } from '../quote.service';
import { Quotes } from '../quotes.model';

@Component({
  selector: 'app-quotedetail',
  templateUrl: './quotedetail.page.html',
  styleUrls: ['./quotedetail.page.scss'],
})
export class QuotedetailPage implements OnInit {
  quote: Quotes;
  id: string;

  constructor(private route: ActivatedRoute, 
    private quoteService: QuoteService,
    private router: Router) { }  

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('quoteId');
    this.quote = this.quoteService.getQuote(this.id);
  }
  exitPage() {
    this.router.navigate(['/home']);
  }
}

