export default outputScaling = {

    set: function(parent, elementToScale, offset) {

        let margin = 0;

        function scaleAmountNeededToFit(el, margin = 0) {
            var parentSize = {
                width: el.parentElement.clientWidth - margin * 2,
                height: el.parentElement.clientHeight - margin * 2
            };

            return Math.min(parentSize.width / el.clientWidth,
                parentSize.height / el.clientHeight);
        }

        function fitToParent(element, margin) {
            // reset styles
            element.removeAttribute('style');
            parent.removeAttribute('style');
            
            scale = scaleAmountNeededToFit(element, margin);
            if (scale > 1) {
                scale = 1;
            }
            element.style.transformOrigin = "0 0";
            element.style.transform = `translate(${margin}px, ${margin}px) scale(${scale})`;
            parent.style.height = `${elementToScale.getBoundingClientRect().height + offset}px`;

        }

        fitToParent(elementToScale, margin);

    }

}