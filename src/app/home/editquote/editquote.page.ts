import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-editquote',
  templateUrl: './editquote.page.html',
  styleUrls: ['./editquote.page.scss'],
})
export class EditquotePage implements OnInit {
  quote: Quotes;
  id: string;
  form:FormGroup;

  constructor(private route: ActivatedRoute,
    private quoteService: QuoteService,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('quoteId');
    this.quote = this.quoteService.getQuote(this.id);
    this.form = new FormGroup({
      person : new FormControl(this.quote.person,{
        updateOn:'blur',
        validators:[Validators.required]
      }),
      text : new FormControl(this.quote.text, {  
        updateOn:'blur',
        validators:[Validators.required, Validators.maxLength(200)]
      })
    });
  }

  onEditQuote() {
    console.log(this.form);
    this.quoteService.updateQuote(
      this.id,
      this.form.value.person,
      this.form.value.text
    );
    this.form.reset();
    this.router.navigate(['/home'])
  }
  
}
