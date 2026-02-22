import { ShoppingCart , LandPlot, Construction, Building  } from "lucide-react"

export const AboutSection = ()=>{
    return <section id='About' className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto mx-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About<span className="text-primary"> Drishani Constructions</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Construction Experts Building Modern Living Spaces</h3>
                <p className="text-muted-foreground">
                 We help you purchase your dream land in well-developed layouts designed for comfort, convenience, and long-term value.
                </p>
                <p className="text-muted-foreground">
                    Invest confidently for your future with secure and thoughtfully planned properties. 
                </p>
                <p className="text-muted-foreground">
                    From land development to construction, we build dream homes with quality craftsmanship, trust, and a commitment to excellence.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#Contact" className="cosmic-button">{" "}Get In touch</a>
                    {/* <a href="/Nikita_Kopnar_front_end_developer.pdf" target="_blank"
                    rel="noopener noreferrer" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">{" "}Download CV</a> */}
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <LandPlot  className="h-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Land Development</h4>
                            <p className="text-muted-foreground">Planning and developing well-structured residential and commercial layouts with proper infrastructure, legal approvals, and long-term value.</p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Construction  className="h-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Residential Construction</h4>
                            <p className="text-muted-foreground">Building high-quality, durable homes with modern designs, premium materials, and on-time project delivery.</p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <ShoppingCart  className="h-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Property Sale & Purchase</h4>
                            <p className="text-muted-foreground">Facilitating the buying and selling of residential and commercial properties with proper documentation and a structured transaction process.</p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Building  className="h-6 text-primary"/>
                         </div>
                        <div className="text-left">
                           <h4 className="font-semibold text-lg">Construction Management Services</h4>
                            <p className="text-muted-foreground">Managing every phase of construction with expert supervision, strict quality checks, budget optimization, and timely delivery.</p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
}

 