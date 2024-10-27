import { createClient } from '@supabase/supabase-js'

const projectURL = import.meta.env.VITE_projectURL
const anonKey = import.meta.env.VITE_anonKey

export const supabase = createClient(projectURL, anonKey)