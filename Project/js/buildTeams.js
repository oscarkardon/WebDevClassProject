function buildTeams(teams) {
    for (team of teams) {
        buildTeam(team);
    }
}

function buildTeam(team) {
    let div1 = buildDiv("team", "add" + team.id + "Id");
    let div2 = buildDiv(team.id, team.id + "Id");
    div1.appendChild(div2);
    let div3 = buildDiv("content", null);
    div2.appendChild(div3);

    let removeButton = document.createElement("button");
    removeButton.setAttribute("type", "button");
    removeButton.setAttribute("id", "remove" + team.teamName);
    removeButton.setAttribute("onclick", "removeTeam('" + team.id + "Id" + "')");
    removeButton.innerHTML = "X";
    div3.appendChild(removeButton);

    let teamName = document.createElement("h1");
    teamName.setAttribute("class", "teamname");
    div3.appendChild(teamName);

    let teamLink = document.createElement("a");
    teamLink.setAttribute("href", team.navURL);
    teamLink.innerHTML = team.teamName;
    teamName.appendChild(teamLink);

    let div4 = buildDiv("mainImage");
    teamName.after(div4);
    let logo = document.createElement("img");
    logo.setAttribute("src", team.logoUrl);
    logo.setAttribute("alt", team.teamName + " logo");
    logo.setAttribute("class", "mainImage")
    logo.setAttribute("width", "100px");
    div4.appendChild(logo);

    let location = buildP("Location", team.Location);
    div4.after(location);
    let stadium = buildP("Stadium", team.Stadium);
    location.append(stadium);
    let coach = buildP("Coach", team.Coach);
    stadium.append(coach);

    let topPlayersName = buildP("Top Players", "");
    coach.append(topPlayersName);

    let topPlayers = document.createElement("ul");
    topPlayersName.append(topPlayers);


    for (let player of team.TopPlayers) {
        let playerName = document.createElement("li");
        playerName.innerHTML = player.playerName;
        topPlayers.appendChild(playerName);
    }

    let container = document.querySelector(".container");
    container.appendChild(div1);
}

function buildDiv(className, id) {
    let div = document.createElement("div");
    if (className) {
        div.setAttribute("class", className);
    }
    if (id) {
        div.setAttribute("id", id);
    }
    return div;
}

function buildP(front, end) {
    let p = document.createElement("p");
    p.innerHTML = front + ": " + end;
    return p;
}

