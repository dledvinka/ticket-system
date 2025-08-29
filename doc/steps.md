C:\repo> npx create-next-app ticket-system --app --src-dir --use-npm --eslint --ts
npm install supabase --save-dev
npx supabase init
PS C:\Repo\ticket-system> npx supabase start


supabase start is already running.
Stopped services: [supabase_imgproxy_ticket-system supabase_edge_runtime_ticket-system supabase_pooler_ticket-system]
supabase local development setup is running.

npx supabase start
npx supabase stop
npx supabase status

# Direct connection to database
DBEaver: connection string from npx supabase status

# Create supabase.ts
npx supabase gen types typescript --schema public --local  > supabase.ts