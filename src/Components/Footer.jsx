import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background py-10 border-t border-primary mt-20">
      <div className="container mx-auto max-w-5xl text-center">
        <h3 className="text-2xl font-bold mb-4">Connect with <span className='text-primary'>RayTechHub</span></h3>
        <p className="text-muted-foreground mb-6">
          Have a project or just want to say hi? My inbox is always open!
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <a
            href="https://www.facebook.com/share/1FGbCoVjfL/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/cooperguy26?t=v07GRLeu-1n12rf6fVaV0g&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/iyenagbe-raymond-27573b237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} RayTechHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
