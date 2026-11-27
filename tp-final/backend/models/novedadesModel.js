const pool = require('./bd');

async function getNovedades() {
  const [rows] = await pool.query('SELECT * FROM novedades ORDER BY fecha DESC, id DESC');
  return rows;
}

async function getNovedadById(id) {
  const [rows] = await pool.query('SELECT * FROM novedades WHERE id = ?', [id]);
  return rows[0];
}

async function insertNovedad(obj) {
  const [result] = await pool.query('INSERT INTO novedades SET ?', [obj]);
  return result;
}

async function modificarNovedadById(obj, id) {
  const [result] = await pool.query('UPDATE novedades SET ? WHERE id = ?', [obj, id]);
  return result;
}

async function deleteNovedadById(id) {
  const [result] = await pool.query('DELETE FROM novedades WHERE id = ?', [id]);
  return result;
}

module.exports = { getNovedades, getNovedadById, insertNovedad, modificarNovedadById, deleteNovedadById };
