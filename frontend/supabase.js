// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project-id.supabase.co'; // <-- paste from dashboard
const supabaseKey = 'your-anon-key'; // <-- paste from dashboard

export const supabase = createClient(supabaseUrl, supabaseKey);
