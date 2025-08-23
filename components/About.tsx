import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { MapPin, Calendar, Award, Users } from 'lucide-react'

export function About() {
  const stats = [
    { icon: Calendar, label: 'Years Experience', value: '5+' },
    { icon: Award, label: 'Projects Completed', value: '50+' },
    { icon: Users, label: 'Happy Clients', value: '30+' },
    { icon: MapPin, label: 'Location', value: 'San Francisco' }
  ]

  const interests = [
    'Machine Learning', 'Open Source', 'UI/UX Design', 'Mobile Development',
    'Cloud Computing', 'DevOps', 'Blockchain', 'Data Visualization'
  ]

  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, experience, and what drives my passion for development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl mb-4">My Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience creating 
                  digital solutions that make a difference. My journey began with a Computer Science 
                  degree and has evolved through working with startups and established companies.
                </p>
                <p>
                  I specialize in React, Node.js, and cloud technologies, but I'm always eager to 
                  learn new tools and frameworks. I believe in writing clean, maintainable code 
                  and creating user experiences that delight and inspire.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new hiking trails, contributing to 
                  open source projects, or experimenting with the latest tech trends.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-4">Interests & Passions</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge key={index} variant="secondary">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0 space-y-2">
                  <stat.icon className="h-8 w-8 mx-auto text-primary" />
                  <p className="text-2xl">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}