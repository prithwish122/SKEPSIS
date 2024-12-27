"use client"

import React from 'react';
import StackedCards from '@/components/StackedCards';
import { Github, Linkedin, Twitter } from 'lucide-react';

const teams = {
  dsa: {
    title: "DSA Team",
    members: [
      {
        name: 'Sohoomlal Baneerjee',
        role: 'DSA Lead',
        image: '/users/sohoom.png',
        socials: {
          github: 'https://github.com/sarahchen',
          linkedin: 'https://linkedin.com/in/sarahchen',
          twitter: 'https://twitter.com/sarahchen'
        }
      },
      {
        name: 'Riya Gupta',
        role: 'Member',
        image: '/users/riya.png',
        socials: {
          github: 'https://github.com/alexkumar',
          linkedin: 'https://linkedin.com/in/alexkumar',
          twitter: 'https://twitter.com/alexkumar'
        }
      },
      {
        name: 'Arnesh Bera',
        role: 'Member',
        image: '/users/arnesh.png',
        socials: {
          github: 'https://github.com/mariarodriguez',
          linkedin: 'https://linkedin.com/in/mariarodriguez',
          twitter: 'https://twitter.com/mariarodriguez'
        }
      },
      {
        name: 'Preksha Sharma',
        role: 'Member',
        image: '/users/preksha.png',
        socials: {
          github: 'https://github.com/sarahchen',
          linkedin: 'https://linkedin.com/in/sarahchen',
          twitter: 'https://twitter.com/sarahchen'
        }
      },
      {
        name: 'Sarah Chen',
        role: 'Lead DSA Engineer',
        image: '/api/placeholder/128/128',
        socials: {
          github: 'https://github.com/sarahchen',
          linkedin: 'https://linkedin.com/in/sarahchen',
          twitter: 'https://twitter.com/sarahchen'
        }
      },
      {
        name: 'Sarah Chen',
        role: 'Lead DSA Engineer',
        image: '/api/placeholder/128/128',
        socials: {
          github: 'https://github.com/sarahchen',
          linkedin: 'https://linkedin.com/in/sarahchen',
          twitter: 'https://twitter.com/sarahchen'
        }
      },
    ]
  },
  webdev: {
    title: "Web Development Team",
    members: [
      {
        name: 'Emily Zhang',
        role: 'Frontend Lead',
        image: '/api/placeholder/128/128',
        socials: {
          github: 'https://github.com/emilyzhang',
          linkedin: 'https://linkedin.com/in/emilyzhang',
          twitter: 'https://twitter.com/emilyzhang'
        }
      },
      {
        name: 'Michael Brown',
        role: 'Backend Developer',
        image: '/api/placeholder/128/128',
        socials: {
          github: 'https://github.com/michaelbrown',
          linkedin: 'https://linkedin.com/in/michaelbrown',
          twitter: 'https://twitter.com/michaelbrown'
        }
      },
      {
        name: 'Sofia Patel',
        role: 'Full Stack Developer',
        image: '/api/placeholder/128/128',
        socials: {
          github: 'https://github.com/sofiapatel',
          linkedin: 'https://linkedin.com/in/sofiapatel',
          twitter: 'https://twitter.com/sofiapatel'
        }
      }
    ]
  },
  aiml: {
    title: "AI/ML Team",
    members: [
      {
        name: 'David Wilson',
        role: 'ML Engineer',
        image: '/api/placeholder/128/128',
        socials: {
          github: 'https://github.com/davidwilson',
          linkedin: 'https://linkedin.com/in/davidwilson',
          twitter: 'https://twitter.com/davidwilson'
        }
      },
      {
        name: 'Priya Sharma',
        role: 'Data Scientist',
        image: '/api/placeholder/128/128',
        socials: {
          github: 'https://github.com/priyasharma',
          linkedin: 'https://linkedin.com/in/priyasharma',
          twitter: 'https://twitter.com/priyasharma'
        }
      },
      {
        name: 'James Lee',
        role: 'AI Researcher',
        image: '/api/placeholder/128/128',
        socials: {
          github: 'https://github.com/jameslee',
          linkedin: 'https://linkedin.com/in/jameslee',
          twitter: 'https://twitter.com/jameslee'
        }
      }
    ]
  },
  iot: {
    title: "IoT Team",
    members: [
      {
        name: 'Lucas Moore',
        role: 'IoT Architect',
        image: '/api/placeholder/128/128',
        socials: {
          github: 'https://github.com/lucasmoore',
          linkedin: 'https://linkedin.com/in/lucasmoore',
          twitter: 'https://twitter.com/lucasmoore'
        }
      },
      {
        name: 'Anna Kim',
        role: 'Embedded Systems Engineer',
        image: '/api/placeholder/128/128',
        socials: {
          github: 'https://github.com/annakim',
          linkedin: 'https://linkedin.com/in/annakim',
          twitter: 'https://twitter.com/annakim'
        }
      },
      {
        name: 'Thomas Anderson',
        role: 'Hardware Specialist',
        image: '/api/placeholder/128/128',
        socials: {
          github: 'https://github.com/thomasanderson',
          linkedin: 'https://linkedin.com/in/thomasanderson',
          twitter: 'https://twitter.com/thomasanderson'
        }
      }
    ]
  },
  projectdev: {
    title: "Project Development Team",
    members: [
      {
        name: 'Rachel Green',
        role: 'Project Manager',
        image: '/api/placeholder/128/128',
        socials: {
          github: 'https://github.com/rachelgreen',
          linkedin: 'https://linkedin.com/in/rachelgreen',
          twitter: 'https://twitter.com/rachelgreen'
        }
      },
      {
        name: 'Daniel Martinez',
        role: 'Technical Lead',
        image: '/api/placeholder/128/128',
        socials: {
          github: 'https://github.com/danielmartinez',
          linkedin: 'https://linkedin.com/in/danielmartinez',
          twitter: 'https://twitter.com/danielmartinez'
        }
      },
      {
        name: 'Lisa Wang',
        role: 'Solutions Architect',
        image: '/api/placeholder/128/128',
        socials: {
          github: 'https://github.com/lisawang',
          linkedin: 'https://linkedin.com/in/lisawang',
          twitter: 'https://twitter.com/lisawang'
        }
      }
    ]
  }
};

const TeamPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-16">Meet with our team</h1>
        <StackedCards />
        <h2 className="text-3xl font-bold mt-16 mb-8">Technical Teams</h2>
      </div>

      {/* Teams Sections */}
      {Object.entries(teams).map(([teamKey, team]) => (
        <div key={teamKey} className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-12">{team.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.members.map((member, index) => (
              <div 
                key={index}
                className="bg-gray-100 rounded-3xl p-6 aspect-[3.8/4] flex flex-col items-center justify-center relative group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-32 h-32 overflow-hidden rounded-full mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-gray-400 rounded-full" />
                <h4 className="font-medium text-lg">{member.name}</h4>
                <p className="text-gray-600 mb-4">{member.role}</p>
                
                {/* Social Links */}
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-400 transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamPage;