interface Theme {
  name: string;
  color: string;
  label: string;
  emoji?: string;
}

export const themes: Theme[] = [
  // 🌤️ LIGHT / SOFT
  { name: "theme-light",  color: "linear-gradient(135deg, #dfe9eb, #fefefe)", label: "Light", emoji: "🌥️" },
  { name: "theme-mint",   color: "linear-gradient(135deg, #3F9AAE, #FFE2AF, #79C9C5)", label: "Tropical Mint", emoji: "🌿" },
  
  // 🌈 VIBRANT / COLORFUL
  { name: "theme-pink",   color: "linear-gradient(135deg, #FF52A0, #e7a5c1)", label: "Pink Pookie", emoji: "🌸" },

  // 🌑 DARK
  { name: "theme-dark",   color: "linear-gradient(135deg, #2a2a2e, #0a0a0a)", label: "Dark", emoji: "🌑" },
];