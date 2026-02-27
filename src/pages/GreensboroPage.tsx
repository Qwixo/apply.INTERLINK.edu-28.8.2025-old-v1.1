import React, { useState } from 'react';
import GreensboroHero from '../components/GreensboroHero';
import TestimonialsSection from '../components/TestimonialsSection';
import { Users, Globe, Calendar, MapPin, User, MessageSquare, Presentation, HelpCircle, BookOpen, Lightbulb, Check, ChevronDown, X } from 'lucide-react';

const APPLICATION_URL = "https://interlink.edu/student-application/";

function GreensboroPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    commitment: ''
  });

  const scrollToApply = () => {
    const applySection = document.getElementById('apply');
    if (applySection) {
      applySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBannerClick = () => {
    scrollToApply();
  };

  const handleCloseBanner = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowBanner(false);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new URLSearchParams();
    data.append('u', '607289d66021f9dbd8e30d04c');
    data.append('id', 'f16b13f8cc');
    data.append('FNAME', formData.firstName);
    data.append('EMAIL', formData.email);
    data.append('MMERGE13', 'greensboro-application');

    try {
      await fetch('https://interlink.us11.list-manage.com/subscribe/post', {
        method: 'POST',
        mode: 'no-cors',
        body: data,
      });

      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'conversion', {
          send_to: 'AW-1043003990/gNYTCOqGlLQaENb0q_ED',
        });
      }

      setFormSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setFormSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen">
      {showBanner && (
        <div
          onClick={handleBannerClick}
          className="sticky top-0 z-50 w-full bg-red-600 text-white cursor-pointer py-2 px-4 group"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-center relative">
            <p className="text-xs md:text-sm leading-tight text-center group-hover:underline">
              Save up to $340 on Spring I (Apr 1–May 8) if you apply by March 18.
            </p>
            <button
              onClick={handleCloseBanner}
              className="absolute right-0 p-2 hover:bg-red-700 rounded transition-colors flex-shrink-0"
              aria-label="Close banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      <GreensboroHero />

      {/* Section 2: Credibility Strip */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <Calendar className="w-10 h-10 text-[#064088]" />
              <p className="text-lg font-semibold text-gray-900">Helping since 1979</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Users className="w-10 h-10 text-[#064088]" />
              <p className="text-lg font-semibold text-gray-900">Thousands of students</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Globe className="w-10 h-10 text-[#064088]" />
              <p className="text-lg font-semibold text-gray-900">70+ countries</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <MapPin className="w-10 h-10 text-[#064088]" />
              <p className="text-lg font-semibold text-gray-900">On-campus at UNCG (Greensboro)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Pain Block */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  English feels hard in real life.
                </h2>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-[#dc5d33] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">You know what you want to say, but words don't come.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[#dc5d33] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">At work or school, you feel quiet.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-[#dc5d33] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">People speak fast. You miss important details.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-[#dc5d33] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">You feel stressed and not taken seriously.</p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col justify-center">
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">The truth</h3>
                  <p className="text-base text-gray-700">
                    It's not because you are not smart.
                  </p>
                  <p className="text-base font-semibold text-gray-900 mt-2">
                    You just need practice.
                  </p>
                </div>

                <button
                  onClick={scrollToApply}
                  className="bg-[#dc5d33] text-white font-bold text-base px-6 py-3 rounded-lg shadow-md hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-lg"
                >
                  Get more practice
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4.5: The Real Secret - Daily Practice */}
      <section className="bg-gray-100 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Column: Content */}
              <div>
                <div className="text-xs md:text-sm uppercase tracking-widest text-[#dc5d33] font-bold mb-4">
                  THE REAL SECRET
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  More practice. Every day.
                </h2>

                <div className="space-y-3 mb-8">
                  <p className="text-lg text-gray-700">
                    Apps and YouTube can teach rules.
                  </p>
                  <p className="text-lg text-gray-700">
                    But they can't make you speak every day.
                  </p>
                  <p className="text-lg text-gray-700 font-semibold">
                    INTERLINK does. You practice in every class.
                  </p>
                </div>

                <button
                  onClick={scrollToApply}
                  className="bg-[#dc5d33] text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Give me real practice
                </button>
              </div>

              {/* Right Column: Mini Bullets */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#064088] flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-xl font-semibold text-gray-900">Live teacher</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#064088] flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-xl font-semibold text-gray-900">Small groups</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#064088] flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-xl font-semibold text-gray-900">Daily speaking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: What You Will Do In Class */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What you will do in class
            </h2>
            <p className="text-lg md:text-xl text-gray-700">
              These are real speaking tasks. Not just worksheets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12 mb-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex justify-center mb-4">
                <Users className="w-10 h-10 text-[#064088]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                Talk in small groups
              </h3>
              <p className="text-gray-700 text-center text-sm">
                You speak more, every class.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex justify-center mb-4">
                <Presentation className="w-10 h-10 text-[#064088]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                Presentations
              </h3>
              <p className="text-gray-700 text-center text-sm">
                Speak in front of others, with support.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex justify-center mb-4">
                <HelpCircle className="w-10 h-10 text-[#064088]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                Interviews
              </h3>
              <p className="text-gray-700 text-center text-sm">
                Practice real questions and answers.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex justify-center mb-4">
                <Lightbulb className="w-10 h-10 text-[#064088]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                Group problem solving
              </h3>
              <p className="text-gray-700 text-center text-sm">
                Work together and speak under pressure.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex justify-center mb-4">
                <BookOpen className="w-10 h-10 text-[#064088]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                Real reading and writing
              </h3>
              <p className="text-gray-700 text-center text-sm">
                Short tasks connected to real topics.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button
              onClick={scrollToApply}
              className="bg-[#dc5d33] text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
            >
              I want real practice
            </button>
          </div>
        </div>
      </section>

      <TestimonialsSection guideStyle />

      {/* Section 5: Intensive Practice */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-[#064088] tracking-wide uppercase mb-3">
                INTENSIVE PRACTICE
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                5 days a week. Real speaking practice.
              </h2>
              <div className="max-w-2xl mx-auto space-y-2">
                <p className="text-lg text-gray-700">
                  You do not learn fast with one class a week.
                </p>
                <p className="text-lg text-gray-700">
                  Here, you practice speaking every day.
                </p>
                <p className="text-sm text-gray-600 mt-3 font-medium">
                  Class times (Eastern Time)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-6">
              {/* Part-time Card */}
              <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[#064088] transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Part-time
                </h3>
                <p className="text-gray-700 font-medium mb-3">
                  2 hours a day • Monday–Friday
                </p>
                <p className="text-sm text-gray-600 mb-2 font-medium">
                  Choose ONE block:
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• 9:30–11:30 AM (Reading & Writing)</p>
                  <p>• 12:30–2:30 PM (Communication Skills)</p>
                </div>
              </div>

              {/* Full-time Card */}
              <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[#064088] transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Full-time
                </h3>
                <p className="text-gray-700 font-medium mb-3">
                  4 hours a day • Monday–Friday
                </p>
                <p className="text-sm text-gray-600 mb-2 font-medium">
                  Both blocks every day:
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• 9:30–11:30 AM (Reading & Writing)</p>
                  <p>• 12:30–2:30 PM (Communication Skills)</p>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-500 text-sm mb-8">
              Times are Eastern Time.
            </p>

            <p className="text-center text-gray-600 mb-8">
              Choose the pace that fits your life. You still practice a lot.
            </p>

            <div className="text-center">
              <button
                onClick={scrollToApply}
                className="bg-[#dc5d33] text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
              >
                I want fast progress
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Next Intake */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Column: Text */}
              <div>
                <p className="text-sm font-semibold text-[#064088] tracking-wide uppercase mb-3">
                  NEXT INTAKE
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Limited discount for the closest term.
                </h2>
                <div className="space-y-2">
                  <p className="text-lg text-gray-700">
                    New terms start often.
                  </p>
                  <p className="text-lg text-gray-700">
                    To get the discount, apply for the closest available term.
                  </p>
                  <p className="text-lg text-gray-700">
                    See the exact dates and fees on the official page.
                  </p>
                </div>
              </div>

              {/* Right Column: Buttons */}
              <div className="flex flex-col gap-4">
                <button
                  onClick={scrollToApply}
                  className="bg-[#dc5d33] text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5 w-full"
                >
                  Apply for the closest term
                </button>
                <a
                  href="https://interlink.edu/university-programs/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-[#064088] border-2 border-[#064088] font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#064088] hover:text-white transition-all duration-300 text-center"
                >
                  See dates & fees
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  Discount is for qualified applicants. Not everyone is accepted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Timeline - What Happens After You Apply */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              What happens after you apply
            </h2>
            <p className="text-lg text-gray-700">
              We guide you step by step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#064088] flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Apply
              </h3>
              <p className="text-gray-700">
                Send your application online.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#064088] flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                We review
              </h3>
              <p className="text-gray-700">
                We check if you are a fit.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#064088] flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Advisor helps you
              </h3>
              <p className="text-gray-700">
                You get help with your next steps.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#064088] flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Placement test
              </h3>
              <p className="text-gray-700">
                We place you in the right level.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#064088] flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Start class
              </h3>
              <p className="text-gray-700">
                You join and speak every day.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToApply}
              className="bg-[#dc5d33] text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start my application
            </button>
          </div>
        </div>
      </section>

      {/* SECTION A: Is this for you? */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Is this for you?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Card 1: This IS for you if... */}
            <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-green-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                This IS for you if…
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">You live in Greensboro (or nearby).</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">You want to speak English with confidence.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">You can show up and do the work.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">You want real progress, not slow tips.</span>
                </li>
              </ul>
            </div>

            {/* Card 2: This is NOT for you if... */}
            <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-red-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                This is NOT for you if…
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-red-600 flex-shrink-0">×</span>
                  <span className="text-lg text-gray-700">You want something easy or passive.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-red-600 flex-shrink-0">×</span>
                  <span className="text-lg text-gray-700">You do not want to speak in class.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-red-600 flex-shrink-0">×</span>
                  <span className="text-lg text-gray-700">You want 'free only' learning.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-red-600 flex-shrink-0">×</span>
                  <span className="text-lg text-gray-700">You won't show up 5 days a week.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToApply}
              className="bg-[#dc5d33] text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
            >
              I'm serious. Let's do it
            </button>
          </div>
        </div>
      </section>

      {/* SECTION B: Decision block */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Make a decision
            </h2>
            <p className="text-lg text-gray-700">
              Choose your path today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left option: Keep doing free learning */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Keep doing free learning
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Watch videos and hope it clicks.
              </p>
              <a
                href="https://www.youtube.com/results?search_query=free+english+course"
                target="_blank"
                rel="noreferrer"
                className="block w-full bg-gray-500 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-gray-600 transition-all duration-300 text-center"
              >
                Keep searching free courses
              </a>
            </div>

            {/* Right option: Commit to real practice */}
            <div className="bg-[#064088] rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                Commit to real practice
              </h3>
              <p className="text-lg text-white mb-6">
                Live classes. You speak every day.
              </p>
              <button
                onClick={scrollToApply}
                className="w-full bg-[#dc5d33] text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Commit to real progress
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Common questions
            </h2>
          </div>

          <div className="space-y-4 mb-12">
            {/* FAQ 1 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(1)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">Where are classes?</span>
                <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openFAQ === 1 ? 'rotate-180' : ''}`} />
              </button>
              {openFAQ === 1 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">On campus at UNCG in Greensboro.</p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(2)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">How often are classes?</span>
                <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openFAQ === 2 ? 'rotate-180' : ''}`} />
              </button>
              {openFAQ === 2 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">Monday to Friday. Choose 2 or 4 hours a day.</p>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(3)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">Do I need to be advanced?</span>
                <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openFAQ === 3 ? 'rotate-180' : ''}`} />
              </button>
              {openFAQ === 3 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">No. You take a placement test. We put you in the right level.</p>
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(4)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">Will I be fluent in 5 weeks?</span>
                <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openFAQ === 4 ? 'rotate-180' : ''}`} />
              </button>
              {openFAQ === 4 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">No. But you can feel more confident and speak more after one term.</p>
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(5)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">What happens after I apply?</span>
                <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openFAQ === 5 ? 'rotate-180' : ''}`} />
              </button>
              {openFAQ === 5 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">We review your application. An advisor helps you with next steps and placement.</p>
                </div>
              )}
            </div>

            {/* FAQ 6 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(6)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">Is this for casual learners?</span>
                <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openFAQ === 6 ? 'rotate-180' : ''}`} />
              </button>
              {openFAQ === 6 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">No. This is for serious students who will show up and speak.</p>
                </div>
              )}
            </div>

            {/* FAQ 7 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(7)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">How do I see dates and fees?</span>
                <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openFAQ === 7 ? 'rotate-180' : ''}`} />
              </button>
              {openFAQ === 7 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">Use the 'See dates & fees' button above.</p>
                </div>
              )}
            </div>

            {/* FAQ 8 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(8)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">How does the discount work?</span>
                <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openFAQ === 8 ? 'rotate-180' : ''}`} />
              </button>
              {openFAQ === 8 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">It is for qualified applicants applying to the closest available term.</p>
                </div>
              )}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToApply}
              className="bg-[#dc5d33] text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Apply now
            </button>
          </div>
        </div>
      </section>

      {/* SECTION D: Bottom Apply Section */}
      <section id="apply" className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {!formSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    Apply in minutes
                  </h2>
                  <p className="text-lg text-gray-700">
                    If you are serious, start here.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                      First name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#064088] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#064088] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="commitment" className="block text-sm font-semibold text-gray-900 mb-2">
                      Are you ready to show up and speak in class? <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="commitment"
                      name="commitment"
                      value={formData.commitment}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#064088] focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      <option value="yes">Yes, I'm ready</option>
                      <option value="maybe">Maybe, I have questions</option>
                      <option value="not-now">Not right now</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#dc5d33] text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Continue to official application
                  </button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-200 text-center space-y-2">
                  <p className="text-sm text-gray-600">
                    We review every application.
                  </p>
                  <p className="text-sm text-gray-600">
                    Not everyone is accepted.
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Thank you!
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Now complete your official application.
                  </p>
                </div>
                <a
                  href={APPLICATION_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-[#dc5d33] text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Begin official application
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default GreensboroPage;
