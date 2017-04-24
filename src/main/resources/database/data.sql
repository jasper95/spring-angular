INSERT INTO role (id, role_name, description) VALUES
(1, 'ROLE_ADMIN  ', 'Admin account'),
(2, 'ROLE_USER', 'User account');

INSERT INTO user (id, full_name, username, password, status) VALUES
(1, 'Jasper Bernales', 'developer', '$2a$10$LvDVKusRSmMloHpVEC76yezPitaVReTXBRexN8KJvNUVwurvLhnVy', 'ACTIVE'),
(2, 'Alma Mae Bernales', 'encoder', '$2a$10$dAI0RsSHB9RW8NB0JQ3T1OmgIOREQ.k3/Ibfh5zQNteDISPtsWarC', 'ACTIVE'),
(3, 'Alberto Bernales', 'treasurer', '$2a$10$PWBAlaZeZFjdZSu6.8Fsqe0gyy9iwOjhRI.fenD/oJVOUJ7CFDED6', 'ACTIVE'),
(4, 'John Bernales', 'reports', '$2a$10$31rw95FvUTFSqWPnDgnCcuNtCj6zaG28CHU04kDCeD7rn9Iod4Vj2', 'ACTIVE');

INSERT INTO usersandroles (user_id, role_id) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 2);