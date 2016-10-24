import { Component } from '@angular/core';
import { DualListService } from './dualList.service';

@Component({
  selector: 'dual-list',
  providers: [DualListService],
  template: require('./dualList.html')
})
export class DualList {
  dualListData: any = {};
  dualListOptions: any = {};

  constructor(dualListService: DualListService) {
    this.dualListData = dualListService.getDualListData();
    this.dualListOptions = dualListService.getDualListOptions();
  }
}
