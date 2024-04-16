import { createClient, SupabaseClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });


let supabaseClient: SupabaseClient;
const supabase = () => {
  if (supabaseClient) return supabaseClient;
  supabaseClient = createClient(
    process.env.SUPABASE_PROJECT_URL || "",
    process.env.SUPABASE_PRIVATE_KEY || ""
  );
  return supabaseClient;
} 

export default supabase;


