/*
  # Add last_question_id to assessments table

  1. Changes
    - Add last_question_id column to assessments table to track where users left off
    - This enables the resume functionality for assessments
*/

-- Add last_question_id column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'assessments' AND column_name = 'last_question_id'
  ) THEN
    ALTER TABLE assessments ADD COLUMN last_question_id uuid REFERENCES questions(id) ON DELETE SET NULL;
    CREATE INDEX IF NOT EXISTS idx_assessments_last_question_id ON assessments(last_question_id);
  END IF;
END $$;