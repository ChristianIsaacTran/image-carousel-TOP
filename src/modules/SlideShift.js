function slideShift(slideContainer) {

    function resetToFirst() {
        slideContainer.style.right = "0px";
    }
    
    function nextSlide() {
        // extract number value from position style
        const tempStr = slideContainer.style.right;
        const tempStrArr = tempStr.split("px");
        const [extractedNum] = tempStrArr;

        // default offset to the right position value (next)
        const positionOffset = 800; 
        
        // add offset to the existing position number
        slideContainer.style.right = `${Number(extractedNum) + positionOffset}px`;
    }
    
    function prevSlide() {
        // extract number value from position style
        const tempStr = slideContainer.style.right;
        const tempStrArr = tempStr.split("px");
        const [extractedNum] = tempStrArr;

        // default offset to the right position value (previous)
        const positionOffset = -800; 
        
        // add offset to the existing position number
        slideContainer.style.right = `${Number(extractedNum) + positionOffset}px`;
    }

    return { nextSlide, prevSlide, resetToFirst };
}

export default slideShift; 
