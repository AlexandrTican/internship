import { Client } from 'pg';

export async function executeSQL(
  sql: string,
  variables: any[] = [],
) {

  const client = new Client({
    host: process.env.POSTGRES_HOST,
    password: process.env.POSTGRES_PASSWORD,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DATABASE,
    port: parseInt(process.env.POSTGRES_PORT ?? '5432', 10),
  });

  await client.connect();

  const result = await client.query(sql, variables);
  return result.rows;
}
