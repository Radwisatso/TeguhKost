// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-primary shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-primary dark:text-white font-[family-name:var(--font-poppins)]">
                TeguhKost
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="#features" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Features
              </Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Testimonials
              </Link>
              <Link href="#locations" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Locations
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              <Link href="#" className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-sm font-medium">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-light">
                Find Your Perfect Home Away From Home
              </h1>
              <p className="text-lg text-light mb-8">
                TeguhKost offers comfortable, affordable, and convenient living spaces for students and professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#locations" className="bg-accent-dark text-foreground hover:bg-accent px-6 py-3 rounded-md text-base font-medium inline-block text-center">
                  Explore Locations
                </Link>
                <Link href="#contact" className="bg-accent-dark text-foreground hover:bg-accent px-6 py-3 rounded-md text-base font-medium inline-block text-center">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
              {/* Replace with actual image */}
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-600">Kost Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-secondary text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose TeguhKost?
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              We provide the best living experience with amenities that make you feel at home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-primary-dark p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Strategic Locations
              </h3>
              <p className="text-secondary mb-2">
                All our kosts are located near universities, business districts, and public transportation.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-primary-dark p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Modern Amenities
              </h3>
              <p className="text-secondary mb-2">
                Enjoy high-speed WiFi, 24/7 security, cleaning services, and fully-furnished rooms.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-primary-dark p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Affordable Pricing
              </h3>
              <p className="text-secondary mb-2">
                Competitive rates with flexible payment options to suit your budget and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-secondary-dark text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              What Our Residents Say
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Hear from the people who call TeguhKost their home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-primary-dark p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-secondary">Budi Santoso</h4>
                  <p className="text-sm text-secondary/70">Student at UI</p>
                </div>
              </div>
              <p className="text-secondary">
              &quot;Living at TeguhKost has been amazing. The location is perfect for my studies, and the facilities are always well-maintained.&quot;
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-primary-dark p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-secondary">Siti Rahayu</h4>
                  <p className="text-sm text-secondary/70">Young Professional</p>
                </div>
              </div>
              <p className="text-secondary">
              &quot;The security and cleanliness at TeguhKost give me peace of mind. It&apos;s the perfect place to come home to after a long day at work.&quot;
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-primary-dark p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-secondary">Ahmad Rizki</h4>
                  <p className="text-sm text-secondary/70">Graduate Student</p>
                </div>
              </div>
              <p className="text-secondary">
              &quot;The community at TeguhKost is what makes it special. I&apos;ve made great friends here, and the staff is always helpful.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-16 bg-secondary text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Locations
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Find a TeguhKost near you in these prime locations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Location 1 */}
            <div className="bg-primary-dark p-6 rounded-lg shadow-md">
              <div className="h-48 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                <p className="text-secondary/70">Location Image</p>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Central Jakarta
              </h3>
              <p className="text-secondary mb-4">
                Located near business districts and government offices, perfect for young professionals.
              </p>
              <Link href="#" className="text-accent hover:text-accent-dark font-medium">
                View Details →
              </Link>
            </div>
            
            {/* Location 2 */}
            <div className="bg-primary-dark p-6 rounded-lg shadow-md">
              <div className="h-48 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                <p className="text-secondary/70">Location Image</p>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Depok
              </h3>
              <p className="text-secondary mb-4">
                Near University of Indonesia, ideal for students looking for affordable accommodation.
              </p>
              <Link href="#" className="text-accent hover:text-accent-dark font-medium">
                View Details →
              </Link>
            </div>
            
            {/* Location 3 */}
            <div className="bg-primary-dark p-6 rounded-lg shadow-md">
              <div className="h-48 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                <p className="text-secondary/70">Location Image</p>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">
                South Jakarta
              </h3>
              <p className="text-secondary mb-4">
                Premium locations near shopping malls and entertainment centers.
              </p>
              <Link href="#" className="text-accent hover:text-accent-dark font-medium">
                View Details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-secondary-dark text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Contact Us
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Have questions? We&apos;re here to help you find your perfect kost.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-dark p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-secondary mb-4">
                Send Us a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-secondary/20 rounded-md focus:ring-accent focus:border-accent bg-secondary/10 text-secondary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-secondary/20 rounded-md focus:ring-accent focus:border-accent bg-secondary/10 text-secondary" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-secondary/20 rounded-md focus:ring-accent focus:border-accent bg-secondary/10 text-secondary"></textarea>
                </div>
                <button type="submit" className="bg-accent hover:bg-accent-dark text-foreground px-6 py-3 rounded-md font-medium w-full">
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="bg-primary-dark p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-secondary mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-secondary">Address</h4>
                    <p className="text-secondary/70">Jl. Sudirman No. 123, Jakarta Pusat, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-secondary">Phone</h4>
                    <p className="text-secondary/70">+62 21 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-secondary">Email</h4>
                    <p className="text-secondary/70">info@teguhkost.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-secondary">Office Hours</h4>
                    <p className="text-secondary/70">Monday - Friday: 9AM - 5PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark text-secondary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TeguhKost</h3>
              <p className="text-secondary/70 mb-4">Providing comfortable and affordable living spaces since 2010.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-secondary/70 hover:text-secondary">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                {/* Other social icons remain unchanged */}
              </div>
            </div>
            
            {/* Quick Links section */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-secondary/70 hover:text-secondary">Home</a></li>
                <li><a href="#features" className="text-secondary/70 hover:text-secondary">Features</a></li>
                <li><a href="#locations" className="text-secondary/70 hover:text-secondary">Locations</a></li>
                <li><a href="#testimonials" className="text-secondary/70 hover:text-secondary">Testimonials</a></li>
                <li><a href="#contact" className="text-secondary/70 hover:text-secondary">Contact</a></li>
              </ul>
            </div>
            
            {/* Services section */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-secondary/70 hover:text-secondary">Student Housing</a></li>
                <li><a href="#" className="text-secondary/70 hover:text-secondary">Professional Housing</a></li>
                <li><a href="#" className="text-secondary/70 hover:text-secondary">Short-term Stays</a></li>
                <li><a href="#" className="text-secondary/70 hover:text-secondary">Premium Kost</a></li>
                <li><a href="#" className="text-secondary/70 hover:text-secondary">Family Kost</a></li>
              </ul>
            </div>
            
            {/* Subscribe section */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
              <p className="text-secondary/70 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
              <form className="flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-accent bg-primary-dark/50 text-secondary border border-primary/20" />
                <button type="submit" className="bg-accent hover:bg-accent-dark text-foreground px-4 py-2 rounded-r-md">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-primary/20 mt-8 pt-8 text-center text-secondary/70">
            <p>&copy; {new Date().getFullYear()} TeguhKost. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
