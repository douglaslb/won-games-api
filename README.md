# Won Games CMS **- Strapi API**

This is the API to manage the [Won Games E-commerce](https://github.com/douglaslb/won-games). 🎮

## **Requirements**

This project uses [PostgreSQL](https://www.postgresql.org/), so, in order to make it working, install in your local machine or run `docker-compose up` to start an instance of PostgreSQL using [Docker](https://www.docker.com/).

In case you want to run PostgreSQL locally, the configuration to the Database can be found on [config/database.js](https://github.com/douglaslb/won-games-api/blob/master/config/database.js)

## **Development**

After cloning this project, install the dependencies:

```
yarn install
```

And run using:

```
yarn develop
```

The urls to access are:

- `http://localhost:1337/admin` - The Dashboard to create and populate data
- `http://localhost:1337/graphql` - GraphQL Playground to test your queries

*The first time to access the Admin you'll need to create an user.*

## Next Steps

- Create a Data Scraper to populate API
