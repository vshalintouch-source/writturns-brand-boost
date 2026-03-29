import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://zdshmveuaclrzpgxnmke.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpkc2htdmV1YWNscnpwZ3hubWtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxODk3NDYsImV4cCI6MjA4OTc2NTc0Nn0.RqZdbtZ4mkJsIrhALVJeFgSFuSDNwID-Dnn4Q2FO2sE";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
