# Backend MemeIt

## Run commands
cd backend/ 

npm install

npm start

## .env.example

### Am creat acest fisier pentru a vedea si seta pentru teste varaibilele de proces 
> DB_URL = "URL pt baza de date in MongoDB"

>PORT = "Portul pe care va rula backend-ul"

>JWT_SECRET = "Un string generat random pentru crearea token-urilor"


# Ce am implementat oare?

## Pai teoretic ar trebui sa fie implementat totul pana la partea bonus cu Multer (fmm Semnale si Sisteme ca poate aveam timp sa ma ocup si de task-urile bonus)

## Cum nu am mai lucrat asa de mult pe partea de Backend, mi-au dat putine batai de cap middleware-urile, mai exact sa inteleg rostul lor pe lumea asta

## Anyway, a fost fun sa invat backend, un skill destul de useful din punctul meu de vedere, iar proba asta a fost scuza perfecta sa ma pun cu burta pe carte


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

=======
#
### Va pwp, ne auzim in TB, XOXO 
