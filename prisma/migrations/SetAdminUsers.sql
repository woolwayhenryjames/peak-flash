-- Set isAdmin flag for existing admin users
UPDATE User 
SET isAdmin = true 
WHERE email IN (
  'arslanablikim',
  'jenniffergzz',
  'jen_sunny0',
  'qtchcom',
  '0x13b057da716a5d527dd2a5890eecb3fc72982cbd'
);