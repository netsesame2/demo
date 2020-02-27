import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component( {
    template: `
        <ion-header>
            <ion-toolbar>
                <ion-title>Modal B</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-button (click)="test()">Close Me</ion-button>
        </ion-content>
    `,
    styles: [`

    `]
})
export class ModalB {

    constructor(private modalCtl: ModalController) {

    }

    test() {
        this.modalCtl.dismiss();
    }

}