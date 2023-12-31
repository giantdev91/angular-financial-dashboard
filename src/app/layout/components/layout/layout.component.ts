import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/shared/services/layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {


  RSideBarOpen: boolean = false;
  LSideBarOpen: boolean = true;

  isRTLDirection$ = this.layoutService.isRTLDirection$;

  constructor(
    private layoutService: LayoutService
  ) {
    // layoutService.changeDirection();
  }

  ngOnInit(): void {
    this.layoutService.isRTLDirection$.next(true)
  }

  LSideBarToggle() {
    throw new Error('Method not implemented.');
  }

}
