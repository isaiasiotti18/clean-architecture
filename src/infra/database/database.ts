import pgPromise from "pg-promise";

const pgp = pgPromise({});

const dbConnect = pgp({
  user: 'isaiasiotti',
  password: 'isaias963',
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  idleTimeoutMillis: 100
})


export default dbConnect