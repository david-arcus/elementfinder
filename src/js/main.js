import elements from './elements';
import outputScaling from './outputScaling';
import debounce from './debounce';
import share from './share';

class Main {
    constructor() {
        this.userInput = document.querySelector('.user-input');
        this.form = document.querySelector('.form');
        this.displayUserName = document.getElementById('display-user-name');
        this.stage = document.getElementById('stage');
        this.userSubmitButton = document.querySelector('.user-submit');
        this.share = document.querySelector('.share');
        this.stage = document.getElementById('stage')
        this.foundElements;
        this.selectedElements;
    }

    init() {

        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.findElements();
            this.generateElementButtons();
        });

        this.share.addEventListener('click', () => {
            share.renderImage(this.stage);
        })

        document.fonts.ready.then(() => {
            this.userSubmitButton.disabled = false;
        });

        window.addEventListener('resize', () => {
            debounce(outputScaling.set(this.stage, this.displayUserName, 40));
        }, false);
    }

    findElements() {

        this.foundElements = new Map();
        this.selectedElements = new Map();

        elements.forEach(element => {

            this.userInput.value = this.stripTags(this.userInput.value).trim();
            // this.userInput.value = this.userInput.value.trim();
            // do a global, case-insensitive search in user's name for element
            const regExp = new RegExp(element.symbol, "gi");
            // spread operator executes the regex
            const matches = [...this.userInput.value.matchAll(regExp)];

            if (matches.length > 0) {

                // gets the starting index for every element
                let foundIndexes = matches.map(match => {
                    return match.index;
                });

                // enumerate all indexes used by an element
                // we'll call them slots
                let slots = [];
                foundIndexes.forEach(index => {
                    slots.push(index);
                    if (element.symbol.length > 1) {
                        slots.push(index + element.symbol.length - 1);
                    }
                });

                // gives us every element, starting index and positions
                // of every found element
                this.foundElements.set(element.symbol, {
                    foundIndexes,
                    length: element.symbol.length,
                    slots: slots,
                    weight: element.weight,
                    name: element.name
                });

            }

        });

        // console.log(this.foundElements);

    }

    stripTags(string) {

        let output = new DOMParser().parseFromString(string, 'text/html');
        return output.body.textContent || "";

    }

    generateElementButtons() {

        // generate a button for every found element in user's name

        if (this.foundElements.size == 0) {
            this.noResultsFound();
            return;
        }

        this.displayUserName.innerText = this.userInput.value;

        const buttonElements = [];
        let buttonElementsContainer = document.querySelector('.elements-container');

        for (let [element, details] of this.foundElements) {
            buttonElements.push(`
                <div class="element">
                    <div class="element-button" data-element="${element}">${element}<sup>${details.weight}</sup></div>
                    <a href="http://en.wikipedia.org/wiki/${details.name}" target="_blank">${details.name}</a>
                </div>
            `)
        }

        buttonElementsContainer.innerHTML = buttonElements.join('');

        let buttons = document.querySelectorAll('.element-button');

        buttons.forEach(button => {
            button.addEventListener('click', (event) => {

                this.renderElementsInName(event);
                outputScaling.set(this.stage, this.displayUserName, 40);

            })
        })

        this.showResults();
        this.share.scrollIntoView({ behavior: 'smooth'});
        // kick things off by clicking first found element
        buttons[0].click();
    }

    showResults() {
        const stageContainer = document.querySelector('.stage-container')
        stageContainer.classList.remove('hidden');
        outputScaling.set(this.stage, this.displayUserName, 40);

    }

    noResultsFound() {
        alert('There are no elements from the periodic table in your name!');
    }

    renderElementsInName(event) {

        // periodic table elements are unique, so we can use 
        // them as data IDs to find which one was clicked
        let clickedElement = event.target.dataset.element;
        let userNameArray = this.userInput.value.split('');
        //  console.log(userNameArray);

        let requestedSlots;
        let elementDetails = this.foundElements.get(clickedElement);

        // check if element is already selected
        if (typeof this.selectedElements.get(clickedElement) === 'undefined') {
            // toggle on
            this.selectedElements.set(clickedElement, elementDetails);
            // get all the indexes of where this element occurs 
            requestedSlots = this.selectedElements.get(clickedElement).slots
            event.target.classList.add('selected');
        } else {
            // toggle off
            requestedSlots = '';
            event.target.classList.remove('selected');
            // remove selected element from the map
            this.selectedElements.delete(clickedElement);
        }

        // loop through every selected element
        for (let [selectedElement] of this.selectedElements) {

            // element is being toggled on
            if (requestedSlots) {

                // check for collisions (if at least one element has already been selected)
                if (this.selectedElements.size > 1) {

                    // exclude the element being added
                    if (selectedElement != clickedElement) {

                        const collision = this.selectedElements.get(selectedElement).slots.filter(element => {
                            return requestedSlots.includes(element)
                        });

                        if (collision.length > 0) {

                            this.selectedElements.delete(selectedElement);
                            document.querySelector(`[data-element=${selectedElement}]`).classList.remove('selected');

                            // TODO: retain other instances of elements
                            /*
                            if (this.selectedElements.get(selectedElement).foundIndexes.length == 1) {
                                // we can remove the element if there's only one instance of it
                                this.selectedElements.delete(selectedElement);
                                document.querySelector(`[data-element=${selectedElement}]`).classList.remove('selected');
                            } else if (this.selectedElements.get(selectedElement).foundIndexes.length > 1) {
                                // ..
                            }
                            */
                        }

                    }

                }

            }

            // check if element has been deleted due to collision
            if (this.selectedElements.get(selectedElement) != undefined) {

                let weight = this.selectedElements.get(selectedElement).weight;

                this.selectedElements.get(selectedElement).foundIndexes.forEach(index => {
                    if (selectedElement.length === 1) {
                        userNameArray[index] = `<em>${userNameArray[index]}<sup>${weight}</sup></em>`;
                    } else {
                        userNameArray[index] = `<em>${userNameArray[index]}`;

                        userNameArray[index + selectedElement.length - 1] =
                            `${userNameArray[index + selectedElement.length - 1]}<sup>${weight}</sup></em>`;
                    }
                })

            }

        }

        // console.log(this.selectedElements);      

        this.displayUserName.innerHTML = userNameArray.join('').replaceAll(' ', '<br>');
        // document.getElementById('debug').innerText = JSON.stringify(Array.from(this.selectedElements.entries()), null, 2);

    }
}

let main = new Main;
main.init();