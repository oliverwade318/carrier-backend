# Carrier Backend
#### Install Dependencies
```
npm run install
```
### Create Local Database

1. Create a database like this:

https://www.postgresql.org/docs/8.0/sql-createuser.html

2. Create local database named `carrier_development` like this:

https://www.postgresql.org/docs/9.0/sql-createdatabase.html

3. Construct local database URL like this (leave password blank for local if necessary):

`postgresql://user:password@127.0.0.1:5432/carrier_development`

#### Add .env file and attributes.

Please check .env.example file for setting the environment variables

#### Create Databe
```
npx sequelize-cli db:create
```

#### Run Migration
```
npx sequelize-cli db:migrate
```

#### Seed Data
```
npx sequelize-cli db:seed:all
```

#### Run Project
```
npm run dev
```

### REFERENCE
`
https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication?id=api-key
`
