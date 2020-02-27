import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalA } from './modalA';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtl: ModalController) {}

  testA() {
    this.modalCtl.create({
        component: ModalA
    }).then(modal => {
        modal.present();
    })
  }
}
