
function getCollections(token) {
    return fetch('http://localhost:3000/collections', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Basic ' + token,
            'Content-Type': 'application/json'
        },
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
function getUserCollections(token) {
    return fetch('http://localhost:3000/user/teams', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Basic ' + token,
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then((res) => {
            if (res.error !== undefined) {
                return Promise.reject(res.error)
            }
            else {
                let resp = [];
                console.log(res);
                for (let i = 0; i < res.length; i ++){
                    for(let j = 0; j < res[i].collection.length; j++){
                        resp.push(res[i].collection[j])
                    }
                }
                return Promise.resolve(resp)
            }
        })
        .catch(function (error) {
            return Promise.reject(error)
        });
};
function getOneCollection(token, id) {
    return fetch('http://localhost:3000/collections/' + id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Basic ' + token,
            'Content-Type': 'application/json'
        },
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

function createCollection(token, name, team) {
    return fetch('http://localhost:3000/collections', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Basic ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"name": name, "team_id": parseInt(team)})
    })
        .then(res => res.json())
        .then((res) => {
            if (res.error !== undefined) {
                return Promise.reject(res.error)
            }
            else {
                console.log(res);
                return Promise.resolve(res)
            }
        })
        .catch(function (error) {
            return Promise.reject(error)
        });
};

function deleteCollection(token, id) {
    return fetch('http://localhost:3000/collections/'+id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Basic ' + token,
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then((res) => {

            console.log(res);
            if (res.error !== undefined) {
                return Promise.reject(res.error)
            }
            else {
                console.log(res);
                return Promise.resolve(res)
            }
        })
        .catch(function (error) {
            return Promise.reject(error)
        });
};


export {createCollection, getCollections, getOneCollection,deleteCollection,getUserCollections}