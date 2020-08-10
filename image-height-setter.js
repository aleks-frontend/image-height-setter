function imageHeightSetter() {
    const colContainers = document.querySelectorAll('.js-imageHeightSetter-container');

    colContainers.forEach(colContainer => {
        const colContainerHeight = colContainer.offsetHeight;
        const imageBlocks = colContainer.querySelectorAll('.js-imageHeightSetter-image');

        imageBlocks.forEach(image => {
            const setHeight = image.dataset.imageHeight || 50;

            image.style.height = `${(colContainerHeight / 100) * setHeight - 1}px`;
        });
    })
}
