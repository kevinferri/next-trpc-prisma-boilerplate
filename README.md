This is a [Next.js](https://nextjs.org/) app using:

- [Auth0](https://auth0.com/) for authentication
- [Prisma](https://prisma.io) as an ORM
- [tRPC](https://trpc.io/) for a typesafe API and querying
- [zod](https://github.com/colinhacks/zod) for query schema validation

## Create .env

You'll need to populate a .env file at the root of the project with the following:

```
# Your db connection url, needed by prisma to connect to your db
DATABASE_URL=
# Auth0 config information, found in your Auth0 dashboard
AUTH0_SECRET=
AUTH0_BASE_URL=
AUTH0_ISSUER_BASE_URL=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
```

## Running the app

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
