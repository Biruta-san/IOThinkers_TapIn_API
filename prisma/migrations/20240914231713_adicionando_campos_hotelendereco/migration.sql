/*
  Warnings:

  - Added the required column `HOEN_CEP` to the `HotelEndereco` table without a default value. This is not possible if the table is not empty.
  - Added the required column `HOEN_Endereco` to the `HotelEndereco` table without a default value. This is not possible if the table is not empty.
  - Made the column `HOIM_GUIDArquivo` on table `hotelimagem` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `HOQT_CapacidadePessoa` to the `HotelQuarto` table without a default value. This is not possible if the table is not empty.
  - Made the column `HOQI_GUIDArquivo` on table `hotelquartoimagem` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `hotelendereco` ADD COLUMN `HOEN_CEP` VARCHAR(10) NOT NULL,
    ADD COLUMN `HOEN_Endereco` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `hotelimagem` MODIFY `HOIM_GUIDArquivo` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `hotelquarto` ADD COLUMN `HOQT_CapacidadePessoa` TINYINT NOT NULL;

-- AlterTable
ALTER TABLE `hotelquartoimagem` MODIFY `HOQI_GUIDArquivo` VARCHAR(255) NOT NULL;
