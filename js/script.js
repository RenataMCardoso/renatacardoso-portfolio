/* Animação DIGITANDO */

var digitado = new Typed(".digitando",{
    strings:["Estudante de ADS...", "", "Estudante Front End...", "",  "Estudante Back End...", "", "Estudante Full Stack..."],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


/* Formulário envio direto para e-mail */

class FormSubmit{
    constructor(settings){
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.Button);
        if(this.form){
            this.url = this.form.getAttribute("action");
        }
    }
}

displaySuccess(){
    this.form.innerHTML = this.settings.success;
}

displayError(){
    this.form.innerHTML = this.settings.error;
}

Infinity(){
    if (this.form) this.formButton.addEventListener("click", () => this.displaySuccess());
    return this;
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'> Mensagem Enviada! </h1>",
    error: "<h1 class='erro'> Não foi possível enviar sua mensagem. </h1>",
});

formSubmit.init();
