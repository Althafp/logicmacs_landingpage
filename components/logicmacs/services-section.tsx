"use client";

import { Code2, Smartphone, Database, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ServicesSection() {
  const services = [
    {
      icon: Code2,
      title: "Web Applications",
      description: "Custom web applications tailored to your organization's specific needs and workflows. Built with modern technologies for optimal performance and user experience.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android platforms. Seamless experiences that keep your team connected on the go.",
    },
    {
      icon: Database,
      title: "Management Systems",
      description: "Comprehensive internal management systems to optimize your business processes. From inventory to HR, we build solutions that scale with your organization.",
    },
    {
      icon: Wrench,
      title: "Custom Solutions",
      description: "Bespoke software solutions designed from the ground up for your unique requirements. We transform your vision into powerful, efficient tools.",
    },
  ];

  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      {/* Floating circles background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">What We Do</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We specialize in building custom internal management solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Made with Bob
