[script]
//Prevent right click
document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        alert('Right-click is disabled on this page.');
    });
});

    //Prevent F12
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12') {
        e.preventDefault();
        alert('Not Allowed Bro.');
    }
});

        //Prevent copy & cut
document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('copy', function(e) {
        e.preventDefault();
        alert('Copying is disabled on this page.');
    });
    document.addEventListener('cut', function(e) {
        e.preventDefault();
        alert('Cutting is disabled on this page.');
    });
});

        //Prevent ctrl c
document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            if (['c'].includes(e.key.toLowerCase())) {
                e.preventDefault();
                 alert(`we don't do it here`);
            }
        }
    });
});

         //Prevent ctrl x
document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            if (['x'].includes(e.key.toLowerCase())) {
                e.preventDefault();
                alert(`I see`);
            }
        }
    });
});

         //Prevent ctrl v
document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            if (['v'].includes(e.key.toLowerCase())) {
                e.preventDefault();
                alert(`The ${e.key.toUpperCase()} command is disabled on this page.`);
            }
        }
    });
});

         //Prevent ctrl a
document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            if (['a'].includes(e.key.toLowerCase())) {
                e.preventDefault();
                alert(`The ${e.key.toUpperCase()} command is disabled on this page.`);
            }
        }
    });
});

         //Prevent ctrl u
document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            if (['u'].includes(e.key.toLowerCase())) {
                e.preventDefault();
                alert(`I can see you`);
            }
        }
    });
});
[/script]
