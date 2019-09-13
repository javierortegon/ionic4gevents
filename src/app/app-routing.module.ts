import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'sobr-evento/:event', loadChildren: './pages/sobr-evento/sobr-evento.module#SobrEventoPageModule' },
  { path: 'deta-patrocina/:patroci', loadChildren: './pages/deta-patrocina/deta-patrocina.module#DetaPatrocinaPageModule' },
  { path: 'patrocinadores/:event', loadChildren: './pages/patrocinadores/patrocinadores.module#PatrocinadoresPageModule' },
  { path: 'deta-agenda/:agenda', loadChildren: './pages/deta-agenda/deta-agenda.module#DetaAgendaPageModule' },
  { path: 'agenda/:event', loadChildren: './pages/agenda/agenda.module#AgendaPageModule' },
  { path: 'deta-conferencis/:conferen', loadChildren: './pages/deta-conferencis/deta-conferencis.module#DetaConferencisPageModule' },
  { path: 'conferencistas/:event', loadChildren: './pages/conferencistas/conferencistas.module#ConferencistasPageModule' },
  { path: 'deta-stand/:stand', loadChildren: './pages/deta-stand/deta-stand.module#DetaStandPageModule' },
  { path: 'stands/:event', loadChildren: './pages/stands/stands.module#StandsPageModule' },
  { path: 'deta-asistente/:asistente', loadChildren: './pages/deta-asistente/deta-asistente.module#DetaAsistentePageModule' },
  { path: 'asistentes/:event', loadChildren: './pages/asistentes/asistentes.module#AsistentesPageModule' },
  { path: 'homeNew', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: '', redirectTo: '/walkthrough', pathMatch: 'full' },
  { path: 'walkthrough', loadChildren: './walkthrough/walkthrough.module#WalkthroughPageModule' },
  { path: 'getting-started', loadChildren: './getting-started/getting-started.module#GettingStartedPageModule' },
  { path: 'auth/login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'auth/signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'auth/forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'contact-card', loadChildren: './contact-card/contact-card.module#ContactCardPageModule' },
  { path: 'forms-and-validations', loadChildren: './forms/validations/forms-validations.module#FormsValidationsPageModule' },
  { path: 'forms-filters', loadChildren: './forms/filters/forms-filters.module#FormsFiltersPageModule' },
  { path: 'page-not-found', loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule' },
  { path: 'showcase', loadChildren: './showcase/showcase.module#ShowcasePageModule' },
  { path: 'firebase', loadChildren: './firebase/firebase-integration.module#FirebaseIntegrationModule' },
  { path: 'maps', loadChildren: './maps/maps.module#MapsPageModule' },
  { path: 'video-playlist', loadChildren: './video-playlist/video-playlist.module#VideoPlaylistPageModule' },
  { path: '**', redirectTo: 'page-not-found' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
