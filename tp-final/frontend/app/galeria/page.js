import Galeria from '@/components/Galeria';

export const metadata = { title: 'Galería' };

const FOTOS = [
  { n: '01', alt: 'Camión cisterna en ruta' },
  { n: '02', alt: 'Camión hormigonero' },
  { n: '03', alt: 'Tren de carretera con varios acoplados en el desierto' },
  { n: '04', alt: 'Buque navegando cerca de la costa' },
  { n: '05', alt: 'Comedor a bordo de un crucero' },
  { n: '06', alt: 'Tren entre montañas y bosque' },
  { n: '07', alt: 'Tren rojo cruzando un viaducto de piedra' },
].map((f) => ({
  grande: `/img/galeria/img${f.n}.jpg`,
  alt: f.alt,
}));

export default function PaginaGaleria() {
  return (
    <>
      <section className="encabezado-pagina">
        <div className="contenedor">
          <h1>Galería</h1>
          <p>Algunas de nuestras operaciones. Hacé click en una foto para verla más grande.</p>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <Galeria fotos={FOTOS} />
        </div>
      </section>
    </>
  );
}
