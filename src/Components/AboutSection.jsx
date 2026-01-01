import { Briefcase, Code, Smartphone, User } from "lucide-react"

export const AboutSection = ()=>{
    return <section id='About' className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto mx-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About<span className="text-primary"> Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Frontend Developer creating modern web interfaces</h3>
                <p className="text-muted-foreground">
                    I’m a web developer with 5+ years of experience building modern web applications. I focus on creating responsive, accessible, and high-performance interfaces that deliver a strong user experience.
                </p>
                <p className="text-muted-foreground">
                    My primary skills are JavaScript, React, and Angular, which I use to build scalable and maintainable solutions. I enjoy solving problems, refining details, and turning ideas into reliable, production-ready applications.
                </p>
                <p className="text-muted-foreground">
                    I’m always improving my skills and applying best practices to deliver quality results in every project
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#Contact" className="cosmic-button">{" "}Get In touch</a>
                    <a href="/Nikita_Kopnar_front_end_developer.pdf" target="_blank"
                    rel="noopener noreferrer" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">{" "}Download CV</a>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Code className="h-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Web development</h4>
                            <p className="text-muted-foreground">Creating responsive websites and web applications with modern frameworks like React and Angular</p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Smartphone className="h-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Responsive Design</h4>
                            <p className="text-muted-foreground">Ensuring websites look and perform perfectly on all devices, including mobile and tablets</p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Briefcase className="h-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Software developer at HCLTech</h4>
                            <p className="text-muted-foreground">As a Software Developer at HCLTech, contributed to enterprise financial software project</p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Briefcase className="h-6 text-primary"/>
                         </div>
                        <div className="text-left">
                           <h4 className="font-semibold text-lg">Sr. Software development analyst at Accenture</h4>
                            <p className="text-muted-foreground">As a Sr. Software development analyst at Accenture, contributing to develop commercial web application</p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
}

 