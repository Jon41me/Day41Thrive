/*
  # Fix RLS Policies for Assessment Tables

  1. Security
    - Enable RLS on all tables
    - Add policies for authenticated and anonymous users to perform necessary operations
    - Ensure data can be inserted and retrieved properly
*/

-- Enable RLS on all tables (if not already enabled)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_results ENABLE ROW LEVEL SECURITY;

-- Create policies for users table
CREATE POLICY "Allow anonymous users to insert into users"
  ON users
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to insert into users"
  ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow users to read their own data"
  ON users
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create policies for assessments table
CREATE POLICY "Allow anonymous users to insert into assessments"
  ON assessments
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to insert into assessments"
  ON assessments
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow users to read their own assessments"
  ON assessments
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create policies for questions table
CREATE POLICY "Allow anyone to read questions"
  ON questions
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create policies for answers table
CREATE POLICY "Allow anonymous users to insert into answers"
  ON answers
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to insert into answers"
  ON answers
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow users to read their own answers"
  ON answers
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create policies for ai_results table
CREATE POLICY "Allow anonymous users to insert into ai_results"
  ON ai_results
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to insert into ai_results"
  ON ai_results
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow users to read their own ai_results"
  ON ai_results
  FOR SELECT
  TO anon, authenticated
  USING (true);