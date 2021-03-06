# Registr API

 Registr is a smart posts aggregator and library for your team.
 This repository is the API based on ruby&rails for Registr

____

## Project Setup

**Install all gems**:

```console
$ bundle install
```

**Remove the database**:

```console
$ rake db:drop
```

**Create the database**:

```console
$ rake db:create
```

**Update the database with new data model**:

```console
$ rake db:migrate
```

**Feed the database with default seeds**:

```console
$ rake db:seeds
```

**Start the web server on `http://localhost:3000` by default**:

```console
$ rails server
```

**Run all RSpec tests and Rubocop**:

```console
$ rake test
```

## Usage

| HTTP verbs | Paths  | Used for | Body | 
| ---------- | ------ | -------- |-----:| 
| POST | /register| Create a user| ```{"email": "...", "password": "..."} ```|
| POST | /login   | Authenticate a user | ```{"email": "...", "password": "..."} ```|
| GET | /posts    | List all posts|
| GET | /posts/:post_id | Show a single post |
| POST | /posts | Create a post | 
| PUT | /posts/:post_id | Update a post |
| DELETE | /posts/:post_id | Delete a post |
| GET | /collections/ | Get all collections | 
| POST | /collections/ | Create a collections |```{"name": String "team_id": Number} ```| 
| POST | /teams/ | Create a team for logged user |```{"name":String, "isPrivate": Bool} ```| 
| GET | /teams/ | Get all teams | 
| GET | /user/teams | Get logged user teams | 
| GET | /teams/join/:team_id | Join team with current logged user | 


## Use Case Examples

### Authentication

**Create a new user**:

```console
$ curl -X POST -H 'Content-type: application/json' -d '{"email": "testuser@email.com", "password": "testuser123"}' localhost:3000/register
```

**Authenticate a user**:

```console
$ curl -X POST -H 'Content-type: application/json' -d '{"email": "testuser@email.com", "password": "testuser123"}' localhost:3000/login
```

On successful login, `{"auth_token": <token>}` will be returned. This token will be expired after 24 hours.

### CRUD

**In order to access the posts and comments, add `-H 'Authorization: <token>'` to the header of every request for CRUD operations.**

The `create`, `update` and `delete` actions can only be executed by users authorized. 

**POST a new post**:

```console
$ curl -X POST -H 'Content-type: application/json' -d '{"url": "https://urltoscrap.com", "collection": 567876}' localhost:3000/posts
```
