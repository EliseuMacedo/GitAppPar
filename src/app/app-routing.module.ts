import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'match', loadChildren: './match/match.module#MatchPageModule' },
  { path: 'incompatible', loadChildren: './incompatible/incompatible.module#IncompatiblePageModule' },
  { path: 'information', loadChildren: './information/information.module#InformationPageModule' },
  { path: 'end', loadChildren: './end/end.module#EndPageModule' },
  { path: 'match-female', loadChildren: './match-female/match-female.module#MatchFemalePageModule' },
  { path: 'end-one', loadChildren: './end-one/end-one.module#EndOnePageModule' },
  { path: 'end-two', loadChildren: './end-two/end-two.module#EndTwoPageModule' },
  { path: 'end-three', loadChildren: './end-three/end-three.module#EndThreePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
