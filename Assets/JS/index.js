document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]')
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown;

    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})

let isSearchButton;

function toggler(searchBar) {
    $("#" + searchBar).toggle();
}

function showHide() {

    if (isSearchButton === 1) {

        document.getElementById('searchBar').style.display="inline";
        return isSearchButton=0;
    }
    else{

        document.getElementById('searchBar').style.display="none";
        return isSearchButton=1;
    }
}
document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('searchBar');
    if (!container.contains(e.target)) {
        container.style.display = 'none';
    }
});

