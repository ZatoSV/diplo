const bcrypt = require('bcryptjs');
const pool = require('./bd');

async function getUserByUsernameAndPassword(usuario, password) {
  const [rows] = await pool.query('SELECT * FROM usuarios WHERE usuario = ? LIMIT 1', [usuario]);
  const user = rows[0];
  if (user && await bcrypt.compare(password, user.password)) {
    return user;
  }
  return null;
}

module.exports = { getUserByUsernameAndPassword };
