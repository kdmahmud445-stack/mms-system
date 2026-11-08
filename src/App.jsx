import React, { useState } from 'react';
import { 
  Users, 
  DollarSign, 
  HeartHandshake, 
  FileText, 
  TrendingUp, 
  Calendar, 
  ShieldCheck, 
  AlertCircle,
  Menu,
  X,
  PlusCircle,
  UserCheck
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-800">
      
      {/* Top Header */}
      <header className="bg-emerald-800 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white text-emerald-800 p-2 rounded-full font-bold text-lg">
              মম
            </div>
            <div>
              <h1 className="text-lg font-bold">মুন্সিগঞ্জ মানবসেবা সংগঠন</h1>
              <p className="text-xs text-emerald-200">মানুষ মানুষের জন্য; মানবতাই সেবা।</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-sm bg-emerald-700 px-3 py-1 rounded-full">রোল: সুপার অ্যাডমিন</span>
            <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center font-bold">
              அ
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 gap-6">
        
        {/* Sidebar Navigation */}
        <aside className={`md:block ${mobileMenuOpen ? 'block' : 'hidden'} w-full md:w-64 bg-white shadow-sm rounded-xl p-4 h-fit space-y-2`}>
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">প্রধান মেনু</div>
          
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <TrendingUp size={18} />
            <span> ড্যাশবোর্ড</span>
          </button>

          <button 
            onClick={() => setActiveTab('members')}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'members' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <Users size={18} />
            <span>সদস্য ব্যবস্থাপনা</span>
          </button>

          <button 
            onClick={() => setActiveTab('accounts')}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'accounts' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <DollarSign size={18} />
            <span>অনুদান ও হিসাবরক্ষণ</span>
          </button>

          <button 
            onClick={() => setActiveTab('humanitarian')}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'humanitarian' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <HeartHandshake size={18} />
            <span>সেবাসমুহ</span>
          </button>

          <div className="pt-4 mt-4 border-t border-gray-100">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">অন্যান্য</div>
            <button className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
              <Calendar size={18} />
              <span>মিটিং ও নোটিশ</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
              <ShieldCheck size={18} />
              <span>কমিটি ও শাসনকার্য</span>
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 space-y-6">
          
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-emerald-800 to-teal-700 rounded-2xl p-6 text-white shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold">স্বাগতম, অ্যাডমিন প্যানেলে</h2>
              <p className="text-emerald-100 text-sm mt-1">মুন্সিগঞ্জ মানবসেবা সংগঠনের সার্বিক কার্যক্রম ও হিসাবরক্ষণ এক নজরে।</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow transition flex items-center gap-2">
                <PlusCircle size={16} /> নতুন সদস্য যোগ করুন
              </button>
            </div>
          </div>

          {/* Stat Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Card 1 */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase">মোট রেজিস্টার্ড সদস্য</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">২৪৮ জন</h3>
                <span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded mt-2 inline-block">সক্রিয়: ২৩৫ জন</span>
              </div>
              <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl">
                <Users size={24} />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase">চলতি মাসের চাঁদা সংগ্রহ</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">৳ ২৪,৫০০</h3>
                <span className="text-xs text-amber-600 font-medium bg-amber-50 px-2 py-0.5 rounded mt-2 inline-block">বকেয়া: ৳ ৩,২০০</span>
              </div>
              <div className="p-3 bg-amber-50 text-amber-700 rounded-xl">
                <DollarSign size={24} />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase">বর্তমান ফান্ড ব্যালেন্স</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">৳ ১,৮৫,৪০০</h3>
                <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded mt-2 inline-block">ক্যাশ ও ব্যাংক মিলিয়ে</span>
              </div>
              <div className="p-3 bg-blue-50 text-blue-700 rounded-xl">
                <TrendingUp size={24} />
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase">পেন্ডিং আবেদন</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">৫ টি</h3>
                <span className="text-xs text-rose-600 font-medium bg-rose-50 px-2 py-0.5 rounded mt-2 inline-block">চিকিৎসা ও সদস্যপদ</span>
              </div>
              <div className="p-3 bg-rose-50 text-rose-700 rounded-xl">
                <AlertCircle size={24} />
              </div>
            </div>

          </div>

          {/* Quick Actions / Recent Activity Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Recent Pending Approvals */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-800">সাম্প্রতিক সদস্যপদ আবেদনসমূহ</h3>
                <button className="text-xs text-emerald-700 font-semibold hover:underline">সব দেখুন</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 text-gray-400 text-xs uppercase">
                      <th className="py-2.5">নাম ও আইডি</th>
                      <th className="py-2.5">পেশা ও এলাকা</th>
                      <th className="py-2.5">রক্তের গ্রুপ</th>
                      <th className="py-2.5 text-right">পদক্ষেপ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    <tr>
                      <td className="py-3">
                        <p className="font-semibold text-gray-800">মো. রাশেদুল ইসলাম</p>
                        <span className="text-xs text-gray-400">ID: MMS-2026-0251</span>
                      </td>
                      <td className="py-3 text-gray-600">ব্যবসা, সিরাজদিখান</td>
                      <td className="py-3"><span className="px-2 py-0.5 bg-red-50 text-red-600 rounded font-semibold text-xs">A+</span></td>
                      <td className="py-3 text-right">
                        <button className="bg-emerald-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-emerald-700">অনুমোদন</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <p className="font-semibold text-gray-800">ফাতিমা আক্তার</p>
                        <span className="text-xs text-gray-400">ID: MMS-2026-0252</span>
                      </td>
                      <td className="py-3 text-gray-600">শিক্ষার্থী, মধ্যপাড়া</td>
                      <td className="py-3"><span className="px-2 py-0.5 bg-red-50 text-red-600 rounded font-semibold text-xs">O+</span></td>
                      <td className="py-3 text-right">
                        <button className="bg-emerald-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-emerald-700">অনুমোদন</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Upcoming Meeting / Notices */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-gray-800 mb-3">আসন্ন মিটিং ও নোটিশ</h3>
                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-3 rounded-r-lg mb-3">
                  <span className="text-xs font-bold text-emerald-800">বুধবার, রাত ৯:০০ টা</span>
                  <p className="text-sm text-gray-700 mt-1">কার্যকরী পরিষদের মাসিক সাধারণ সভা ও ত্রাণ বিতরণ পর্যালোচনা।</p>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-lg">
                  <span className="text-xs font-bold text-amber-800">বিশেষ নোটিশ</span>
                  <p className="text-sm text-gray-700 mt-1">চলতি মাসের চাঁদা পরিশোধের শেষ তারিখ আগামী ২৫ তারিখ।</p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 text-center">
                <span className="text-xs text-gray-400">স্লোগান: মানুষ মানুষের জন্য; মানবতাই সেবা।</span>
              </div>
            </div>

          </div>

        </main>

      </div>
    </div>
  );
}