import html2canvas from "html2canvas";

export default share = {
    renderImage: function (element) {

        let container = document.querySelector('.container');
        let shareContainer = document.querySelector('.share-container');
        let shareElements = document.querySelector('.share-elements');
        let doShare = document.querySelector('.do-share');
        let download = document.querySelector('.download');
        let close = document.querySelector('.close');
        let dataUrl;

        (function prepareStage() {

            container.classList.add('fade-back');

            html2canvas(element, { backgroundColor: null }).then(canvas => {
                createCanvas(canvas);
            });

        })();

        close.addEventListener('click', () => {
            let shareCanvas = document.getElementById('share-canvas');
            if (shareCanvas){
                shareCanvas.remove();   
            }
            container.classList.remove('fade-back');
            shareContainer.classList.add('hidden');
        })

        function resizeCanvas(canvas, desiredWidth) {
            var resized = document.createElement('canvas');
            var ctx = resized.getContext('2d');

            var ratio = canvas.width / canvas.height;
            var newHeight = desiredWidth / ratio;

            resized.width = desiredWidth;
            resized.height = newHeight;

            ctx.drawImage(canvas, 0, 0, desiredWidth, newHeight);
            return resized;
        }

        function createCanvas(canvas) {

            let bg = document.createElement('canvas');
            let bgCtx = bg.getContext('2d');
            let resized = resizeCanvas(canvas, 950)
            let img = new Image();

            bg.width = 1008;
            bg.height = 811;

            img.onload = () => {
                bgCtx.drawImage(img, 0, 0, bg.width, bg.height);
                bgCtx.drawImage(resized,
                    bg.width / 2 - resized.width / 2,
                    bg.height / 2 - resized.height / 2
                );
                dataUrl = bg.toDataURL('image/jpeg', 0.9);
                if (canShare(bg)) {
                    download.style.display = 'none';
                    doShare.addEventListener('click', triggerShareDialog);
                } else {
                    download.setAttribute('href', dataUrl);
                    doShare.style.display = 'none';
                }
                shareContainer.classList.remove('hidden');
                bg.setAttribute('id', 'share-canvas');
                shareElements.appendChild(bg);
            }
            img.src = new URL('../img/bg-static.jpg', import.meta.url);

        }

        function canShare(canvas) {

            if (navigator.canShare && navigator.canShare(canvas)) {
                return true;
            } else {
                return false;
            }

        }

        async function triggerShareDialog() {
            const blob = await (await fetch(dataUrl)).blob();
            const filesArray = [
                new File(
                    [blob],
                    'breaking-bad.jpeg',
                    {
                        type: blob.type,
                        lastModified: new Date().getTime()
                    }
                )
            ];
            const shareData = {
                files: filesArray,
            };
            try {
                await navigator.share(shareData);
            } catch (error) {
                console.log('cancelled share', error)
            }
        }

    }

}