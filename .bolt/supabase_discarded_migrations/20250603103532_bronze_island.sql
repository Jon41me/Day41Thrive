/*
  # Create Growth Gauge assessment database schema

  1. New Tables
    - `questions` - Stores assessment questions with their metadata
    - `users` - Stores user information from the Growth Gauge form
    - `assessments` - Tracks assessment sessions
    - `answers` - Stores user responses to questions
    - `ai_results` - Stores AI-generated analysis of assessment results

  2. Security
    - Enable RLS on all tables
    - Add appropriate policies for data access
*/

-- QUESTIONS TABLE
CREATE TABLE IF NOT EXISTS questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assessment_type TEXT NOT NULL CHECK (assessment_type IN ('kbyg', 'hirebus')),
    section_id TEXT NOT NULL,
    section_title TEXT NOT NULL,
    section_subtitle TEXT,
    section_emoji TEXT,
    section_description TEXT,
    question_key TEXT NOT NULL UNIQUE,
    question_text TEXT NOT NULL,
    question_order INTEGER NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('radio', 'checkbox', 'textarea', 'percentage_grid', 'text', 'select')),
    options JSONB,
    placeholder TEXT,
    has_other BOOLEAN DEFAULT false,
    percentage_options JSONB,
    is_active BOOLEAN DEFAULT true
);

-- USERS TABLE
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name TEXT,
    last_name TEXT,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    position TEXT,
    company TEXT,
    website TEXT,
    zip_code TEXT,
    locations INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- ASSESSMENTS TABLE
CREATE TABLE IF NOT EXISTS assessments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    type TEXT CHECK (type IN ('kbyg', 'hirebus')) NOT NULL,
    status TEXT DEFAULT 'in_progress' CHECK (status IN ('in_progress', 'completed')),
    started_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    completed_at TIMESTAMP WITH TIME ZONE,
    token TEXT UNIQUE NOT NULL,
    UNIQUE (user_id, type)
);

-- ANSWERS TABLE
CREATE TABLE IF NOT EXISTS answers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assessment_id UUID NOT NULL REFERENCES assessments(id) ON DELETE CASCADE,
    question_id UUID NOT NULL REFERENCES questions(id) ON DELETE RESTRICT,
    answer TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- AI RESULTS TABLE
CREATE TABLE IF NOT EXISTS ai_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assessment_id UUID NOT NULL REFERENCES assessments(id) ON DELETE CASCADE,
    summary TEXT,
    quadrant TEXT,
    lead_score INTEGER,
    pdf_url TEXT,
    web_summary_url TEXT,
    ai_raw JSONB,
    generated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_results ENABLE ROW LEVEL SECURITY;

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_questions_assessment_type ON questions(assessment_type);
CREATE INDEX IF NOT EXISTS idx_questions_section_id ON questions(section_id);
CREATE INDEX IF NOT EXISTS idx_answers_assessment_id ON answers(assessment_id);
CREATE INDEX IF NOT EXISTS idx_assessments_user_id ON assessments(user_id);
CREATE INDEX IF NOT EXISTS idx_ai_results_assessment_id ON ai_results(assessment_id);

-- Insert sample questions for the Growth Gauge assessment
INSERT INTO questions (assessment_type, section_id, section_title, section_subtitle, section_emoji, section_description, question_key, question_text, question_order, type, options)
VALUES 
('kbyg', 'curiosity', 'Curiosity Section', 'Ted Lasso getting to know you and your business', '🤓', 'Let''s get a lay of the land before we explore where you want to go.', 'annual-revenue', 'What''s your current annual revenue?', 1, 'radio', '["Under $2 million", "$2 million – $5 million", "$5 million – $8 million", "$8 million – $10 million", "Over $10 million"]');

INSERT INTO questions (assessment_type, section_id, section_title, section_subtitle, section_emoji, section_description, question_key, question_text, question_order, type, options)
VALUES 
('kbyg', 'curiosity', 'Curiosity Section', 'Ted Lasso getting to know you and your business', '🤓', 'Let''s get a lay of the land before we explore where you want to go.', 'financial-goals', 'When you think about financial goals, which one best describes your top priority right now?', 2, 'radio', '["Increase total revenue", "Grow net profit", "Reduce cost of goods sold (COGS)", "Invest in new equipment or infrastructure", "Boost marketing or sales spending"]');

INSERT INTO questions (assessment_type, section_id, section_title, section_subtitle, section_emoji, section_description, question_key, question_text, question_order, type, options)
VALUES 
('kbyg', 'curiosity', 'Curiosity Section', 'Ted Lasso getting to know you and your business', '🤓', 'Let''s get a lay of the land before we explore where you want to go.', 'team-size', 'How many dedicated sales reps do you have (not including office staff or installers)?', 3, 'radio', '["1–4", "5–8", "9–12", "13–16", "17 or more"]');

INSERT INTO questions (assessment_type, section_id, section_title, section_subtitle, section_emoji, section_description, question_key, question_text, question_order, type, options)
VALUES 
('kbyg', 'curiosity', 'Curiosity Section', 'Ted Lasso getting to know you and your business', '🤓', 'Let''s get a lay of the land before we explore where you want to go.', 'org-structure', 'How would you describe your current org structure?', 4, 'radio', '["Clear and defined – we''ve got roles, titles, and accountability", "Functional but informal – we know who does what, more or less", "Pretty loose – everyone just jumps in and gets stuff done", "What is an org structure?"]');

INSERT INTO questions (assessment_type, section_id, section_title, section_subtitle, section_emoji, section_description, question_key, question_text, question_order, type, options)
VALUES 
('kbyg', 'curiosity', 'Curiosity Section', 'Ted Lasso getting to know you and your business', '🤓', 'Let''s get a lay of the land before we explore where you want to go.', 'sop-status', 'Are your Standard Operating Procedures (SOPs) documented and followed?', 5, 'radio', '["Yes – we''re a well-oiled SOP machine", "Kind of – we have them, but people don''t always follow them", "Not really – we rely more on experience than documented processes", "What''s an SOP?"]');

INSERT INTO questions (assessment_type, section_id, section_title, section_subtitle, section_emoji, section_description, question_key, question_text, question_order, type, placeholder)
VALUES 
('kbyg', 'curiosity', 'Curiosity Section', 'Ted Lasso getting to know you and your business', '🤓', 'Let''s get a lay of the land before we explore where you want to go.', 'biggest-challenge', 'What''s the single biggest challenge you''re facing in your business right now?', 6, 'textarea', 'Share what''s keeping you up at night or slowing you down the most.');

-- Add more questions for other sections as needed