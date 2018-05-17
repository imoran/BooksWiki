--psql bookwiki-dev < schema.sql

DROP TABLE IF EXISTS books;
CREATE TABLE books
(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  year INTEGER NOT NULL
);

INSERT INTO
  books (title, description, img_url, year)
VALUES
  (
    'White Fang',
    'In the desolate, frozen wilds of northwest Canada, White Fang, a part-dog, part-wolf cub soon finds himself the sole survivor of a litter of five. In his lonely world, he soon learned to follow the harsh law of the North—kill or be killed. But nothing in his young life prepared him for the cruelty of the bully Beauty Smith, who buys White Fang from his Indian master and turns him into a vicious killer—a pit dog forced to fight for money. Will White Fang ever know the kindness of a gentle master or will he die a fierce deadly killer?',
    'https://upload.wikimedia.org/wikipedia/commons/1/14/JackLondonwhitefang1.jpg',
    2000
  ),

  (
    'Ender''s Game',
    'Andrew "Ender" Wiggin thinks he is playing computer simulated war games; he is, in fact, engaged in something far more desperate. The result of genetic experimentation, Ender may be the military genius Earth desperately needs in a war against an alien enemy seeking to destroy all human life. The only way to find out is to throw Ender into ever harsher training, to chip away and find the diamond inside, or destroy him utterly. Ender Wiggin is six years old when it begins. He will grow up fast.',
    'https://d2arxad8u2l0g7.cloudfront.net/books/1408303130l/375802.jpg',
    2000
  ),

  (
    'Kushiel''s Dart',
    'The land of Terre d''Ange is a place of unsurpassing beauty and grace. It is said that angels found the land and saw it was good... and the ensuing race that rose from the seed of angels and men live by one simple rule: Love as thou wilt. Phèdre nó Delaunay is a young woman who was born with a scarlet mote in her left eye. Sold into indentured servitude as a child, her bond is purchased by Anafiel Delaunay, a nobleman with very a special mission... and the first one to recognize who and what she is: one pricked by Kushiel''s Dart, chosen to forever experience pain and pleasure as one.',
    'https://images-na.ssl-images-amazon.com/images/I/81qfrKAYBaL.jpg',
    2000
  ),

  (
    'The Golden Compass',
    'Here lives an orphaned ward named Lyra Belacqua, whose carefree life among the scholars at Oxford''s Jordan College is shattered by the arrival of two powerful visitors. First, her fearsome uncle, Lord Asriel, appears with evidence of mystery and danger in the far North, including photographs of a mysterious celestial phenomenon called Dust and the dim outline of a city suspended in the Aurora Borealis that he suspects is part of an alternate universe. He leaves Lyra in the care of Mrs. Coulter, an enigmatic scholar and explorer who offers to give Lyra the attention her uncle has long refused her. In this multilayered narrative, however, nothing is as it seems. ',
    'https://d2arxad8u2l0g7.cloudfront.net/books/1451271747l/119322.jpg',
    2000
  ),

  (
    'The Subtle Knife',
    'Lost in a new world, Lyra finds Will--a boy on the run, a murderer--a worthy and welcome ally. For this is a world where soul-eating Specters stalk the streets and witches share the skies with troops of angels.
Each is searching--Lyra for the meaning of Dark Matter, Will for his missing father—but what they find instead is a deadly secret, a knife of untold power. And neither Lyra nor Will suspects how tightly their lives, their loves, their destinies are bound together . . . until they are split apart.',
    'https://d2arxad8u2l0g7.cloudfront.net/books/1451271814l/119324.jpg',
    2000
  ),

  (
    'Dune',
    'Set in the far future amidst a sprawling feudal interstellar empire where planetary dynasties are controlled by noble houses that owe an allegiance to the imperial House Corrino, Dune tells the story of young Paul Atreides (the heir apparent to Duke Leto Atreides and heir of House Atreides) as he and his family accept control of the desert planet Arrakis, the only source of the ''spice'' melange, the most important and valuable substance in the cosmos. The story explores the complex, multi-layered interactions of politics, religion, ecology, technology, and human emotion as the forces of the empire confront each other for control of Arrakis.',
    'https://d2arxad8u2l0g7.cloudfront.net/books/1434908555l/234225.jpg',
    2000
  ),

  (
    'A Scanner Darkly',
    'Substance D is not known as Death for nothing. It is the most toxic drug ever to find its way on to the streets of LA. It destroys the links between the brain''s two hemispheres, causing, first, disorientation and then complete and irreversible brain damage. The undercover narcotics agent who calls himself Bob Arctor is desperate to discover the ultimate source of supply. But to find any kind of lead he has to pose as a user and, inevitably, without realising what is happening, Arctor is soon as addicted as the junkies he works among...',
    'https://d2arxad8u2l0g7.cloudfront.net/books/1377895203l/216367.jpg',
    2000
  ),

  (
    'Good Omens',
    'According to The Nice and Accurate Prophecies of Agnes Nutter, Witch (the world''s only completely accurate book of prophecies, written in 1655, before she exploded), the world will end on a Saturday. Next Saturday, in fact. Just before dinner. So the armies of Good and Evil are amassing, Atlantis is rising, frogs are falling, tempers are flaring. Everything appears to be going according to Divine Plan. Except a somewhat fussy angel and a fast-living demon—both of whom have lived amongst Earth''s mortals since The Beginning and have grown rather fond of the lifestyle—are not actually looking forward to the coming Rapture. And someone seems to have misplaced the Antichrist . . .',
    'https://d2arxad8u2l0g7.cloudfront.net/books/1392528568l/12067.jpg',
    2000
  ),

  (
    'Neuromancer',
    'The Matrix is a world within the world, a global consensus- hallucination, the representation of every byte of data in cyberspace . . .',
    'https://d2arxad8u2l0g7.cloudfront.net/books/1167348726l/22328.jpg',
    2000
  ),

  (
    '1984',
    'The year 1984 has come and gone, but George Orwell''s prophetic, nightmarish vision in 1949 of the world we were becoming is timelier than ever. 1984 is still the great modern classic of "negative utopia" -a startlingly original and haunting novel that creates an imaginary world that is completely convincing, from the first sentence to the last four words. No one can deny the novel''s hold on the imaginations of whole generations, or the power of its admonitions -a power that seems to grow, not lessen, with the passage of time.',
    'https://d2arxad8u2l0g7.cloudfront.net/books/1348990566l/5470.jpg',
    1970
  ),

  (
    'Hyperion',
    'On the world called Hyperion, beyond the law of the Hegemony of Man, there waits the creature called the Shrike. There are those who worship it. There are those who fear it. And there are those who have vowed to destroy it. In the Valley of the Time Tombs, where huge, brooding structures move backward through time, the Shrike waits for them all. On the eve of Armageddon, with the entire galaxy at war, seven pilgrims set forth on a final voyage to Hyperion seeking the answers to the unsolved riddles of their lives. Each carries a desperate hope—and a terrible secret. And one may hold the fate of humanity in his hands. ',
    'https://d2arxad8u2l0g7.cloudfront.net/books/1405546838l/77566.jpg',
    2000
  ),

  (
    'The Left Hand of Darkness',
    'A groundbreaking work of science fiction, The Left Hand of Darkness tells the story of a lone human emissary to Winter, an alien world whose inhabitants can choose -and change - their gender. His goal is to facilitate Winter''s inclusion in a growing intergalactic civilization. But to do so he must bridge the gulf between his own views and those of the completely dissimilar culture that he encounters. Embracing the aspects of psychology, society, and human emotion on an alien world, The Left Hand of Darkness stands as a landmark achievement in the annals of intellectual science fiction.',
    'https://d2arxad8u2l0g7.cloudfront.net/books/1388229638l/18423.jpg',
    2000
  ),

  (
    'Fahrenheit 451',
    'Guy Montag is a fireman. His job is to burn books, which are forbidden, being the source of all discord and unhappiness. Even so, Montag is unhappy; there is discord in his marriage. Are books hidden in his house? The Mechanical Hound of the Fire Department, armed with a lethal hypodermic, escorted by helicopters, is ready to track down those dissidents who defy society to preserve and read books. The classic dystopian novel of a post-literate future, Fahrenheit 451 stands alongside Orwell’s 1984 and Huxley’s Brave New World as a prophetic account of Western civilization’s enslavement by the media, drugs and conformity.',
    'https://d2arxad8u2l0g7.cloudfront.net/books/1469704347l/17470674.jpg',
    2000
  );


