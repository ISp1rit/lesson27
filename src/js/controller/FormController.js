import $ from 'jquery';

import {FormView} from '../view/FormView';
import {FormModel} from '../model/FormModel';

export class FormController {
    constructor() {
        const $app = $('.app');

        this.formView = new FormView({
            $container: $app,
            send: (formData) => this.send(formData)
        });

        this.formModel = new FormModel();
        
        $app.append(this.formView.$view);
    }

    send(formData) {
        const formErrors = this.formModel.validate(formData);

        this.formView.clearErrors();

        if(formErrors.phone) {
            this.formView.showErrors(formErrors);
        } else {
            fetch('https://ispirit-heroku-app.herokuapp.com/todos', {
                method: 'POST',
                body: {
                    name: 'New Todo'
                }
            })
            .then((response) => response.json())
            .then((todo) => {
                console.log('todo', todo);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}