import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="pie">
      <div className="contenedor pie-fila">
        <div>
          <strong>InterCargo</strong>
          <p>Av. Pedro de Mendoza 1200, Buenos Aires<br />+54 11 4300-1200 · info@intercargo.com</p>
        </div>
        <nav aria-label="Enlaces del pie">
          <ul>
            <li><Link href="/servicios">Servicios</Link></li>
            <li><Link href="/novedades">Novedades</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </nav>
        <p className="pie-copy">&copy; 2026 InterCargo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
