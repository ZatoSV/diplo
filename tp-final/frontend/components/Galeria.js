'use client';

import { useEffect, useState } from 'react';

export default function Galeria({ fotos }) {
  const [actual, setActual] = useState(null);

  useEffect(() => {
    if (actual === null) return;
    const alPresionar = (e) => {
      if (e.key === 'Escape') setActual(null);
      if (e.key === 'ArrowRight') setActual((i) => (i + 1) % fotos.length);
      if (e.key === 'ArrowLeft') setActual((i) => (i - 1 + fotos.length) % fotos.length);
    };
    window.addEventListener('keydown', alPresionar);
    return () => window.removeEventListener('keydown', alPresionar);
  }, [actual, fotos.length]);

  return (
    <>
      <div className="grilla-galeria">
        {fotos.map((f, i) => (
          <button type="button" key={f.grande} className="miniatura" onClick={() => setActual(i)}>
            <img src={f.grande} alt={f.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {actual !== null && (
        <div className="visor" role="dialog" aria-modal="true" aria-label={fotos[actual].alt} onClick={() => setActual(null)}>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={fotos[actual].grande} alt={fotos[actual].alt} />
            <figcaption>
              <button type="button" onClick={() => setActual((actual - 1 + fotos.length) % fotos.length)}>← Anterior</button>
              <span>{fotos[actual].alt}</span>
              <button type="button" onClick={() => setActual((actual + 1) % fotos.length)}>Siguiente →</button>
            </figcaption>
          </figure>
          <button type="button" className="visor-cerrar" onClick={() => setActual(null)} aria-label="Cerrar">×</button>
        </div>
      )}
    </>
  );
}
