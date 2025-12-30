import { Facebook, Instagram, Linkedin, Mail, Send, Twitter } from "lucide-react";
import {cn} from '@/lib/utils';
export const ContactSection =()=>{

    const handleSubmit =(e) =>{
    }

    return (<section id="Contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl max-w-2xl mx-auto">
            Have a project in mind or want to collaborate ? Feel Free to reach out.
            I'm always open to discussing new oppertunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6 justify-center">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary"/>{""}
                        </div>
                        <div>
                            <h4 className="font-medium">Email</h4>
                            <a href="mailto:hello@gmail.com" className="text-muted-foreground hover:text-primary transiton-colors">
                                hello@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary"/>{""}
                        </div>
                        <div>
                            <h4 className="font-medium">Phone</h4>
                            <a href="mailto:hello@gmail.com" className="text-muted-foreground hover:text-primary transiton-colors">
                                7350964422
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary"/>{""}
                        </div>
                        <div>
                            <h4 className="font-medium">Location</h4>
                            <a className="text-muted-foreground hover:text-primary transiton-colors">
                                Pune, MH, India
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pt-8">
                    <h4 className="font-medium mb-4">Connect With Me</h4>
                    <div className="flex space-x-4 justify-center">
                        <a href="#" target="_blank">
                            <Linkedin />
                        </a>
                        <a href="#" target="_blank">
                            <Twitter />
                        </a>
                        <a href="#" target="_blank">
                            <Instagram />
                        </a>
                        <a href="#" target="_blank">
                            <Facebook />
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-xs">
                <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
                <form className="space-y-6">
                    <div>
                        <lable htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</lable>
                        <input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                        placeholder="Nikita Kopnar" required/>
                    </div>

                    <div>
                        <lable htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</lable>
                        <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                        placeholder="john@gmail.com" required/>
                    </div>

                    <div>
                        <lable htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</lable>
                        <textarea type="message" id="message" name="message" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                        resize="none"
                        placeholder="Hello, I like to talk abaout ..." required/>
                    </div>
                    <button type="submit" onClick={handleSubmit} className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                        Send Message
                        <Send size={16}/>
                    </button>
                </form>
            </div>
        </div>
        </div> 
    </section>
    )
}