import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule,
} from "@angular/material";

@NgModule({
  exports: [MatButtonModule, MatIconModule, MatSnackBarModule],
})
export class MaterialComponents {}
