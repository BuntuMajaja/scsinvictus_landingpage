import { Button } from './components/ui/button.jsx'
import { Mail, Phone, Globe, Users, TrendingUp, Shield, Calculator, FileText } from 'lucide-react'
import accountingFirmImg from './assets/accounting_firm.jpg'
import globalNetworkImg from './assets/global_network.jpg'
import southAfricaBusinessImg from './assets/south_africa_business.jpg'
import './App.css'

function App() {
  const scrollToAbout = () => {
    document.getElementById('about-us').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${accountingFirmImg})` }}
        ></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            SCS-Invictus South Africa
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Your Bridge to Global Financial Excellence
          </p>
          <p className="text-lg mb-10 opacity-80">
            Connecting Japan and South Africa through expert accounting, tax, and consulting services
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
            onClick={scrollToAbout}
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About SCS-Invictus</h2>
              <p className="text-lg text-gray-700 mb-6">
                SCS-Invictus South Africa (Pty) Ltd is part of the global SCS-Invictus Holdings network, 
                operating across 18+ countries worldwide. We are proud to be the 19th office in our 
                expanding international presence.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Our Mission</h3>
                <p className="text-blue-800 font-medium">"ONE TEAM, NO BORDER"</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Our Vision</h3>
                <p className="text-green-800">
                  Contributing to the sustainable prosperity of both Japan and South Africa 
                  by becoming a bridge between the two nations.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={globalNetworkImg} 
                alt="Global Network" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Globe className="text-blue-600" size={24} />
                  <span className="font-semibold">18+ Countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Accounting */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Calculator className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Accounting</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Accounting advisory services</li>
                <li>• IFRS compliance</li>
                <li>• Financial statements preparation</li>
                <li>• Audit support</li>
              </ul>
            </div>

            {/* Tax */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                <FileText className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Tax</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• VAT, PAYE, corporate taxes</li>
                <li>• SARS compliance</li>
                <li>• Expatriate tax filings</li>
                <li>• Tax advisory services</li>
              </ul>
            </div>

            {/* Consulting */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                <TrendingUp className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Consulting</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Corporate governance</li>
                <li>• Sustainability consulting</li>
                <li>• Internal control advisory</li>
                <li>• Budgeting & forecasting</li>
              </ul>
            </div>

            {/* Outsourcing */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 p-3 rounded-full w-fit mb-4">
                <Shield className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Outsourcing</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Payroll processing</li>
                <li>• Labor law compliance</li>
                <li>• Bookkeeping services</li>
                <li>• Regulatory compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Daisuke Hora</h3>
              <p className="text-gray-600">Director</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Buntu Majaja</h3>
              <p className="text-gray-600">Director</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Seiya Matsumoto</h3>
              <p className="text-gray-600">Business Development Manager</p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Open Roles</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-2">Junior Accountant (Coming Soon)</h4>
                <p className="text-gray-600">We are looking for talented South Africans to join our growing accounting team. Opportunity to work with a global firm and gain valuable experience.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-2">Junior Accountant (Coming Soon)</h4>
                <p className="text-gray-600">We are looking for talented South Africans to join our growing accounting team. Opportunity to work with a global firm and gain valuable experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={southAfricaBusinessImg} 
                alt="South Africa Business" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Users className="text-green-600" size={24} />
                  <span className="font-semibold">2,000+ Clients</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Global Reach, Local Expertise</h2>
              <p className="text-lg text-gray-700 mb-6">
                With over 2,000 clients worldwide, SCS-Invictus combines international expertise 
                with deep local knowledge. Our global network ensures that we can provide 
                comprehensive solutions that meet both local regulatory requirements and 
                international standards.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">18+</div>
                  <div className="text-sm text-blue-800">Countries</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">2,000+</div>
                  <div className="text-sm text-green-800">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl mb-12 opacity-90">
            Ready to bridge your business between Japan and South Africa? 
            Contact us today to discuss your accounting, tax, and consulting needs.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <Mail className="text-blue-400" size={24} />
              <span className="text-lg">info@scsinvictus.co.za</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="text-green-400" size={24} />
              <span className="text-lg">(+27) 087 821 3944</span>
            </div>
          </div>
          <a 
            href="mailto:info@scsinvictus.co.za"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-800 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <p className="mb-2">© 2024 SCS-Invictus South Africa (Pty) Ltd</p>
          <p className="text-sm opacity-70">
            Part of SCS-Invictus Holdings Pte Ltd | 10 Anson Road, #14-06 International Plaza, Singapore 079903
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App


