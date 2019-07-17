function getRelated(token) {
    return fetch('http://localhost:3000/user/teams', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Basic ' + token,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then((res) => {
            if (res.error !== undefined) {
                return Promise.reject(res.error)
            }
            else {
                return Promise.resolve(res)
            }
        })
        .catch(function (error) {
            return Promise.reject(error)
        });
};
function getAll(token) {
    return fetch('http://localhost:3000/teams', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Basic ' + token,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then((res) => {
            if (res.error != undefined) {
                return Promise.reject(res.error)
            }
            else {
                return Promise.resolve(res)
            }
        })
        .catch(function (error) {
            console.log(error);
            return Promise.reject(error)
        });
};

function createTeam(token, name, status) {
    return fetch('http://localhost:3000/teams', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Basic ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"name": name, "isPrivate": status})
    })
        .then(res => res.json())
        .then((res) => {
            if (res.error != undefined) {
                return Promise.reject(res.error)
            }
            else {
                return Promise.resolve(res)
            }
        })
        .catch(function (error) {
            return Promise.reject(error)
        });
};
function joinTeam(token, team_id) {
    return fetch('http://localhost:3000/teams/join/' + team_id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Basic ' + token,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then((res) => {
            if (res.error !== undefined) {
                return Promise.reject(res.error)
            }
            else {
                console.log(res.error);
                return Promise.resolve(res)
            }
        })
        .catch(function (error) {
            return Promise.reject(error)
        });
}
function deleteOneTeam(token, team_id) {
    return fetch('http://localhost:3000/teams/' + team_id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Basic ' + token,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then((res) => {
            if (res.error !== undefined) {
                return Promise.reject(res.error)
            }
            else {
                console.log(res.error);
                return Promise.resolve(res)
            }
        })
        .catch(function (error) {
            return Promise.reject(error)
        });
}
function getOneTeam(token, team_id) {
    return fetch('http://localhost:3000/teams/' + team_id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Basic ' + token,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then((res) => {
            if (res.error !== undefined) {
                return Promise.reject(res.error)
            }
            else {
                console.log(res.error);
                return Promise.resolve(res)
            }
        })
        .catch(function (error) {
            return Promise.reject(error)
        });
}

export {joinTeam, getAll, getRelated, createTeam, getOneTeam, deleteOneTeam}