import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react'

export function Experience() {
  const workExperience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Lead development of scalable web applications serving 1M+ users. Mentor junior developers and drive technical architecture decisions.',
      achievements: [
        'Improved application performance by 40%',
        'Led team of 6 developers',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2020 - 2022',
      description: 'Developed customer-facing applications and internal tools. Worked closely with product team to implement new features and improve user experience.',
      achievements: [
        'Built 3 major product features from scratch',
        'Reduced API response time by 50%',
        'Implemented automated testing suite'
      ],
      technologies: ['Vue.js', 'Python', 'MongoDB', 'Firebase']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      location: 'Los Angeles, CA',
      period: '2019 - 2020',
      description: 'Created responsive websites and web applications for various clients. Collaborated with designers to implement pixel-perfect interfaces.',
      achievements: [
        'Delivered 15+ client projects',
        'Improved website loading speed by 35%',
        'Established component library for team'
      ],
      technologies: ['JavaScript', 'SCSS', 'WordPress', 'jQuery']
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of California, Berkeley',
      period: '2015 - 2019',
      achievements: [
        'Summa Cum Laude',
        'Dean\'s List (6 semesters)',
        'Computer Science Honor Society'
      ]
    },
    {
      degree: 'AWS Certified Solutions Architect',
      school: 'Amazon Web Services',
      period: '2021',
      achievements: ['Professional Level Certification']
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">Experience & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background that shaped my expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 mr-3 text-primary" />
              <h3 className="text-2xl">Work Experience</h3>
            </div>
            
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-lg">{job.title}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {job.period}
                      </div>
                    </div>
                    <CardDescription className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.company} • {job.location}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{job.description}</p>
                    
                    <div>
                      <h4 className="text-sm mb-2">Key Achievements:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {job.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 mr-3 text-primary" />
              <h3 className="text-2xl">Education & Certifications</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <CardDescription className="flex items-center justify-between">
                      <span>{edu.school}</span>
                      <span className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.period}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  
                  {edu.achievements && (
                    <CardContent>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}