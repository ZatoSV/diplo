'use client';

import { useState } from 'react';
import { API_URL } from '@/lib/api';

const VACIO = { nombre: '', email: '', telefono: '', mensaje: '' };

export default function FormularioContacto() {
  const [datos, setDatos] = useState(VACIO);
  const [enviando, setEnviando] = useState(false);
  const [resultado, setResultado] = useState(null);

  const cambiar = (e) => setDatos({ ...datos, [e.target.name]: e.target.value });

  const enviar = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setResultado(null);
    try {
      const res = await fetch(`${API_URL}/api/contacto`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos),
      });
      const json = await res.json();
      if (res.ok) {
        setResultado({ ok: true, texto: json.mensaje });
        setDatos(VACIO);
      } else {
        setResultado({ ok: false, texto: json.error });
      }
    } catch {
      setResultado({ ok: false, texto: 'No se pudo conectar con el servidor.' });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <form className="formulario tarjeta" onSubmit={enviar}>
      <label htmlFor="nombre">Nombre *</label>
      <input id="nombre" name="nombre" value={datos.nombre} onChange={cambiar} required />

      <label htmlFor="email">Email *</label>
      <input id="email" name="email" type="email" value={datos.email} onChange={cambiar} required />

      <label htmlFor="telefono">Teléfono</label>
      <input id="telefono" name="telefono" type="tel" value={datos.telefono} onChange={cambiar} />

      <label htmlFor="mensaje">Mensaje *</label>
      <textarea id="mensaje" name="mensaje" rows="6" value={datos.mensaje} onChange={cambiar} required />

      {resultado && (
        <p className={`aviso ${resultado.ok ? 'aviso-ok' : 'aviso-error'}`} role="status">{resultado.texto}</p>
      )}

      <button type="submit" className="boton" disabled={enviando}>
        {enviando ? 'Enviando…' : 'Enviar'}
      </button>
    </form>
  );
}
