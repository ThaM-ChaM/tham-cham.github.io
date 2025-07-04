import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Clock, 
  Target, 
  Mic,
  Brain,
  Camera,
  CheckCircle,
  BarChart3
} from "lucide-react";

const ValidationResults = () => {
  const metrics = [
    {
      title: "Facial Recognition Accuracy",
      value: "89.7%",
      icon: Camera,
      progress: 89.7,
      description: "Multi-person tracking with ArcFace embeddings",
      color: "tech-blue"
    },
    {
      title: "Average Response Time", 
      value: "4.91s",
      icon: Clock,
      progress: 85,
      description: "End-to-end conversation pipeline latency",
      color: "tech-teal"
    },
    {
      title: "Sound Localization Error",
      value: "1.79°",
      icon: Target,
      progress: 95,
      description: "Directional accuracy with GCC-PHAT algorithm",
      color: "tech-purple"
    },
    {
      title: "Speech Recognition WER",
      value: "11.43%",
      icon: Mic,
      progress: 88.57,
      description: "Word Error Rate with FasterWhisper model",
      color: "tech-blue"
    },
    {
      title: "Processing Frame Rate",
      value: "12.3 FPS",
      icon: Brain,
      progress: 82,
      description: "Real-time face detection and tracking",
      color: "tech-teal"
    },
    {
      title: "User Study Participants",
      value: "60 Users",
      icon: Users,
      progress: 100,
      description: "Expression accuracy and human-likeness evaluation",
      color: "tech-purple"
    }
  ];

  const performanceStats = [
    { label: "Detection Latency", value: "0.8s", improvement: "+15%" },
    { label: "Recognition Latency", value: "1.9s", improvement: "+20%" },
    { label: "Multi-person Tracking", value: "4 Users", improvement: "+100%" },
    { label: "Operating Range", value: "135cm", improvement: "+25%" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="border-tech-teal/30 text-tech-teal bg-tech-teal/10">
            Validation Results
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Proven
            </span> Performance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive testing and validation across 60 participants demonstrates 
            exceptional performance in real-world scenarios.
          </p>
        </div>

        {/* Main Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <Card key={index} className="bg-tech-gray/50 border-tech-blue/20 backdrop-blur-sm hover-scale">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <IconComponent className={`w-8 h-8 text-${metric.color}`} />
                    <Badge variant="outline" className={`border-${metric.color}/30 text-${metric.color} bg-${metric.color}/10`}>
                      Validated
                    </Badge>
                  </div>
                  <CardTitle className="text-sm text-muted-foreground">{metric.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-3xl font-bold text-foreground">{metric.value}</div>
                  <Progress value={metric.progress} className="h-2" />
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Performance Comparison */}
        <Card className="bg-tech-gray/50 border-tech-blue/20 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <BarChart3 className="w-6 h-6 text-tech-blue" />
              <span>Performance Benchmarks</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {performanceStats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-tech-gray/30 rounded-lg border border-tech-blue/20">
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                  <Badge variant="outline" className="border-tech-teal/30 text-tech-teal bg-tech-teal/10 text-xs">
                    {stat.improvement}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* User Study Results */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-tech-gray/50 border-tech-teal/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-tech-teal" />
                <span>User Study Insights</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Expression Recognition</span>
                  <span className="font-semibold text-foreground">94.2%</span>
                </div>
                <Progress value={94.2} className="h-2" />
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Human-likeness Score</span>
                  <span className="font-semibold text-foreground">4.1/5.0</span>
                </div>
                <Progress value={82} className="h-2" />
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Interaction Satisfaction</span>
                  <span className="font-semibold text-foreground">4.3/5.0</span>
                </div>
                <Progress value={86} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-tech-gray/50 border-tech-purple/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-tech-purple" />
                <span>Key Achievements</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                "First humanoid receptionist robot developed in Sri Lanka",
                "Successfully demonstrated 4-person simultaneous tracking",
                "Achieved sub-2° sound localization accuracy",
                "Validated 21-DOF mechanical expression system",
                "Proven real-time conversation capabilities"
              ].map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-tech-teal mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValidationResults;