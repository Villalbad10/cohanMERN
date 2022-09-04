import { poll } from "../db.js";

export const getCohan = async (req, res) => {
  const [result] = await poll.query("SELECT * FROM person");
  res.json(result);
  //console.log(result);
};

export const createCohan = async (req, res) => {
  const { nombre, phone, email } = req.body;
  const [result] = await poll.query(
    "INSERT INTO person(nombre, phone, email) VALUES (?, ?, ?)",
    [nombre, phone, email]
  );
  res.json({
    id: result.insertId,
    nombre,
    phone,
    email,
  });
};

export const updateCohan = (req, res) => {
  res.send("actualizando dbCohan");
};

export const deleteCohan = (req, res) => {
  res.send("eliminando dbCohan");
};
