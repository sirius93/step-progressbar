import { RouterModule, Routes } from '@angular/router';

// import { AppComponent } from '../app/app.component';
import { HomeComponent } from '../app/containers/home/home.component';
import { AboutComponent } from '../app/containers/about/about.component';
import { ContactComponent } from '../app/containers/contact/contact.component';

const routes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'about', component: AboutComponent },
   { path: 'contact', component: ContactComponent }
   

];

export const routing = RouterModule.forRoot(routes);
