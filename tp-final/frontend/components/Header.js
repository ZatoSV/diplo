'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SECCIONES = [
  { href: '/', texto: 'Inicio' },
  { href: '/nosotros', texto: 'Nosotros' },
  { href: '/servicios', texto: 'Servicios' },
  { href: '/galeria', texto: 'Galería' },
  { href: '/novedades', texto: 'Novedades' },
  { href: '/contacto', texto: 'Contacto' },
];

export default function Header() {
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="cabecera">
      <div className="contenedor cabecera-fila">
        <Link href="/" className="marca" onClick={() => setAbierto(false)}>
          <img src="/img/logo.png" alt="Logo de InterCargo" width="48" height="48" />
          <span>InterCargo</span>
        </Link>

        <button
          type="button"
          className="menu-boton"
          aria-expanded={abierto}
          aria-controls="nav-principal"
          onClick={() => setAbierto(!abierto)}
        >
          {abierto ? 'Cerrar' : 'Menú'}
        </button>

        <nav id="nav-principal" className={`nav-principal ${abierto ? 'abierto' : ''}`}>
          <ul>
            {SECCIONES.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className={pathname === s.href ? 'activo' : undefined}
                  aria-current={pathname === s.href ? 'page' : undefined}
                  onClick={() => setAbierto(false)}
                >
                  {s.texto}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
