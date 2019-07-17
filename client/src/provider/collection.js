
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
            if (res.error != undefined) {
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


export {createCollection, getCollections}