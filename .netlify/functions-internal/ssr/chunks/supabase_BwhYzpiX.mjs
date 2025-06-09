import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://pguplwzxbkomfnojulay.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBndXBsd3p4YmtvbWZub2p1bGF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NTgwMDUsImV4cCI6MjA2NDEzNDAwNX0.ldcyNGBcH0J9Q6BBAziSQhInFASTZwAPZHne4BT6iCA";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase as s };
