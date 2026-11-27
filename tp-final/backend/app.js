require('dotenv').config();

const path = require('path');
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const hbs = require('hbs');

const loginRouter = require('./routes/admin/login');
const novedadesRouter = require('./routes/admin/novedades');
const apiRouter = require('./routes/api');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerHelper('fecha', (valor) => {
  if (!valor) return '';
  return new Date(valor).toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' });
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SESSION_SECRET || 'intercargo-secreto',
  resave: false,
  saveUninitialized: false,
}));

const secured = (req, res, next) => {
  if (req.session.id_usuario) {
    next();
  } else {
    res.redirect('/admin/login');
  }
};

app.get('/', (req, res) => res.redirect('/admin/novedades'));
app.use('/admin/login', loginRouter);
app.use('/admin/novedades', secured, novedadesRouter);
app.use('/api', cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000' }), apiRouter);

app.use((req, res) => {
  res.status(404).render('error', { layout: 'admin/layout', mensaje: 'La página que buscás no existe.' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).render('error', { layout: 'admin/layout', mensaje: 'Ocurrió un error en el servidor.' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend en http://localhost:${PORT} (panel: /admin/login)`);
});
