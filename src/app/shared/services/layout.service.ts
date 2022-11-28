import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class LayoutService {

    isRTLDirection$ = new BehaviorSubject<boolean>(false);

    constructor(
        @Inject(DOCUMENT) private document: Document
    ) { }

    changeDirection() {
        this.document.body.dir = 'rtl';
    }
}