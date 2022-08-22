import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() user?: User;
  dobDate?: string;
  gender?: string;
  email?: string;
  locationAddress?: Object;
  phone?: string;
  picture?: Object;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {
    this.dobDate = this.user?.dob.date;
    this.gender = this.user?.gender;
    this.email = this.user?.email;
    this.locationAddress = this.user?.location;
    this.phone = this.user?.phone;
    this.picture = this.user?.picture;
  }

  ngOnInit(): void {

  }

}
