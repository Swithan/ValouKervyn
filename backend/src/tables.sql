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
(3, '/src/assets/home3.jpg');

INSERT INTO categories VALUES 
(1, 'squaring_up'), 
(2, 'pins_&_needles'), 
(3, 'vibrations'), 
(4, 'staging_paintings');

INSERT INTO paintings VALUES 
(1, 'Acrylique sur toile', 2, '200x160'), 
(2, 'Acrylique sur toile', 2, '80x80'), 
(3, 'Acrylique sur toile', 3, '80x80'), 
(4, 'Acrylique sur toile', 4, '100x80');

INSERT INTO images VALUES 
(1, 1, '/src/assets/aaf.jpg', TRUE), 
(2, 1, '/src/assets/home1.jpg', FALSE), 
(3, 1, '/src/assets/home3.jpg', FALSE), 
(4, 2, '/src/assets/home3.jpg', TRUE), 
(5, 2, '/src/assets/painting5.jpg', FALSE), 
(6, 2, '/src/assets/painting6.jpg', FALSE), 
(7, 3, '/src/assets/painting7.jpg', TRUE), 
(8, 3, '/src/assets/painting8.jpg', FALSE), 
(9, 3, '/src/assets/painting9.jpg', FALSE), 
(10, 4, '/src/assets/painting10.jpg', TRUE), 
(11, 4, '/src/assets/painting11.jpg', FALSE), 
(12, 4, '/src/assets/painting12.jpg', FALSE);

INSERT INTO events VALUES 
(1, 'Affordable Art Fair 2023', '2023-02-08', '2023-02-12', 'Tour & Taxi', 'Stand 12', '/src/assets/aaf.jpg'), 
(2, 'Noël 2024', '2024-11-20', '2024-11-24', 'Rue des Garennes 90, 1170 Watermael-Boitsfort', 'Noël approche ! Venez découvrir 42 exposants du 20 au 24 novembre 2024 à Boitsfort.', '/src/assets/noel2024.jpg'),
(3, 'Art Brussels 2025', '2025-04-25', '2025-04-27', 'Tour & Taxi', 'Stand 12', '/src/assets/ab2025.jpg'),
(4, 'Test', '2024-12-01', '2024-12-31', 'Woluwe shopping', 'Non mais c'' est juste un test hn faut pas croire que c''est un vrai event la', '/src/assets/ValouKervyn.jpg');
