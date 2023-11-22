# Foodie Hub API Documentation

## Models

### User

```md
- email : string, required, unique
- password : string, required
- fullName : string required
- wallpaper : string, (default "[string-imageUrl]")
- profilePicture : string, (default "[string-imageUrl]")
```

### Group

```md
- name : string, required
- groupPicture : string, (default "[string-imageUrl]")
```

### UserGroup

```md
- role : string, (default "member")
- GroupId : integer, required
- UserId : integer, required
```

## Endpoints

List of available endpoints:

- `GET /`
- `POST /login`
- `POST /auth/google/callback`

Routes below need authentication:

- `GET /users`
- `GET /users/:userId`
- `PUT /users/:userId`
- `POST /groups`
- `GET /groups/:groupId`
- `GET /user-groups`
- `GET /user-groups/:groupId`

Routes below need authentication & authorization:

- `DELETE /groups/:groupId`
- `POST /user-groups/:groupId`
- `DELETE /user-groups/:groupId`

## 1. GET /

Description:

- Only to show that API server are working

Response (200 - OK)

```json
{
  "message": "API server ON"
}
```

## 2. POST /login

Description

- Authenticate user login and generate access token

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

Response (200 - OK)

```json
{
  "access_token": "string"
}
```

Response (400 - Bad Request)

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

Response (401 - Unauthorized)

```json
{
  "message": "Invalid Email or Password"
}
```

## 3. POST /auth/google/callback

Description:

- Authenticate user login and generate access token using google account

Request:

- body:

```json
{
  "code": "string"
}
```

Response (200 - OK)

```json
{
  "access_token": "string",
  "name": "string",
  "id": "integer"
}
```

## 4. GET /users

Description:

- Fetch all users from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- query:

```json
{
  "search": "string"
}
```

Response (200 - OK)

```json
[
  {
    "id": "integer",
    "fullName": "string"
  },
  {
    "id": "integer",
    "fullName": "string"
  },
  {
    "id": "integer",
    "fullName": "string"
  },
  ...,
]
```

## 5. GET /users/:userId

Description:

- Fetch user detail from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "userId": "integer"
}
```

Response (200 - OK)

```json
{
  "id": "integer",
  "email": "string",
  "fullName": "string",
  "wallpaper": "string",
  "profilePicture": "string",
  "createdAt": "date"
}
```

Response (404 - Not Found)

```json
{
  "message": "Data not found"
}
```

## 6. PUT /users/:userId

Description:

- Edit current user profile

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "userId": "integer"
}
```

- body:

```json
{
  "profilePicture": "string",
  "fullName": "string"
}
```

Response (200 - OK)

```json
{
  "message": "Your profile has been updated"
}
```

## 7. POST /groups

Description:

- Create new group

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- user:

```json
{
  "id": "integer"
}
```

- body:

```json
{
  "name": "string"
}
```

Response (200 - OK)

```json
{
  "message": "Group [name] has been created"
}
```

## 8. GET /groups/:groupId

Description:

