import React from 'react';
import GreensboroHero from '../components/GreensboroHero';
import TestimonialsSection from '../components/TestimonialsSection';
import { Users, Globe, Calendar, MapPin, User, MessageSquare, Presentation, HelpCircle, BookOpen, Lightbulb, Check } from 'lucide-react';

function GreensboroPage() {
  const scrollToApply = () => {
    const applySection = document.getElementById('apply');
    if (applySection) {
      applySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
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
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              English feels hard in real life.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border-l-4 border-[#dc5d33]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-[#dc5d33]" />
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    You know what you want to say, but words don't come.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border-l-4 border-[#dc5d33]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-[#dc5d33]" />
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    At work or school, you feel quiet.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border-l-4 border-[#dc5d33]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5 text-[#dc5d33]" />
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    People speak fast. You miss important details.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border-l-4 border-[#dc5d33]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-[#dc5d33]" />
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    You feel stressed and not taken seriously.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center bg-[#064088] rounded-2xl p-8 md:p-10">
              <p className="text-xl md:text-2xl text-white font-medium">
                It's not because you are not smart.
              </p>
              <p className="text-xl md:text-2xl text-white font-bold mt-2">
                You just need practice.
              </p>
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
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-6">
              {/* Part-time Card */}
              <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[#064088] transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Part-time
                </h3>
                <p className="text-gray-700">
                  2 hours a day • Monday–Friday
                </p>
              </div>

              {/* Full-time Card */}
              <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[#064088] transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Full-time
                </h3>
                <p className="text-gray-700">
                  4 hours a day • Monday–Friday
                </p>
              </div>
            </div>

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

      <TestimonialsSection guideStyle />

      <div id="apply"></div>
    </div>
  );
}

export default GreensboroPage;
