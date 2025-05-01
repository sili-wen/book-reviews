CREATE TABLE IF NOT EXISTS "book_reviews" (
	"id" varchar(30) PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"created_by" varchar(64) NOT NULL,
	"updated_by" varchar(64) NOT NULL,
	"terminated_at" timestamp,
	"book_id" varchar(30),
	"user_id" varchar(30),
	"rating" integer NOT NULL,
	"title" varchar(255),
	"body" text
);
--> statement-breakpoint
ALTER TABLE "books" ADD COLUMN "author_id" varchar(30);--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "books" ADD CONSTRAINT "books_author_id_authors_id_fk" FOREIGN KEY ("author_id") REFERENCES "authors"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "book_reviews" ADD CONSTRAINT "book_reviews_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
