import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://yqmveqfvxpkvmjzfqjuo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxbXZlcWZ2eHBrdm1qemZxanVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE0NjIyNDQsImV4cCI6MjAyNzAzODI0NH0.twglF9XtWFA-yQuLHfcNclrrf5XAMqOv2dW8f5O044o'
)
