import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuoteService } from '../quote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newquote',
  templateUrl: './newquote.page.html',
  styleUrls: ['./newquote.page.scss'],
})
export class NewquotePage implements OnInit {
  form: FormGroup
  constructor(private quoteService: QuoteService,
    private router: Router) { }

  ngOnInit() {
    this.form= new FormGroup({
      person: new FormControl(null,{
        updateOn: 'blur',
        validators:[Validators.required]
      }),
      quotetext: new FormControl(null,{
        updateOn: 'blur',
        validators:[Validators.required,Validators.maxLength(200)]
      })
    });

  }
  onCreateQuote() {
    console.log(this.form);
    this.quoteService.addQuote(
      this.form.value.person,
      this.form.value.quotetext
    );
    this.form.reset();
    this.router.navigate(['/home'])
  }

}
