import { NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
    declarations: [],
    exports: [],
})
export class IconSvgModule {
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry
            .addSvgIcon(
                /** Usage <mat-icon svgIcon="bed" color="primary"></mat-icon> **/
                'logo',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg-icons/logo.svg')
            ).addSvgIcon(
                'notification',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg-icons/notification.svg')
            ).addSvgIcon(
                'menu',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg-icons/menu.svg')
            ).addSvgIcon(
                'close',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg-icons/close.svg')
            ).addSvgIcon(
                'small-down',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg-icons/small-down.svg')
            ).addSvgIcon(
                'user-profile',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg-icons/user-profile.svg')
            ).addSvgIcon(
                'language',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg-icons/language.svg')
            ).addSvgIcon(
                'logout',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg-icons/logout.svg')
            ).addSvgIcon(
                'search',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg-icons/search.svg')
            ).addSvgIcon(
                'search-gray',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg-icons/search-gray.svg')
            );

    }
}
