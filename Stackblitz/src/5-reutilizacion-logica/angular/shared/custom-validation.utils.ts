import { AbstractControl, ValidatorFn } from "@angular/forms";

export class CustomValidations {
    static looksLegit = (): ValidatorFn => (control: AbstractControl) => {
        const noOnlyUpper = control.value.toUpperCase() !== control.value;
        const hasSpace = control.value.includes(" ");
        return noOnlyUpper && hasSpace
          ? null
          : { LooksLegitError: "This ToDo seems off" };
      };
}
