// src/supabaseClient.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vdhgcemgstrowmlmfzkz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkaGdjZW1nc3Ryb3dtbG1memt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3MDA0NzcsImV4cCI6MjAzNzI3NjQ3N30.EFp6Dt7vVfOWG55zry90zKHc48xCG2LVTvWaP7IV92k';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
