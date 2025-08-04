/*
  # Create business hours table

  1. New Tables
    - `business_hours`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key) - references profiles.id
      - `day_of_week` (integer) - 0=Sunday, 1=Monday, etc.
      - `open_time` (time) - opening time
      - `close_time` (time) - closing time
      - `is_closed` (boolean) - whether business is closed this day
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `business_hours` table
    - Add policies for CRUD operations based on user ownership

  3. Constraints
    - Unique constraint on user_id + day_of_week
    - Check constraint for day_of_week (0-6)
*/

CREATE TABLE IF NOT EXISTS business_hours (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  day_of_week integer NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6),
  open_time time NOT NULL DEFAULT '09:00',
  close_time time NOT NULL DEFAULT '17:00',
  is_closed boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, day_of_week)
);

-- Enable RLS
ALTER TABLE business_hours ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read own business hours"
  ON business_hours
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert own business hours"
  ON business_hours
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own business hours"
  ON business_hours
  FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can delete own business hours"
  ON business_hours
  FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());

-- Create trigger for updated_at
CREATE TRIGGER business_hours_updated_at
  BEFORE UPDATE ON business_hours
  FOR EACH ROW
  EXECUTE FUNCTION handle_updated_at();