
CREATE TABLE Music(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    author VARCHAR(255),
    style VARCHAR(50),
    date_added DATE,
    likes INTEGER,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES Users (id)
);

CREATE TABLE Users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    is_author VARCHAR(10),
    mail VARCHAR(50),
    password VARCHAR(255),
    created_at DATE,
    updated_at DATE
);

CREATE TABLE Playlist(
    id SERIAL PRIMARY KEY,
    playlist_name VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES Users (id)
);

CREATE TABLE To_music(
    playlist_id INTEGER,
    music_id INTEGER,
    FOREIGN KEY (playlist_id) REFERENCES Playlist (id),
    FOREIGN KEY (music_id) REFERENCES Music (id)
);