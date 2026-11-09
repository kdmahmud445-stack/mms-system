import React, { useState } from 'react';
import { 
  Users, DollarSign, Heart, Calendar, Shield, 
  Code, Phone, X, ExternalLink, Crown, MapPin, User, 
  Mail, Globe, Droplet, Stethoscope, Utensils, BookOpen, 
  HelpCircle, AlertTriangle, TreePine, Sparkles, Briefcase, 
  Users2, CheckCircle2 
} from 'lucide-react';

export default function Dashboard() {
  const [showDevModal, setShowDevModal] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  // প্রতিষ্ঠাতা পরিষদের ৪ জন স্থায়ী সদস্যের সঠিক তথ্য ও ছবি
  const founders = [
    {
      id: 1,
      name: 'নাজমুল',
      role: 'সভাপতি, প্রতিষ্ঠাতা পরিষদ',
      father: 'মোঃ হানিফ শেখ',
      phone: '01819390632',
      address: 'গ্রামঃ দাসতির বাগ, ইউঃ মধ্যপাড়া, উপজেলাঃ সিরাজদিখান, মুন্সিগঞ্জ',
      image: '/id01.jpg' 
    },
    {
      id: 2,
      name: 'কাউসার মাহমুদ',
      role: 'সহ-সভাপতি, প্রতিষ্ঠাতা পরিষদ',
      father: 'নজরুল ইসলাম',
      phone: '01568000445',
      address: 'গ্রাম: ফুরশাইল, ইউঃ মালখানগর, উপজেলাঃ সিরাজদিখান, মুন্সিগঞ্জ',
      image: '/id02.jpg'
    },
    {
      id: 3,
      name: 'শেখ মোঃ রোমান',
      role: 'সাধারণ সম্পাদক, প্রতিষ্ঠাতা পরিষদ',
      father: 'আব্দুল খালেক শেখ',
      phone: '+966581831594',
      address: 'গ্রাম: বানকাইজ, ইউঃ কলমা, উপজেলাঃ লৌহজং, মুন্সিগঞ্জ',
      image: '/id03.jpg'
    },
    {
      id: 4,
      name: 'মোঃ জসিম হালদার',
      role: 'কোষাধ্যক্ষ, প্রতিষ্ঠাতা পরিষদ',
      father: 'হাজী আঃ হাই হালদার',
      phone: '+966573325256',
      address: 'গ্রামঃ কামারখারা, ইউঃ স্বর্নগ্রাম, উপজেলাঃ টঙ্গীবাড়ী, মুন্সিগঞ্জ',
      image: '/id04.png'
    }
  ];

  // সেবাসমূহের ১১টি সাব-মডিউল তালিকা
  const servicesList = [
    { id: 1, title: 'রক্তদান', desc: 'জরুরি রক্তদাতা সংগ্রহ ও রক্তদান কর্মসূচি পরিচালনা।', icon: Droplet, color: 'text-rose-500 bg-rose-50' },
    { id: 2, title: 'চিকিৎসাসেবা', desc: 'অসহায় ও দরিদ্র রোগীদের চিকিৎসা সহায়তা প্রদান।', icon: Stethoscope, color: 'text-blue-500 bg-blue-50' },
    { id: 3, title: 'খাদ্য ও বস্ত্র বিতরণ', desc: 'দুস্থ ও পীরিত মানুষের মাঝে খাদ্য ও পোশাক বিতরণ।', icon: Utensils, color: 'text-amber-500 bg-amber-50' },
    { id: 4, title: 'শিক্ষা সহায়তা', desc: 'গরিব ও মেধাবী শিক্ষার্থীদের শিক্ষা উপকরণ ও আর্থিক সাহায্য।', icon: BookOpen, color: 'text-indigo-500 bg-indigo-50' },
    { id: 5, title: 'অসহায় মানুষের পাশে দাঁড়ানো', desc: 'বিপদগ্রস্ত ও সংকটকালীন মানুষের জরুরি মানবিক সহায়তা।', icon: HelpCircle, color: 'text-emerald-500 bg-emerald-50' },
    { id: 6, title: 'দুর্যোগকালীন ত্রাণ', desc: 'বন্যা, সাইক্লোন ও প্রাকৃতিক দুর্যোগে ত্রাণ বিতরণ কার্যক্রম।', icon: AlertTriangle, color: 'text-orange-500 bg-orange-50' },
    { id: 7, title: 'বৃক্ষরোপণ', desc: 'পরিবেশের ভারসাম্য রক্ষায় বৃক্ষরোপণ ও সচেতনতা বৃদ্ধি।', icon: TreePine, color: 'text-green-600 bg-green-50' },
    { id: 8, title: 'পরিচ্ছন্নতা অভিযান', desc: 'সমাজ ও এলাকা পরিচ্ছন্ন রাখার বিশেষ কার্যক্রম।', icon: Sparkles, color: 'text-cyan-500 bg-cyan-50' },
    { id: 9, title: 'কর্মসংস্থান সহায়তা', desc: 'বেকার যুবকদের কর্মসংস্থান ও আত্মকর্মসংস্থানে সহযোগিতা।', icon: Briefcase, color: 'text-purple-500 bg-purple-50' },
    { id: 10, title: 'সামাজিক সচেতনতা', desc: 'মাদক, কুসংস্কার ও বিভিন্ন সামাজিক অনাচারের বিরুদ্ধে সচেতনতা।', icon: Users2, color: 'text-teal-500 bg-teal-50' },
    { id: 11, title: 'সদস্য কল্যাণ', desc: 'সংগঠনের সদস্য ও তাদের পরিবারের কল্যাণমূলক কার্যক্রম।', icon: CheckCircle2, color: 'text-pink-500 bg-pink-50' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* 🟢 টপ হেডার */}
      <header className="bg-emerald-800 text-white px-3 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 shadow-md">
        
        {/* লোগো ও সংগঠনের নাম + অফিশিয়াল মেইল ও ফেসবুক পেজ */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center overflow-hidden shadow border-2 border-emerald-600 shrink-0">
            <img 
              src="/logo.jpg" 
              alt="লোগো" 
              className="w-full h-full object-cover"
              onError={(e)=>{
                e.target.src = '/logo.png';
              }}
            />
          </div>
          <div>
            <h1 className="text-base sm:text-xl font-bold leading-tight">মুন্সিগঞ্জ মানবসেবা সংগঠন</h1>
            
            {/* ছোট করে অফিশিয়াল মেইল ও ফেসবুক পেজ লিংক */}
            <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] text-emerald-200 mt-0.5">
              <a href="mailto:munshiganjmanobsebasonggothon@gmail.com" className="flex items-center gap-1 hover:underline">
                <Mail className="w-3 h-3 text-emerald-300" /> munshiganjmanobsebasonggothon@gmail.com
              </a>
              <span className="hidden sm:inline">•</span>
              <a href="https://www.facebook.com/munshiganj.manobseba" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline text-emerald-100">
                <Globe className="w-3 h-3 text-blue-300" /> Facebook Page
              </a>
            </div>
          </div>
        </div>

        {/* 🔴 ডান দিক থেকে বাম দিকে চলমান (Marquee) ডেভেলপার ইনফো */}
        <div className="flex-1 max-w-xs sm:max-w-xs overflow-hidden bg-emerald-900/80 px-3 py-1.5 rounded-full text-xs border border-emerald-700/60 shadow-inner">
          <marquee behavior="scroll" direction="left" scrollamount="4" className="flex items-center text-white font-medium">
            <span className="text-emerald-200 mr-2">Software/Web Developer:</span>
            
            <a 
              href="https://www.facebook.com/KDMahmudM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-emerald-300 transition-colors text-white mr-3"
            >
              <svg className="w-3.5 h-3.5 fill-current text-blue-400 shrink-0" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="hover:underline">কাউসার মাহমুদ</span>
            </a>

            <span className="text-emerald-500 mr-3">|</span>

            <a 
              href="https://wa.me/8801568000445" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-emerald-300 transition-colors text-white"
            >
              <Phone className="w-3.5 h-3.5 text-green-400 fill-current shrink-0" />
              <span>01568000445</span>
            </a>
          </marquee>
        </div>

        {/* প্রোফাইল রোল */}
        <div className="hidden lg:flex items-center gap-2">
          <span className="bg-emerald-700 text-emerald-100 text-xs px-2.5 py-1 rounded-full border border-emerald-600">
            রোল: সুপার অ্যাডমিন
          </span>
          <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-sm border border-emerald-400">
            অ
          </div>
        </div>
      </header>

      {/* মূল বডি Layout */}
      <div className="flex flex-1">
        
        {/* 🟢 সাইডবার */}
        <aside className="w-64 bg-white border-r border-gray-200 p-4 hidden md:flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">প্রধান মেনু</p>
              <nav className="space-y-1">
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-left ${activeTab === 'dashboard' ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <Users className="w-4 h-4" /> ড্যাশবোর্ড
                </button>
                <button 
                  onClick={() => setActiveTab('members')}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg text-left"
                >
                  <Users className="w-4 h-4" /> সদস্য ব্যবস্থাপনা
                </button>
                <button 
                  onClick={() => setActiveTab('donations')}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg text-left"
                >
                  <DollarSign className="w-4 h-4" /> অনুদান ও হিসাবরক্ষণ
                </button>
                <button 
                  onClick={() => setActiveTab('services')}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-left ${activeTab === 'services' ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <Heart className="w-4 h-4" /> সেবাসমূহ
                </button>
              </nav>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">অন্যান্য</p>
              <nav className="space-y-1">
                <button 
                  onClick={() => setActiveTab('committee')}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-left ${activeTab === 'committee' ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <Shield className="w-4 h-4" /> কমিটি ও শাসনকার্য
                </button>

                <button 
                  onClick={() => setShowDevModal(true)}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-all text-left mt-2"
                >
                  <Code className="w-4 h-4 text-emerald-600" /> 
                  <span>ডেভেলপার তথ্য</span>
                </button>
              </nav>
            </div>
          </div>
        </aside>

        {/* 🟢 মূল কনটেন্ট */}
        <main className="flex-1 p-4 sm:p-6 space-y-6 overflow-y-auto">
          
          {/* যদি 'সেবাসমূহ' ট্যাব সিলেক্ট করা হয় */}
          {activeTab === 'services' ? (
            <div className="space-y-6">
              <div className="bg-emerald-800 rounded-2xl p-6 text-white shadow-lg">
                <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-rose-400" /> সংগঠনের সেবাসমূহ
                </h2>
                <p className="text-emerald-200 text-sm">
                  মুন্সিগঞ্জ মানবসেবা সংগঠনের মাধ্যমে পরিচালিত বিভিন্ন সামাজিক ও কল্যাণমূলক সাব-মডিউলসমূহ।
                </p>
              </div>

              {/* ১১টি সেবার গ্রিড */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {servicesList.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={service.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${service.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-gray-800 text-base">{service.title}</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : activeTab === 'committee' ? (
            // যদি 'কমিটি ও শাসনকার্য' ট্যাব সিলেক্ট করা হয়
            <div className="space-y-6">
              <div className="bg-emerald-800 rounded-2xl p-6 text-white shadow-lg">
                <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">
                  <Crown className="w-6 h-6 text-amber-400" /> প্রতিষ্ঠাতা পরিষদ ও অভিভাবক মণ্ডলী
                </h2>
                <p className="text-emerald-200 text-sm">
                  মুন্সিগঞ্জ মানবসেবা সংগঠনের স্থায়ী নীতি-নির্ধারক ও সর্বোচ্চ অভিভাবকবৃন্দ।
                </p>
              </div>

              {/* ৪ জন প্রতিষ্ঠাতা সদস্যের গ্রিড */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {founders.map((founder) => (
                  <div key={founder.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-md flex flex-col justify-between space-y-4 hover:shadow-lg transition-shadow">
                    <div className="text-center space-y-3">
                      <div className="relative w-24 h-24 mx-auto">
                        <img 
                          src={founder.image} 
                          alt={founder.name} 
                          className="w-24 h-24 rounded-full object-cover border-4 border-emerald-100 shadow"
                        />
                        <span className="absolute bottom-0 right-0 bg-amber-500 text-white p-1 rounded-full text-xs shadow">
                          <Crown className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-800 text-lg">{founder.name}</h3>
                        <p className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full inline-block mt-1">
                          {founder.role}
                        </p>
                      </div>

                      <div className="text-xs text-gray-600 space-y-1 bg-gray-50 p-2.5 rounded-xl border border-gray-100 text-left">
                        <p className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-gray-400" /> পিতাঃ {founder.father}
                        </p>
                        <p className="flex items-start gap-1">
                          <MapPin className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" /> 
                          <span>{founder.address}</span>
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-gray-100">
                      <a 
                        href={`tel:${founder.phone}`}
                        className="w-full flex items-center justify-center gap-2 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-medium transition-colors shadow-sm"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{founder.phone}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // ডিফল্ট ড্যাশবোর্ড ভিউ
            <>
              <div className="bg-emerald-800 rounded-2xl p-6 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-lg">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-1">স্বাগতম, অ্যাডমিন প্যানেলে</h2>
                  <p className="text-emerald-200 text-sm">মুন্সিগঞ্জ মানবসেবা সংগঠনের সার্বিক কার্যক্রম ও হিসাবরক্ষণ এক নজরে।</p>
                </div>
                <button 
                  onClick={() => setActiveTab('committee')}
                  className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-4 py-2 rounded-lg text-sm shadow transition-colors flex items-center gap-2"
                >
                  <Crown className="w-4 h-4" /> প্রতিষ্ঠাতা পরিষদ দেখুন
                </button>
              </div>

              {/* পরিসংখ্যান কার্ড */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <p className="text-xs text-gray-500">মোট রেজিস্টার্ড সদস্য</p>
                  <h3 className="text-2xl font-bold text-gray-800 my-1">২৪৮ জন</h3>
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded">সক্রিয়: ২৩৫ জন</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <p className="text-xs text-gray-500">চলতি মাসের চাঁদা সংগ্রহ</p>
                  <h3 className="text-2xl font-bold text-gray-800 my-1">৳ ২৪,৫০০</h3>
                  <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded">বকেয়া: ৳ ৩,২০০</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <p className="text-xs text-gray-500">বর্তমান ফান্ড ব্যালেন্স</p>
                  <h3 className="text-2xl font-bold text-gray-800 my-1">৳ ১,৮৫,৪০০</h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">ক্যাশ ও ব্যাংক মিলিয়ে</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <p className="text-xs text-gray-500">পেন্ডিং আবেদন</p>
                  <h3 className="text-2xl font-bold text-gray-800 my-1">৫ টি</h3>
                  <span className="text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded">চিকিৎসা ও সদস্যপদ</span>
                </div>
              </div>
            </>
          )}

        </main>
      </div>

      {/* 🔴 ডেভেলপার মডাল */}
      {showDevModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative border border-gray-100">
            <button 
              onClick={() => setShowDevModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto text-2xl font-bold border-4 border-emerald-50">
                KM
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800">কাউসার মাহমুদ</h3>
                <p className="text-xs font-semibold text-emerald-600">Software & Web Developer</p>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-xl border border-gray-100">
                মুন্সিগঞ্জ মানবসেবা সংগঠনের ডিজিটাল ড্যাশবোর্ড ও মেম্বারশিপ ম্যানেজমেন্ট সিস্টেমটি আধুনিক ওয়েব প্রযুক্তি দিয়ে তৈরি ও রক্ষাণাবেক্ষণ করা হচ্ছে।
              </p>

              <div className="flex flex-col gap-2 pt-2">
                <a 
                  href="https://www.facebook.com/KDMahmudM" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-colors text-sm font-medium"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    ফেসবুক প্রোফাইল
                  </span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a 
                  href="https://wa.me/8801568000445" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 bg-green-50 text-green-700 rounded-xl hover:bg-green-100 transition-colors text-sm font-medium"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4" /> হোয়াটসঅ্যাপ: 01568000445
                  </span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}