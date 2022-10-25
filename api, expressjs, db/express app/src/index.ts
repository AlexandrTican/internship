import express from 'express';
import { executeSQL } from './db';



const app = express();
const port = parseInt(process.env.PORT ?? '3000', 10);

app.use(express.json());


executeSQL('select 1+1').then(console.log, console.log)
app.post(
    '/username',
  async (request, response) => {
    const { username, firstName,lastName,age,email } = request.body;

    const [clients] = await executeSQL(
      `INSERT INTO "Clients"
      (username, firstName,lastName,age,email)
      VALUES
      ($1, $2, $3, $4, $5)
      RETURNING *;
      `,
      [username, firstName,lastName,age,email]
    );

    response.status(201).send({ id: clients.id });
  },
);

app.get(
  '/users',
  async (_, response) => {
    const list = await executeSQL('SELECT * FROM "Clients"');
    response.send(list);
  },
);

app.get(
  '/users/:id',
  async (request, response) => {
    const userId = request.params.id;
    const [user] = await executeSQL('SELECT * FROM "Clients" WHERE id = $1', [userId]);
    response.send(user);
  },
);

app.put(
  '/put/:id',
  async (request, response) => {
    const itemId = request.params.id;
    const { item_name, item_description } = request.body;
    const [updatedItem] = await executeSQL(
      `
        UPDATE "Items"
        SET
          item_name = $1,
          item_description = $2
        WHERE id = $3
        RETURNING *;
      `,
      [item_name, item_description, itemId],
    );
    response.send(updatedItem);
  },
);

app.delete(
  '/users/:id',
  async (request, response) => {
    const clientId = request.params.id;

    const [deletedClient] = await executeSQL(
      'DELETE FROM "Clients" WHERE id = $1 RETURNING *;',
      [clientId],
    );

    response.send(deletedClient);
  },
)

// app.post(); // create an item in database
// app.get(); // get a list or an item from the database
// app.put(); // replace an object in database
// app.patch(); // update object in database
// app.delete(); // delete an item from the database

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
