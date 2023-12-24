function buildFetchOptions(method,bodyObject) {
    let fetchOptions = {};
    fetchOptions.method = method.toLowerCase();
    if (fetchOptions.method == 'post' || fetchOptions.method == 'put') {
        fetchOptions.body = JSON.stringify(bodyObject);
        fetchOptions.headers = {"Content-Type":"application/json"};
    }
    return fetchOptions;
}
async function makeAPICall(url,method,idParam,bodyObject) {
    let fetchOptions = buildFetchOptions(method,bodyObject);
    if (idParam && idParam != null) {
        url += "/"+idParam;
    }
    let apiResponse = await fetch(url,fetchOptions);
    if (apiResponse.status != 200) return undefined;
    let apiResponseJSON = await apiResponse.json();
    return apiResponseJSON;
}

async function getTeamList() {
    //gets the team info from the backend
    let teamList = await makeAPICall(getTeamsURL,"get");
    return teamList;
}

async function getTeam(teamName){
    //gets a team's info from the backend
    let team = await makeAPICall(getTeamsURL + "/" + teamName, "get");
    return team;
}

async function addNewsletter(fullName, email, celtics, patriots, revolution, chelsea) {
    console.log("addNewsletter");
    //makes new newsletter class onject for a submission with their info
    let newNewsletter = new Newsletter(fullName, email, celtics, patriots, revolution, chelsea);
    //sends the new newsletter info to the backend
    let newsletterResponse = await makeAPICall(addNewsletterURL,"post",undefined,newNewsletter);
}


