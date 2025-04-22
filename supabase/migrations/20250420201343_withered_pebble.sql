/*
  # Add Stripe Products Integration

  1. New Tables
    - `stripe_products`
      - `id` (uuid, primary key)
      - `stripe_id` (text, unique)
      - `name` (text)
      - `description` (text, nullable)
      - `price_in_cents` (integer)
      - `image_url` (text, nullable)
      - `active` (boolean)
      - `metadata` (jsonb)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `stripe_products` table
    - Add policy for public read access to active products
*/

CREATE TABLE IF NOT EXISTS stripe_products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  stripe_id text UNIQUE NOT NULL,
  name text NOT NULL,
  description text,
  price_in_cents integer NOT NULL,
  image_url text,
  active boolean DEFAULT true,
  metadata jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE stripe_products ENABLE ROW LEVEL SECURITY;

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'stripe_products' 
    AND policyname = 'Allow public read access to active products'
  ) THEN
    CREATE POLICY "Allow public read access to active products"
      ON stripe_products
      FOR SELECT
      TO public
      USING (active = true);
  END IF;
END $$;