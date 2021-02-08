// import { HashLocationStrategy, LocationStrategy } from '@ansgular/common'
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutUsComponent } from "./about-us.component";
import { DonateComponent } from "./donate.component";

const routes: Routes = [
  { component: AboutUsComponent, path: "about-us" },
  // { component: ArchivesComponent, path: "archives" },
  // { component: ContactUsComponent, path: "contact-us" },
  { component: DonateComponent, path: "donate/:id" },
  // { component: FaqComponent, path: "faq" },
  { component: DonateComponent, path: "**" },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
