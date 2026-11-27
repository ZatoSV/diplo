const express = require('express');
const novedadesModel = require('../../models/novedadesModel');

const router = express.Router();

function datosDelForm(body) {
  return {
    titulo: (body.titulo || '').trim(),
    subtitulo: (body.subtitulo || '').trim(),
    cuerpo: (body.cuerpo || '').trim(),
  };
}

function estaCompleto(novedad) {
  return novedad.titulo !== '' && novedad.subtitulo !== '' && novedad.cuerpo !== '';
}

router.get('/', async (req, res, next) => {
  try {
    const novedades = await novedadesModel.getNovedades();
    const mensaje = req.session.mensaje;
    delete req.session.mensaje;
    res.render('admin/novedades/index', {
      layout: 'admin/layout',
      usuario: req.session.nombre,
      novedades,
      mensaje,
    });
  } catch (error) {
    next(error);
  }
});

router.get('/agregar', (req, res) => {
  res.render('admin/novedades/agregar', { layout: 'admin/layout', usuario: req.session.nombre });
});

router.post('/agregar', async (req, res, next) => {
  const novedad = datosDelForm(req.body);
  if (!estaCompleto(novedad)) {
    return res.render('admin/novedades/agregar', {
      layout: 'admin/layout', usuario: req.session.nombre, error: 'Todos los campos son obligatorios.', novedad,
    });
  }
  try {
    await novedadesModel.insertNovedad(novedad);
    req.session.mensaje = 'Novedad agregada.';
    res.redirect('/admin/novedades');
  } catch (error) {
    next(error);
  }
});

router.get('/modificar/:id', async (req, res, next) => {
  try {
    const novedad = await novedadesModel.getNovedadById(req.params.id);
    if (!novedad) return res.redirect('/admin/novedades');
    res.render('admin/novedades/modificar', { layout: 'admin/layout', usuario: req.session.nombre, novedad });
  } catch (error) {
    next(error);
  }
});

router.post('/modificar/:id', async (req, res, next) => {
  const novedad = datosDelForm(req.body);
  if (!estaCompleto(novedad)) {
    return res.render('admin/novedades/modificar', {
      layout: 'admin/layout',
      usuario: req.session.nombre,
      error: 'Todos los campos son obligatorios.',
      novedad: { ...novedad, id: req.params.id },
    });
  }
  try {
    await novedadesModel.modificarNovedadById(novedad, req.params.id);
    req.session.mensaje = 'Novedad modificada.';
    res.redirect('/admin/novedades');
  } catch (error) {
    next(error);
  }
});

router.post('/eliminar/:id', async (req, res, next) => {
  try {
    await novedadesModel.deleteNovedadById(req.params.id);
    req.session.mensaje = 'Novedad eliminada.';
    res.redirect('/admin/novedades');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
