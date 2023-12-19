CREATE TABLE IF NOT EXISTS "admin" (
	"admin_id" integer PRIMARY KEY NOT NULL,
	"assigned_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "category" (
	"category_id" bigserial PRIMARY KEY NOT NULL,
	"name" varchar(64) NOT NULL,
	"assigned_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "category_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "product" (
	"product_id" bigserial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"category_id" integer NOT NULL,
	"name" varchar(64) NOT NULL,
	"image" varchar(255) NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "record" (
	"record_id" bigserial PRIMARY KEY NOT NULL,
	"product_id" integer NOT NULL,
	"track_number" varchar(255) NOT NULL,
	"unit_of_measure" varchar(64) NOT NULL,
	"unit_price" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "record_track_number_unique" UNIQUE("track_number")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "seller" (
	"seller_id" integer PRIMARY KEY NOT NULL,
	"address" varchar(255) NOT NULL,
	"phone" varchar(64) NOT NULL,
	"uni_code" varchar(255) NOT NULL,
	CONSTRAINT "seller_uni_code_unique" UNIQUE("uni_code")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "app_user" (
	"user_id" bigserial PRIMARY KEY NOT NULL,
	"name" varchar(64) NOT NULL,
	"email" varchar(64) NOT NULL,
	"password" varchar(64) NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "app_user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
ALTER TABLE "admin"
ADD CONSTRAINT "admin_admin_id_app_user_user_id_fk" FOREIGN KEY ("admin_id") REFERENCES "app_user"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
ALTER TABLE "product"
ADD CONSTRAINT "product_user_id_app_user_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "app_user"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
ALTER TABLE "product"
ADD CONSTRAINT "product_category_id_category_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "category"("category_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
ALTER TABLE "record"
ADD CONSTRAINT "record_product_id_product_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "product"("product_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
ALTER TABLE "seller"
ADD CONSTRAINT "seller_seller_id_app_user_user_id_fk" FOREIGN KEY ("seller_id") REFERENCES "app_user"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
WHEN duplicate_object THEN null;
END $$;