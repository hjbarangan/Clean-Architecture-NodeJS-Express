CREATE TABLE IF NOT EXISTS "cars" (
    "car_id" SERIAL PRIMARY KEY,
	"serial_number" VARCHAR(50),
    "brand" VARCHAR(100),
	"model" VARCHAR(100),
	"color" VARCHAR(50),
    "year" VARCHAR(100),
    "car_for_sale" CHAR(3));


CREATE TABLE IF NOT EXISTS "customers"(
    "customer_id" SERIAL PRIMARY KEY,
    "firstname" VARCHAR(100),
    "lastname" VARCHAR(100),
    "address" VARCHAR(150),
    "contact" VARCHAR(100));


CREATE TABLE IF NOT EXISTS "salespersons" (
    "salesperson_id" SERIAL PRIMARY KEY,
    "firstname" VARCHAR(150),
    "lastname" VARCHAR(150));


CREATE TABLE IF NOT EXISTS "sales_invoice" (
    "invoice_id" SERIAL PRIMARY KEY,
    "invoice_number" VARCHAR(150),
    "transaction_date" DATE,
    "car_id" SERIAL REFERENCES "cars",
    "customer_id" SERIAL REFERENCES "customers",
    "salesperson_id" SERIAL REFERENCES "salespersons"
);


CREATE TABLE IF NOT EXISTS "mechanics" (
    "mechanic_id" SERIAL PRIMARY KEY,
    "firstname" VARCHAR(150),
    "lastname" VARCHAR(150));


CREATE TABLE IF NOT EXISTS "services" (
    "service_id" SERIAL PRIMARY KEY,
    "service_name" VARCHAR(150),
    "hourly_rate" NUMERIC);

CREATE TABLE IF NOT EXISTS "parts" (
    "part_id" SERIAL PRIMARY KEY,
    "part_number" VARCHAR(150),
    "description" VARCHAR(250),
    "purchase_price" NUMERIC,
    "retail_price" NUMERIC);


CREATE TABLE IF NOT EXISTS "service_ticket" (
    "service_ticket_id" SERIAL PRIMARY KEY,
    "service_ticket_number" VARCHAR(150),
    "date_received" DATE,
    "comments" VARCHAR(250),
    "date_returned" DATE, 
    "car_id" SERIAL REFERENCES "cars",
    "customer_id" SERIAL REFERENCES "customers"
);

CREATE TABLE IF NOT EXISTS "parts_used" (
    "parts_used_id" SERIAL PRIMARY KEY,
    "part_id" SERIAL REFERENCES "parts",
    "service_ticket_id" SERIAL REFERENCES "service_ticket",
    "number_used" NUMERIC,
    "price" NUMERIC
);

CREATE TABLE IF NOT EXISTS "service_mechanic" (
    "service_mechanic_id" SERIAL PRIMARY KEY,
    "mechanic_id" SERIAL REFERENCES "mechanics",
    "service_id" SERIAL REFERENCES "services",
    "service_ticket_id" SERIAL REFERENCES "service_ticket",
    "hours" NUMERIC,
    "comment" VARCHAR(250),
    "rate" NUMERIC
);


CREATE TABLE IF NOT EXISTS "users"(
    "user_id" SERIAL PRIMARY KEY,
    "email" UNIQUE VARCHAR(100),
    "password" VARCHAR(100),
    "firstname" VARCHAR(100),
    "lastname" VARCHAR(100),
    "created_at" TIME WITH TIME ZONE
    );



INSERT INTO cars (serial_number, make, model, color, year, car_for_sale) VALUES ('123hehe', 'Toyota', 'Vios', 'Red', '2021', 'Yes') RETURNING *;
INSERT INTO cars (serial_number, brand, model, color, year, car_for_sale,price) VALUES ('123hehe', 'Toyota', 'Vios', 'Red', '2021', 'Yes', 2333300) RETURNING *;

UPDATE cars SET status = false WHERE car_id = 46 RETURNING *
Select * from cars where not status in (false) ORDER BY car_id DESC;

--! Empty table and restart the ID
TRUNCATE parts_used RESTART IDENTITY CASCADE;

--* Changes in Tables
ALTER TABLE cars
  ADD price numeric;

ALTER TABLE customers
  ADD created_date TIME WITHOUT TIME ZONE;

ALTER TABLE salespersons
ADD contact varchar(20);

ALTER TABLE invoice
ADD total numeric;

ALTER TABLE cars
ADD status boolean;

ALTER TABLE customers
ADD status boolean;

ALTER TABLE salespersons
ADD status boolean;

--* september 1, alterations

ALTER TABLE cars
  ADD created_at TIME WITHOUT TIME ZONE,
  ADD updated_at TIME WITHOUT TIME ZONE;

ALTER TABLE mechanics
  ADD created_at TIME WITHOUT TIME ZONE,
  ADD updated_at TIME WITHOUT TIME ZONE,
  ADD status boolean;

ALTER TABLE service_ticket
  ADD created_at TIME WITHOUT TIME ZONE,
  ADD updated_at TIME WITHOUT TIME ZONE,
  ADD status boolean;  

ALTER TABLE salespersons
  ADD created_at TIME WITHOUT TIME ZONE,
  ADD updated_at TIME WITHOUT TIME ZONE;

ALTER TABLE customers
  ADD updated_at TIME WITHOUT TIME ZONE,

ALTER TABLE sales_invoice
  ADD total_amount NUMERIC;


--* Join Tables


--* fetch car price from cars into sales_invoice table
SELECT * FROM sales_invoice S JOIN cars C ON S.car_id = C.car_id WHERE status = true;

UPDATE sales_invoice
SET total_amount = cars.price FROM cars
WHERE sales_invoice.car_id = cars.car_id RETURNING *;


UPDATE sales_invoice
SET total_amount = cars.price FROM cars
WHERE sales_invoice.car_id = cars.car_id RETURNING invoice_id, sales_invoice.car_id, customer_id, salesperson_id, total_amount;

