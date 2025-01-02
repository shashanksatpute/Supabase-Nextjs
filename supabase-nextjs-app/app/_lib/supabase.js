
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://fburwlvgdqykibiwbone.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZidXJ3bHZnZHF5a2liaXdib25lIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNTcxNzQxMCwiZXhwIjoyMDUxMjkzNDEwfQ.G_mC_p652GmtDyTYF0BGKd2mIU2GW2J5X34Yu4aF7Og"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;