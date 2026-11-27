import FormularioContacto from '@/components/FormularioContacto';

export const metadata = { title: 'Contacto' };

export default function Contacto() {
  return (
    <>
      <section className="encabezado-pagina">
        <div className="contenedor">
          <h1>Contacto</h1>
          <p>Pedí una cotización o hacenos tu consulta. Te respondemos dentro de las 24 horas hábiles.</p>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor dos-columnas dos-columnas-arriba">
          <FormularioContacto />
          <aside className="tarjeta datos-contacto">
            <h2>Otras vías</h2>
            <dl>
              <dt>Dirección</dt>
              <dd>Av. Pedro de Mendoza 1200, Buenos Aires</dd>
              <dt>Teléfono</dt>
              <dd>+54 11 4300-1200</dd>
              <dt>Email</dt>
              <dd>info@intercargo.com</dd>
              <dt>Horario</dt>
              <dd>Lunes a viernes de 9 a 18 h</dd>
            </dl>
          </aside>
        </div>
      </section>
    </>
  );
}
