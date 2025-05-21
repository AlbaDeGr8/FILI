import { Button } from "@/components/ui/button";
import { Printer, FileDown, Menu } from "lucide-react";
import { BatStateULogo } from "./BatStateULogo";

interface SidebarProps {
  sections: {
    id: string;
    title: string;
  }[];
  currentSectionIndex: number;
  onSectionChange: (index: number) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
  onPrint: () => void;
  onExportPDF: () => void;
}

export function Sidebar({
  sections,
  currentSectionIndex,
  onSectionChange,
  isOpen,
  toggleSidebar,
  onPrint,
  onExportPDF,
}: SidebarProps) {
  return (
    <aside 
      id="sidebar" 
      className={`lg:w-80 w-full bg-white shadow-md lg:fixed lg:h-screen overflow-y-auto transition-all duration-300 z-30 ${!isOpen && 'lg:hidden'}`}
    >
      {/* University Header */}
      <div className="bg-primary p-4 text-white flex flex-col items-center">
        <div className="mb-3">
          <BatStateULogo />
        </div>
        <h2 className="text-xl font-serif font-bold text-center">Batangas State University</h2>
        <p className="text-sm italic">The National Engineering University</p>
      </div>
      
      {/* Mobile Toggle Button */}
      <div className="lg:hidden flex justify-between items-center bg-neutral-200 p-3">
        <span className="font-bold text-primary">Talaan ng Nilalaman</span>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar}
          className="p-1 rounded hover:bg-neutral-300"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Table of Contents */}
      <nav id="tableOfContents" className="p-4">
        <ul className="space-y-2 font-medium">
          {sections.map((section, index) => (
            <li key={section.id} className="border-b pb-1">
              <button
                onClick={() => onSectionChange(index)}
                className={`block w-full text-left px-3 py-2 rounded 
                  ${index === currentSectionIndex 
                    ? 'bg-primary text-white' 
                    : 'hover:bg-primary hover:text-white'}`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Action Buttons */}
      <div className="action-buttons p-4 border-t border-neutral-200">
        <Button 
          onClick={onPrint}
          className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded flex items-center justify-center mb-2"
        >
          <Printer className="h-5 w-5 mr-2" />
          I-print ang Dokumento
        </Button>
        <Button 
          onClick={onExportPDF}
          className="w-full bg-secondary hover:bg-secondary/90 text-white py-2 px-4 rounded flex items-center justify-center"
        >
          <FileDown className="h-5 w-5 mr-2" />
          I-download bilang PDF
        </Button>
      </div>
    </aside>
  );
}
