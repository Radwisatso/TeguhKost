/*
  Warnings:

  - You are about to drop the column `created_by_admin_id` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_created_by_admin_id_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "created_by_admin_id";
