export const metadata = { title: 'Nosotros' };

const EQUIPO = [
  { img: '/img/nosotros/nosotros1.jpg', nombre: 'Martín Ríos', cargo: 'Director general' },
  { img: '/img/nosotros/nosotros2.jpg', nombre: 'Laura Méndez', cargo: 'Gerente de operaciones' },
  { img: '/img/nosotros/nosotros3.jpg', nombre: 'Diego Paz', cargo: 'Logística terrestre' },
  { img: '/img/nosotros/nosotros4.jpg', nombre: 'Sofía Herrera', cargo: 'Comercio exterior' },
  { img: '/img/nosotros/nosotros5.jpg', nombre: 'Carlos Benítez', cargo: 'Atención al cliente' },
];

const VALORES = [
  { titulo: 'Compromiso', texto: 'Cada envío es tratado como si fuera propio, de la recolección a la entrega.' },
  { titulo: 'Transparencia', texto: 'Precios claros y seguimiento abierto: siempre sabés dónde está tu carga.' },
  { titulo: 'Eficiencia', texto: 'Combinamos modos de transporte para lograr el mejor tiempo y costo.' },
];

export default function Nosotros() {
  return (
    <>
      <section className="encabezado-pagina">
        <div className="contenedor">
          <h1>Nosotros</h1>
          <p>Una empresa argentina de logística con alcance internacional.</p>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor dos-columnas">
          <div>
            <h2>Nuestra historia</h2>
            <p>
              InterCargo nació en 2010 en el puerto de Buenos Aires con dos camiones y la idea de que
              mover mercadería no tenía por qué ser complicado. Hoy operamos en más de 30 países y
              combinamos transporte aéreo, marítimo, ferroviario y terrestre.
            </p>
            <p>
              Trabajamos con pymes y grandes empresas, acompañándolas en cada paso: documentación,
              aduana, almacenamiento y distribución final.
            </p>
          </div>
          <img className="imagen-redondeada" src="/img/home/img02.jpg" alt="Camión en el patio de carga, rodeado de cajones de madera" />
        </div>
      </section>

      <section className="seccion seccion-gris">
        <div className="contenedor">
          <h2>Nuestros valores</h2>
          <div className="grilla-tres">
            {VALORES.map((v) => (
              <article className="tarjeta" key={v.titulo}>
                <h3>{v.titulo}</h3>
                <p>{v.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2>Nuestro equipo</h2>
          <div className="grilla-equipo">
            {EQUIPO.map((p) => (
              <figure className="persona" key={p.nombre}>
                <img src={p.img} alt={`Foto de ${p.nombre}`} width="150" height="150" />
                <figcaption>
                  <strong>{p.nombre}</strong>
                  <span>{p.cargo}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
