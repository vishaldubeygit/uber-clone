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

## Register Captain
`POST /captains/register`

Register a new captain in the system.

### Request Body
```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string",
  "vehicle": {
    "color": "string",
    "plate": "string",
    "capacity": 1,
    "vehicleType": "car"
  }
}
```

### Response Codes

| Status Code | Description |
|------------|-------------|
| 201 | Captain successfully created |
| 400 | Bad Request - Invalid input data |
| 409 | Conflict - Email already exists |
| 500 | Internal Server Error |

### Success Response Example
```json
{
  "token": "string",
  "captain": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": 1,
      "vehicleType": "car"
    }
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
- `fullname.firstname`: Captain's first name (minimum 3 characters)
- `fullname.lastname`: Captain's last name (minimum 3 characters)
- `email`: Valid email address
- `password`: Minimum 6 characters
- `vehicle.color`: Vehicle color (minimum 3 characters)
- `vehicle.plate`: Vehicle plate (minimum 3 characters)
- `vehicle.capacity`: Vehicle capacity (minimum 1)
- `vehicle.vehicleType`: Vehicle type (must be one of 'car', 'motorcycle', 'auto')

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

## Get User Profile
`GET /users/profile`

Retrieve the authenticated user's profile.

### Response Codes

| Status Code | Description |
|------------|-------------|
| 200 | User profile retrieved successfully |
| 401 | Unauthorized - Invalid or missing token |
| 500 | Internal Server Error |

### Success Response Example
```json
{
  "_id": "string",
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string"
}
```

### Error Response Example
```json
{
  "msg": "Error message description"
}
```

## Logout User
`GET /users/logout`

Logout the authenticated user.

### Response Codes

| Status Code | Description |
|------------|-------------|
| 200 | User logged out successfully |
| 401 | Unauthorized - Invalid or missing token |
| 500 | Internal Server Error |

### Success Response Example
```json
{
  "msg": "User logged out"
}
```

### Error Response Example
```json
{
  "msg": "Error message description"
}
```

# Captain Routes Documentation

## Register a new captain

**URL**: `/captains/register`

**Method**: `POST`

**Request Body**:
```json
{
  "fullname": { "firstname": "string", "lastname": "string" },
  "email": "string",
  "password": "string",
  "vehicle": { 
    "color": "string", 
    "plate": "string", 
    "capacity": "number", 
    "vehicleType": "string" 
  }
}
```

**Response**:
```json
{
  "token": "string",
  "captain": {
    "_id": "string",
    "fullname": { "firstname": "string", "lastname": "string" },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    }
  }
}
```

## Login a captain

**URL**: `/captains/login`

**Method**: `POST`

**Request Body**:
```json
{
  "email": "string",
  "password": "string"
}
```

**Response**:
```json
{
  "token": "string",
  "captain": {
    "_id": "string",
    "fullname": { "firstname": "string", "lastname": "string" },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    }
  }
}
```

## Get captain profile

**URL**: `/captains/profile`

**Method**: `GET`

**Response**:
```json
{
  "captain": {
    "_id": "string",
    "fullname": { "firstname": "string", "lastname": "string" },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    }
  }
}
```

## Logout a captain

**URL**: `/captains/logout`

**Method**: `GET`

**Response**:
```json
{
  "message": "logged out"
}
```
