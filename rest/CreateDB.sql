
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(20) UNIQUE NOT NULL,
    phone VARCHAR(15),
    password VARCHAR(15) NOT NULL,
    role VARCHAR(20) NOT NULL
);


CREATE TABLE RestInfo (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    address TEXT NOT NULL,
    email VARCHAR(20) UNIQUE NOT NULL,
    phone VARCHAR(15),
    description TEXT
);

CREATE TABLE TypeItem (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);
  
CREATE TABLE MenuItem (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image TEXT,
    type_id INT REFERENCES TypeItem(id) ON DELETE CASCADE,
    description TEXT,
    availability BOOLEAN DEFAULT TRUE
);



CREATE TABLE Orders (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(id) ON DELETE CASCADE,
    type VARCHAR(20) NOT NULL
);


CREATE TABLE Order_Item (
    id SERIAL PRIMARY KEY,
    menuitem_id INT REFERENCES MenuItem(id) ON DELETE CASCADE,
    order_id INT REFERENCES Orders (id) ON DELETE CASCADE
);


CREATE TABLE Review (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(id) ON DELETE CASCADE,
    date TIMESTAMP DEFAULT NOW(),
    text TEXT NOT NULL
);

