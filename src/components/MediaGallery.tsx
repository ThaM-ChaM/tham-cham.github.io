import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { 
  Play, 
  Download,
  Camera,
  Video,
  Cog,
  Github,
  ExternalLink,
  FileVideo,
  Image as ImageIcon,
  Maximize,
  Volume2
} from "lucide-react";

import demoVideo1 from "@/assets/full-demo.mp4";
import demoVideo2 from "@/assets/emotion-demo.mp4";
import demoVideo3 from "@/assets/mask-muted.mp4";
import buildVideo1 from "@/assets/mechanical-assembly.mp4";
import buildVideo2 from "@/assets/silicone-casting.mp4";
import buildVideo3 from "@/assets/software.mp4";
import buildVideo4 from "@/assets/face-tracking.mp4";
// Import your videos from assets folder when you add them
// For now, using placeholders to prevent build errors
// const demoVideo1 = "/assets/demo-video-1.mp4";
// const demoVideo2 = "/assets/demo-video-2.mp4"; 
// const demoVideo3 = "/assets/demo-video-3.mp4";
// const buildVideo1 = "/assets/build-video-1.mp4";
// const buildVideo2 = "/assets/build-video-2.mp4";
// const buildVideo3 = "/assets/build-video-3.mp4";
// const buildVideo4 = "/assets/build-video-4.mp4";

import assembly1 from "@/assets/assembly-1.png";
import assembly2 from "@/assets/assembly-2.png";
import assembly3 from "@/assets/assembly-3.png";
import assembly4 from "@/assets/assembly-4.png";
import assembly5 from "@/assets/assembly-5.png";
import assembly6 from "@/assets/assembly-6.jpg";
import team1 from "@/assets/team1.jpeg";
import team2 from "@/assets/team2.jpeg";
import team3 from "@/assets/team3.jpeg";
import team4 from "@/assets/team4.jpeg";
import fab1 from "@/assets/fab1.jpg";
import fab2 from "@/assets/fab2.jpeg";
import fab3 from "@/assets/fab3.jpg";
import fab4 from "@/assets/fab4.jpeg";




