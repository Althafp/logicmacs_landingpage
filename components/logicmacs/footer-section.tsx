"use client";

import Link from "next/link";
import Image from "next/image";

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo_black.png"
                alt="LogicMacs Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-lg font-bold">LogicMacs</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enterprise Software Solutions. Building custom internal management tools, websites,
              and applications across India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#services"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                href="#projects"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <a href="tel:+919502138180" className="hover:text-foreground transition-colors">
                  📞 +91 9502138180
                </a>
              </p>
              <p>
                <a
                  href="mailto:logicmacs@gmail.com"
                  className="hover:text-foreground transition-colors break-all"
                >
                  ✉️ logicmacs@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Backed by Oculotronics */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <span className="text-sm text-muted-foreground">Backed by</span>
              <div className="flex items-center space-x-2">
                <Image
                  src="/oculotronics.png"
                  alt="Oculotronics Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span className="font-semibold text-sm">Oculotronics</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} LogicMacs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Made with Bob
