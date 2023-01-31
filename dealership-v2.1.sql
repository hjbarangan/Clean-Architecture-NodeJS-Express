CREATE TABLE IF NOT EXISTS "users"(
  "user_id" SERIAL PRIMARY KEY,
  "name" VARCHAR(100),
  "username" VARCHAR(100),
  "password" VARCHAR(100),
  "contact_number" VARCHAR(100),
  "address" VARCHAR(100),
  "date_created" DATE,
  "is_active" BOOLEAN
);

CREATE TABLE IF NOT EXISTS "user_role"(
  "user_role_id" SERIAL PRIMARY KEY,
  "role" VARCHAR(100),
  "date_created" DATE
);

CREATE TABLE IF NOT EXISTS "sku"(
  "sku_id" SERIAL PRIMARY KEY,
  "unit" VARCHAR(100),
  "cost" VARCHAR(150),
  "date_created" DATE,
  "is_active" BOOLEAN
);

CREATE TABLE IF NOT EXISTS "product_car" (
  "product_car_id" SERIAL PRIMARY KEY,
  "serial_number" VARCHAR(100),
  "brand_name" VARCHAR(100),
  "model" VARCHAR(100),
  "color" VARCHAR(50),
  "unit" VARCHAR(100),
  "cost" VARCHAR(150),
  "qty" VARCHAR(100),
  "date_created" DATE -- "sku_id" SERIAL REFERENCES "sku"
);

CREATE TABLE IF NOT EXISTS "customer"(
  "customer_id" SERIAL PRIMARY KEY,
  "name" VARCHAR(100),
  "address" VARCHAR(150),
  "contact_number" VARCHAR(100),
  "date_created" DATE,
  "is_active" BOOLEAN
);

CREATE TABLE IF NOT EXISTS "stockard"(
  "stockard_id" SERIAL PRIMARY KEY,
  "qty" NUMERIC,
  "qtybalance" NUMERIC,
  "date_created" DATE,
  "sku_id" SERIAL REFERENCES "sku"
);

CREATE TABLE IF NOT EXISTS "service" (
  "service_id" SERIAL PRIMARY KEY,
  "serial_number" NUMERIC,
  "status" NUMERIC,
  "date_transaction" DATE,
  "user_id" SERIAL REFERENCES "users",
  "customer_id" SERIAL REFERENCES "customer"
);

CREATE TABLE IF NOT EXISTS "service_item" (
  "service_item_id" SERIAL PRIMARY KEY,
  "service_name" VARCHAR(150),
  "unit" VARCHAR(100),
  "cost" NUMERIC,
  "date_created" DATE,
  "is_active" BOOLEAN
);

CREATE TABLE IF NOT EXISTS "service_line" (
  "service_line_id" SERIAL PRIMARY KEY,
  "qty" NUMERIC,
  "cost" NUMERIC,
  "amount" NUMERIC,
  "service_id" SERIAL REFERENCES "service",
  "service_item_id" SERIAL REFERENCES "service_item"
);

CREATE TABLE IF NOT EXISTS "product_parts" (
  "product_parts_id" SERIAL PRIMARY KEY,
  "printname" VARCHAR(100),
  "barcode" VARCHAR(100),
  "qty" VARCHAR(100),
  "unit" VARCHAR(100),
  "cost" NUMERIC,
  "date_created" DATE -- "sku_id" SERIAL REFERENCES "sku"
);

CREATE TABLE IF NOT EXISTS "quotation" (
  "quotation_id" SERIAL PRIMARY KEY,
  "status" VARCHAR(100),
  "date_transaction" DATE,
  "user_id" SERIAL REFERENCES "users",
  "customer_id" SERIAL REFERENCES "customer"
);

CREATE TABLE IF NOT EXISTS "quotation_line" (
  "sku_id" INT REFERENCES "sku"("sku_id"),
  "quotation_id" INT REFERENCES "quotation"("quotation_id"),
  "qty" NUMERIC,
  "cost" NUMERIC,
  "amount" NUMERIC,
  primary key ("sku_id", "quotation_id")
);

-- "quotation_line_id" SERIAL PRIMARY KEY,
-- "qty" NUMERIC,
-- "cost" NUMERIC,
-- "amount" NUMERIC,
-- "sku_id" SERIAL REFERENCES "sku",
-- "quotation_id" SERIAL REFERENCES "quotation"
CREATE TABLE IF NOT EXISTS "billing" (
  "billing_id" SERIAL PRIMARY KEY,
  "status" VARCHAR(150),
  "date_transaction" DATE,
  "service_id" INT REFERENCES "service",
  "quotation_id" INT REFERENCES "quotation",
  "user_id" INT REFERENCES "users",
  "customer_id" INT REFERENCES "customer"
);

CREATE TABLE IF NOT EXISTS "billing_goods_line" (
  "billing_goods_line_id" SERIAL PRIMARY KEY,
  "qty" NUMERIC,
  "cost" NUMERIC,
  "amount" NUMERIC,
  "billing_id" SERIAL REFERENCES "billing",
  "sku_id" SERIAL REFERENCES "sku"
);

CREATE TABLE IF NOT EXISTS "billing_service_line" (
  "billing_service_line_id" SERIAL PRIMARY KEY,
  "qty" NUMERIC,
  "cost" NUMERIC,
  "amount" NUMERIC,
  "billing_id" SERIAL REFERENCES "billing",
  "service_item_id" SERIAL REFERENCES "service_item"
);

ALTER TABLE
  "users"
ADD
  "user_role_id" SERIAL REFERENCES "user_role"
ALTER TABLE
  "quotation"
ADD
  "service_id" INT REFERENCES "service"("service_id")

ALTER TABLE
  "service"
ADD
  "comment" VARCHAR(150);