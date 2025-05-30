// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL // from Supabase project
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY // from Supabase API settings

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
