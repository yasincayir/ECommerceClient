import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


export class BaseComponent {

constructor(private spinner:NgxSpinnerService) {}

showSpinner(spinnerTypeName:SpinnerType){
  this.spinner.show(spinnerTypeName);

  setTimeout(() => {
    this.spinner.hide(spinnerTypeName)
  }, 5000);
}

hideSpinner(spinnerTypeName:SpinnerType){
  this.spinner.hide(spinnerTypeName);
}

}

export enum SpinnerType{
  BallAtom="s1",
  BallScaleMultiple="s2",
  BallSpinClockwiseFadeRotating="s3"
}
