/*
  # Add last_question_id to assessments table

  1. Changes
     - Add last_question_id column to assessments table
     - Add index on last_question_id for faster lookups
     - Add foreign key constraint to questions table
*/

-- Add last_question_id column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'assessments' AND column_name = 'last_question_id'
  ) THEN
    ALTER TABLE assessments ADD COLUMN last_question_id uuid REFERENCES questions(id) ON DELETE SET NULL;
    
    -- Create an index for faster lookups
    CREATE INDEX IF NOT EXISTS idx_assessments_last_question_id ON assessments(last_question_id);
  END IF;
END $$;