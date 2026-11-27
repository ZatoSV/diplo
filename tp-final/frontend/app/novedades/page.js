import { API_URL } from '@/lib/api';

export const metadata = { title: 'Novedades' };

export const dynamic = 'force-dynamic';

async function getNovedades() {
  try {
    const res = await fetch(`${API_URL}/api/novedades`, { cache: 'no-store' });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

function formatearFecha(fecha) {
  return new Date(fecha).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default async function Novedades() {
  const novedades = await getNovedades();

  return (
    <>
      <section className="encabezado-pagina">
        <div className="contenedor">
          <h1>Novedades</h1>
          <p>Lo último de InterCargo: nuevas rutas, servicios y mejoras.</p>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor lista-novedades">
          {novedades === null && (
            <p className="aviso aviso-error">No se pudieron cargar las novedades. Probá de nuevo en unos minutos.</p>
          )}
          {novedades?.length === 0 && <p className="aviso">Todavía no hay novedades publicadas.</p>}
          {novedades?.map((n) => (
            <article className="novedad" key={n.id}>
              <time dateTime={n.fecha}>{formatearFecha(n.fecha)}</time>
              <h2>{n.titulo}</h2>
              <h3>{n.subtitulo}</h3>
              <p>{n.cuerpo}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
