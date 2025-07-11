import ContactForm from "../../../components/ContactForm";
import Hero from "../../../components/Hero";

export default function Contact(){
    return(
        <div>
            <Hero />
            
            <main className="min-h-screen bg-gray-100 px-4 py-10">
            <h1>Contact Us</h1>
            <h3>Email: hello@businessgate.com</h3>
            <ContactForm />
            </main>
            
        </div>
    )
}