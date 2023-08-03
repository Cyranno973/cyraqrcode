import { Component } from '@angular/core';
import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from "@techiediaries/ngx-qrcode";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faFacebookF, faFacebookMessenger, faFacebookSquare, faWhatsappSquare} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = '  ';
  CreateQrcode(lien: string) {
    console.log(lien);
    this.value = lien;
  }

  share(){
    if (navigator.share){
      navigator.share({
        title: 'yessssssssssssss',
        url: 'google'
      }).then(() => {
        console.log('thanks for sharing ');
      })
        .catch(console.error);
    }
  }
}
