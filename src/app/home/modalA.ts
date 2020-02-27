import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalB } from './modalB';

@Component( {
    template: `
        <ion-header>
            <ion-toolbar>
                <ion-title>Modal A</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <p>
            Test 1: Open Modal B, dismiss A, then both are dismissed.</p>
            <p>
            <ion-button (click)="test1()">Open ModalB and Close Me</ion-button>
            </p>
            <p>
            Test 2: Open Modal B, keep A open, then close B, A will dismiss.</p>
            <p>
                <ion-button (click)="test2()">Open ModalB</ion-button>
            </p>
            <p>
                <ion-button (click)="close()">Close</ion-button>
            </p>
        </ion-content>
    `,
    styles: [`

    `]
})
export class ModalA {

    constructor(private modalCtl: ModalController) {

    }

    test1() {
        this.modalCtl.dismiss();

        this.modalCtl.create({
            component: ModalB
        }).then(modal => {
            modal.present();
        });
    }

    test2() {
        this.modalCtl.create({
            component: ModalB
        }).then(modal => {
            modal.present();
        });
    }

    close() {
        this.modalCtl.dismiss();
    }

}