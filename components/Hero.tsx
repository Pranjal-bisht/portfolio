import image_6ef92c7031395aece749ddab0d677fe9e81c48f5 from 'figma:asset/6ef92c7031395aece749ddab0d677fe9e81c48f5.png';
import image_66a1077818cd03fbec42363c80ef529d83939e5f from 'figma:asset/66a1077818cd03fbec42363c80ef529d83939e5f.png';
import image_6ef92c7031395aece749ddab0d677fe9e81c48f5 from 'figma:asset/6ef92c7031395aece749ddab0d677fe9e81c48f5.png';
import image_6ef92c7031395aece749ddab0d677fe9e81c48f5 from 'figma:asset/6ef92c7031395aece749ddab0d677fe9e81c48f5.png';
import { Button } from './ui/button'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 px-[-21px] py-[0px]">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary">Hello, I'm</p>
              <h1 className="text-4xl lg:text-6xl">Rahul Pathak</h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground">Full Stack Developer</h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                I create beautiful, responsive web applications with modern technologies. 
                Passionate about clean code, user experience, and bringing ideas to life.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button onClick={() => scrollToSection('projects')}>
                View My Work
              </Button>
              <Button variant="outline" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </Button>
            </div>

            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:rahul@example.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <ImageWithFallback
                  src={image_6ef92c7031395aece749ddab0d677fe9e81c48f5}
                  alt="Rahul Pathak - Full Stack Developer"
                  className="w-full h-full object-cover px-[-1px] py-[0px] mx-[-1px] my-[-2px]"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}