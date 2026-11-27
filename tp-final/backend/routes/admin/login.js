const express = require('express');
const usuariosModel = require('../../models/usuariosModel');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('admin/login', { layout: 'admin/layout' });
});

router.post('/', async (req, res, next) => {
  try {
    const { usuario, password } = req.body;
    const user = await usuariosModel.getUserByUsernameAndPassword(usuario || '', password || '');
    if (user) {
      req.session.id_usuario = user.id;
      req.session.nombre = user.usuario;
      res.redirect('/admin/novedades');
    } else {
      res.render('admin/login', { layout: 'admin/layout', error: true, usuario });
    }
  } catch (error) {
    next(error);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/admin/login'));
});

module.exports = router;
