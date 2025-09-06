export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo?: string; // ruta en src/assets/team o placeholder
};

export const TEAM: TeamMember[] = [
  {
    id: "somchai",
    name: "Somchai S.",
    role: "Community Leader & Policy Advocate",
    bio: "Supports KrabiFarm as a concrete tool to uplift local farmers through fair pricing, traceability and logistics collaboration.",
    photo: "/placeholder.webp"
  },
  {
    id: "antonio",
    name: "Antonio Fernández Rios",
    role: "Tech Architect (Bittech Network)",
    bio: "Architect behind the platform’s product vision and technology: marketplace backbone, QR payments and traceability.",
    photo: "/placeholder.webp"
  },
  {
    id: "tety",
    name: "Tety",
    role: "Operations & Partnerships",
    bio: "Coordinates with local producers, hotels and markets to pilot routes and pooled logistics.",
    photo: "/placeholder.webp"
  }
];
