import { Pool } from "pg";

const client = new Pool({
    connectionString: `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.BASE_ADDR}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
})

export default client;