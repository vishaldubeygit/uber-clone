# User Registration API Documentation

## Register User
`POST /users/register`

Register a new user in the system.

### Request Body
```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string"
}
```

### Response Codes

| Status Code | Description |
|------------|-------------|
| 201 | User successfully created |
| 400 | Bad Request - Invalid input data |
| 409 | Conflict - Email already exists |
| 500 | Internal Server Error |

### Success Response Example
```json
{
  "token": "string",
  "user": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
}
```

### Error Response Example
```json
{
  "errors": [
    {
      "msg": "Error message description",
      "param": "string",
      "location": "string"
    }
  ]
}
```

### Required Fields
- `fullname.firstname`: User's first name (minimum 3 characters)
- `fullname.lastname`: User's last name (minimum 3 characters)
- `email`: Valid email address
- `password`: Minimum 6 characters

## Login User
`POST /users/login`

Authenticate a user and return a token.

### Request Body
```json
{
  "email": "string",
  "password": "string"
}
```

### Response Codes

| Status Code | Description |
|------------|-------------|
| 200 | User successfully authenticated |
| 400 | Bad Request - Invalid input data |
| 401 | Unauthorized - Invalid credentials |
| 500 | Internal Server Error |

### Success Response Example
```json
{
  "token": "string",
  "user": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
}
```

### Error Response Example
```json
{
  "errors": [
    {
      "msg": "Error message description",
      "param": "string",
      "location": "string"
    }
  ]
}
```

### Required Fields
- `email`: Valid email address
- `password`: Minimum 6 characters
