import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ModalController, NavController} from '@ionic/angular';
import {CreateBookingComponent} from '../../../booking/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(private router: Router,
              private navCtrl: NavController,
              private modalCtrl: ModalController) {}

  ngOnInit() {
  }

  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');
    // this.navCtrl.navigateBack('/places/tabs/discover');
    // this.navCtrl.pop();
    this.modalCtrl.create({component: CreateBookingComponent})
      .then( modalEl => {
        modalEl.present();
    });
  }

}
