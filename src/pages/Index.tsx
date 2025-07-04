import Hero from "@/components/Hero";
import ProjectOverview from "@/components/ProjectOverview";
import ExpressionGallery from "@/components/ExpressionGallery";
import ValidationResults from "@/components/ValidationResults";
import MediaGallery from "@/components/MediaGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ExpressionGallery />
      <ProjectOverview />
      <ValidationResults />
      <MediaGallery />
      <Footer />
    </div>
  );
};

export default Index;
