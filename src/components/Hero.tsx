import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Mic, Users, Zap } from "lucide-react";
import robotHero from "@/assets/kuweni.jpeg";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-secondary overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-accent opacity-20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tech-teal/10 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="border-tech-blue/30 text-tech-blue bg-tech-blue/10">
                Final Year Project
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Kuweni
                </span>
                <br />
                <span className="text-foreground">The Humanoid</span>
                <br />
                <span className="text-tech-teal">Robot Receptionist</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Kuweni is a humanoid robot head designed to deliver natural and engaging interactions in reception settings. Featuring a silicone face capable of expressing six basic emotions, she integrates real-time conversation, sound source localization, and multi-user recognition to serve as an intelligent and approachable front-desk assistant.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="bg-tech-gray/50 border-tech-blue/20 backdrop-blur-sm">
                <CardContent className="p-6 space-y-3">
                  <Brain className="w-8 h-8 text-tech-blue" />
                  <h3 className="font-semibold text-foreground">21-DOF Mechanism</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced mechanical system with independent neck, mouth, eye, and eyebrow control
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-tech-gray/50 border-tech-teal/20 backdrop-blur-sm">
                <CardContent className="p-6 space-y-3">
                  <Mic className="w-8 h-8 text-tech-teal" />
                  <h3 className="font-semibold text-foreground">Sound Localization</h3>
                  <p className="text-sm text-muted-foreground">
                    ReSpeaker microphone array with 1.79° precision using GCC-PHAT algorithm
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-tech-gray/50 border-tech-purple/20 backdrop-blur-sm">
                <CardContent className="p-6 space-y-3">
                  <Users className="w-8 h-8 text-tech-purple" />
                  <h3 className="font-semibold text-foreground">Facial Recognition</h3>
                  <p className="text-sm text-muted-foreground">
                    89.7% accuracy with SCRFD detection and ArcFace embeddings
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-tech-gray/50 border-tech-blue/20 backdrop-blur-sm">
                <CardContent className="p-6 space-y-3">
                  <Zap className="w-8 h-8 text-tech-blue" />
                  <h3 className="font-semibold text-foreground">Real-time Response</h3>
                  <p className="text-sm text-muted-foreground">
                    4.91-second average response time with Llama 3.1 8B and RAG system
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => document.getElementById('technical-details')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Technical Details
                <Zap className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button 
                variant="tech" 
                size="xl"
                onClick={() => document.getElementById('demo-videos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Column - Robot Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src={robotHero} 
                alt="Humanoid Robot Receptionist"
                className="w-full h-auto rounded-2xl shadow-card border border-tech-blue/20"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 rounded-3xl blur-xl -z-10"></div>
            </div>
            
            {/* Floating Status Cards */}
            <Card className="absolute top-8 -left-4 bg-tech-gray/90 border-tech-blue/30 backdrop-blur-md">
              <CardContent className="p-4 flex items-center space-x-3">
                <div className="w-3 h-3 bg-tech-blue rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">AI Active</span>
              </CardContent>
            </Card>
            
            <Card className="absolute bottom-8 -right-4 bg-tech-gray/90 border-tech-teal/30 backdrop-blur-md">
              <CardContent className="p-4 flex items-center space-x-3">
                <div className="w-3 h-3 bg-tech-teal rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">Listening</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;