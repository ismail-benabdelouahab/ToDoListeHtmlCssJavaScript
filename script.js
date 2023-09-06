var addToDoButton = document.getElementById("addtoDo");
var toDoContainer = document.getElementById("toDoContainer");
var inputField = document.getElementById("inputField");

addToDoButton.onclick = () => {
  // verifier si l'input n'est pas vide
  if (inputField.value != "") {
    // si l'input n'est pas vide, créer un paragraphe
    var paragraphe = document.createElement("p");
    // valoriser ce paragraphe avec lle contenu de l'input
    paragraphe.innerText = inputField.value;

    // styliser le paragraphe
    paragraphe.classList.add("paragraphe_style");

    //insérer le paragraphe dans l'élément toDoContainer
    toDoContainer.appendChild(paragraphe);

    //vider l'input quand le paragraphe est ajouté
    inputField.value = "";
  }

  // barrer le paragraphe quand on click desssu
  paragraphe.addEventListener("click", () => {
    paragraphe.classList.add("paragraph_click");
  });

  // supprimer la tâche quand on double click sur la tâche
  paragraphe.addEventListener("dblclick", () => {
    toDoContainer.removeChild(paragraphe);
  });
};
