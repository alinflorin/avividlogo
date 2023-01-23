import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ValidatorsExtra {
    static mustMatch(otherCtlName: string) {
        return (ctl: AbstractControl) => {
            const otherCtl = ctl.parent?.get(otherCtlName);
            if (!otherCtl) {
                return null;
            }
            if (ctl.value !== otherCtl.value) {
                return {
                    nomatch: true
                } as ValidationErrors;
            }
            return null;
        };
    }
}