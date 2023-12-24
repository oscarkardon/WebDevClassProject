async function populateTeams(){
    let teamList = await getTeamList();
    buildTeams(teamList);
}

async function populateTeam(teamName){
    let team = await getTeam(teamName);
    buildTeam(team);
}

function submitNewsletter() {
    console.log("submitNewsletter");
    const formInputs = document.getElementById("newsletter").elements;
    //assigns values based on form submission
    const celtics = formInputs["celtics"].checked;
    const patriots = formInputs["patriots"].checked;
    const revolution = formInputs["revolution"].checked;
    const chelsea = formInputs["chelsea"].checked;
    const firstName = formInputs["firstName"].value;
    console.log(firstName);
    console.log(chelsea);
    const lastName = formInputs["lastName"].value;
    const email = formInputs["email"].value;
    //calls with the form input
    addNewsletter(firstName + " " + lastName, email, celtics, patriots, revolution, chelsea);

    //makes form green
    document.getElementById("newsletter").style.backgroundColor = "green";
    let submitMessage = document.createElement("h2");
    submitMessage.textContent = "Thank You for Your Support";
    document.getElementById("newsletter").appendChild(submitMessage);
    //clears the form input
    for (let i = 0; i < formInputs.length; i++) {
            if (formInputs[i].type !== "submit") {
                formInputs[i].value = "";
            }
    }

    hi(firstName, patriots, celtics, revolution, chelsea);
}


function hi(name, patriots, celtics, revolution, chelsea){
    let message = "Welcome, " + name;
    let teams = [];

    if (patriots === true) {
        teams.push("Patriots");
    }
    if (celtics === true) {
        teams.push("Celtics");
    }
    if (revolution === true) {
        teams.push("Revolution");
    }
    if (chelsea === true) {
        teams.push("Chelsea");
    }
    if(teams.length > 0){
        message += ", fellow fan of the ";
    }
    for(let i = 0; i < teams.length; i++){
        if(i === teams.length - 2){
                message += teams[i] + ", and ";
            }
        else if(i !== teams.length - 1){
            message += teams[i] + ", ";
        }
        else{
            message += teams[i] + "!";
        }
    }


    let text = document.createElement("h2");
    text.textContent = message;
    text.style.color = "pink";
    document.getElementById("lastHeading").append(text);
}
