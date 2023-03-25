import elements from './elements';

class Main {
    constructor() {
        this.userInput = document.querySelector('.user-input');
        this.submit = document.querySelector('.submit');
        this.displayUserName = document.querySelector('.display-user-name');
        this.foundElements = new Map();
        this.selectedElements = new Map();
    }

    init() {

        this.submit.addEventListener('click', () => {
            this.findElements();
            this.generateElementButtons();
        });
    }

    findElements() {

        elements.forEach(element => {

            const regExp = new RegExp(element.symbol, "gi");
            const matches = [...this.userInput.value.matchAll(regExp)];    

            if (matches.length > 0) {

                let foundIndexes = matches.map(match => {
                    return match.index;
                });

                this.foundElements.set(element.symbol, {
                    foundIndexes,
                    length:element.symbol.length
                });

            }

        })
        console.log(this.foundElements);

        
    }

    generateElementButtons() {

        const buttonElements = [];
        let buttonsContainer = document.querySelector('.buttons-container');

        for (let [key, val] of this.foundElements) {
            buttonElements.push(`<div class="element-button" data-element="${key}">${key}</div>`)
        }

        buttonsContainer.innerHTML = buttonElements.join('');

        let buttons = document.querySelectorAll('.element-button');

        buttons.forEach(button => {
            button.addEventListener('click', (event) => {

                this.renderElementsInName(event);
                
            })
        })
    }

    renderElementsInName(event) {

        let clickedElement = event.target.dataset.element;
        let nameArray = this.userInput.value.split('');

        // is this element already selected?
        let elementDetails = this.foundElements.get(clickedElement);

        if (this.selectedElements.get(clickedElement) == undefined) {
            this.selectedElements.set(clickedElement, elementDetails);
            event.target.classList.add('selected');
        } else {
            event.target.classList.remove('selected');
            this.selectedElements.delete(clickedElement);
        }

        for (let [selectedElement] of this.selectedElements) {  

            // check for collisions

            

            this.selectedElements.get(selectedElement).foundIndexes.forEach(index => {
                if (selectedElement.length === 1) {
                    nameArray[index] = `<strong>${nameArray[index]}</strong>`;
                } else {
                    nameArray[index] = `<strong>${nameArray[index]}`;

                    nameArray[index+selectedElement.length-1] =
                    `${nameArray[index+selectedElement.length-1]}</strong>`;
                }
            })

        }

        console.log(this.selectedElements);      

        this.displayUserName.innerHTML = nameArray.join('');
        // document.getElementById('foo').innerText = this.foundElements;
    }
}

let main = new Main;
main.init();