import { poll } from "../db.js";

export const getCohan = async (req, res) => {
  try {
    const [result] = await poll.query("SELECT * FROM person");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  //console.log(result);
};

export const createCohan = async (req, res) => {
  try {
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
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCohan = async (req, res) => {
  try {
    const result = await poll.query("UPDATE person SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCohan = async (req, res) => {
  try {
    const [result] = await poll.query("DELETE FROM person WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
