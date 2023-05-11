CREATE TABLE `authors` (
	`id` varchar(256) PRIMARY KEY NOT NULL,
	`name` varchar(256) NOT NULL,
	`avatar_url` varchar(256) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `posts` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`created_at` datetime NOT NULL,
	`updated_at` datetime NOT NULL,
	`cover_image_url` varchar(300),
	`author_id` varchar(256),
	`slug` varchar(256)
);
--> statement-breakpoint
CREATE INDEX `created_at_idx` ON `posts` (`created_at`);--> statement-breakpoint
CREATE INDEX `updated_at_idx` ON `posts` (`updated_at`);--> statement-breakpoint
CREATE INDEX `author_id_idx` ON `posts` (`author_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `slug_idx` ON `posts` (`slug`);