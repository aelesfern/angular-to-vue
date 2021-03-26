import { Injectable } from "@angular/core";
import { AbstractControl, ValidatorFn } from "@angular/forms";

@Injectable({ providedIn: "root" })
export class CustomValidations {
  looksLegit = (): ValidatorFn => (control: AbstractControl) => {
    const noOnlyUpper = control.value.toUpperCase() !== control.value;
    const hasSpace = control.value.includes(" ");
    return noOnlyUpper && hasSpace
      ? null
      : { LooksLegitError: "This ToDo seems off" };
  };
}
