DROP TABLE "admin";--> statement-breakpoint
DROP TABLE "seller";--> statement-breakpoint
ALTER TABLE "app_user" ADD COLUMN "address" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "app_user" ADD COLUMN "phone" varchar(64) NOT NULL;--> statement-breakpoint
ALTER TABLE "app_user" ADD COLUMN "uni_code" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "app_user" ADD COLUMN "is_admin" boolean;--> statement-breakpoint
ALTER TABLE "app_user" ADD CONSTRAINT "app_user_uni_code_unique" UNIQUE("uni_code");