import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {
  loading: boolean = false;
  newBrewery = this.fb.group({
    name: new FormControl('', [Validators.required]),
    brewery_type: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    address_2: [''],
    address_3: [''],
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    county_province: [''],
    postal_code: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    longitude: new FormControl('', [Validators.required]),
    latitude: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    website_url: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    console.log(this.newBrewery.get('website_url')?.errors);
  }

  onSubmit() {
    // Just for testing
    this.loading = true;
    setTimeout(() => {
      console.log(this.newBrewery.value);
      this.loading = false;
    }, 1000);
  }

  get name() {
    return this.newBrewery.get('name');
  }

  get breweryType() {
    return this.newBrewery.get('brewery_type');
  }

  get street() {
    return this.newBrewery.get('street');
  }

  get city() {
    return this.newBrewery.get('city');
  }

  get state() {
    return this.newBrewery.get('state');
  }

  get postalCode() {
    return this.newBrewery.get('postal_code');
  }

  get country() {
    return this.newBrewery.get('country');
  }

  get longitude() {
    return this.newBrewery.get('longitude');
  }

  get latitude() {
    return this.newBrewery.get('latitude');
  }

  get phone() {
    return this.newBrewery.get('phone');
  }

  get websiteUrl() {
    return this.newBrewery.get('website_url');
  }

  get email() {
    return this.newBrewery.get('email');
  }

}
