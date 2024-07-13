import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
let supabaseClient;
const supabase = () => {
    if (supabaseClient)
        return supabaseClient;
    supabaseClient = createClient(process.env.SUPABASE_PROJECT_URL || "", process.env.SUPABASE_PRIVATE_KEY || "");
    return supabaseClient;
};
export default supabase;
//# sourceMappingURL=supabase.js.map