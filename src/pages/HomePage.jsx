import AILeadGeneration from "@/components/home/AILeadGeneration";
import ClientSection from "@/components/home/ClientSection";
import EmailOutreachSection from "@/components/home/EmailOutreachSection";
import SalesValueSection from "@/components/home/SalesValueSection";
import MedicialSection from "@/components/home/MedicialSection";
import ResultsSection from "@/components/home/ResultsSection";
import TargetSection from "@/components/home/TargetSection";
import Pricing from "@/components/home/Pricing";
import TeamsChoose from "@/components/home/TeamsChoose";
import ToolsCompatibility from "@/components/home/ToolsCompatibility";

function HomePage() {
    return (
        <div>
            <ClientSection />
            <SalesValueSection />
            <TargetSection />
            <EmailOutreachSection />
            <MedicialSection />
            <ResultsSection />
            <TeamsChoose />
            <ToolsCompatibility />
            <Pricing />
            <AILeadGeneration />
        </div>
    )
}

export default HomePage;
