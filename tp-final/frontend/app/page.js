import Link from 'next/link';

const DATOS = [
  { numero: '+15', texto: 'años de experiencia' },
  { numero: '4', texto: 'modos de transporte' },
  { numero: '+30', texto: 'países con cobertura' },
  { numero: '24/7', texto: 'seguimiento de envíos' },
];

const OPERACIONES = [
  { img: '/img/home/img01.jpg', alt: 'Carga de un avión de mercancías en pista', texto: 'Carga aérea' },
  { img: '/img/home/img04.jpg', alt: 'Camión de carga circulando por ruta', texto: 'Transporte terrestre' },
  { img: '/img/home/img05.jpg', alt: 'Depósito con estanterías y pallets de mercancía', texto: 'Almacenamiento' },
];

export default function Inicio() {
  return (
    <>
      <section className="hero">
        <div className="contenedor hero-contenido">
          <h1>Conectamos el mundo, un envío a la vez</h1>
          <p>
            Transporte de cargas multimodal: aéreo, marítimo, ferroviario y terrestre, con seguimiento
            de punta a punta.
          </p>
          <div className="hero-botones">
            <Link href="/servicios" className="boton">Ver servicios</Link>
            <Link href="/contacto" className="boton boton-claro">Pedir cotización</Link>
          </div>
        </div>
      </section>

      <section className="franja-datos">
        <div className="contenedor franja-datos-fila">
          {DATOS.map((d) => (
            <div className="dato" key={d.texto}>
              <strong>{d.numero}</strong>
              <span>{d.texto}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2>Nuestras operaciones</h2>
          <div className="galeria-preview">
            {OPERACIONES.map((o) => (
              <figure key={o.texto}>
                <img src={o.img} alt={o.alt} />
                <figcaption>{o.texto}</figcaption>
              </figure>
            ))}
          </div>
          <p className="centrado">
            <Link href="/galeria" className="enlace">Ver la galería completa →</Link>
          </p>
        </div>
      </section>

      <section className="seccion seccion-gris">
        <div className="contenedor llamado">
          <div>
            <h2>¿Tenés una carga para mover?</h2>
            <p>Contanos qué necesitás enviar y te armamos una propuesta a medida.</p>
          </div>
          <Link href="/contacto" className="boton">Escribinos</Link>
        </div>
      </section>
    </>
  );
}
