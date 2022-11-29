import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconSvgModule } from './utilities-modules/icon-svg.module';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CardComponent } from './components/card/card.component';
import { CardItemComponent } from './components/card-item/card-item.component';

@NgModule({
    declarations: [
        CardItemComponent,
        CardComponent
    ],
    imports: [
        MatSelectModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatIconModule,
        MatTooltipModule,
        IconSvgModule,
        CommonModule,
        TableModule,
        MultiSelectModule,
        DropdownModule,
        SliderModule,
        PaginatorModule,
        InputTextModule,
        ButtonModule
    ],
    exports: [
        CardComponent
    ],
    providers: [],
})
export class SharedModule { }
