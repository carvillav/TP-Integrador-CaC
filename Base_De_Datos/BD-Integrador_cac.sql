/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE IF NOT EXISTS `integrador_cac` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_spanish_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `integrador_cac`;

CREATE TABLE IF NOT EXISTS `oradores` (
  `id_orador` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `apellido` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `mail` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `tema` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `fecha_alta` timestamp NOT NULL,
  PRIMARY KEY (`id_orador`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

INSERT INTO `oradores` (`id_orador`, `nombre`, `apellido`, `mail`, `tema`, `fecha_alta`) VALUES
	(1, 'Carlos', 'Villegas', 'carlos@gmail.com', 'SQL', '2023-11-12 00:35:23'),
	(2, 'Miguel', 'Campos', 'miguel@gmail.com', 'Eduacion ambiental', '2023-11-12 00:35:23'),
	(3, 'Juan', 'Pérez', 'juan@gmail.com', 'Java', '2023-11-12 00:35:24'),
	(4, 'María', 'González', 'maria@gmail.com', 'Seguridad en internet', '2023-11-12 00:35:25'),
	(5, 'Luis', 'Martínez', 'luis@gmail.com', 'Inicio en programacion', '2023-11-12 00:35:26'),
	(6, 'Ana', 'Sánchez', 'ana@gmail.com', 'Autoayuda', '2023-11-12 00:35:27'),
	(7, 'Pedro', 'Rodríguez', 'pedro@gmail.com', 'Insercion laboral', '2023-11-12 00:35:28'),
	(8, 'Laura', 'López', 'laura@gmail.com', 'Vida saludable', '2023-11-12 00:35:29'),
	(9, 'Jorge', 'Díaz', 'jorge@gmail.com', 'Reparacion de PC', '2023-11-12 00:35:30'),
	(10, 'Sofía', 'Hernández', 'sofia@gmail.com', 'Arquitectura', '2023-11-12 00:35:31');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
