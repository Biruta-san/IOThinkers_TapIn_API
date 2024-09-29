/*
  Warnings:

  - Added the required column `HOEN_CEP` to the `HotelEndereco` table without a default value. This is not possible if the table is not empty.
  - Added the required column `HOEN_Endereco` to the `HotelEndereco` table without a default value. This is not possible if the table is not empty.
  - Made the column `HOIM_GUIDArquivo` on table `hotelimagem` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `HOQT_CapacidadePessoa` to the `HotelQuarto` table without a default value. This is not possible if the table is not empty.
  - Made the column `HOQI_GUIDArquivo` on table `hotelquartoimagem` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `HotelEndereco` ADD COLUMN `HOEN_CEP` VARCHAR(10) NOT NULL,
    ADD COLUMN `HOEN_Endereco` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `HotelImagem` MODIFY `HOIM_GUIDArquivo` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `HotelQuarto` ADD COLUMN `HOQT_CapacidadePessoa` TINYINT NOT NULL;

-- AlterTable
ALTER TABLE `HotelQuartoImagem` MODIFY `HOQI_GUIDArquivo` VARCHAR(255) NOT NULL;

-- Inserir tipo de integração
INSERT INTO TipoIntegracao (TPIT_ID, TPIT_Nome) VALUES (1, 'Firebase');