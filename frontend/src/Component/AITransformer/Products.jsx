import React from "react";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Tablet from "../../Images/tablet.svg";
import aiUsesVideo from '../../assets/video/AI uses.mp4';
import icuImage from '../../assets/images/ICU.jpg';
import nusvisImage from '../../assets/images/NusVis_Generated.png';

const Products = () => {
  return (
    <section className="my-24">
      <div className="px-mobile xl:px-xlarge lg:px-large 2xl:max-w-[1920px] 2xl:mx-auto">
        <h1 className="text-SubGray font-semibold px-4 py-2 text-center text-2xl mb-16">
          Products
        </h1>

        {/* Health Copilot */}
        <div className="mb-20">
          <div className="flex items-center justify-between flex-col xl:flex-row py-4 px-5">
            <div className="pb-16 lg:w-1/2 w-full lg:pr-8">
              <p className="font-semibold md:text-5xl text-3xl md:text-nowrap text-wrap leading-normal">
                <span className="text-blue-500 text-headingSmall md:text-headingLarge">EaseMy</span>
                <span className="text-red-500 text-headingSmall md:text-headingLarge">Med</span> <span className="text-black text-headingSmall md:text-headingLarge">Co-Pilot</span>
              </p>
              <p className="text-SubGray text-[18px] leading-relaxed pt-6">
                AI-powered co-pilot for hospital administration. Paperless workflows, ambient AI, and seamless documentation that keeps doctors focused on patient care.
              </p>

              <Link to="/health-copilot">
                <button className="mt-10 font-medium text-blue-500 flex items-end gap-1 hover:underline">
                  Learn more
                  <span className="pb-[3px]">
                    <HiMiniArrowTopRightOnSquare />
                  </span>
                </button>
              </Link>
            </div>

            <div className="lg:w-1/2 w-full flex justify-center">
              <video 
                className='w-full h-96 rounded-lg shadow-lg object-cover'
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={aiUsesVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Paperless Camps */}
        <div className="mb-20 relative overflow-hidden">
          {/* Background with layered gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-600/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-400/30 via-transparent to-transparent"></div>
          
          {/* Floating background shapes */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-300/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal-400/15 rounded-full blur-lg"></div>
          
          <div className="relative z-10 p-8 md:p-12">
          <div className="flex items-center justify-between flex-col xl:flex-row">
            
            {/* Left Side - Content */}
            <div className="lg:w-1/2 w-full lg:pr-12 mb-12 xl:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/30">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full shadow-md border border-white/30">
                  For Vision Care Leaders
                </div>
              </div>
              
              <h2 className="font-bold text-4xl md:text-6xl leading-tight mb-6">
                <span className="text-white/90">Scale</span>
                <span className="text-emerald-100"> Without</span><br/>
                <span className="text-white">Paperwork</span>
              </h2>
              
              <p className="text-white/80 text-xl leading-relaxed mb-8">
                When you're conducting <span className="font-semibold text-emerald-200">10,000+ screenings annually</span>, every minute counts. Transform massive eye care camps with AI-powered workflows that eliminate administrative bottlenecks and deliver instant, accurate patient documentation.
              </p>

              {/* Pain Points Solutions */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 shadow-sm">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">End Data Entry Nightmares</h4>
                    <p className="text-gray-600 text-sm">No more weeks spent digitizing thousands of paper forms after camps</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 shadow-sm">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 15.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Eliminate Lost Records</h4>
                    <p className="text-gray-600 text-sm">Real-time cloud sync ensures zero patient data loss across multiple camp sites</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 shadow-sm">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Instant Follow-up Coordination</h4>
                    <p className="text-gray-600 text-sm">AI-powered triage identifies surgery candidates immediately, not weeks later</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/30">10,000+ Patients/Day</span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/30">Multi-Site Sync</span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/30">AI Screening</span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/30">Surgery Pipeline</span>
              </div>

              <Link to="/camps">
                <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 border border-white/30 hover:border-white/50">
                  Transform Your Camps
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Right Side - Enhanced Visual */}
            <div className="lg:w-1/2 w-full flex justify-center relative">
              <div className="relative w-full max-w-lg">
                {/* Main dashboard */}
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <div className="text-white">
                          <h3 className="font-bold text-lg">Vision Camp 2024</h3>
                          <p className="text-sm opacity-90">District Hospital • Live</p>
                        </div>
                      </div>
                      <div className="bg-white/20 px-4 py-2 rounded-full">
                        <span className="text-white font-bold">2,847 Today</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-200">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-xs text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full">+15%</span>
                        </div>
                        <p className="text-3xl font-bold text-green-700">1,892</p>
                        <p className="text-sm text-green-600 font-medium">Screened</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-200">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                          </div>
                          <span className="text-xs text-blue-600 font-semibold bg-blue-100 px-2 py-1 rounded-full">AI</span>
                        </div>
                        <p className="text-3xl font-bold text-blue-700">347</p>
                        <p className="text-sm text-blue-600 font-medium">Surgery Candidates</p>
                      </div>
                    </div>
                    
                    {/* Live Activity Feed */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-gray-800">Live Activity</h4>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-green-600 font-medium">Real-time</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">SK</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-gray-800">Sunita Kumari</p>
                            <p className="text-xs text-gray-600">Cataract detected • Surgery scheduled</p>
                          </div>
                          <div className="text-xs text-blue-600 font-semibold bg-blue-100 px-2 py-1 rounded-full">HIGH</div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">RP</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-gray-800">Rajesh Patel</p>
                            <p className="text-xs text-gray-600">Vision: 6/6 • Glasses prescribed</p>
                          </div>
                          <div className="text-xs text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full">NORMAL</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating efficiency card */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl border border-gray-200 p-5 w-56 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-lg font-bold text-gray-800">5x Faster</p>
                    <p className="text-sm text-gray-600">Than Paper-based Camps</p>
                    <div className="mt-3 flex justify-center">
                      <span className="text-xs text-purple-600 font-semibold bg-purple-100 px-3 py-1 rounded-full">Proven Results</span>
                    </div>
                  </div>
                </div>

                {/* Floating data card */}
                <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl border border-gray-200 p-5 w-52 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <p className="text-lg font-bold text-gray-800">Zero Data Loss</p>
                    <p className="text-sm text-gray-600">Across 50+ Camp Sites</p>
                    <div className="mt-3 flex justify-center">
                      <span className="text-xs text-emerald-600 font-semibold bg-emerald-100 px-3 py-1 rounded-full">100% Reliability</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* DigiMitra */}
        <div className="mb-20">
          <div className="flex items-center justify-between flex-col xl:flex-row py-4 px-5">
            <div className="pb-16 lg:w-1/2 w-full lg:pr-8">
              <p className="font-semibold md:text-5xl text-3xl md:text-nowrap text-wrap leading-normal">
                <span className="text-blue-500 text-headingSmall md:text-headingLarge">DigiMitra</span>
              </p>
              <p className="text-SubGray text-[18px] leading-relaxed pt-6">
                GenAI-powered platform ensuring transparency and legal clarity in critical healthcare settings. Real-time ICU monitoring, tamper-proof records, and AI-driven insights for unparalleled medicolegal clarity.
              </p>

              <a 
                href="https://mydigimitra.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="mt-10 font-medium text-blue-500 flex items-end gap-1 hover:underline">
                  Learn more
                  <span className="pb-[3px]">
                    <HiMiniArrowTopRightOnSquare />
                  </span>
                </button>
              </a>
            </div>

            <div className="lg:w-1/2 w-full flex justify-center relative">
              <div className="relative w-full">
                <img
                  src={icuImage}
                  className="w-full h-80 rounded-lg shadow-lg object-cover"
                  alt="ICU monitoring system"
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                  Live ICU feed example
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EaseMyMed TeleCare */}
        <div className="mb-20">
          <div className="flex items-center justify-between flex-col xl:flex-row py-4 px-5">
            <div className="pb-16 lg:w-1/2 w-full lg:pr-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-full border border-teal-200">
                  New Product
                </div>
              </div>
              
              <p className="font-semibold md:text-5xl text-3xl md:text-nowrap text-wrap leading-normal">
                <span className="text-blue-500 text-headingSmall md:text-headingLarge">EaseMy</span>
                <span className="text-red-500 text-headingSmall md:text-headingLarge">Med</span> 
                <span className="text-blue-600 text-headingSmall md:text-headingLarge"> TeleCare</span>
              </p>
              
              <p className="text-SubGray text-[18px] leading-relaxed pt-6">
                AI-powered telemedicine platform enabling seamless virtual consultations. Smart symptom assessment, automated documentation, and intelligent diagnosis support connecting patients with healthcare providers anywhere, anytime.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200">AI Diagnosis Support</span>
                <span className="px-3 py-1 bg-gray-100 text-black text-sm rounded-full border border-gray-300">Virtual Consultations</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full border border-purple-200">Smart Documentation</span>
              </div>

              <Link to="/telemedicine">
                <button className="mt-10 font-medium text-blue-600 flex items-end gap-1 hover:underline hover:text-blue-700 transition-colors">
                  Learn more
                  <span className="pb-[3px]">
                    <HiMiniArrowTopRightOnSquare />
                  </span>
                </button>
              </Link>
            </div>

            <div className="lg:w-1/2 w-full flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Main telemedicine interface mockup */}
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div className="text-white">
                        <h3 className="font-semibold">Dr. Sarah Johnson</h3>
                        <p className="text-sm opacity-90">Cardiologist • Online</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video call area */}
                  <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-gray-600 font-medium">Virtual Consultation</p>
                        <p className="text-sm text-gray-500">HD Video • AI Analysis</p>
                      </div>
                    </div>
                    
                    {/* AI insights overlay */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-xs font-semibold text-purple-600">AI Analysis</span>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-gray-600">Symptom: Chest pain</div>
                        <div className="text-xs text-gray-600">Risk: Low</div>
                        <div className="text-xs text-gray-600">Suggested: ECG</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Control buttons */}
                  <div className="p-4 bg-gray-50 flex justify-center gap-4">
                    <button className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </button>
                    <button className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <button className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Floating patient card */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl border border-gray-200 p-4 w-48">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">JD</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">John Doe</h4>
                      <p className="text-xs text-gray-500">Patient • Age 34</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-gray-600">Connected via AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NusVis - Coming Soon */}
        <div className="mb-20">
          <div className="flex items-center justify-between flex-col xl:flex-row py-4 px-5">
            <div className="lg:w-1/2 w-full flex justify-center">
              <img
                src={nusvisImage}
                className="w-full h-[30rem] rounded-lg shadow-lg object-cover"
                alt="NusVis surgery planning visualization"
              />
            </div>

            <div className="pb-16 lg:w-1/2 w-full lg:pl-8">
              <p className="font-semibold md:text-5xl text-3xl md:text-nowrap text-wrap leading-normal text-gray-400">
                <span className="text-purple-500 text-headingSmall md:text-headingLarge">Nus</span>Vis
              </p>
              <p className="text-SubGray text-[18px] leading-relaxed pt-6">
                Next-generation surgery planning and visualization system.
              </p>

              <button 
                className="mt-10 font-medium text-gray-400 flex items-end gap-1 cursor-not-allowed"
                disabled
              >
                Coming Soon
                <span className="pb-[3px]">
                  <HiMiniArrowTopRightOnSquare />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <Link to="/registration">
            <button className="text-xl text-white bg-blue-600 px-6 py-3 rounded-[72px] hover:-translate-y-1 transition-all duration-500 ease-in-out">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;