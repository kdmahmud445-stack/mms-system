import React, { useState } from 'react';
import { 
  Users, DollarSign, Heart, Calendar, Shield, 
  Code, Facebook, Phone, X, Award, ExternalLink 
} from 'lucide-react';

export default function Dashboard() {
  const [showDevModal, setShowDevModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* 🟢 ১. টপ হেডার (Top Header) */}
      <header className="bg-emerald-800 text-white px-6 py-3 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white text-emerald-800 rounded-full flex items-center justify-center font-bold text-xl shadow">
            মম
          </div>
          <div>
            <h1 className="text-xl font-bold leading-tight">মুন্সিগঞ্জ মানবসেবা সংগঠন</h1>
            <p className="text-xs text-emerald-200">মানুষ মানুষের জন্য; মানবতাই সেবা।</p>
          </div>
        </div>

        {/* 🔴 লাল মার্ক (উপরের অংশ): ডেভেলপার ইনফো */}
        <div className="hidden lg:flex items-center gap-4 bg-emerald-900/60 px-4 py-1.5 rounded-full text-xs border border-emerald-700/50">
          <span className="text-emerald-200">Software/Web Developer:</span>
          
          {/* ফেসবুক লিংকসহ নাম */}
          <a 
            href="https://www.facebook.com/KDMahmudM" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors font-medium text-white"
          >
            <Facebook className="w-3.5 h-3.5 text-blue-400 fill-current" />
            <span className="hover:underline">কাউসার মাহমুদ</span>
          </a>

          <span className="text-emerald-600">|</span>

          {/* হোয়াটসঅ্যাপ নাম্বার */}
          <a 
            href="https://wa.me/8801568000445" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors text-white"
          >
            <Phone className="w-3.5 h-3.5 text-green-400 fill-current" />
            <span>01568000445</span>
          </a>
        </div>

        {/* রোল ও প্রোফাইল */}
        <div className="flex items-center gap-3">
          <span className="bg-emerald-700 text-emerald-100 text-xs px-3 py-1 rounded-full border border-emerald-600">
            রোল: সুপার অ্যাডমিন
          </span>
          <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-sm border border-emerald-400">
            অ
          </div>
        </div>
      </header>

      {/* মূল বডি Layout */}
      <div className="flex flex-1">
        
        {/* 🟢 ২. বাম পাশের নেভিগেশন সাইডবার (Sidebar) */}
        <aside className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">প্রধান মেনু</p>
              <nav className="space-y-1">
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg">
                  <Users className="w-4 h-4" /> ড্যাশবোর্ড
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-emerald-50 text-emerald-700 rounded-lg">
                  <Users className="w-4 h-4" /> সদস্য ব্যবস্থাপনা
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg">
                  <DollarSign className="w-4 h-4" /> অনুদান ও হিসাবরক্ষণ
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg">
                  <Heart className="w-4 h-4" /> সেবাসমূহ
                </a>
              </nav>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">অন্যান্য</p>
              <nav className="space-y-1">
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg">
                  <Calendar className="w-4 h-4" /> মিটিং ও নোটিশ
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg">
                  <Shield className="w-4 h-4" /> কমিটি ও শাসনকার্য
                </a>

                {/* 🔴 লাল মার্ক (নিচের অংশ): ডেভেলপার সম্পর্কিত অপশন */}
                <button 
                  onClick={() => setShowDevModal(true)}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-emerald-700 bg-emerald-50/80 hover:bg-emerald-100 rounded-lg border border-emerald-200/60 transition-all text-left mt-2"
                >
                  <Code className="w-4 h-4 text-emerald-600" /> 
                  <span>ডেভেলপার তথ্য</span>
                </button>
              </nav>
            </div>
          </div>
        </aside>

        {/* 🟢 মূল কনটেন্ট (Main Dashboard Content) */}
        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          {/* স্বাগতম ব্যানার */}
          <div className="bg-emerald-800 rounded-2xl p-6 text-white flex justify-between items-center shadow-lg">
            <div>
              <h2 className="text-2xl font-bold mb-1">স্বাগতম, অ্যাডমিন প্যানেলে</h2>
              <p className="text-emerald-200 text-sm">মুন্সিগঞ্জ মানবসেবা সংগঠনের সার্বিক কার্যক্রম ও হিসাবরক্ষণ এক নজরে।</p>
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-4 py-2 rounded-lg text-sm shadow transition-colors flex items-center gap-2">
              <span>+</span> নতুন সদস্য যোগ করুন
            </button>
          </div>

          {/* পরিসংখ্যান কার্ডসমূহ */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
        </main>
      </div>

      {/* 🔴 ডেভেলপার বিস্তারিত পপ-আপ মডাল (Modal) */}
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

              {/* সোশ্যাল ও কন্টাক্ট লিঙ্কস */}
              <div className="flex flex-col gap-2 pt-2">
                <a 
                  href="https://www.facebook.com/KDMahmudM" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-colors text-sm font-medium"
                >
                  <span className="flex items-center gap-2">
                    <Facebook className="w-4 h-4" /> ফেসবুক প্রোফাইল
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