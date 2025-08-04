/*
  # Create autoresponders table

  1. New Tables
    - `autoresponders`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key) - references profiles.id
      - `name` (text) - autoresponder name/title
      - `trigger_keywords` (text array) - keywords that trigger this response
      - `response_message` (text) - the automated response message
      - `is_active` (boolean) - whether this autoresponder is enabled
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `autoresponders` table
    - Add policies for CRUD operations based on user ownership
*/

CREATE TABLE IF NOT EXISTS autoresponders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  trigger_keywords text[] NOT NULL DEFAULT '{}',
  response_message text NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE autoresponders ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read own autoresponders"
  ON autoresponders
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert own autoresponders"
  ON autoresponders
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own autoresponders"
  ON autoresponders
  FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can delete own autoresponders"
  ON autoresponders
  FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());

-- Create trigger for updated_at
CREATE TRIGGER autoresponders_updated_at
  BEFORE UPDATE ON autoresponders
  FOR EACH ROW
  EXECUTE FUNCTION handle_updated_at();