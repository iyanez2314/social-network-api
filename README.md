# Social network api

This is a social netowork API, with this project you can add users to a database.
 Another cool feature is creating thoughts
 associated with the thoughts you can create reactions to those thoughts. 

## API Reference
User api as well thought api have your usual CRUD opertaions.
Friends will only have post and delete same goes for thoughts.
#### Get all users

```http
  GET /api/users
```
will return everything associated with all users.

#### Get all thoughts

```http
  GET  /api/thoughts
```
Will return all thoughts created as well as the user that is associated with those thoughts


#### POST and DELETE friends

```http
POST /api/users/:userId/friends/:friendId
```

```http
DELETE /api/users/:userId/friends/:friendId
```
#### POST and DELETE reactions
 ```http
POST /api/thoughts/:thoughtId/reactions
 ```

 ```http
DELETE /api/thoughts/:thoughtId/reactions
 ```




