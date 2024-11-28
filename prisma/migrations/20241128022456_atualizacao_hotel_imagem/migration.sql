/*
  Warnings:

  - You are about to drop the column `HOIM_Base64` on the `HotelImagem` table. All the data in the column will be lost.
  - You are about to drop the column `HOIM_GUIDArquivo` on the `HotelImagem` table. All the data in the column will be lost.
  - You are about to drop the column `HOIM_NomeArquivo` on the `HotelImagem` table. All the data in the column will be lost.
  - Added the required column `HOIM_Link` to the `HotelImagem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `HotelImagem` DROP COLUMN `HOIM_Base64`,
    DROP COLUMN `HOIM_GUIDArquivo`,
    DROP COLUMN `HOIM_NomeArquivo`,
    ADD COLUMN `HOIM_Link` LONGTEXT NOT NULL;
