import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {
  newBrewery = this.fb.group({
    name: ['', Validators.required],
    brewery_type: ['', Validators.required],
    street: ['', Validators.required],
    address_2: [''],
    address_3: [''],
    city: ['', Validators.required],
    state: ['', Validators.required],
    county_province: [''],
    postal_code: ['', Validators.required],
    country: ['', Validators.required],
    longitude: ['', Validators.required],
    latitude: ['', Validators.required],
    phone: ['', Validators.required],
    website_url: ['',[Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.newBrewery.value);
  }
}
