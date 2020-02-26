import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  searchBar = '';
  sortOptions = [{
    name: 'lowest_price',
    label: 'Price'
  },
  {
    name:'rating',
    label: 'Rating'
  }
];
sortModel = { type: 1 ,model :this.sortOptions[0].name};

  isps = [
    {
        "name": "Airtel",
        "lowest_price": "499",
        "rating": 5,
        "max_speed": "1 Gbps",
        "description": "hhhhhhh",
        "contact_number":"+91 11 4666 6100",
        "email": "@@@",
        "image": "https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/airtel-logo-red-text-horizontal.jpg",
        "url": "http://www.airtel.in/"
    },
    {
        "name": "JIO",
        "lowest_price": "399",
        "rating": 4.5,
        "max_speed": "1 Gbps",
        "description": "hhhhhhh",
        "contact_number": 98888888,
        "email": "@@@",
        "image": "https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/airtel-logo-red-text-horizontal.jpg",
        "url": "http://www.jio.com/"
    },
    {
        "name": "Hathway",
        "lowest_price": "659",
        "rating": 4.5,
        "max_speed": "1 Gbps",
        "description": "hhhhhhh",
        "contact_number": 98888888,
        "email": "@@@",
        "image": "https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/airtel-logo-red-text-horizontal.jpg",
        "url": "https://www.hathway.com/"
    },
    {
        "name": "Vodafone Idea",
        "lowest_price": "549",
        "rating": 4,
        "max_speed": "1 Gbps",
        "description": "hhhhhhh",
        "contact_number": 98888888,
        "email": "@@@",
        "image": "https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/airtel-logo-red-text-horizontal.jpg",
        "url": "http://www.vodafone.in/"
    },
    {
        "name": "BSNL",
        "lowest_price": "359",
        "rating": 4,
        "max_speed": "1 Gbps",
        "description": "hhhhhhh",
        "contact_number": 98888888,
        "email": "@@@",
        "image": "https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/airtel-logo-red-text-horizontal.jpg",
        "url": "http://bsnl.co.in/opencms/bsnl/BSNL/services/broadband/index.html"
    },
    {
        "name": "Tata Teleservices",
        "lowest_price": "389",
        "rating": 3.5,
        "max_speed": "750 Mbps",
        "description": "hhhhhhh",
        "contact_number": 98888888,
        "email": "@@@",
        "image": "https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/airtel-logo-red-text-horizontal.jpg",
        "url": "http://www.tatateleservices.com/"
    },
    {
        "name": "ACT Fibernet",
        "lowest_price": "899",
        "rating": 3,
        "max_speed": "500 Mbps",
        "description": "hhhhhhh",
        "contact_number": 98888888,
        "email": "@@@",
        "image": "https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/airtel-logo-red-text-horizontal.jpg",
        "url": "hhttp://www.actcorp.in/index.php"
    },
    {
        "name": "MTNL",
        "lowest_price": "459",
        "rating": 3,
        "max_speed": "1 Gbps",
        "description": "hhhhhhh",
        "contact_number": 98888888,
        "email": "@@@",
        "image": "https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/airtel-logo-red-text-horizontal.jpg",
        "url": "http://www.mtnldelhi.in//"
    },
    {
        "name": "You broadband",
        "lowest_price": "999",
        "rating": 2.5,
        "max_speed": "1 Gbps",
        "description": "hhhhhhh",
        "contact_number": 98888888,
        "email": "@@@",
        "image": "https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/airtel-logo-red-text-horizontal.jpg",
        "url": " http://youbroadband.in/"
    }
]

  displayIsps = this.isps;
  selectedISP = this.isps[0];

  constructor() { 
    const url = 'https://platform.twitter.com/widgets.js';
    if (!document.querySelector(`script[src='${url}']`)) {
        let script = document.createElement('script');
        script.src = url;
        document.body.appendChild(script);
    }
  }

  ngOnInit() {
    this.sort()
  }
  ngAfterViewInit() {
    window['twttr'] && window['twttr'].widgets.load();
  }

  onSerach() {
    this.displayIsps = this.isps.filter( isp => isp.name.includes(this.searchBar));
  }
  selectISP(selectedIsp) {
    this.selectedISP = this.isps.find( isp=> isp.name === selectedIsp.name);
  }
  sort() {
    const sortModel = this.sortModel.model;
    this.displayIsps = this.displayIsps.sort((isp1,isp2) => this.sortModel.type * (isp1[sortModel] - isp2[sortModel]));
  }


}
