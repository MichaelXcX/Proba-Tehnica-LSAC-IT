# backend

## Setup

1. Go to project folder

> cd backend

2. Install Dependencies

> npm run setup

3. Create .env with following content

````
DB_URL=

PORT=3000
SECRET=AAA
````

## Run

1. Start Server

> npm start

2. Open in url or using an Endpoint tester (postman)

> http://127.0.0.1:3000/

## Exemple de executie

### POST /auth/signup

Exemplu de request body: 

{
    "email":"ionica.urzica@stud.acs.upb.ro",
    "username": "ionurzica",
    "password": "parola123"
}

Aici ca response ar trebui sa trimita un jwt token

### POST /auth/login

Se poate folosi request-ul de mai sus

### POST /memes/

Exemplu de request body: 

{
  "description": "POV: ai inteles backend-ul!"
}


### GET /memes/

Request-ul va returna toate meme-urile


### GET /memes/:id

Introduceti id-ul unui meme deja salvat din baza de date pentru a-l primi ca response

### PATCH /memes/:id

Exemplu de request body:
{
  "description": "POV: probabil ai inteles backend-ul!"
}

### DELETE /memes/:id

Introduceti id-ul unui meme deja salvat din baza de date pentru a-l sterge 

# Disclaimer
Va rog nu abuzati de acest backend, are sentimente si este sensibil si cel mai probabil va face un post pe insta despre traumele pe care le-a suferit. (Aceasta este o gluma, backend-ul este puternic dezvoltat)

