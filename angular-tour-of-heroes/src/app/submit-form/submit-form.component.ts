import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss'],
})
export class SubmitFormComponent implements OnInit {
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
    website_url: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
      ),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  addressPlaceholder: string = '66 Beacon St. Brooklyn, NY 11238';

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('postal-code'));

    this.newBrewery.patchValue({
      postal_code: this.route.snapshot.paramMap.get('postal-code'),
    });
  }

  onSubmit() {
    console.log(this.newBrewery.value);
  }

  getErrorMessage(formControl: FormControl | null) {
    if (formControl?.hasError('required')) {
      return 'You must enter a value';
    } else if (formControl?.hasError('email')) {
      return 'Invalid EMAIL';
    } else if (formControl?.hasError('pattern')) {
      return 'Invalid URL';
    }
    return;
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
