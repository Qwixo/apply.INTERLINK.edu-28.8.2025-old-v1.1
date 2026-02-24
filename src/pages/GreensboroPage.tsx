import React from 'react';
import GreensboroHero from '../components/GreensboroHero';
import { Users, Globe, Calendar, MapPin, User, MessageSquare, Presentation, HelpCircle, BookOpen, Lightbulb } from 'lucide-react';

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
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              English feels hard in real life.
            </h2>

            <div className="space-y-6 text-left mb-8">
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-[#dc5d33] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg md:text-xl text-gray-700">
                  You know what you want to say, but words don't come.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-[#dc5d33] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg md:text-xl text-gray-700">
                  At work or school, you feel quiet.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-[#dc5d33] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg md:text-xl text-gray-700">
                  People speak fast. You miss important details.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-[#dc5d33] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg md:text-xl text-gray-700">
                  You feel stressed and not taken seriously.
                </p>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-600 italic mt-10">
              It's not because you are not smart. You just need practice.
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Mechanism Block */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Here is how you improve faster.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <User className="w-12 h-12 text-[#064088]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Live teacher
              </h3>
              <p className="text-gray-700 text-center">
                Your teacher is live, not a recording.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <MessageSquare className="w-12 h-12 text-[#064088]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                You speak every day
              </h3>
              <p className="text-gray-700 text-center">
                You practice speaking in every class.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-[#064088]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Small groups
              </h3>
              <p className="text-gray-700 text-center">
                More talking time and more feedback.
              </p>
            </div>
          </div>

          {/* Premium line */}
          <p className="text-center text-lg md:text-xl text-gray-600 font-medium mb-10">
            This is a serious program for serious students.
          </p>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={scrollToApply}
              className="bg-[#dc5d33] text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Check if I'm a fit
            </button>
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
    </div>
  );
}

export default GreensboroPage;
