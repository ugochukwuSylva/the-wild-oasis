import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://edqocstpwsovsutgdzae.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkcW9jc3Rwd3NvdnN1dGdkemFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1ODM4NzEsImV4cCI6MjAxMzE1OTg3MX0.iX7Tj8quRJTxyhNT6mEW0_vlG9mRTg_zGUvXYo3zc2U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
