/*
  Warnings:

  - Added the required column `HOQA_Confirmado` to the `HotelQuartoAgendamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `HotelQuartoAgendamento` ADD COLUMN `HOQA_Confirmado` BOOLEAN NOT NULL;
