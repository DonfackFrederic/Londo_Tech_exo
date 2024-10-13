import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CoporateComponent } from './pages/coporate/coporate.component';
import { PersonalBankingServiceComponent } from './pages/personal-banking-service/personal-banking-service.component';
import { PremiumBscaBankOneComponent } from './pages/premium-bsca-bank-one/premium-bsca-bank-one.component';
import { PremiumBscaBankTwoComponent } from './pages/premium-bsca-bank-two/premium-bsca-bank-two.component';
export const routes: Routes = [
  {path:'', redirectTo:'prenuim', pathMatch:'full' },
  {path:'coporate', component:CoporateComponent },
  {path:'prenuim', component:PremiumBscaBankOneComponent},
  {path:'secondprenuim', component:PremiumBscaBankTwoComponent},
  {path:'personal', component:PersonalBankingServiceComponent},
];
