CREATE TABLE role (
  id INTEGER IDENTITY PRIMARY KEY,
  role_name VARCHAR(255) NOT NULL,
  description VARCHAR(45) NOT NULL
);

CREATE TABLE user (
  id SMALLINT IDENTITY PRIMARY KEY,
  full_name VARCHAR(45) NOT NULL,
  username VARCHAR(16) NOT NULL,
  password VARCHAR(100) NOT NULL,
  status VARCHAR(45) NOT NULL,
);

CREATE TABLE usersandroles (
  user_id SMALLINT NOT NULL,
  role_id SMALLINT NOT NULL
);

CREATE INDEX user_idx ON usersandroles(user_id);
CREATE INDEX role_idx ON usersandroles(role_id);

ALTER TABLE usersandroles ADD CONSTRAINT role FOREIGN KEY (role_id) REFERENCES role (id) ON UPDATE CASCADE;
ALTER TABLE usersandroles ADD CONSTRAINT user FOREIGN KEY (user_id) REFERENCES user (id) ON UPDATE CASCADE;