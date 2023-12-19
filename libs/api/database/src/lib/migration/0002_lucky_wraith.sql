ALTER TABLE "app_user" RENAME COLUMN "uni_code" TO "tax_id";--> statement-breakpoint
ALTER TABLE "app_user" DROP CONSTRAINT "app_user_uni_code_unique";--> statement-breakpoint
ALTER TABLE "app_user" ALTER COLUMN "is_admin" SET DEFAULT false;--> statement-breakpoint
ALTER TABLE "app_user" ADD CONSTRAINT "app_user_tax_id_unique" UNIQUE("tax_id");