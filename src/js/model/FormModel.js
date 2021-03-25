export class FormModel {
    constructor() {
        this.model = {
            phone: null
        };
    }

    validate(formData) {
        const errors = {
            phone: this.validatePhone(formData.phone),
        };

        return errors;
    }

    validatePhone(phone) {
        if(phone.length === 0) {
            return 'Phone is empty';
        }

        const shouldStartWithPlusRegExp = /^\+/;

        if(!shouldStartWithPlusRegExp.test(phone)) {
            return 'Phone should start with +';
        }

        if(phone.length > 8) {
            return 'Phone is too long';
        }

        return undefined;
    }
}