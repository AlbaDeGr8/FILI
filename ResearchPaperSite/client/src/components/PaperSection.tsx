import { cn } from "@/lib/utils";

interface PaperSectionProps {
  section: {
    id: string;
    title: string;
    content: React.ReactNode;
  };
  isActive: boolean;
}

export function PaperSection({ section, isActive }: PaperSectionProps) {
  return (
    <section 
      id={section.id} 
      className={cn(
        "section-container pb-10 mb-10",
        !isActive && "hidden"
      )}
    >
      {section.id === "pamagat" ? (
        <div className="text-center mb-16">
          {section.content}
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-serif font-bold mb-6 text-primary">{section.title}</h2>
          <div className="text-justify research-content">
            {section.content}
          </div>
        </>
      )}
    </section>
  );
}
