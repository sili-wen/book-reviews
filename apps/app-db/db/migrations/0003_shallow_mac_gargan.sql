DO $$ BEGIN
 CREATE TYPE "nationality" AS ENUM('us', 'gb', 'ca', 'au', 'fr', 'de', 'jp', 'cn', 'in', 'br', 'ru', 'mx', 'es', 'it', 'za', 'ng', 'eg', 'ar', 'se', 'no', 'dk', 'fi', 'nl', 'be', 'ch', 'at', 'ie', 'nz', 'sg', 'kr');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "book_category" AS ENUM('fiction', 'non_fiction', 'sci_fi', 'fantasy', 'mystery', 'thriller', 'romance', 'biography', 'history', 'self_help', 'business', 'technology', 'cooking', 'travel', 'children');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "authors" (
	"id" varchar(30) PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"created_by" varchar(64) NOT NULL,
	"updated_by" varchar(64) NOT NULL,
	"terminated_at" timestamp,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"birth_date" date,
	"nationality" "nationality",
	CONSTRAINT "authors_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "books" (
	"id" varchar(30) PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"created_by" varchar(64) NOT NULL,
	"updated_by" varchar(64) NOT NULL,
	"terminated_at" timestamp,
	"name" varchar(255) NOT NULL,
	"description" text,
	"published_at" date,
	"language" varchar(2) NOT NULL,
	"page_count" integer,
	"categories" book_category[]
);
