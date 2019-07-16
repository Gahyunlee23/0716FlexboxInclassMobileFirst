(() => {
    console.log('Working!!')

    // 
    let mobileNav = document.querySelector('.nav'),
        navPanel = document.querySelector('#burgerCon'),
        // select all of the nav panal anchor tags (the a elements)
        navLinks = navPanel.querySelectorAll('a');

    function toggleNav(event) {
        // e is the event object. by Default, anchor tag to navigate somewhere. we don;t want that to happen
        // so prevent that default behavior and write your own
        event.preventDefault();
        console.log('should show nav dropdown');
        //debugger
        // this should only fire when you click on an anchor tag -> "this" is the element you're clicking on
        // and it has a default nodeName (look on your inspect panel to find it)
        if (this.nodeName == "A") { 
            debugger
            // we clicked on an anchor tag, so do same navigation

          window.scrollTo({
              top: this.offsetTop,
              behavior: 'smooth'
          })
        }
        
        // make sure the mobile nav show up when you click on the navlink at top right
        // and make it go again on a second click (so - toggle the display property between block and none)
        navPanel.classList.toggle('show-mobile-nav');
    }
    // these are the triggers that fire off our funcionality (when the user click on something)
    mobileNav.addEventListener('click', toggleNav);

    // loop thru the links and add event handling for each one
    navLinks.forEach(link => link.addEventListener ('click', toggleNav));
})();