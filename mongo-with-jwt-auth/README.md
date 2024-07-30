## Create a course selling website
## Introduction
My project is a web application that allows users to create and manage courses.

### Description
- Same as the last assignment but you need to use jwts for authentication.
- We have introduced the signgin endpoints for both users and admins.
- For this one, in every authenticated requests, you need to send the jwt in headers (`Authorization : "Bearer " `).
- You need to use mongodb to store all the data persistently.
  
## API Documentation
### Routes
- Admin Routes:
### POST /admin/signup
* **Description:** Creates a new admin account.
* **Input Body:**
	+ `username`: `admin`
	+ `password`: `pass`
* **Output:**
	+ `message`: `Admin created successfully`

### POST /admin/signin
* **Description:** Logs in an admin account.
* **Input Body:**
	+ `username`: `admin`
	+ `password`: `pass`
* **Output:**
	+ `token`: `your-token`

### POST /admin/courses
* **Description:** Creates a new course.
**Input:**

* **Headers:**
	+ `Authorization`: `Bearer <token>`
* **Body:**
	+ `title`: `course title`
	+ `description`: `course description`
	+ `price`: `100`
	+ `imageLink`: `https://linktoimage.com`

**Output:**

* `message`: `Course created successfully`
* `courseId`: `new course id`

  
### GET /admin/courses
Returns all the courses.

#### Input

| Header | Value |
| --- | --- |
| Authorization | Bearer <token> |

#### Output

| Field | Type | Description |
| --- | --- | --- |
| courses | array | Array of course objects |
| id | integer | Course ID |
| title | string | Course title |
| description | string | Course description |
| price | integer | Course price |
| imageLink | string | Course image link |
| published | boolean | Course publication status |


### User routes
### POST /users/signup
Creates a new user account.

#### Input

| Field | Type | Description |
| --- | --- | --- |
| email | string | User email |
| password | string | User password |
| name | string | User name |

#### Output

| Field | Type | Description |
| --- | --- | --- |
| id | integer | User ID |
| email | string | User email |
| name | string | User name |

#### Errors

| Code | Message | Description |
| --- | --- | --- |
| 400 | Bad Request | Invalid email or password |
| 409 | Conflict | User already exists |


#### GET /users/courses

* **Description**: Returns a list of all available courses.
* **Input**:
	+ `Authorization`: string (Bearer token, required)
* **Output**:
	+ `courses`: array
		- `id`: integer (Course ID)
		- `title`: string (Course title)
		- `description`: string (Course description)
		- `price`: integer (Course price)
		- `imageLink`: string (Course image link)
		- `published`: boolean (Course publication status)

#### POST /users/courses/:courseId

* **Description**: Purchases a course by its ID.
* **Input**:
	+ `courseId`: integer (ID of the course to be purchased, required)
	+ `Authorization`: string (Bearer token, required)
* **Output**:
	+ `message`: string (Success message)

#### GET /users/purchasedCourses

* **Description**: Returns a list of all courses purchased by the authenticated user.
* **Input**:
	+ `Authorization`: string (Bearer token, required)
* **Output**:
	+ `purchasedCourses`: array
		- `id`: integer (Course ID)
		- `title`: string (Course title)
		- `description`: string (Course description)
		- `price`: integer (Course price)
		- `imageLink`: string (Course image link)
		- `published`: boolean (Course publication status)

## Usage
To use my project, follow these steps:

1. Create a new admin account using the `/admin/signup` endpoint.
2. Log in to your admin account using the `/admin/signin` endpoint.
3. Create a new course using the `/admin/courses` endpoint.
