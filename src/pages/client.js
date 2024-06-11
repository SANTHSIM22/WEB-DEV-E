import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pjiufmouyjuxnxfxtjlu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqaXVmbW91eWp1eG54Znh0amx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4MDM3MzksImV4cCI6MjAzMDM3OTczOX0.kAynbzt8m5fjggwSbeUubLKyFuadFw5Y0cl3RgD19KI'
export  const supabase = createClient(supabaseUrl, supabaseKey)