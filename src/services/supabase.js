

import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://uuvyrrgvfghgdrlrdjiv.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1dnlycmd2ZmdoZ2RybHJkaml2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMjc1NDQsImV4cCI6MjAyNzkwMzU0NH0.VpmHbE41lbsZA-jp7w0SqABhNP_v-wbPwFZTVXKyqZk"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;