- Get detail of group

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "groupId": "integer"
}
```

- body:

```json
{
  "name": "string"
}
```

Response (200 - OK)

```json
{
  "id": 1,
  "name": "Hacktiv Food",
  "groupPicture": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "createdAt": "2023-11-20T17:00:00.000Z",
  "updatedAt": "2023-11-20T17:00:00.000Z",
  "UserGroups": [
    {
      "id": 1,
      "UserId": 2,
      "role": "admin",
      "User": {
        "id": 2,
        "fullName": "Om Budi",
        "profilePicture": "https://res.cloudinary.com/dcl18dejt/image/upload/v1700637150/foodie/Jerry%20Laugh.gif_26dfbdc3-c246-4758-8ddd-6caa438d5011.gif"
      }
    },
    {
      "id": 3,
      "UserId": 3,
      "role": "member",
      "User": {
        "id": 3,
        "fullName": "Pak Budi",
        "profilePicture": "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?w=1060"
      }
    },
    {
      "id": 6,
      "UserId": 12,
      "role": "member",
      "User": {
        "id": 12,
        "fullName": "Kak Budi",
        "profilePicture": "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?w=1060"
      }
    }
  ]
}
```

## 9. GET /user-groups

Description:

- Fetch current user groups

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- user:

```json
{
  "id": "integer"
}
```

Response (200 - OK)

```json
[
    {
        "id": 1,
        "role": "admin",
        "GroupId": 1,
        "UserId": 2,
        "Group": {
            "id": 1,
            "name": "Hacktiv Food",
            "groupPicture": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    },
    {
        "id": 2,
        "role": "admin",
        "GroupId": 2,
        "UserId": 2,
        "Group": {
            "id": 2,
            "name": "Pastalicious",
            "groupPicture": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    },
    {
        "id": 5,
        "role": "admin",
        "GroupId": 4,
        "UserId": 2,
        "Group": {
            "id": 4,
            "name": "Indie Foodie",
            "groupPicture": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    }
    ...,
]
```

## 10. GET /user-groups/:groupId

Description:

- Fetch all user in group

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "groupId": "integer"
}
```

Response (200 - OK)

```json
[
    {
        "id": 1,
        "role": "admin",
        "GroupId": 1,
        "UserId": 2,
        "createdAt": "2023-11-20T17:00:00.000Z",
        "updatedAt": "2023-11-20T17:00:00.000Z",
        "User": {
            "id": 2,
            "email": "test.email@testmail.com",
            "fullName": "Rizky Setyanto",
            "wallpaper": "https://images.unsplash.com/photo-1696673021120-08501c90bf54?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "profilePicture": "https://res.cloudinary.com/dcl18dejt/image/upload/v1700637150/foodie/Jerry%20Laugh.gif_26dfbdc3-c246-4758-8ddd-6caa438d5011.gif",
            "createdAt": "2023-11-21T10:43:34.217Z"
        }
    },
    {
        "id": 3,
        "role": "member",
        "GroupId": 1,
        "UserId": 3,
        "createdAt": "2023-11-21T17:00:00.000Z",
        "updatedAt": "2023-11-21T17:00:00.000Z",
        "User": {
            "id": 3,
            "email": "user1@mail.com",
            "fullName": "Pak Budi",
            "wallpaper": "https://images.unsplash.com/photo-1696673021120-08501c90bf54?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "profilePicture": "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?w=1060",
            "createdAt": "2023-11-21T10:43:34.217Z"
        }
    }
    ...,
]
```

Response (404 - Not Found)

```json
{
  "message": "Data not found"
}
```

## 11. DELETE /groups/:groupId

Description:

- Admin can delete group from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "groupId": "integer"
}
```

Response (200 - OK)

```json
{
  "message": "Group [name] successfully deleted"
}
```

Response (404 - Not Found)

```json
{
  "message": "Data not found"
}
```

## 12. POST /user-groups/:groupId

Description:

- Admin can invite another user to group

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "groupId": "integer"
}
```

- body:

```json
{
  "UserId": "integer"
}
```

Response (200 - OK)

```json
{
  "message": "You have added new member to the group"
}
```

Response (400 - Bad Request)

```json
{
  "message": "[memberName] already in your group"
}
```

Response (404 - Not Found)

```json
{
  "message": "Data not found"
}
```

## 13. DELETE /user-groups/:groupId

Description:

- Member can leave group

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "groupId": "integer"
}
```

- user :

```json
{
  "id": "integer"
}
```

Response (200 - OK)

```json
{
  "message": "You have leave [groupName] group"
}
```

Response (404 - Not Found)

```json
{
  "message": "Data not found"
}
```

## Global Error

Response (401 - Unauthorized)

```json
{
  "message": "Invalid token"
}
```

Response (403 - Forbidden)

```json
{
  "message": "You are not authorized"
}
```

Response (500 - Internal Server Error)

```json
{
  "message": "Internal server error"
}
```
