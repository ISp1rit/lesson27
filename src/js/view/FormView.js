import $ from 'jquery';

export class FormView {
    constructor(config) {
        this.config = config;
        this.$view = this.generateForm();
        this.config.$container.html(this.$view);

        $('#send').click(() => {
            const formData = this.getFormData();

            this.config.send(formData);
        });
    }

    generateForm() {
        return $(`
            <input id="phone" type="text" placeholder="+3807775553434">
            <div class="error-message error-message-hidden">Error</div>
            <button id="send">Send</button>
            <img width="200px" height="200px" src="https://ispirit-heroku-app.herokuapp.com/image2.jpeg" />
        `);
    }

    getFormData() {
        const $phoneInput = $('#phone')
        
        return {
            phone: $phoneInput.val()
        }
    }
    
    clearErrors() {
        $('.error-message').addClass('error-message-hidden');
    }

    showErrors(formErrors) {
        $('.error-message').removeClass('error-message-hidden').text(formErrors.phone);
    }
}