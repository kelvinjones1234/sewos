// A clean generator that avoids lookalike characters
export function generateMembershipId(): string {
  const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Removed O, 0, I, 1
  let result = '';
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result; // Example output: "X7K9M2P4"
}