import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BittrexService } from './bittrex.service';
import { appComponents, AppRoutingModule } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    ...appComponents,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    AppRoutingModule
  ],
  providers: [
    BittrexService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
