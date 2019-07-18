
function createPost(token, url, collection_id) {
    return fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Basic ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"url": url, "collection_id": collection_id})
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


function getPosts(token) {
    return fetch('http://localhost:3000/posts', {
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
                console.log(res);
                return Promise.resolve(res)
            }
        })
        .catch(function (error) {
            return Promise.reject(error)
        });
};
function deleteOnePost(token, id) {
    return fetch('http://localhost:3000/posts/' + id, {
        method: 'DELETE',
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
                console.log(res);
                return Promise.resolve(res)
            }
        })
        .catch(function (error) {
            return Promise.reject(error)
        });
};

export {createPost, getPosts, deleteOnePost}