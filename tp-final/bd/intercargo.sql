CREATE DATABASE IF NOT EXISTS `intercargo` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `intercargo`;

DROP TABLE IF EXISTS `novedades`;
DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuario` (`usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'admin', '$2b$10$6DHRS1xf7WpBvFhuEV3aC.X85rCoMemQ53wb7r1dGb9IesStIaUJK');

CREATE TABLE `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` varchar(250) NOT NULL,
  `cuerpo` text NOT NULL,
  `fecha` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `fecha`) VALUES
(1, 'Nueva ruta marítima a Asia', 'Salidas semanales desde el puerto de Buenos Aires',
 'A partir del mes próximo sumamos una salida semanal directa hacia Shanghái, con escalas en Santos y Singapur. Los contenedores refrigerados ya pueden reservarse desde nuestro sector comercial.',
 '2026-01-12 10:00:00'),
(2, 'Seguimiento en tiempo real', 'Ya podés ver dónde está tu carga las 24 horas',
 'Incorporamos rastreo satelital en toda nuestra flota terrestre. Cada envío recibe un código con el que se puede consultar la ubicación y el horario estimado de llegada.',
 '2026-01-28 09:30:00'),
(3, 'Ampliamos el centro de distribución', 'Más espacio de almacenamiento en Zárate',
 'Inauguramos 4.000 m² de depósito con estanterías de altura y sector de cross-docking, para reducir los tiempos entre la llegada de la mercadería y su despacho final.',
 '2026-02-05 12:00:00');
