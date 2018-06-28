-- mysql -u cadenwang -p <./database/schema.sql;
-- LOAD DATA LOCAL INFILE '/Users/cadenza/documents/SDC/leaveReview/database/dataGenerators/restaurants.txt' INTO TABLE restaurants LINES TERMINATED BY '\n' (name);
-- LOAD DATA LOCAL INFILE '/Users/cadenza/documents/SDC/leaveReview/database/dataGenerators/users.txt' INTO TABLE users FIELDS TERMINATED BY '\t' LINES TERMINATED BY '\n' (name, photo, counts, location);
-- LOAD DATA LOCAL INFILE '/Users/cadenza/documents/SDC/leaveReview/database/dataGenerators/reviews.txt' INTO TABLE reviews FIELDS TERMINATED BY '\t' LINES TERMINATED BY '\n' (date, counts, rating, users_id, restaurant_id, description);
-- mongoimport --db yelp --collection restaurants --file /Users/cadenza/Documents/SDC/leaveReview/database/dataGenerators/restaurantsmongo.tsv --type tsv --fields _id,name
-- mongoimport --db yelp --collection users --file /Users/cadenza/Documents/SDC/leaveReview/database/dataGenerators/usersmongo.tsv --type tsv --fields _id,name,photo,counts,location
-- mongoimport --db yelp --collection reviews --file /Users/cadenza/Documents/SDC/leaveReview/database/dataGenerators/reviewsmongo.tsv --type tsv --fields _id,date,counts,rating,users_id,restaurants_id,description
DROP DATABASE IF EXISTS yelp;
CREATE DATABASE yelp;
USE yelp;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30),
  photo VARCHAR(30),
  counts VARCHAR(30),
  location VARCHAR(30)
);

CREATE TABLE restaurants (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50)
);

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  date VARCHAR(30),
  counts VARCHAR(30),
  rating INT,
  users_id INT,
  restaurant_id INT,
  description TEXT
  -- FOREIGN KEY (users_id) REFERENCES users(id),
  -- FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);
