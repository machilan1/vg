ALTER TABLE "product" DROP CONSTRAINT "product_user_id_app_user_user_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "product" ADD CONSTRAINT "product_user_id_app_user_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "app_user"("user_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
