import { Component, OnInit } from '@angular/core';
import { card } from '../../models/card.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards: card[] = [
    {
      employee: [
        {
          photoURL: '../../../../../assets//images/profile.jpg',
        },
        {
          photoURL: '../../../../../assets//images/profile.jpg',
        },
        {
          photoURL: '../../../../../assets//images/profile.jpg',
        },
        {
          photoURL: '../../../../../assets//images/profile.jpg',
        },
      ],
      title: 'Customer Service',
      pages: [
        {
          title: 'Insurance Renewals',
          number: 4
        },
        {
          title: 'Customer Service',
          number: 21
        }
      ],
      backgroundColor: '#186AA5'
    },
    {
      employee: [
        {
          photoURL: '../../../../../assets//images/profile.jpg',
        },
        {
          photoURL: '../../../../../assets//images/profile.jpg',
        },
        {
          photoURL: '../../../../../assets//images/profile.jpg',
        },
        {
          photoURL: '../../../../../assets//images/profile.jpg',
        },
      ],
      title: 'Insurance Underwriting',
      pages: [
        {
          title: 'Insurance Renewals',
          number: 4
        },
        {
          title: 'Customer Service',
          number: 21
        }
      ],
      backgroundColor: '#469CD9'
    },
    {
      employee: [
        {
          photoURL: '../../../../../assets//images/profile.jpg',
        },
        {
          photoURL: '../../../../../assets//images/profile.jpg',
        },
        {
          photoURL: '../../../../../assets//images/profile.jpg',
        },
        {
          photoURL: '../../../../../assets//images/profile.jpg',
        },
      ],
      title: 'Accounting & Finance',
      pages: [
        {
          title: 'Insurance Renewals',
          number: 4
        },
        {
          title: 'Customer Service',
          number: 21
        }
      ],
      backgroundColor: '#7BC8FF'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
