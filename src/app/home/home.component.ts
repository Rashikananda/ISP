import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as fromRoot from '../store/reducers';
import { Store, select } from '@ngrx/store';
import { loadIspss, updateSelectedIsp } from '../store/actions/isps.actions';
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
    name: 'rating',
    label: 'Rating'
  }
  ];
  sortModel = { type: 1, model: this.sortOptions[0].name };
  isps$ = this.store.pipe(select(fromRoot.getispList));
  selectedISP$ = this.store.pipe(select(fromRoot.getSelctedIsp));
  isps = []
  displayIsps = [];
  selectedISP;

  constructor(private store: Store<fromRoot.State>) {
    const url = 'https://platform.twitter.com/widgets.js';
    if (!document.querySelector(`script[src='${url}']`)) {
      let script = document.createElement('script');
      script.src = url;
      document.body.appendChild(script);
    }
  }

  ngOnInit() {
    this.store.dispatch(loadIspss());
    this.registserForIspLists()
  }
  registserForIspLists() {
    this.isps$.subscribe(ispsList => {
      this.displayIsps = ispsList;
      this.isps = ispsList;
      if (ispsList.length > 0) {
        this.selectedISP = ispsList[0];
      }
      this.sort()
    });
    this.selectedISP$.subscribe(selectedIsp => {
      this.selectedISP = selectedIsp;
    });
  }
  ngAfterViewInit() {
    window['twttr'] && window['twttr'].widgets.load();
  }

  onSerach() {
    this.displayIsps = this.isps.filter(isp => isp.name.includes(this.searchBar)
      || isp.rating.toString().includes(this.searchBar) || isp.lowest_price.toString().includes(this.searchBar));
  }
  selectISP(selectedIsp) {
    this.store.dispatch(updateSelectedIsp(selectedIsp.name))
  }
  sort() {
    const sortModel = this.sortModel.model;
    this.displayIsps = this.displayIsps.sort((isp1, isp2) => this.sortModel.type * (isp1[sortModel] - isp2[sortModel]));
  }


}
