import { Building2, Diamond } from "lucide-react";

interface Role {
  title: string;
  period: string;
  description?: string;
  skills?: string;
  images?: string[];
}

interface Organization {
  name: string;
  totalDuration: string;
  logoUrl?: string;
  roles: Role[];
}

const experiences: Organization[] = [
  {
    name: "IEEE Student Branch - University of Sri Jayewardenepura",
    totalDuration: "1 yr 4 mos",
    roles: [
      {
        title: "Web Designer - Standing Committee",
        period: "Mar 2026 - Present · 4 mos",
        
      },
      {
        title: "Member",
        period: "Mar 2025 - Present · 1 yr 4 mos",
      }
    ]
  },
  {
    name: "ICTS - Information and Communication Technology Society",
    totalDuration: "1 yr 4 mos",
    roles: [
      {
        title: "Finance Crew Member - CryptX 2.0",
        period: "Feb 2026 - Present · 5 mos",
        images: [
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop", 
          "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=300&h=200&fit=crop"
        ],
        
      },
      {
        title: "Batch Coordinator - Executive Committe",
        period: "Nov 2025 - Present · 8 mos",
        description: "Actively contributed technical events organized by the ICTS at the University of Sri Jayewardenepura.\nEncouraged batch members to participate in various workshops, competitions, and sessions hosted by the ICTS.",
        images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop"]
      },
      {
        title: "Member",
        period: "Mar 2025 - Present · 1 yr 4 mos",
      }
    ]
  }
];

export function Experience() {
  return (
    <section className="py-12">
      <h2 className="font-['VT323'] text-3xl text-foreground mb-8 pb-2 border-b-2 border-border inline-block pr-8">
        Experience
      </h2>
      <div className="flex flex-col gap-10 font-['Space_Grotesk']">
        {experiences.map((org, orgIndex) => (
          <div key={orgIndex} className="flex flex-col">
            
            {/* Organization Header */}
            <div className="flex items-start gap-4 mb-2">
              <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                {org.logoUrl ? (
                  <img src={org.logoUrl} alt={org.name} className="w-full h-full object-cover" />
                ) : (
                  <Building2 className="w-6 h-6 text-muted-foreground" />
                )}
              </div>
              <div className="pt-0.5">
                <h3 className="text-foreground font-semibold text-lg leading-snug">{org.name}</h3>
                <p className="text-muted-foreground text-sm mt-0.5">{org.totalDuration}</p>
              </div>
            </div>

            {/* Roles Nested Timeline */}
            <div className="ml-6 border-l-2 border-border flex flex-col gap-6 py-4 mt-2">
              {org.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="relative pl-8">
                  {/* Timeline Dot */}
                  <div className="absolute w-3 h-3 bg-muted-foreground border-2 border-background rounded-full -left-[7px] top-1.5"></div>
                  
                  {/* Role Content */}
                  <div className="flex flex-col">
                    <h4 className="text-foreground font-semibold text-[15px]">{role.title}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{role.period}</p>
                    
                    {role.description && (
                      <p className="text-foreground/80 text-sm leading-relaxed mb-3 whitespace-pre-line max-w-2xl">
                        {role.description}
                      </p>
                    )}
                    
                    {role.skills && (
                      <div className="flex items-center gap-1.5 text-foreground text-sm font-medium mb-2">
                        <Diamond className="w-3.5 h-3.5" />
                        <span>{role.skills}</span>
                      </div>
                    )}

                    {role.images && role.images.length > 0 && (
                      <div className="flex flex-wrap gap-3 mt-2">
                        {role.images.map((img, imgIndex) => (
                          <img 
                            key={imgIndex} 
                            src={img} 
                            alt={`${role.title} highlight`}
                            className="h-20 sm:h-24 object-cover rounded-md border border-border shadow-sm"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
