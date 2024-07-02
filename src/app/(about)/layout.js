import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
  "Hey everyone, I'm Amaan",
  "Professional Web Developer",
  "Aspiring Software Developer",

  "2+ Years experience in Web development",
  "Web Dev Lead at MLSAKIIT",
  "Key Skills: Reactjs/Nextjs",
  "Tech Enthusiast",
  "Public Speaker",
  "Tech Events and Conferences ",
  
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
