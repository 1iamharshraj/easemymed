import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const EaseMyMedCamps = () => {
  const benefits = [
    {
      id: 1,
      title: "Inside a basement or on an island. 1k patients or 100k. EaseMyMed can manage without internet.",
      description: "Our offline-first architecture ensures uninterrupted healthcare delivery regardless of location or connectivity constraints.",
      icon: (
        <div className="w-12 h-12 rounded-xl bg-primary-100 border border-primary-200 flex items-center justify-center">
          <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    },
    {
      id: 2,
      title: "Optimized for the B2B context. Your client corporates can't be happier.",
      description: "Seamless integration with corporate healthcare programs and employee wellness initiatives.",
      icon: (
        <div className="w-12 h-12 rounded-xl bg-indigo-100 border border-indigo-200 flex items-center justify-center">
          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
      )
    },
    {
      id: 3,
      title: "Any medical chart within minutes, without involving an engineer.",
      description: "Intuitive interface designed for healthcare professionals, not IT specialists.",
      icon: (
        <div className="w-12 h-12 rounded-xl bg-teal-100 border border-teal-200 flex items-center justify-center">
          <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      )
    },
    {
      id: 4,
      title: "Automate your workflows, free up your team, let them focus on patients.",
      description: "Intelligent automation handles administrative tasks, allowing medical staff to prioritize patient care.",
      icon: (
        <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      )
    },
    {
      id: 5,
      title: "Use the way you like - Speak, draw, write, type. EaseMyMed's AI follows ICD, LOINC, HL7, etc.",
      description: "Multi-modal input with full compliance to international medical coding standards.",
      icon: (
        <div className="w-12 h-12 rounded-xl bg-warning-100 border border-warning-200 flex items-center justify-center">
          <svg className="w-6 h-6 text-warning-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
      )
    }
  ];

  const demoVideos = [
    {
      id: 1,
      title: "Patient Registration in 30 Seconds",
      description: "See how quickly you can register new patients with voice commands",
      script: "Welcome to EaseMyMed patient registration. Simply speak the patient's name, age, and chief complaint. Watch as our AI automatically fills the form, validates insurance, and creates a complete patient profile in under 30 seconds. No typing required.",
      duration: "0:30"
    },
    {
      id: 2,
      title: "Clinical Documentation Made Easy",
      description: "Transform examination notes into structured medical records",
      script: "This is our clinical documentation feature. As I examine the patient and speak my findings, EaseMyMed's AI converts my observations into structured SOAP notes, automatically codes diagnoses using ICD-11, and suggests treatment protocols. Everything is captured accurately without interrupting patient care.",
      duration: "0:45"
    },
    {
      id: 3,
      title: "Instant Billing & Claims Processing",
      description: "Generate accurate medical bills and insurance claims automatically",
      script: "Here's how EaseMyMed handles billing. After the consultation, our system automatically generates itemized bills, applies correct CPT codes, checks insurance eligibility, and submits claims. Rejections are flagged immediately with suggested corrections. Revenue cycle management has never been this simple.",
      duration: "0:35"
    },
    {
      id: 4,
      title: "Offline Operation in Remote Locations",
      description: "See EaseMyMed work without internet connectivity",
      script: "This demonstration shows EaseMyMed operating completely offline in a remote camp setting. All features remain fully functional - patient registration, clinical documentation, prescription generation, and billing. Data syncs automatically once connectivity is restored. Healthcare delivery never stops.",
      duration: "0:40"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="px-mobile xl:px-xlarge lg:px-large 2xl:max-w-[1440px] 2xl:mx-auto pt-16 pb-20 lg:pt-20 lg:pb-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              New: EaseMyMed Camps Solution
            </div>
            <h1 className="text-display-lg lg:text-display-xl font-semibold text-gray-900 mb-6 tracking-tight">
              Replace marketing expenses with reimbursements
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              No red tape. Rapid improvements with easy compliances. Transform your medical camps with AI-powered healthcare solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
              <button className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-lg font-semibold transition-colors shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Demo
              </button>
              <button className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 px-5 py-3 rounded-lg font-semibold transition-colors shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Sales
              </button>
            </div>
            
            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-lg">
                <div className="bg-gradient-to-br from-primary-50 to-indigo-50 rounded-xl h-80 flex items-center justify-center border border-gray-100">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-primary-200">
                      <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 font-medium">AI-Powered Healthcare Platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="px-mobile xl:px-xlarge lg:px-large 2xl:max-w-[1440px] 2xl:mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-display-md font-semibold text-gray-900 mb-4">
              Touching thousands of patients weekly
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by healthcare providers across diverse settings, from remote islands to urban medical camps.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-display-md font-semibold text-primary-600 mb-2">10,000+</div>
              <div className="text-gray-900 font-medium mb-1">Patients Served Weekly</div>
              <div className="text-sm text-gray-500">Across all deployment locations</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-display-md font-semibold text-success-600 mb-2">95%</div>
              <div className="text-gray-900 font-medium mb-1">Billing Accuracy</div>
              <div className="text-sm text-gray-500">Automated claim processing</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-display-md font-semibold text-warning-600 mb-2">50%</div>
              <div className="text-gray-900 font-medium mb-1">Time Saved on Documentation</div>
              <div className="text-sm text-gray-500">Through AI automation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="px-mobile xl:px-xlarge lg:px-large 2xl:max-w-[1440px] 2xl:mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-display-md lg:text-display-lg font-semibold text-gray-900 mb-6">
              Why EaseMyMed for Medical Camps?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for healthcare providers who need reliable, compliant, and efficient solutions in any environment.
            </p>
          </div>
          
          <div className="space-y-16">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.id} 
                className={`grid lg:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? '' : ''}`}
              >
                <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="mb-6">{benefit.icon}</div>
                  <h3 className="text-display-xs lg:text-display-sm font-semibold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl opacity-30 mb-4">{benefit.icon}</div>
                      <div className="text-sm text-gray-500 font-medium">Feature Visualization</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Videos Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-mobile xl:px-xlarge lg:px-large 2xl:max-w-[1440px] 2xl:mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-display-md lg:text-display-lg font-semibold text-gray-900 mb-6">
              See EaseMyMed in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch these short walkthrough videos to understand how EaseMyMed transforms healthcare delivery in camp settings.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {demoVideos.map((video) => (
              <div key={video.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all duration-200">
                <div className="relative bg-gradient-to-br from-primary-50 to-indigo-50 h-48 flex items-center justify-center border-b border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-200">
                      <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-gray-600">{video.duration}</div>
                  </div>
                  <div className="absolute top-3 right-3 bg-primary-600 text-white rounded-md px-2 py-1 text-xs font-medium">
                    Demo
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{video.description}</p>
                  <details className="text-sm text-gray-500">
                    <summary className="cursor-pointer font-medium text-primary-600 hover:text-primary-700 transition-colors">
                      View Script
                    </summary>
                    <div className="mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="text-gray-600 italic text-sm leading-relaxed">
                        "{video.script}"
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="px-mobile xl:px-xlarge lg:px-large 2xl:max-w-[1440px] 2xl:mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display-md font-semibold text-gray-900 mb-12">
              What Our Partners Say
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 lg:p-12">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <blockquote className="text-xl lg:text-2xl text-gray-900 mb-8 leading-relaxed">
                "EaseMyMed has revolutionized how we deliver healthcare in remote locations. The offline capabilities and intelligent automation have allowed us to scale our impact significantly while maintaining the highest standards of care and compliance."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Tanmay Motiwala</div>
                  <div className="text-gray-600">Swasthya Saathi LLP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-20 bg-gray-900">
        <div className="px-mobile xl:px-xlarge lg:px-large 2xl:max-w-[1440px] 2xl:mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-semibold text-white mb-6">
              We don't compromise security
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your certifications. We're compliant with all major healthcare security and privacy standards.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {['HIPAA', 'ABDM', 'ISO', 'NABH', 'DPDP', 'GDPR', 'SOC 2'].map((cert) => (
              <div key={cert} className="bg-gray-800 border border-gray-700 rounded-xl p-4 text-center hover:bg-gray-750 transition-colors">
                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="font-semibold text-sm text-white">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Sales Section */}
      <section className="py-20 bg-primary-600">
        <div className="px-mobile xl:px-xlarge lg:px-large 2xl:max-w-[1440px] 2xl:mx-auto text-center">
          <h2 className="text-display-md font-semibold text-white mb-6">
            Ready to Transform Your Medical Camps?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join healthcare providers who are already delivering better care with EaseMyMed. Schedule a personalized demo today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <button className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary-600 px-6 py-3 rounded-lg font-semibold transition-colors shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule Demo Call
            </button>
            <button className="inline-flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 text-white border border-primary-500 px-6 py-3 rounded-lg font-semibold transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Brochure
            </button>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm text-primary-100">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No commitment required
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Free consultation
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Quick setup
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EaseMyMedCamps;