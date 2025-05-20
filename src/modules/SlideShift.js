function slideShift(slideContainer) {
    function resetToFirst() {
        slideContainer.style.right = "0px";
    }

    function resetToLast() {
        slideContainer.style.right = "2400px";
    }

    function checkPositionFirst(newPos) {
        const firstSlidePos = 0;

        if (newPos < firstSlidePos) {
            return true; 
        }

        return false;
    }

    function checkPositionLast(newPos) {
        const lastSlidePos = 2400;

        if(newPos > lastSlidePos) {
            return true;
        }

        return false;
    }

    function nextSlide() {
        // extract number value from position style
        const tempStr = slideContainer.style.right;
        const tempStrArr = tempStr.split("px");
        const [extractedNum] = tempStrArr;
        const currentPos = Number(extractedNum);

        // default offset to the right position value (next)
        const positionOffset = 800;

        // add offset to the existing position number
        const newPos = currentPos + positionOffset;
        slideContainer.style.right = `${newPos}px`;

        // check if the position is passed the last image position. If it is, loop back to the first image
        if(checkPositionLast(newPos)) {
            resetToFirst();
        }
    }

    function prevSlide() {
        // extract number value from position style
        const tempStr = slideContainer.style.right;
        const tempStrArr = tempStr.split("px");
        const [extractedNum] = tempStrArr;
        const currentPos = Number(extractedNum);

        // default offset to the right position value (previous)
        const positionOffset = -800;

        // add offset to the existing position number
        const newPos = currentPos + positionOffset;
        slideContainer.style.right = `${newPos}px`;

        // check if the position is passed the first image position. If it is, then loop back to the last image
        if(checkPositionFirst(newPos)) {
            resetToLast();
        }
    }

    return { nextSlide, prevSlide, resetToFirst, resetToLast };
}

export default slideShift;
