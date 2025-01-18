-- Rename the column 'old_username' to 'new_username'
ALTER TABLE user_entity RENAME COLUMN email TO username;

-- Add a new column 'email'
-- ALTER TABLE user_entity ADD COLUMN email VARCHAR(255);
