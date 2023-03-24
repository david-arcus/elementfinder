

class Main {
    constructor() {
        this.userName = document.querySelector('.user-name');
        this.submit = document.querySelector('.submit');
    }

    init() {

        this.submit.addEventListener('click', (event) => {
            this.showValue();
        });
    }

    showValue() {
        console.log(`your name is ${this.userName.value}`);
    }
}

let main = new Main;
main.init();