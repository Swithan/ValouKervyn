CREATE TABLE homepage (
    hId SERIAL PRIMARY KEY,
    hImage VARCHAR
);

CREATE TABLE categories (
    cId SERIAL PRIMARY KEY,
    cName VARCHAR(25) UNIQUE
);

CREATE TABLE paintings (
    pId SERIAL PRIMARY KEY,
    pDescription VARCHAR(255),
    pCategory INTEGER REFERENCES categories(cId),
    pSize VARCHAR(20)
);

CREATE TABLE images (
    iId SERIAL PRIMARY KEY,
    iPainting INTEGER REFERENCES paintings(pId),
    iImage VARCHAR(100),
    iFirst BOOLEAN
);

CREATE TABLE events (
    eId SERIAL PRIMARY KEY,
    eName VARCHAR(50),
    eBegin DATE,
    eEnd DATE,
    ePlace VARCHAR(50),
    eDescription VARCHAR(255),
    eImage VARCHAR(100)
);


INSERT INTO homepage VALUES 
(1, '/src/assets/home1.jpg'), 
(2, '/src/assets/home2.jpg'), 
(3, '/src/assets/home3.jpg')