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

export const deleteCohan = async (req, res) => {
  const [result] = await poll.query("DELETE FROM person WHERE id = ?", [
    req.params.id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Persona no encontrada" });
  }
  return res.sendStatus(204);
};
