import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";

interface NavControlsProps {
  currentSection: {
    id: string;
    title: string;
  };
  onPrevClick: () => void;
  onNextClick: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export function NavControls({
  currentSection,
  onPrevClick,
  onNextClick,
  hasPrev,
  hasNext,
  toggleSidebar,
  isSidebarOpen
}: NavControlsProps) {
  return (
    <div className="nav-controls sticky top-0 z-20 bg-white shadow-md p-4 mb-6 rounded flex justify-between items-center">
      <div className="flex items-center">
        <Button
          onClick={toggleSidebar}
          variant="ghost"
          size="icon"
          className="mr-2 hidden lg:flex"
          title={isSidebarOpen ? "Itago ang sidebar" : "Ipakita ang sidebar"}
        >
          {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        <Button
          onClick={onPrevClick}
          disabled={!hasPrev}
          variant="default"
          className={`px-3 py-1 bg-primary text-white rounded hover:bg-primary/90 ${!hasPrev && "opacity-50"}`}
        >
          <span className="flex items-center">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Nakaraan
          </span>
        </Button>
      </div>
      <div className="text-center">
        <span className="font-serif font-bold">{currentSection.title}</span>
      </div>
      <Button
        onClick={onNextClick}
        disabled={!hasNext}
        variant="default"
        className={`px-3 py-1 bg-primary text-white rounded hover:bg-primary/90 ${!hasNext && "opacity-50"}`}
      >
        <span className="flex items-center">
          Susunod
          <ChevronRight className="h-5 w-5 ml-1" />
        </span>
      </Button>
    </div>
  );
}
