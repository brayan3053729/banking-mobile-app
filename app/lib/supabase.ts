import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://juwvfwocnktygdrqddeq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1d3Zmd29jbmt0eWdkcnFkZGVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNzkwNTcsImV4cCI6MjA3OTc1NTA1N30.irZmULsr8oIgSHoEq2xe2gcyhFwKb0uOKjFtOPFVFaM';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

