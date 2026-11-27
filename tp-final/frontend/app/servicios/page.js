import Link from 'next/link';

export const metadata = { title: 'Servicios' };

const SERVICIOS = [
  {
    img: '/img/servicios/aereo.jpg',
    alt: 'Avión de carga despegando',
    titulo: 'Aéreo',
    texto: 'La opción más rápida para envíos urgentes o de alto valor, con cobertura internacional.',
    detalles: ['Entregas en 24 a 72 horas', 'Carga general y perecedera', 'Despacho aduanero incluido'],
  },
  {
    img: '/img/servicios/maritimo.jpg',
    alt: 'Buque de carga navegando en el mar',
    titulo: 'Marítimo',
    texto: 'Ideal para grandes volúmenes a largo plazo, con el mejor costo por unidad transportada.',
    detalles: ['Contenedor completo o consolidado', 'Contenedores refrigerados', 'Salidas semanales'],
  },
  {
    img: '/img/servicios/ferroviario.jpg',
    alt: 'Tren de carga circulando por vías',
    titulo: 'Ferroviario',
    texto: 'Transporte terrestre de larga distancia, eficiente y con bajo impacto ambiental.',
    detalles: ['Graneles y cargas pesadas', 'Conexión con puertos', 'Menor huella de carbono'],
  },
  {
    img: '/img/servicios/terrestre.jpg',
    alt: 'Camión de carga de reparto',
    titulo: 'Terrestre',
    texto: 'Distribución puerta a puerta, flexible para cargas de cualquier tamaño.',
    detalles: ['Flota con rastreo satelital', 'Cargas completas y parciales', 'Distribución urbana'],
  },
];

export default function Servicios() {
  return (
    <>
      <section className="encabezado-pagina">
        <div className="contenedor">
          <h1>Servicios</h1>
          <p>
            Elegí el modo de transporte que mejor se adapte a tu carga, tu presupuesto y tus tiempos de
            entrega.
          </p>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor grilla-servicios">
          {SERVICIOS.map((s) => (
            <article className="tarjeta-servicio" key={s.titulo}>
              <img src={s.img} alt={s.alt} />
              <div className="tarjeta-servicio-cuerpo">
                <h3>{s.titulo}</h3>
                <p>{s.texto}</p>
                <ul>
                  {s.detalles.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="seccion seccion-gris">
        <div className="contenedor llamado">
          <div>
            <h2>¿No sabés cuál te conviene?</h2>
            <p>Te asesoramos sin cargo según el tipo de mercadería y el destino.</p>
          </div>
          <Link href="/contacto" className="boton">Consultar</Link>
        </div>
      </section>
    </>
  );
}