const MediaGallery = () => {
  const demoVideos = [
    {
      title: "Full System Demo",
      description: "Complete demonstration of Kuweni's capabilities including facial recognition, conversation, and expressions",
      videoSrc: demoVideo1,
      duration: "3:45",
      type: "Demo"
    },
    {
      title: "Facial Expression Demo",
      description: "Showcase of all six basic emotions with smooth transitions and natural movement",
      videoSrc: demoVideo2,
      duration: "2:15",
      type: "Features"
    },
    {
      title: "Attaching the Silicone Mask",
      description: "Attaching the silicone mask using magnets",
      videoSrc: demoVideo3,
      duration: "4:20",
      type: "Demo"
    }
  ];




  const developmentVideos = [
    {
      title: "Mechanical Assembly",
      description: "Time-lapse of the 21-DOF mechanical system assembly and servo motor installation",
      videoSrc: buildVideo1,
      duration: "8:30",
      type: "Build"
    },
    {
      title: "Silicone Skin Casting",
      description: "Complete process of creating the silicone mask using vacuum casting techniques",
      videoSrc: buildVideo2,
      duration: "6:45",
      type: "Build"
    },
    {
      title: "Multiple People Recognition",
      description: "Recognition of multiple people simultaneously",
      videoSrc: buildVideo3,
      duration: "12:15",
      type: "Code"
    },
    {
      title: "Face Tracking",
      description: "Tracking the face of the active speacker real-time",
      videoSrc: buildVideo4,
      duration: "5:40",
      type: "Test"
    }
  ];

  const imageGallery = [
    {
      title: "Robot Assembly Process",
      images: [
        // "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
        // "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop",
        // "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
        // "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop"
        assembly1,assembly2,assembly3,assembly6
      ]
    },
    {
      title: "Fabrication",
      images: [
        // "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
        // "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop",
        // "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
        // "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop"
        fab1,fab2,fab3,fab4
      ]
    },
    {
      title: "Development Team",
      images: [
        // "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop",
        // "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop",
        // "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop",
        // "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop"
        team1, team2, team3, team4
      ]
    }
  ];

  const VideoCard = ({ video, index }: { video: any, index: number }) => {
    const handlePlayVideo = (e: React.MouseEvent) => {
      e.preventDefault();
      const videoElement = e.currentTarget.closest('.relative')?.querySelector('video') as HTMLVideoElement;
      if (videoElement) {
        videoElement.muted = false; // Enable sound
        if (videoElement.paused) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      }
    };

    const handleFullscreen = (e: React.MouseEvent) => {
      e.preventDefault();
      const videoElement = e.currentTarget.closest('.relative')?.querySelector('video') as HTMLVideoElement;
      if (videoElement) {
        if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen();
        }
      }
    };

    const handleUnmute = (e: React.MouseEvent) => {
      e.preventDefault();
      const videoElement = e.currentTarget.closest('.relative')?.querySelector('video') as HTMLVideoElement;
      if (videoElement) {
        videoElement.muted = !videoElement.muted;
      }
    };

    return (
      <Card key={index} className="bg-tech-gray/50 border-tech-blue/20 backdrop-blur-sm hover-scale group">
        <div className="relative">
          <video 
            src={video.videoSrc}
            className="w-full h-48 object-cover rounded-t-lg"
            controls
            muted
            preload="metadata"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex gap-2">
              <Button variant="hero" size="sm" className="gap-2" onClick={handlePlayVideo}>
                <Play className="w-4 h-4" />
                Play
              </Button>
              <Button variant="hero" size="sm" className="gap-2" onClick={handleFullscreen}>
                <Maximize className="w-4 h-4" />
                Fullscreen
              </Button>
              <Button variant="hero" size="sm" className="gap-2" onClick={handleUnmute}>
                <Volume2 className="w-4 h-4" />
                Sound
              </Button>
            </div>
          </div>
        <Badge className="absolute top-3 right-3 bg-tech-gray/90 text-tech-light border-tech-blue/30">
          {video.duration}
        </Badge>
        <Badge className="absolute top-3 left-3 bg-tech-blue/90 text-white border-tech-blue">
          {video.type}
        </Badge>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-foreground">{video.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{video.description}</p>
        <div className="flex gap-2">
          <Button variant="tech" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Download
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <ExternalLink className="w-4 h-4" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
    );
  };

  return (
    <section id="demo-videos" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="border-tech-purple/30 text-tech-purple bg-tech-purple/10">
            Media Gallery
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Project
            </span> Documentation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive visual documentation of Kuweni's development process, 
            demonstrations, and technical capabilities.
          </p>
        </div>

        <Tabs defaultValue="demos" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-tech-gray/50">
            <TabsTrigger value="demos" className="data-[state=active]:bg-tech-blue/20 gap-2">
              <Video className="w-4 h-4" />
              Demo Videos
            </TabsTrigger>
            <TabsTrigger value="development" className="data-[state=active]:bg-tech-blue/20 gap-2">
              <Cog className="w-4 h-4" />
              Development
            </TabsTrigger>
            <TabsTrigger value="images" className="data-[state=active]:bg-tech-blue/20 gap-2">
              <ImageIcon className="w-4 h-4" />
              Image Gallery
            </TabsTrigger>
          </TabsList>

          <TabsContent value="demos" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {demoVideos.map((video, index) => (
                <VideoCard key={index} video={video} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="development" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {developmentVideos.map((video, index) => (
                <VideoCard key={index} video={video} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="images" className="space-y-8">
            {imageGallery.map((gallery, galleryIndex) => (
              <Card key={galleryIndex} className="bg-tech-gray/50 border-tech-blue/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Camera className="w-6 h-6 text-tech-blue" />
                    <span>{gallery.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {gallery.images.map((image, imageIndex) => (
                      <Dialog key={imageIndex}>
                        <DialogTrigger asChild>
                          <div className="relative group hover-scale cursor-pointer">
                            <img 
                              src={image}
                              alt={`${gallery.title} ${imageIndex + 1}`}
                              className="w-full h-40 object-cover rounded-lg shadow-card"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                              <Button variant="hero" size="sm">
                                <Maximize className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-7xl w-full h-full max-h-screen p-0 border-0">
                          <div className="relative w-full h-full flex items-center justify-center bg-black">
                            <img 
                              src={image}
                              alt={`${gallery.title} ${imageIndex + 1}`}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* GitHub Integration */}
        <Card className="mt-12 bg-tech-gray/50 border-tech-blue/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <Github className="w-6 h-6 text-tech-blue" />
              <span>Source Code & Documentation</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  Access the complete source code, documentation, and technical specifications on GitHub.
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>• ROS2 Robot Framework</span>
                  <span>• AI Model Integration</span>
                  <span>• Hardware Specifications</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="hero" size="lg" className="gap-2">
                  <Github className="w-5 h-5" />
                  View on GitHub
                </Button>
                <Button variant="tech" size="lg" className="gap-2">
                  <Download className="w-5 h-5" />
                  Download Release
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MediaGallery;