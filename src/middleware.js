import { getSupabaseReqResClient } from "@/supabase-utils/resReqClient";
export async function middleware(request) {
  const { supabase, response }
     = getSupabaseReqResClient({ request });

  return response.value;
}