DROP TABLE IF EXISTS users;
CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  picture VARCHAR(255)
);

INSERT INTO
  users (name, email, password)
VALUES
  (
    'Isis',
    'isis@isis.com',
    '123456789'
  ),
  (
    'Majid',
    'majid@majid.com',
    '1234567'
  );





DROP TABLE IF EXISTS genres;
CREATE TABLE genres
(
  id SERIAL PRIMARY KEY,
  genre VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO
  genres (genre)
VALUES
  ('fiction'), ('non fiction'), ('drama'), ('action');


DROP TABLE IF EXISTS book_genre;
CREATE TABLE book_genre
(
  genre_id INTEGER,
  book_id INTEGER
);

INSERT INTO
  book_genre (book_id, genre_id)
VALUES
  (1, 1), (1, 2), (2, 2), (3, 3), (4, 4), (5, 1), (6, 2), (7, 3), (8, 4), (9, 1), (10, 2);


DROP TABLE IF EXISTS authors;
CREATE TABLE authors
(
  id SERIAL PRIMARY KEY,
  author VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO
  authors (author)
VALUES
  ('Kurt Vonnegut'), ('R.L Stine'), ('George Orwell'), ('Anthony Robbins');


DROP TABLE IF EXISTS book_author;
CREATE TABLE book_author
(
  author_id INTEGER,
  book_id INTEGER
);

INSERT INTO
  book_author (book_id, author_id)
VALUES
  (1, 1), (1, 2), (2, 2), (3, 3), (4, 4), (5, 1), (6, 2), (7, 3), (8, 4), (9, 1), (10, 2);


DROP TABLE IF EXISTS ratings;
CREATE TABLE ratings
(
  id SERIAL PRIMARY KEY,
  rating INTEGER NOT NULL,
  user_id INTEGER,
  book_id INTEGER
);

INSERT INTO
  ratings (rating, user_id, book_id)
VALUES
  (5, 1, 1), (4, 2, 1), (4, 2, 2), (2, 1, 3), (1, 2, 4),
  (3, 1, 5), (5, 2, 6), (5, 1, 7), (2, 2, 8),
  (4, 2, 9), (5, 1, 10);


DROP TABLE IF EXISTS comments;
CREATE TABLE comments
(
  id SERIAL PRIMARY KEY,
  comment TEXT NOT NULL,
  user_id INTEGER,
  book_id INTEGER
);

INSERT INTO
  comments (comment, user_id, book_id)
VALUES
  ('I remember reading this as a child, great book', 1, 1),
  ('Great book, have read it more than 4 times', 2, 2),
  ('Wasn''t my cup of tea', 1, 3),
  ('I didn''t even read it', 2, 4),
  ('Great title', 1, 5),
  ('Not bad', 2, 6),
  ('Wish it didn''t end, great read for sure', 1, 7),
  ('Some parts were great; others, not so much', 2, 8),
  ('Best that I''ve read recently', 2, 9),
  ('Such a classic, need I say more?', 1, 10);






DROP TABLE IF EXISTS user_book;
CREATE TABLE user_book
(
  user_id INTEGER,
  book_id INTEGER
);
