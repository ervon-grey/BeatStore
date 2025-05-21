// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rftzusoerdrjzyapknes.supabase.co'; // <-- paste from dashboard
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmdHp1c29lcmRyanp5YXBrbmVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NDcxNzgsImV4cCI6MjA2MzIyMzE3OH0.igRjZrvBKWVPrvfxtPSMCz99J5eUczIMSymv4UKylpM'; // <-- paste from dashboard

export const supabase = createClient(supabaseUrl, supabaseKey);
