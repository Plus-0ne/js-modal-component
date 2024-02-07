document.addEventListener('DOMContentLoaded', function () {
    
    /**
     * Open modal
     * @param {any} 'mdl-open'
     * @returns {any}
     */
    // Get element mdl-open
    const mdlOpen = document.getElementsByClassName('mdl-open');

    // Loop through mdl-open and attach event listener click
    Array.from(mdlOpen).forEach(el => {
        // Event listener handle click open modal
        el.addEventListener('click', openModal);
    });

    // Open modal
    function openModal(e) {
        // Get this element
        const thisEl = e.target;

        // Get mdl-target value
        const mdlTarget = thisEl.getAttribute('mdl-target');

        // Check if mdl-outside-close
        const mdlOutsideClose = thisEl.getAttribute('mdl-outside-close');

        // Get modal component base in elModalComponent value
        const modalComponent = document.getElementById(mdlTarget);

        // Add class show
        modalComponent.classList.add('show');

        // Check if mdlOutsideClose is equal to true
        if (mdlOutsideClose == 'true') {
            // Attach close event if clicked outside mdl-content
            document.addEventListener('click', function (event) {
                
                if (event.target.id === mdlTarget) {
                    modalComponent.classList.remove('show');
                }
            });
        }
        
    }

    /**
     * Close modal
     * @param {any} 'mdl-open'
     * @returns {any}
     */
    // Get element mdl-open
    const mdlClose = document.getElementsByClassName('mdl-close');

    // Loop through mdl-open and attach event listener click
    Array.from(mdlClose).forEach(el => {
        // Event listener handle click open modal
        el.addEventListener('click', closeModal);
    });

    // Close modal
    function closeModal(e) {
        // Get this element
        const thisEl = e.target;
        // Get modal component base in elModalComponent value
        const modalComponent = thisEl.closest('.mdl-component');
        // Add class show
        modalComponent.classList.remove('show');
    }


});