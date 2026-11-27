const express = require('express');
const nodemailer = require('nodemailer');
const novedadesModel = require('../models/novedadesModel');

const router = express.Router();

router.get('/novedades', async (req, res) => {
  try {
    const novedades = await novedadesModel.getNovedades();
    res.json(novedades);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudieron cargar las novedades.' });
  }
});

router.post('/contacto', async (req, res) => {
  const nombre = (req.body.nombre || '').trim();
  const email = (req.body.email || '').trim();
  const telefono = (req.body.telefono || '').trim();
  const mensaje = (req.body.mensaje || '').trim();

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: 'Nombre, email y mensaje son obligatorios.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'El email no es válido.' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const datos = `${nombre} (${email}${telefono ? `, tel. ${telefono}` : ''})`;

  try {
    await transporter.sendMail({
      from: `"Web InterCargo" <${process.env.MAIL_FROM || process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `Contacto desde la web: ${nombre}`,
      text: `${datos} escribió:\n\n${mensaje}`,
      html: `<p><strong>${escapar(datos)}</strong> escribió:</p><p>${escapar(mensaje).replace(/\n/g, '<br>')}</p>`,
    });
    res.json({ ok: true, mensaje: 'Mensaje enviado. Te responderemos a la brevedad.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudo enviar el mensaje. Probá de nuevo más tarde.' });
  }
});

const ENTIDADES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

function escapar(texto) {
  return texto.replace(/[&<>"']/g, (c) => ENTIDADES[c]);
}

module.exports = router;
