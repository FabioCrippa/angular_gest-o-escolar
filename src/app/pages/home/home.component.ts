import { Component } from '@angular/core';
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { QrcodeCardComponent } from "../../components/qrcode-card/qrcode-card.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BigCardComponent, QrcodeCardComponent, FooterComponent, MenuBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
