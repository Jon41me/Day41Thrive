import { createClient } from '@supabase/supabase-js';

// These environment variables are set in the .env file
const supabaseUrl = 'https://pguplwzxbkomfnojulay.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBndXBsd3p4YmtvbWZub2p1bGF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NTgwMDUsImV4cCI6MjA2NDEzNDAwNX0.ldcyNGBcH0J9Q6BBAziSQhInFASTZwAPZHne4BT6iCA';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or Anon Key is missing. Please check your .env file.');
}

// Create a client with the anon key for regular operations
export const supabase = createClient(supabaseUrl, supabaseAnonKey);