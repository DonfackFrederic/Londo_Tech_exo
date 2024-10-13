import { Component } from '@angular/core';
import { HeaderComponent } from '../../includes/header/header.component';
import { FooterComponent } from '../../includes/footer/footer.component';
import { BannerComponent } from '../../Components/banner/banner.component';

@Component({
  selector: 'app-coporate',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,BannerComponent],
  templateUrl: './coporate.component.html',
  styleUrl: './coporate.component.scss'
})
export class CoporateComponent {

}
