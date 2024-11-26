/*
  Warnings:

  - You are about to drop the column `HOQA_Confirmado` on the `HotelQuartoAgendamento` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `HotelQuartoAgendamento` DROP COLUMN `HOQA_Confirmado`,
    ADD COLUMN `HOQA_CheckIn_Confirmado` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `HOQA_CheckOut_Confirmado` BOOLEAN NOT NULL DEFAULT false;
