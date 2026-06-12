"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '0.5s' }} />
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with custom software solutions?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <Card className="border-2">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <a
                    href="tel:+919502138180"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9502138180
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a
                    href="mailto:logicmacs@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    logicmacs@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">Serving organizations across India</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Card */}
          <Card className="border-2 bg-primary text-primary-foreground">
            <CardContent className="p-8 flex flex-col justify-center h-full space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's Build Something Great</h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Whether you need a complete management system, a mobile app, or a custom web
                  solution, we're here to help bring your vision to life.
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full"
                  asChild
                >
                  <a href="tel:+919502138180">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us Now
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <a href="mailto:logicmacs@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Made with Bob
