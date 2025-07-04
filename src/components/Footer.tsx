import { Github, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-tech-gray border-t border-tech-blue/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          
          {/* Left Column - Project Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Humanoid Robot Receptionist
            </h3>
            <p className="text-muted-foreground text-sm">
              Final Year Project - Advanced AI-Powered Human-Robot Interaction System
            </p>
            <p className="text-xs text-muted-foreground">
              © 2024 - Academic Research Project • Version 1.0.0
            </p>
          </div>

          {/* Center Column - Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Project Sections</h4>
            <nav className="space-y-2">
              <a href="#overview" className="block text-sm text-muted-foreground hover:text-tech-blue transition-colors">
                Project Overview
              </a>
              <a href="#technical" className="block text-sm text-muted-foreground hover:text-tech-blue transition-colors">
                Technical Details
              </a>
              <a href="#features" className="block text-sm text-muted-foreground hover:text-tech-blue transition-colors">
                Features & Capabilities
              </a>
              <a href="#objectives" className="block text-sm text-muted-foreground hover:text-tech-blue transition-colors">
                Objectives & Goals
              </a>
            </nav>
          </div>

          {/* Right Column - Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:bg-tech-blue/20">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-tech-blue/20">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-tech-blue/20">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              For academic inquiries and collaboration opportunities
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-tech-blue/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-muted-foreground">
              Built with React, TypeScript, and Tailwind CSS
            </p>
            <p className="text-xs text-muted-foreground">
              Designed for academic research and educational purposes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;