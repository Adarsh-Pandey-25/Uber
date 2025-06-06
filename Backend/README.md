# Users Registration Endpoint Documentation

## Endpoint
`POST /users/register`

## Description
This endpoint registers a new user to the system. It validates the provided data, hashes the password, creates the user record in the database, and returns an authentication token upon successful creation.

## Required Data
- **fullName.firstName**
  - Type: String
  - Minimum length: 3 characters
  - Required
- **fullName.lastName**
  - Type: String
  - Minimum length: 3 characters (optional)
- **email**
  - Type: String
  - Must be a valid email address
  - Required
  - Must be unique
- **phoneNumber**
  - Type: Number
  - Exactly 10 digits
  - Required
  - Must be unique
- **password**
  - Type: String
  - Minimum length: 6 characters
  - Required

## Success Response
- **Status Code:** 201
- **Response Body:**
  - `success`: true
  - `message`: "User created successfully"
  - `user`: User data (excluding password field)
  - `token`: Authentication token valid for 24 hours

## Error Response
- **Status Code:** 400
- **Response Body:**
  - `errors`: Array of validation error objects, if input data is invalid.
  - Or
  - `message`: "User with this email or phone number already exists", if a duplicate user is detected.