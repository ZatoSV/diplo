import Link from 'next/link';

export default function NoEncontrado() {
  return (
    <section className="seccion">
      <div className="contenedor centrado">
        <h1>Página no encontrada</h1>
        <p>La dirección que buscás no existe o fue movida.</p>
        <Link href="/" className="boton">Volver al inicio</Link>
      </div>
    </section>
  );
}
