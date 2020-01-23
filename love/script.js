window.onload = () => {
    let path = document.getElementsByClassName('path');
    for (let i = 0; i < path.length; i++) {
        let length = path[i].getTotalLength();
        // Clear any previous transition
        path[i].style.transition = path[i].style.WebkitTransition = 'none';
        // Set up the starting positions
        path[i].style.strokeDasharray = length + ' ' + length;
        path[i].style.strokeDashoffset = length;
        // Trigger a layout so styles are calculated & the browser
        // picks up the starting position before animating
        path[i].getBoundingClientRect();
        // Define our transition
        path[i].style.transition = path[i].style.WebkitTransition =
            'stroke-dashoffset 2s ease-in-out';
        // Go!
        path[i].style.strokeDashoffset = '0';
    }

}
