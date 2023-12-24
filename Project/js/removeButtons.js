function removeTeam(idName) {
    document.getElementById(idName).style.display = 'none';
    let addBackButton = document.createElement('button');
    let appendParent = document.querySelector("#add" + idName);
    addBackButton.textContent = '+';
    addBackButton.setAttribute('id', "addButton" + idName);
    addBackButton.setAttribute('onclick', "addTeam('" + idName + "')");
    appendParent.appendChild(addBackButton);
    addBackButton.style.display ='block';

}

function addTeam(idName){
    document.getElementById(idName).style.display = 'block';
    document.getElementById("addButton" + idName).remove();
}
