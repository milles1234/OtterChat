/*
  Warnings:

  - Added the required column `allow_permissions` to the `channel_permissions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deny_permissions` to the `channel_permissions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "channel_permissions" ADD COLUMN     "allow_permissions" BIGINT NOT NULL,
ADD COLUMN     "deny_permissions" BIGINT NOT NULL;
