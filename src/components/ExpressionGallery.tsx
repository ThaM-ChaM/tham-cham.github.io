import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Frown, Angry, Zap, Eye, AlertTriangle } from "lucide-react";

const ExpressionGallery = () => {
  const expressions = [
    {
      name: "Happy",
      image: "/lovable-uploads/f4fed5b3-1018-4a46-bfd6-7d6a03502846.png", 
      icon: Heart,
      description: "Joyful and welcoming expression for positive interactions",
      color: "tech-blue"
    },
    {
      name: "Sad", 
      image: "/lovable-uploads/dd2b03dd-442d-473f-a53d-cf164e1a2ea2.png",
      icon: Frown,
      description: "Empathetic expression for difficult situations",
      color: "tech-teal"
    },
    {
      name: "Angry",
      image: "/lovable-uploads/1a32a569-85c0-4c61-8e55-dd56430c93d2.png",
      icon: Angry,
      description: "Stern expression for setting boundaries",
      color: "tech-purple"
    },
    {
      name: "Fear",
      image: "/lovable-uploads/4c734ab7-eeff-4b3c-a013-1dad47f98234.png",
      
      icon: Zap,
      description: "Cautious expression for uncertain situations", 
      color: "tech-blue"
    },
    {
      name: "Surprise",
      image: "/lovable-uploads/729f490a-000b-4e7e-94f6-7d9d15cccf4e.png",
      icon: Eye,
      description: "Amazed expression for unexpected information",
      color: "tech-teal"
    },
    {
      name: "Disgust",
      image: "/lovable-uploads/993eaeab-9ea1-4117-8171-2bd7e8e27b9b.png",
      
      icon: AlertTriangle,
      description: "Disapproving expression for negative content",
      color: "tech-purple"
    }
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="border-tech-blue/30 text-tech-blue bg-tech-blue/10">
            Facial Expressions
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Six Basic
            </span> Emotions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kuweni can express six fundamental human emotions through precise mechanical control 
            and silicone skin deformation, enabling natural emotional communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {expressions.map((expression, index) => {
            const IconComponent = expression.icon;
            return (
              <Card key={index} className="bg-tech-gray/50 border-tech-blue/20 backdrop-blur-sm hover-scale group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 relative">
                    <img 
                      src={expression.image} 
                      alt={`${expression.name} expression`}
                      className="w-full h-64 object-cover rounded-lg shadow-card"
                    />
                    <div className="absolute top-4 right-4 p-3 bg-tech-gray/90 backdrop-blur-sm rounded-full border border-tech-blue/30">
                      <IconComponent className={`w-6 h-6 text-${expression.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground">{expression.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">{expression.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="group"
            onClick={() => document.getElementById('demo-videos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Expression Demo
            <Heart className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExpressionGallery;