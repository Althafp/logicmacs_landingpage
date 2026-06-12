"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code2, Smartphone, Database } from "lucide-react";
import { AnimatedSphere } from "@/components/landing/animated-sphere";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated sphere background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] opacity-30 pointer-events-none -z-10">
        <AnimatedSphere />
      </div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background -z-20" />
      
      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 -z-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{
              top: `${16.66 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{
              left: `${12.5 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-foreground">LogicMacs</span>
              <span className="block text-muted-foreground text-3xl sm:text-4xl lg:text-5xl mt-2">
                Enterprise Software Solutions
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We build custom internal management tools, websites, and applications that streamline operations and drive efficiency for organizations across India.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="#contact">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <Link href="#projects">View Our Work</Link>
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="flex flex-col items-center space-y-3 p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="p-3 rounded-full bg-primary/10">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Web Applications</h3>
              <p className="text-sm text-muted-foreground text-center">
                Custom web solutions tailored to your organization's needs
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="p-3 rounded-full bg-primary/10">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Mobile Apps</h3>
              <p className="text-sm text-muted-foreground text-center">
                Native and cross-platform mobile applications
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="p-3 rounded-full bg-primary/10">
                <Database className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Management Systems</h3>
              <p className="text-sm text-muted-foreground text-center">
                Comprehensive internal management solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Made with Bob
