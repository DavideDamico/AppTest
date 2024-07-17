import express, { Request, Response } from "express";
import { createClient } from "@vercel/postgres";

const client = createClient({
  connectionString:
    "postgres://default:yJdC4WEhv5li@ep-blue-sun-a47wir1c.us-east-1.aws.neon.tech:5432/verceldb",
});

client.connect();

const app = express();
const port = 3000;

const server = express.json();

app.use(server);

// La nostra entità sono i post

// C.R.U.D = create, read, update, delete

//CREATE
app.post("/posts", (req: Request, res: Response) => {
  const { title, content } = req.body;
  client.query(
    "INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *",
    [title, content],
    function (error, response) {
      if (error) return res.status(500).send("error");
      else return res.status(200).send("post created");
    }
  );
});

//READ
app.get("/posts", (req: Request, res: Response) => {
  client.query("SELECT * FROM posts", function (error, response) {
    if (error) return res.status(500).send("error");
    else return res.status(200).send(response.rows);
  });
});

//READ DETAIL
app.get("/posts/:id", (req: Request, res: Response) => {
  client.query(
    "SELECT * FROM posts WHERE id = $1",
    [req.params.id],
    function (error, response) {
      if (error) return res.status(500).send("error");
      else return res.status(200).send(response.rows);
    }
  );
});

//UPDATE
app.put("/posts/:id", (req: Request, res: Response) => {
  const { title, content } = req.body;
  const { id } = req.params;
  client.query(
    "UPDATE posts SET title = $1, content = $2 WHERE id = $3",
    [title, content, id],
    function (error, response) {
      if (error) return res.status(500).send("error");
      else return res.status(200).send("post updated");
    }
  );
});

//DELETE
app.delete("/posts/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  client.query(
    "DELETE FROM posts WHERE id = $1",
    [id],
    function (error, response) {
      if (error) return res.status(500).send("error");
      else return res.status(200).send("post delete");
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
