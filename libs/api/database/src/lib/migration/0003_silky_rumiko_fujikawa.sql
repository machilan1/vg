ALTER TABLE "record" DROP CONSTRAINT "record_product_id_product_product_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "record" ADD CONSTRAINT "record_product_id_product_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "product"("product_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
