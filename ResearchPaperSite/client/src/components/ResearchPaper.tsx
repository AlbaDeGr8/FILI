import { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { NavControls } from "./NavControls";
import { PaperSection } from "./PaperSection";
import { paperSections } from "@/data/paperContent";

export function ResearchPaper() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024);
  
  const currentSection = paperSections[currentSectionIndex];

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    
    // Check if there's a hash in the URL and navigate to that section
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      const index = paperSections.findIndex((section) => section.id === sectionId);
      if (index !== -1) {
        setCurrentSectionIndex(index);
      }
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSectionChange = (index: number) => {
    setCurrentSectionIndex(index);
    window.history.pushState(null, "", `#${paperSections[index].id}`);
  };

  const handleNextSection = () => {
    if (currentSectionIndex < paperSections.length - 1) {
      handleSectionChange(currentSectionIndex + 1);
    }
  };

  const handlePrevSection = () => {
    if (currentSectionIndex > 0) {
      handleSectionChange(currentSectionIndex - 1);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExportPDF = () => {
    // For a simple implementation, use print functionality with PDF option
    window.print();
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar 
        sections={paperSections}
        currentSectionIndex={currentSectionIndex}
        onSectionChange={handleSectionChange}
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        onPrint={handlePrint}
        onExportPDF={handleExportPDF}
      />
      
      <main id="mainContent" className={`flex-1 p-4 lg:p-8 ${sidebarOpen ? 'lg:ml-80' : 'lg:ml-0'} transition-all duration-300`}>
        <NavControls
          currentSection={currentSection}
          onPrevClick={handlePrevSection}
          onNextClick={handleNextSection}
          hasPrev={currentSectionIndex > 0}
          hasNext={currentSectionIndex < paperSections.length - 1}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          isSidebarOpen={sidebarOpen}
        />
        
        <div className="bg-white shadow-md rounded-lg p-6 lg:p-10 mb-6">
          <PaperSection 
            section={currentSection} 
            isActive={true} 
          />
        </div>
        
        <footer className="bg-primary text-white p-4 rounded-lg">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              &copy; 2024-2025 Batangas State University - Alangilan Campus. Lahat ng karapatan ay nakalaan.
            </p>
            <p className="text-xs mt-2">
              Isang digital na presentasyon ng pananaliksik para sa kursong Fili 102 FILIPINO SA IBA'T IBANG DISIPLINA.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
