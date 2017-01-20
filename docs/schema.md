# Schema Information

##users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
passwordDigest  | string    | not null
sessionToken    | string    | not null, indexed, unique

##articles
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed
body            | string    | not null
authorId        | integer   | not null, foreign key (references users), indexed

##likes
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
articleId       | integer   | not null, foreign key (references articles), indexed
userId          | integer   | not null, foreign key (references users), indexed

##followings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
followerId      | integer   | not null, foreign key (references users), indexed
followeeId      | integer   | not null, foreign key (references users), indexed
