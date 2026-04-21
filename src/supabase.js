import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yufjkzinxljdlnaggvwm.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1ZmpremlueGxqZGxuYWdndndtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2ODc0MjcsImV4cCI6MjA5MjI2MzQyN30.lpJKp4_In49boa9R3VK6cTXk7T2iiAGZahQZIDjxFTs";

export const supabase = createClient(supabaseUrl, supabaseKey);