import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Cpu, 
  Camera, 
  Mic, 
  Speaker, 
  Wifi, 
  Database,
  Code,
  Lightbulb,
  Target,
  CheckCircle
} from "lucide-react";

const ProjectOverview = () => {
  return (
    <section id="technical-details" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="border-tech-blue/30 text-tech-blue bg-tech-blue/10">
            Project Overview
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Innovation
            </span> in Robotics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive solution combining advanced AI, computer vision, and robotics 
            to create the next generation of interactive reception systems.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-tech-gray/50">
            <TabsTrigger value="overview" className="data-[state=active]:bg-tech-blue/20">Overview</TabsTrigger>
            <TabsTrigger value="technical" className="data-[state=active]:bg-tech-blue/20">Technical</TabsTrigger>
            <TabsTrigger value="features" className="data-[state=active]:bg-tech-blue/20">Features</TabsTrigger>
            <TabsTrigger value="objectives" className="data-[state=active]:bg-tech-blue/20">Objectives</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-tech-gray/50 border-tech-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Lightbulb className="w-6 h-6 text-tech-blue" />
                    <span>Project Vision</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Reception areas often rely on human staff for repetitive, time-sensitive tasks. 
                    Human receptionists require breaks, may have inconsistent attitudes, and are prone 
                    to errors. Our solution: a 21-DOF humanoid robot head with silicone mask capable 
                    of expressing six basic emotions and natural human-robot interaction.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-tech-teal" />
                      <span className="text-sm">24/7 autonomous operation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-tech-teal" />
                      <span className="text-sm">Six basic facial expressions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-tech-teal" />
                      <span className="text-sm">Multi-user recognition system</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-tech-gray/50 border-tech-teal/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Target className="w-6 h-6 text-tech-teal" />
                    <span>Key Applications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-tech-blue rounded-full mt-2"></div>
                      <span>Department reception and visitor management</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-tech-teal rounded-full mt-2"></div>
                      <span>University information desk operations</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-tech-purple rounded-full mt-2"></div>
                      <span>Directions to laboratories and lecture halls</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-tech-blue rounded-full mt-2"></div>
                      <span>Faculty and staff information queries</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-tech-teal rounded-full mt-2"></div>
                      <span>Degree program information assistance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="technical" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-tech-gray/50 border-tech-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Cpu className="w-6 h-6 text-tech-blue" />
                    <span>Processing Unit</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• NVIDIA Jetson AGX Xavier</li>
                    <li>• 8-core ARM v8.2 64-bit CPU</li>
                    <li>• 512-core Volta GPU</li>
                    <li>• 32 GB LPDDR4x Memory</li>
                    <li>• Up to 32 TOPS AI Performance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-tech-gray/50 border-tech-teal/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Camera className="w-6 h-6 text-tech-teal" />
                    <span>Vision System</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• SCRFD face detection model</li>
                    <li>• ArcFace recognition system</li>
                    <li>• 89.7% recognition accuracy</li>
                    <li>• Real-time multi-face tracking</li>
                    <li>• BYTETracker algorithm</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-tech-gray/50 border-tech-purple/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Mic className="w-6 h-6 text-tech-purple" />
                    <span>Audio System</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• ReSpeaker microphone array</li>
                    <li>• GCC-PHAT localization</li>
                    <li>• 1.79° localization accuracy</li>
                    <li>• Multi-speaker environments</li>
                    <li>• FasterWhisper transcription</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-tech-gray/50 border-tech-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Speaker className="w-6 h-6 text-tech-blue" />
                    <span>Output Systems</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 21-DOF servo system</li>
                    <li>• Pololu Mini Maestro controller</li>
                    <li>• Silicone facial expressions</li>
                    <li>• MeloTTS speech synthesis</li>
                    <li>• Jaw-speech synchronization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-tech-gray/50 border-tech-teal/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Wifi className="w-6 h-6 text-tech-teal" />
                    <span>Connectivity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• ROS2 Foxy framework</li>
                    <li>• USB and TTL serial</li>
                    <li>• Real-time communication</li>
                    <li>• Multi-threaded architecture</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-tech-gray/50 border-tech-purple/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Database className="w-6 h-6 text-tech-purple" />
                    <span>AI & Software</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Llama 3.1 8B Instruct model</li>
                    <li>• RAG with ChromaDB</li>
                    <li>• 4.91s average response time</li>
                    <li>• Multi-threaded processing</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="features" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Core Capabilities</h3>
                <div className="space-y-4">
                  {[
                    "Six Basic Facial Expressions",
                    "Sound Source Localization",
                    "Multi-User Recognition System", 
                    "Real-time Conversation Pipeline",
                    "Active Speaker Tracking",
                    "Jaw-Speech Synchronization"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-tech-gray/30 rounded-lg border border-tech-blue/20">
                      <CheckCircle className="w-5 h-5 text-tech-blue" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Advanced Features</h3>
                <div className="space-y-4">
                  {[
                    "21-DOF Mechanical System",
                    "Silicone Mask Integration",
                    "ODAS Audio Processing",
                    "FAQ Database Matching",
                    "New User Registration",
                    "ROS2 System Integration"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-tech-gray/30 rounded-lg border border-tech-teal/20">
                      <CheckCircle className="w-5 h-5 text-tech-teal" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="objectives" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-tech-gray/50 border-tech-blue/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Primary Objectives</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-tech-blue rounded-full flex items-center justify-center text-xs font-bold text-background mt-1">1</div>
                      <div>
                        <h4 className="font-semibold text-foreground">Seamless Human-Robot Interaction</h4>
                        <p className="text-sm text-muted-foreground">Create natural, intuitive communication between humans and the robotic system</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-tech-blue rounded-full flex items-center justify-center text-xs font-bold text-background mt-1">2</div>
                      <div>
                        <h4 className="font-semibold text-foreground">Autonomous Operation</h4>
                        <p className="text-sm text-muted-foreground">Function independently with minimal human supervision</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-tech-blue rounded-full flex items-center justify-center text-xs font-bold text-background mt-1">3</div>
                      <div>
                        <h4 className="font-semibold text-foreground">Scalable Design</h4>
                        <p className="text-sm text-muted-foreground">Adaptable architecture for various reception environments</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-tech-gray/50 border-tech-teal/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Expected Outcomes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-tech-teal/10 border border-tech-teal/20 rounded-lg">
                      <h4 className="font-semibold text-foreground">Improved Efficiency</h4>
                      <p className="text-sm text-muted-foreground">24/7 operation with consistent service quality</p>
                    </div>
                    <div className="p-3 bg-tech-blue/10 border border-tech-blue/20 rounded-lg">
                      <h4 className="font-semibold text-foreground">Enhanced User Experience</h4>
                      <p className="text-sm text-muted-foreground">Personalized interactions and reduced wait times</p>
                    </div>
                    <div className="p-3 bg-tech-purple/10 border border-tech-purple/20 rounded-lg">
                      <h4 className="font-semibold text-foreground">Cost Effectiveness</h4>
                      <p className="text-sm text-muted-foreground">Reduced operational costs and increased productivity</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectOverview;