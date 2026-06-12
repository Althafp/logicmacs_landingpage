"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Shield, MapPin } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      name: "Matrix Smart Technologies",
      logo: "/matrix.jpeg",
      title: "CCTV Management System",
      description:
        "Comprehensive CCTV police challan management system for multiple cities across India including AP, Bangalore, Hyderabad, and Nasik. Advanced traffic monitoring and violation detection system.",
      tags: ["Traffic Management", "CCTV", "Multi-City"],
      icon: Shield,
      locations: ["Andhra Pradesh", "Bangalore", "Hyderabad", "Nasik"],
    },
    {
      name: "Naval Science & Technology Lab",
      logo: null,
      title: "Internal Database Management System",
      description:
        "Internal database management system with RAG-style retrieval layer, semantic search, structured schemas, and operational tooling for research workflows. Advanced AI-powered knowledge management.",
      tags: ["Database", "AI/ML", "Research"],
      icon: Building2,
      locations: ["NSTL"],
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-tl from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Our Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence across diverse sectors
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2"
              >
                <div className="grid md:grid-cols-[200px_1fr] gap-6">
                  {/* Logo Section */}
                  <div className="bg-muted/50 flex items-center justify-center p-8">
                    {project.logo ? (
                      <div className="relative w-full h-32">
                        <Image
                          src={project.logo}
                          alt={`${project.name} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-32 flex items-center justify-center">
                        <Icon className="w-20 h-20 text-primary" />
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <CardTitle className="text-2xl mb-2">{project.name}</CardTitle>
                          <CardDescription className="text-lg font-semibold text-foreground">
                            {project.title}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{project.locations.join(", ")}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0 space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-sm">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            );
          })}

          {/* Additional Projects Card */}
          <Card className="border-2 border-dashed hover:border-solid hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Building2 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <CardTitle className="text-xl mb-2">Local Management Systems</CardTitle>
              <CardDescription className="text-base">
                We've also developed custom management systems for multiple local enterprises across
                India, helping them streamline operations and improve efficiency.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Made with Bob
