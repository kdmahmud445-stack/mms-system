import React, { useState } from 'react';
import { 
  Users, DollarSign, Heart, Calendar, Shield, 
  Code, Phone, X, ExternalLink, Crown, MapPin, User, 
  Mail, Globe, Droplet, Stethoscope, Utensils, BookOpen, 
  HelpCircle, AlertTriangle, TreePine, Sparkles, Briefcase, 
  Users2, CheckCircle2, UserPlus, Search, Lock, LogOut, Menu 
} from 'lucide-react';

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [loginPhone, setLoginPhone] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [showDevModal, setShowDevModal] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // লগইন হ্যান্ডলার
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginPhone === '01568000445' && loginPassword === 'MMS@2026a') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('ভুল নম্বর অথবা পাসওয়ার্ড! সঠিক তথ্য দিন।');
    }
  };

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

  // সম্পূর্ণ সদস্য তালিকা (নতুন ২ জনসহ ১৩৮ জন)
  const [membersList] = useState([
    {"id": "MMS2026227", "name": "Nirob Rana", "father": "Nijam Uddin", "address": "Mirkadim, Munshiganj", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026228", "name": "খলিলুর রহমান", "father": "মৃত বাদশামিয়া", "address": "বিক্রমপুর, গ্রাম: দক্ষিণ বাকশা, থানা: শ্রীনগর, মুন্সিগঞ্জ", "phone": "N/A", "blood": "জানা নেই"},
    {"id": "MMS2026001", "name": "মোঃ নাজমুল ইসলাম", "father": "মো:হানিফ  শেখ", "address": "দাসতির বাগ, মধ্যপাড়া, লৌহজং, মুন্সিগঞ্জ", "phone": "01819390632", "blood": "O-"},
    {"id": "MMS2026002", "name": "কাউসার মাহমুদ", "father": "মোঃ নজরুল ইসলাম", "address": "ফুরশাইল, মালখানগর, সিরাজদিখান, মুন্সিগঞ্জ।", "phone": "01568000445", "blood": "B+"},
    {"id": "MMS2026003", "name": "শেখ মোঃ রোমান", "father": "আব্দুল খালেক শেখ", "address": "গ্রামঃ বানকাইজ, ইউনিয়নঃ কলমা, লৌহজং, মুন্সিগঞ্জ", "phone": "+966581831594", "blood": "A-"},
    {"id": "MMS2026004", "name": "মোঃ জসিম হালদার", "father": "হাজি আঃ হাই হালদার", "address": "কামারখাড়া,সর্নগ্রাম,টংগীবাড়ি, মুন্সিগঞ্জ", "phone": "+966573325256", "blood": "O+"},
    {"id": "MMS2026005", "name": "রাবেয়া আক্তার", "father": "কাজী আতাহার", "address": "দাসতির বাগ, মধ্যপাড়া, লৌহজং, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026006", "name": "সুরাইয়া আক্তার", "father": "মাওঃ শামসুল আলম", "address": "ভাটেরচর, গজারিয়া, মুন্সিগঞ্জ।", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026007", "name": "তানিয়া আকতার", "father": "নুর ইসলাম গাজি", "address": "টংগীবাড়ি, কামাড় খাড়া", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026021", "name": "মোঃ বিপ্লব হোসাইন", "father": "মোঃ বাবুল মিয়া", "address": "৮নং ওয়ার্ড গ্রাম,, কুটিপাড়া,, মিরকাদিম পৌরসভা মুন্সিগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026022", "name": "মোহাম্মদ দেলোয়ার হোসেন", "father": "আঃ রহমান সরকার", "address": "আব্দুল্লাপুর, টঙ্গীবাড়ী, মুন্সিগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026023", "name": "লিমা আক্তার", "father": "মৃত্যু  আব্দল হক হাওলাদর", "address": "গ্রাম দঃ তাজপুর পোঃ দঃ তাজপুর থানা সিরাজ দিখান  জেলা মুন্সীগজ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026101", "name": "Md. Alamin madbor", "father": "Late.Md.Shakander madbor", "address": "Mulchar ,Dighirpr,tongibari,Munshigonj", "phone": "N/A", "blood": "B-"},
    {"id": "MMS2026102", "name": "Al Rafi", "father": "Atour Rahman", "address": "Armohal, Malkhanagar, Sirajdikhan, Munshiganj", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026103", "name": "মোঃ ইসমাইল", "father": "নজরুল শেখ", "address": "গ্রাম: কলমা, ইউনিয়ন : কলমা, উপজেলা : লৌহজং,জেলা: মুন্সিগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026104", "name": "মোঃ ইয়াকুব খান", "father": "মোঃ আলি খান", "address": "মুন্সিগঞ্জ জেলা লৌহজং থানা খিদির পাড়া ইউনিয়ন গ্রাম করার বাগ৷ ৯নং ওয়্যার্ড", "phone": "N/A", "blood": "AB+"},
    {"id": "MMS2026105", "name": "রাসেল দেওয়ান", "father": "মোহন মিয়া দেওয়ান", "address": "মুন্সি গন্জ সদর থানা", "phone": "N/A", "blood": "জানা নেই"},
    {"id": "MMS2026106", "name": "আলমগীর হোসাইন", "father": "তোতা মাদবর", "address": "ঝাউটিয়,লৌহজং তেউটিয়,লৌহজং, মুন্সিগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026107", "name": "Md. Sharif Hossain", "father": "Md. Anwar Hossain", "address": "গ্রামঃ দাস্তির বাগ, ইউনিয়নঃ খিদিরপাড়া, থানাঃ লৌহজং, জেলাঃ মুন্সীগঞ্জ।", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026108", "name": "মাওলানা আসাদুল্লাহ খান আল-আমিন", "father": "মৃত মুফতি আহসান উল্লাহ", "address": "কলমা লৌহজং মুন্সিগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026109", "name": "মো: ওসমান শেখ", "father": "মো:রফিক শেখ", "address": "ইসলামপুর, বালিগাও, টংগীবাড়ি, মুন্সিগন্জ", "phone": "N/A", "blood": "জানা নেই"},
    {"id": "MMS2026110", "name": "মনসুর আলী", "father": "মুজিবপর বেপারী", "address": "বানাদেশ নপাড়া নড়িয়া শরীয়তপুর", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026111", "name": "রুহুল আমিন", "father": "ইদ্রিস হাওলাদার", "address": "কামারখারা, টঙ্গী বাড়ি , মুন্সিগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026112", "name": "Mahmuda akther mim", "father": "Md milon bepary", "address": "Louhojong kolma", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026113", "name": "মোহাম্মাদ আশরাফ", "father": "জাহাঞ্জীর আলম", "address": "রশুনিয়া.সিরাজদিখান. মুন্সিগঞ্জ।", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026114", "name": "মো: তরিকুল ইসলাম", "father": "মো:আনিস সরকার", "address": "বাঘাইকান্দি,ভিটিহোগলা,মুন্সিগঞ্জ,মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026115", "name": "মোঃ আবু সাঈদ", "father": "মোঃ সুলতান বেপারি", "address": "কাতলাপাড়া,৮নং ওয়ার্ড, মিরকাদিম পৌরসভা, মুন্সিগন্জ সদর, মুন্সিগন্জ।", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026116", "name": "Hanif Talukder", "father": "Late  Abdul Aziz talukder", "address": "করার বাগ, খিদিরপাড়া  ইউনিয়ন\nলৌহজং মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026117", "name": "আফরিন", "father": "আলিম", "address": "বাঘড়া ইউনিয়ন,শ্রীনগর,মুন্সিগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026118", "name": "মোঃ ইসহাক", "father": "হাঃ সিদ্দিক মোল্যা", "address": "কুকটিয়া শ্রীনগর মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026119", "name": "মোঃ আতিকুর রহমান", "father": "মোঃ ছিদ্দিক সরকার", "address": "আব্দুল্লাহপুর, টঙ্গীবাড়ি, মুন্সিগঞ্জ", "phone": "N/A", "blood": "জানা নেই"},
    {"id": "MMS2026120", "name": "হযরত আলি", "father": "নবি আলি হালদার", "address": "বেশনাল,দিঘীরপাড়, টংগীবাড়ি", "phone": "N/A", "blood": "A-"},
    {"id": "MMS2026121", "name": "মো: অনিক কাজী", "father": "কাজী আতাহার", "address": "বয়রাগাদী  সিরাজ দিখান মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026122", "name": "MD. RAJA MIAH SARDAR", "father": "SHAMSUDDIN SARDAR", "address": "abdullapur  tongi Bari  munshiganj", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026123", "name": "ইসমাহিল  মাদবর", "father": "নুরু মাদবর", "address": "টঙ্গীবাড়ি মুন্সিগঞ্জ কামাখারা ইউনিয়", "phone": "N/A", "blood": "A-"},
    {"id": "MMS2026124", "name": "দুলাল বেপারী", "father": "আব্দুল হাই বেপারী", "address": "মধ্যপাড়া, সিরাজদিখান, মুন্সিগঞ্জ।", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026125", "name": "হাবিবুর রহমান", "father": "আব্দুর রশিদ", "address": "ইছাপুর, সিরাজদিখান, মুন্সিগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026126", "name": "মোঃ রাজিব হোসেন", "father": "মৃত আঃ খালেক মোল্যা", "address": "শিলই চর বেহের পাড়া মুন্সিগঞ্জ  সদর", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026127", "name": "আসমা আক্তার", "father": "মৃত্যু আলাউদ্দিন বেপারী", "address": "গ্রাম ঃ- জিরানন্দ পট্টি, পোঃ- মিরকাদিম, থানা+জেলাঃ- মুন্সিগঞ্জ।", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026128", "name": "রুপা বেগম", "father": "মঞ্জিল মোল্লা", "address": "উত্তর ইসলামপুর, মুন্সিগঞ্জ।", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026129", "name": "জহিরুল ইসলাম", "father": "কামরুল সিকদার", "address": "বাংলাবাজার, মুন্সিগন্জ সদর, জেলা মুন্সিগন্জ", "phone": "N/A", "blood": "AB+"},
    {"id": "MMS2026130", "name": "মোঃ ওমর ফারুক  হালদার", "father": "মোহাম্মদ রফিক হালদার", "address": "কামারখারা টঙ্গী বাড়ি  মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026131", "name": "আঃ কাদির", "father": "মহিউদ্দিন মোল্যা", "address": "বেশনাল", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026132", "name": "MOHAMMED SUJON SHEIKH", "father": "NUR MOHAMED", "address": "মুন্সিগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026133", "name": "মোঃ ওয়াসিম", "father": "মৃত্যু: মোঃ হারাব শাহ্", "address": "গ্রাম ও পোস্ট অফিস: টেংগারচর, থানা: গজারিয়া,  জেলা: মুন্সিগঞ্জ ঢাকা বাংলাদেশ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026134", "name": "মোঃ জুয়েল বেপারী", "father": "মৃত আবুল হোসেন বেপারী", "address": "আব্দুল্লাহপুর ৩ নং ওয়ার্ড, টঙ্গীবাড়ী,মুন্সিগঞ্জ", "phone": "N/A", "blood": "জানা নেই"},
    {"id": "MMS2026135", "name": "মানিক মিয়া", "father": "মৃত সাহেব আলী বেপারী", "address": "গ্রাম:বেহের পাড়া পোস্ট: দিঘীর পাড় থানা: টঙ্গীবাড়ি জেলা: মুন্সীগঞ্জ।", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026136", "name": "Abdul Barek", "father": "Md jabbar munshi", "address": "Beshnal,kamarkhara,Tongibari,Munshiganj", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026137", "name": "সেখ শান্ত", "father": "সোহরাব শেখ", "address": "বানকাইজ, কলমা, লৌহজং, মুন্সিগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026138", "name": "সাইফ আল ইসলাম ভূঁইয়া", "father": "হাজী মোহাম্মদ শাহজালাল ভূঁইয়া", "address": "গ্রাম দোসর পাড়া ইউনিয় লতবদি থানা সিরাজদিখান", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026139", "name": "ইফতেখার ইসলাম সোহেল", "father": "ইউনুস শেখ", "address": "গ্রাম উত্তর ইউনিয়ন তন্তর  শ্রীনগর মুন্সীগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026140", "name": "Abdullah Mohammed Taher", "father": "Jahirul haque", "address": "Baliakandi, banglabazar, munshigonj", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026141", "name": "মো: জাহিদ  শেখ", "father": "মো: বাচ্চু শেখ", "address": "বয়রাগাদী সিরাজদিখান মুন্সিগনজ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026142", "name": "মোঃ মাকসুদ হোসেন", "father": "বাদশা মিয়া শেখ", "address": "বানিয়াগাও, বেজগাও, লৌহজং, মুন্সিগঞ্জ", "phone": "N/A", "blood": "AB+"},
    {"id": "MMS2026143", "name": "Mawlana Shahidullah", "father": "Abdul Hai Hawlader", "address": "KamarKhara, Sarnagram, Tongibari, Munshiganj", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026144", "name": "দ্বীন ইসলাম", "father": "আলী মিয়া বেপারী", "address": "Dewankandi, adhara,sadar", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026145", "name": "ইমরান দেওয়ান", "father": "আনোয়ার দেওয়ান", "address": "গ্রাম: দ্বীপাড়া,  ইউনিয়ন : বেতকা,  উপজেলা : টঙ্গীবাড়ী,  জেলা : মুন্সিগঞ্জ", "phone": "N/A", "blood": "AB+"},
    {"id": "MMS2026146", "name": "আবদুল্লাহ", "father": "মোতালেব বেপারী", "address": "নোয়াদ্দা", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026147", "name": "শারমিন সুলতানা", "father": "মোঃ আরব আলী", "address": "কাশীপুর। কাউন্সিল। ফতুল্লা। নারায়ণগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026148", "name": "শারমিন আক্তার", "father": "দেলোয়ার হোসেন", "address": "গ্রাম মধ্যপাড়া ইউনিয়ন মধ্যপাড়া উপজেলা সিরাজদিখান জেলা মুন্সিগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026149", "name": "MD JASHIM", "father": "MD SHAHABUDDIN SHEIKH", "address": "CHOTFOTIA, BETKA BAZAR,TONGIBARI,MUNSIGUNJ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026150", "name": "Rafiqul Hassan Russell", "father": "A j M Shahidullha", "address": "Motokpur, Dhipur, Tongibari Monshigonj", "phone": "N/A", "blood": "AB-"},
    {"id": "MMS2026151", "name": "মোহাম্মদ শফিকুল ইসলাম", "father": "মোহাম্মদ তাজুল ইসলাম", "address": "কড়ার বাগ, খিদির পারা, লৌহজ;, মুন্সি গঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026152", "name": "ইঞ্জিনিয়ার হাবিবুর রহমান জুয়েল", "father": "মরহূম হাতেম আলী বেপারী", "address": "দিঘীরপাড় জেলা মুন্সিগঞ্জ উপজেলার টঙ্গীবাড়ী থানা টঙ্গীবাড়ী গ্রাম", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026153", "name": "Abul basar Sorder", "father": "Md.noroul islam sorder", "address": "Barun.po.barun.ps.kapasia.Gazipur", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026154", "name": "আল আমিন খলিফা", "father": "আব্দুল আজিজ খলিফা", "address": "কামারখাড়া, স্বর্নগ্রাম, টংগিবাড়ী, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026155", "name": "রাবেয়া শারমিন", "father": "জয়নাল আবদীন", "address": "গ্রাম+ইউ: বেজগাঁও, লৌহজং, মুন্সিগঞ্জ।", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026156", "name": "Shakil Ahmed", "father": "Rana Ahmed", "address": "Furshail . Malkhanogor.shirajdikan", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026157", "name": "মোঃ জাহাঙ্গীর হোসেন", "father": "মোঃ শফিউদ্দিন", "address": "গ্রাম,আব্দুল্লাহপুর, ইউনিয়ন, আব্দুল্লাহপুর, উপজেলা ,টঙ্গীবাড়ি ,জেলা ,মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026158", "name": "মুহাম্মদ নাহিদ খাঁন", "father": "আবদুল লতিফ খাঁন", "address": "গাঁওদিয়া, গাঁওদিয়া, লৌহজং, মুন্সীগঞ্জ।", "phone": "N/A", "blood": "AB+"},
    {"id": "MMS2026159", "name": "সিফাত ভূইঁয়া", "father": "ফরহাদ হোসেন ভূইঁয়া", "address": "উওর কাসী কসবা,রামপাল ইউনিয়ন, মুন্সীগঞ্জ সদর,", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026160", "name": "মোঃ তোফাজ্জল হোসেন", "father": "মোঃ জেদ্দাল হোসেন বেপারী", "address": "ফুলতলা,চরকেওয়ার,মুন্সিগঞ্জ সদর,মুন্সিগঞ্জ ৷", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026161", "name": "শেরা আলী ভূঁইয়া", "father": "মিছির আলী ভূঁইয়া", "address": "মোল্লাকান্দি ইউনিয়ন। ঢালি কান্দির চর সেরাজাবাদ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026162", "name": "Md. Sagor Hossain", "father": "Md. Abul Hossain", "address": "Doskani,panchosar,munshiganj", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026163", "name": "এডভোকেট শামীম মাহমুদ", "father": "দিল মোহাম্মদ", "address": "গ্রাম: ডিঙ্গাভাঙ্গা,ইউনিয়ন:পঞ্চসার,উপজেলা:মুন্সিগঞ্জ সদর,জেলা:মুন্সিগঞ্জ।", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026164", "name": "Md shahadat hossin", "father": "Ahsan ulla", "address": "Pura tongibari Munshignaj", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026165", "name": "md jual rana", "father": "Allauddin Bepari", "address": "South medinimondal,louhojonj,munshigonj", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026166", "name": "মোহাম্মদ নুর", "father": "নুর ইসলাম মোল্লা", "address": "দিঘিড় পাড় ইউনিয়ন টংগিবাড়ি মুনসিগনজ", "phone": "N/A", "blood": "AB+"},
    {"id": "MMS2026167", "name": "মোঃ শরীফ হোসেন মুন্সী", "father": "মোঃ আওলাদ হোসেন", "address": "মুন্সীগঞ্জ সিরাজদিখান বালুচর ইউনিয়ন", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026168", "name": "রেজাউল করিম মাদবর", "father": "আলি আকবর মাদবর", "address": "পাইক পাড়া টংগীবাড়ি মুন্সীগজ", "phone": "N/A", "blood": "জানা নেই"},
    {"id": "MMS2026169", "name": "Noman ahmad", "father": "Mufty md harunur rashid", "address": "Hatkhan, joshlong,tongibari,munshigonj.", "phone": "N/A", "blood": "B-"},
    {"id": "MMS2026170", "name": "শুভ হাওলাদার", "father": "আব্দুল হামিদ হাওলাদার", "address": "মুন্সিগঞ্জ টঙ্গীবাড়ি আব্দুল্লাপুর", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026171", "name": "মাসুদ দেওয়ান", "father": "মোকলেছ দেওয়ান", "address": "চন্দন ধুল, ইছাপুরা, সিরাজদিখান, মুন্সিগঞ্জ।", "phone": "N/A", "blood": "জানা নেই"},
    {"id": "MMS2026172", "name": "Kazi Emtiaz Quraishi", "father": "Let. Alhaj Kazi Mokhlesur Rahaman Quraishi", "address": "Utter Kewar (Khalilur Rahaman Peersaheb Baree ) , Mohakali, Oard No -1, Munshiganj Sadar, Munshiganj.", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026173", "name": "Md.Hanif Islam Arif", "father": "Salauddin bepary", "address": "Charkewar union porisod. Jela Munshiganj sodor", "phone": "N/A", "blood": "জানা নেই"},
    {"id": "MMS2026174", "name": "আলমগীর হোসেন", "father": "ছবু মোল্লা", "address": "মোল্লা কান্দি ইউনিয়ন আনন্দপুর গ্রাম উপজেলা মুন্সিগঞ্জ সদর", "phone": "N/A", "blood": "জানা নেই"},
    {"id": "MMS2026175", "name": "আব্দুল রহমান", "father": "আলম বেপারী", "address": "ডুলিহাটা ডিপুর টগিবারী মুন্সিগজ", "phone": "N/A", "blood": "AB+"},
    {"id": "MMS2026176", "name": "মোঃ সজিব শেখ", "father": "মোঃ ফজলুল হক", "address": "বাসা-৮১৮ ভাটপাড়া, কামারখাড়া, টংগীবাড়ি, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026177", "name": "মোঃ কুতুব উদ্দিন", "father": "আহসান উল্লাহ খান", "address": "দক্ষিণ মুলচর 5 নং ওয়ার্ড দিঘীরপাড় টঙ্গীবাড়ী মুন্সিগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026178", "name": "মুহাম্মাদ রানা", "father": "মোহাম্মাদ মজিবর রহমান", "address": "মাঠপাড়া সদর মুন্সীগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026179", "name": "আলো আক্তার", "father": "মো : বাবুল মিয়া", "address": "টরকী, চরকেওয়ার, মুন্সিগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026180", "name": "Jahidul Islam Gazi", "father": "হাজী মোঃ আব্দুর রহমান গাজী", "address": "গ্রামঃ খাসমহল বালুচর, ইউনিয়নঃ বালুচর, থানাঃ সিরাজদিখান, জেলাঃ মুন্সিগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026181", "name": "নাসির শেখ", "father": "কাসেম শেখ", "address": "গ্রাম নয়নয়াদ উপজেলা টংগীবাডী জেলা মুন্সীগঞ্জ ইউনিয়ন ঠিপুর", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026182", "name": "Urme akter", "father": "Abu sahid sheikh", "address": "North betka,Betka,Tongibari,Munshiganj", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026183", "name": "মো সোবহান প্রধান", "father": "মো মজিবুর রহমান", "address": "পুরান বাউশিয়া গজারিয়া মুন্সি গন্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026184", "name": "মো: শামীম হোসেন", "father": "মৃত : মো:ইব্রাহিম শেখ", "address": "জেলা:মুন্সীগঞ্জ/থানা:টংগীবাড়ী /ইউনিয়ন:বেতকা/গ্রাম:ছটফটিয়া।", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026185", "name": "মোঃ বিল্লাল হোসেন", "father": "আফছার উদ্দিন", "address": "নয়াগাঁও সিরাজ দিখান মুন্সিগঞ্জে", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026186", "name": "সোহাগ হালদার", "father": "নুরুল আমিন হাওলাদার", "address": "বানাদেশ, দিঘিরপাড়, টঙ্গীবাড়ী, মুন্সীগঞ্জ", "phone": "N/A", "blood": "জানা নেই"},
    {"id": "MMS2026187", "name": "Md.Miraz Ahmed Deowan", "father": "Md.Harun or rashid deowan", "address": "বালিগাও টংগীবাড়ী", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026188", "name": "ফাহিমা আক্তার শিলা", "father": "মজিবুর ঢালি", "address": "পূর্ব আলদী, টঙ্গীবাড়ী, মুন্সিগঞ্জ।", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026189", "name": "MOLLAH MIZANUR RAHMAN", "father": "Abul hossain mollah", "address": "Bagbari,bibondi,srenagar,Munshigonj", "phone": "N/A", "blood": "O-"},
    {"id": "MMS2026190", "name": "ওয়াসিম", "father": "আনসু মল্লিক", "address": "গ্রাম দক্ষিন কেওয়ার ইউনিয়ন মহাকালী থানা উপজেলা মুন্সিগঞ্জ", "phone": "N/A", "blood": "জানা নেই"},
    {"id": "MMS2026191", "name": "মোঃ আবু বক্কর সিদ্দিক", "father": "মোঃ আক্কাছ আলী", "address": "গ্রাম,- খাসমহল বালুচর\nইউনিয়ন,-খাসমহল বালুচর \nসিরাজদিখান মুন্সিগঞ্জ", "phone": "N/A", "blood": "AB+"},
    {"id": "MMS2026192", "name": "Md Sharif Hossain", "father": "Abul Kalam Molla", "address": "Panam, Rampal, Mirkadim, Munshiganj Sador, Munshiganj.", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026193", "name": "ইঞ্জিনিয়ার মোঃ ইব্রাহিম বেপারি", "father": "মোঃ মিজানুর রহমান বেপারি", "address": "গ্রাম: ভাসার চর বেপারি বাড়ি, ইউনিয়ন:গুয়াগাছিয়া, উপজেলা: গজারিয়া, জেলা: মুন্সিগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026194", "name": "Moniruggaman", "father": "Md jobbar fakir", "address": "Bill:nurpoor. Union: haridiea. P/s: lohojong. Dust: munshigonj", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026195", "name": "প্রকৌশলী মুহাম্মদ রাসেল খন্দকার", "father": "এএইচএম হাবিবুল্লাহ খন্দকার", "address": "গ্রাম+পোঃ লতব্দী, ইউনিয়ন ঃলতব্দী,উপজেলা ঃসিরাজদিখান,জেলাঃমুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026196", "name": "রবিন রাজ", "father": "মো:মুক্তার হোসেন", "address": "সমসাবাদ ষোলঘর", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026197", "name": "মোঃ ফিরোজ আহমেদ", "father": "মোঃ জালাল উদ্দিন", "address": "গ্রাম -দক্ষিন ফুলদী, ইউনিয়ন -গজারিয়া, উপজেলা -গজারিয়া,জলা- মুন্সীগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026198", "name": "MD EMRAN", "father": "mo nuru halder", "address": "munsrhaganj jela thana tongibadi union dighirpad", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026199", "name": "গাজী ফয়সাল", "father": "নূরে মাওলা গাজী", "address": "জেলা, মুন্সিগঞ্জ \nউপজেলা, সিরাজদিখান \nইউনিয়ন, বয়রাগাদী \nগ্রাম, ছোটপাউলদিয়া", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026200", "name": "বিল্লাল হোসেন", "father": "শফি সরদার", "address": "ছোট মাকহাটি, মহাখালী, সদর, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026201", "name": "Md Alamgir Hossain (Emon)", "father": "Md. Joynal Sheikh", "address": "28/2A Ganak Tulle lane dhaka -12050", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026202", "name": "মোঃ হেলাল খান আদি", "father": "আব্দুল খালেক মাতুব্বর", "address": "মুন্সিগঞ্জ শ্রীনগর বালাশুর", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026203", "name": "আবুল খায়ের সেন্টু", "father": "মৃত আবুল কাশেম", "address": "গ্রাম বক্তারকান্দি, ইউনিয়ন বাউশিয়া,গজারিয়া, মুন্সিগঞ্জ", "phone": "N/A", "blood": "জানা নেই"},
    {"id": "MMS2026204", "name": "শান্ত শেখ", "father": "আক্কাস শেখ", "address": "পানিয়া,তন্তর,শ্রীনগড়,মুন্সীগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026205", "name": "আরিফ জমাদার", "father": "নুরুল ইসলাম জমাদার", "address": "গ্রাম: চর-বলাকী ১৫১০,\nইউনিয়ন: হোসেন্দী,\nউপজেলা: গজারিয়া,\nজেলা: মুন্সীগুঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026206", "name": "মো: কবির হোসেন", "father": "হাসেম হালদার", "address": "গ্রাম: বানাদেশ\nইউনিয়ন: দিঘীরপার\nউপজেলা: মুন্সীগন্জ সদর\nজেলা: মুন্সীগন্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026207", "name": "মোঃ ফাহিম ইসলাম রোমান", "father": "মোঃ আবু কালাম বাগোজা", "address": "গ্রাম:নোয়াদ্দ,ইউনিয়ন:আউটশাহী,উপজেলা :টংগিবাড়ি, জেলা:মুন্সিগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026208", "name": "মোঃ আনোয়ারুল হক (রাফি)", "father": "মোঃ মকছেদ আলী", "address": "হাতীবান্ধা, লালমনির হাট, রংপুর।", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026209", "name": "Md Mehedi Hasan Bepari", "father": "Saheb Ali Bepari", "address": "Beherpara, Dighirpar, Tongibari, Munshiganj", "phone": "N/A", "blood": "AB+"},
    {"id": "MMS2026210", "name": "Shakib Shake Miraj", "father": "Mogibor Rahman", "address": "DASTIRBAG, khidirpara,lohojong, munshigonj", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026211", "name": "MD RASEL", "father": "MD ABDUS SALAM", "address": "Viill-Bhatneshar p.o- Ariol p.s- Tongibari Dist-Munshiganj .", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026212", "name": "মো শিপন খলিফা", "father": "হাজী কাদির খলিফা", "address": "আব্দুল্লাহপুর টংগিবাড়ী মুন্সীগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026213", "name": "মোঃ নুরজামাল হোসেন", "father": "মোঃ সিরাজ মৃধা", "address": "বাসা- নং-১০০০৪২, গ্রাম - নসংকর -পোস্ট অফিস - নসংকর-১৫২৫-ওয়ার্ড নং -৬ - ইউনিয়ন - কামারখাড়া - থানা - টংগীবাড়ী - জেলা -মুন্সিগঞ্জ", "phone": "N/A", "blood": "জানা নেই"},
    {"id": "MMS2026214", "name": "Al maruf apon", "father": "Aslam sheikh", "address": "Kazi kosba rampal Munshignaj", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026215", "name": "Mohammad Robel", "father": "Sultan Sardar", "address": "Bankaij . kalma.Louhajong . Mounshiganj", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026216", "name": "শেখ শাহানা আক্তার ইতি", "father": "মোঃ আলী হোসেন শেখ", "address": "বাসা-৭৯১, গ্রাম - নসংকর-পোস্ট অফিস - নসংকর- ১৫২৫- ওয়াড নং-৬ ইউনিয়ন - কামারখাড়া- থানা- টংগীবাড়ি- জেলা- মুন্সিগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026217", "name": "MD.Anwar Hossain", "father": "Abdul jalil bepari", "address": "Chardegree.p.o.hoglakandi,gazaria,munshiganj", "phone": "N/A", "blood": "AB+"},
    {"id": "MMS2026218", "name": "মোঃ রোকন", "father": "আব্দুল হালিম", "address": "সলিমাবাদ ওয়াড নং 4 পোস্ট আব্দুল্লাপুর টংগীবাড়ি মুন্সীগঞ্জ", "phone": "N/A", "blood": "জানা নেই"},
    {"id": "MMS2026219", "name": "মো: আবু তাহের", "father": "মো: আবদুর রাজ্জাক", "address": "চিনাবুনিয়া, চালিতাবুনিয়া, রাঙ্গাবালী, পটুয়াখালী", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026220", "name": "মোঃ মোকলেস শেখ", "father": "হাজারী শেখ", "address": "কড়ারবাগ, খিদিরপাড়া, লৌহজং, মুন্সিগঞ্জ।", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026221", "name": "আওলাদ হোসেন", "father": "মিরালি হালদার", "address": "ভিটি মালধা", "phone": "N/A", "blood": "AB+"},
    {"id": "MMS2026222", "name": "অন্তর ইসলাম অন্তু।", "father": "মো:সাচ্চু হোসেন।", "address": "গোড়াকান্দা। কলমা। লৌহজং । মুন্সিগজ।", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026223", "name": "Nahid hasan", "father": "Abu sayed", "address": "Kutipara ,mirkadim. munsigonj", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026224", "name": "sheikh Sharif", "father": "Samsul sheikh", "address": "গ্রাম নেত্রাবতী সোনা রং ইউনিয়ন উপজেলা টঙ্গীবাড়ী", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026225", "name": "Ruma Akter", "father": "MD Delour hosen", "address": "14 no kalunager hazaribagh Dhaka 1209", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026226", "name": "RABBI HASAN", "father": "MD KAMAL", "address": "Mirkadim Munshiganj", "phone": "N/A", "blood": "O+"}
  ]);

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

  // ফিল্টার করা সদস্য
  const filteredMembers = membersList.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // যদি লগইন করা না থাকে
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-emerald-900 flex items-center justify-center p-4 font-sans">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl border border-emerald-100 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow border-2 border-emerald-600">
              <Lock className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">অ্যাডমিন লগইন</h2>
            <p className="text-xs text-gray-500">মুন্সিগঞ্জ মানবসেবা সংগঠন ম্যানেজমেন্ট সিস্টেম</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">মোবাইল নম্বর (ID)</label>
              <input 
                type="text" 
                placeholder="01568000445" 
                value={loginPhone}
                onChange={(e) => setLoginPhone(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald-600"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">পাসওয়ার্ড (Password)</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald-600"
                required
              />
            </div>

            {loginError && (
              <p className="text-xs text-rose-500 font-medium text-center">{loginError}</p>
            )}

            <button 
              type="submit"
              className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-medium text-sm transition-colors shadow-md"
            >
              লগইন করুন
            </button>
          </form>

          <div className="text-center pt-2 border-t border-gray-100">
            <p className="text-xs text-gray-400">Software & Web Developer: কাউসার মাহমুদ</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* 🟢 টপ হেডার */}
      <header className="bg-emerald-800 text-white px-3 sm:px-6 py-3 flex items-center justify-between gap-3 shadow-md">
        
        {/* লোগো ও সংগঠনের নাম + অফিশিয়াল মেইল ও ফেসবুক পেজ */}
        <div className="flex items-center gap-3">
          {/* মোবাইল মেনু টগল বাটন */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-white hover:bg-emerald-700 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>

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
            <h1 className="text-sm sm:text-xl font-bold leading-tight">মুন্সিগঞ্জ মানবসেবা সংগঠন</h1>
            
            {/* ছোট করে অফিশিয়াল মেইল ও ফেসবুক পেজ লিংক */}
            <div className="hidden sm:flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] text-emerald-200 mt-0.5">
              <a href="mailto:munshiganjmanobsebasonggothon@gmail.com" className="flex items-center gap-1 hover:underline">
                <Mail className="w-3 h-3 text-emerald-300" /> munshiganjmanobsebasonggothon@gmail.com
              </a>
              <span>•</span>
              <a href="https://www.facebook.com/munshiganj.manobseba" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline text-emerald-100">
                <Globe className="w-3 h-3 text-blue-300" /> Facebook Page
              </a>
            </div>
          </div>
        </div>

        {/* 🔴 চলমান (Marquee) ডেভেলপার ইনফো */}
        <div className="hidden lg:block flex-1 max-w-xs overflow-hidden bg-emerald-900/80 px-3 py-1.5 rounded-full text-xs border border-emerald-700/60 shadow-inner">
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

        {/* ডানপাশে Admin রোল ও লগআউট বাটন */}
        <div className="flex items-center gap-2">
          <span className="bg-emerald-700 text-emerald-100 text-xs px-2.5 py-1 rounded-full border border-emerald-600 font-semibold">
            Admin
          </span>
          <button 
            onClick={() => setIsLoggedIn(false)}
            title="লগআউট"
            className="p-1.5 bg-emerald-700 hover:bg-rose-600 text-white rounded-full transition-colors border border-emerald-600"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* মূল বডি Layout */}
      <div className="flex flex-1 relative">
        
        {/* 🟢 সাইডবার */}
        <aside className={`
          fixed md:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 p-4 flex flex-col justify-between 
          transform transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          mt-[61px] md:mt-0 shadow-lg md:shadow-none
        `}>
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">প্রধান মেনু</p>
              <nav className="space-y-1">
                <button 
                  onClick={() => { setActiveTab('dashboard'); setMobileMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-left ${activeTab === 'dashboard' ? 'bg-emerald-50 text-emerald-700 font-bold' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <Users className="w-4 h-4" /> ড্যাশবোর্ড
                </button>
                <button 
                  onClick={() => { setActiveTab('members'); setMobileMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-left ${activeTab === 'members' ? 'bg-emerald-50 text-emerald-700 font-bold' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <Users className="w-4 h-4" /> সদস্য ব্যবস্থাপনা
                </button>
                <button 
                  onClick={() => { setActiveTab('donations'); setMobileMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-left ${activeTab === 'donations' ? 'bg-emerald-50 text-emerald-700 font-bold' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <DollarSign className="w-4 h-4" /> অনুদান ও হিসাবরক্ষণ
                </button>
                <button 
                  onClick={() => { setActiveTab('services'); setMobileMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-left ${activeTab === 'services' ? 'bg-emerald-50 text-emerald-700 font-bold' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <Heart className="w-4 h-4" /> সেবাসমূহ
                </button>
              </nav>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">অন্যান্য</p>
              <nav className="space-y-1">
                <button 
                  onClick={() => { setActiveTab('committee'); setMobileMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-left ${activeTab === 'committee' ? 'bg-emerald-50 text-emerald-700 font-bold' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <Shield className="w-4 h-4" /> কমিটি ও শাসনকার্য
                </button>

                <button 
                  onClick={() => { setShowDevModal(true); setMobileMenuOpen(false); }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-all text-left mt-2"
                >
                  <Code className="w-4 h-4 text-emerald-600" /> 
                  <span>ডেভেলপার তথ্য</span>
                </button>
              </nav>
            </div>
          </div>
        </aside>

        {/* মোবাইল মেনু ব্যাকগ্রাউন্ড ওভারলে */}
        {mobileMenuOpen && (
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/40 z-30 md:hidden"
          />
        )}

        {/* 🟢 মূল কনটেন্ট */}
        <main className="flex-1 p-4 sm:p-6 space-y-6 overflow-y-auto">
          
          {/* যদি 'সদস্য ব্যবস্থাপনা' ট্যাব সিলেক্ট করা হয় */}
          {activeTab === 'members' ? (
            <div className="space-y-6">
              <div className="bg-emerald-800 rounded-2xl p-6 text-white shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-1 flex items-center gap-2">
                    <Users className="w-6 h-6 text-amber-400" /> সদস্য ব্যবস্থাপনা ও তালিকা ({membersList.length} জন)
                  </h2>
                  <p className="text-emerald-200 text-sm">
                    মুন্সিগঞ্জ মানবসেবা সংগঠনের রেজিস্টার্ড সকল সদস্যের তথ্য।
                  </p>
                </div>
                
                {/* সদস্য আবেদন বাটন (গুগল ফর্ম লিংক যুক্ত) */}
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc0Zu8cxYkNWokVEr5AlbV062lXwYfyT1xRZStM1Y7LPU0Itg/viewform?usp=send_form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-4 py-2.5 rounded-xl text-sm shadow transition-colors flex items-center gap-2 shrink-0"
                >
                  <UserPlus className="w-4 h-4" /> নতুন সদস্য আবেদন
                </a>
              </div>

              {/* সার্চ বক্স */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                <Search className="w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="সদস্যের নাম, আইডি বা ঠিকানা দিয়ে খুঁজুন..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full text-sm outline-none bg-transparent"
                />
              </div>

              {/* সদস্যদের টেবিল */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="sticky top-0 bg-emerald-50 z-10">
                      <tr className="text-emerald-900 text-xs uppercase tracking-wider border-b border-gray-100">
                        <th className="p-4 font-semibold">মেম্বার আইডি</th>
                        <th className="p-4 font-semibold">সদস্যের নাম</th>
                        <th className="p-4 font-semibold">পিতার নাম</th>
                        <th className="p-4 font-semibold">ঠিকানা</th>
                        <th className="p-4 font-semibold">মোবাইল</th>
                        <th className="p-4 font-semibold text-center">রক্তের গ্রুপ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                      {filteredMembers.length > 0 ? (
                        filteredMembers.map((member, index) => (
                          <tr key={index} className="hover:bg-gray-50/80 transition-colors">
                            <td className="p-4 font-medium text-emerald-700">{member.id}</td>
                            <td className="p-4 font-bold text-gray-800">{member.name}</td>
                            <td className="p-4 text-gray-600">{member.father}</td>
                            <td className="p-4 text-gray-600 max-w-xs truncate">{member.address}</td>
                            <td className="p-4">
                              {member.phone !== "N/A" ? (
                                <a href={`tel:${member.phone}`} className="text-emerald-600 hover:underline flex items-center gap-1 font-medium">
                                  <Phone className="w-3.5 h-3.5" /> {member.phone}
                                </a>
                              ) : (
                                <span className="text-gray-400 font-medium">N/A</span>
                              )}
                            </td>
                            <td className="p-4 text-center">
                              <span className="bg-rose-50 text-rose-600 font-bold text-xs px-2.5 py-1 rounded-full border border-rose-100">
                                {member.blood || 'N/A'}
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className="p-6 text-center text-gray-400">কোনো সদস্য পাওয়া যায়নি।</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : activeTab === 'services' ? (
            // যদি 'সেবাসমূহ' ট্যাব সিলেক্ট করা হয়
            <div className="space-y-6">
              <div className="bg-emerald-800 rounded-2xl p-6 text-white shadow-lg">
                <h2 className="text-xl sm:text-2xl font-bold mb-1 flex items-center gap-2">
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
                <h2 className="text-xl sm:text-2xl font-bold mb-1 flex items-center gap-2">
                  <Crown className="w-6 h-6 text-amber-400" /> প্রতিষ্ঠাতা পরিষদ (স্থায়ী মর্যাদাপ্রাপ্ত)
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
                
                <div className="flex flex-wrap items-center gap-3">
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc0Zu8cxYkNWokVEr5AlbV062lXwYfyT1xRZStM1Y7LPU0Itg/viewform?usp=send_form"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-4 py-2 rounded-lg text-sm shadow transition-colors flex items-center gap-2"
                  >
                    <UserPlus className="w-4 h-4" /> সদস্য আবেদন ফরম
                  </a>

                  <button 
                    onClick={() => setActiveTab('committee')}
                    className="bg-emerald-700 hover:bg-emerald-600 text-white font-medium px-4 py-2 rounded-lg text-sm shadow transition-colors flex items-center gap-2 border border-emerald-600"
                  >
                    <Crown className="w-4 h-4" /> প্রতিষ্ঠাতা পরিষদ
                  </button>
                </div>
              </div>

              {/* পরিসংখ্যান কার্ড */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div 
                  onClick={() => setActiveTab('members')}
                  className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm cursor-pointer hover:border-emerald-300 transition-all"
                >
                  <p className="text-xs text-gray-500">মোট রেজিস্টার্ড সদস্য</p>
                  <h3 className="text-2xl font-bold text-gray-800 my-1">{membersList.length} জন</h3>
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded">তালিকা দেখতে ক্লিক করুন</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <p className="text-xs text-gray-500">চলতি মাসের চাঁদা সংগ্রহ</p>
                  <h3 className="text-2xl font-bold text-gray-800 my-1">৳ ১০,৬১০</h3>
                  <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded">বকেয়া: ৳ ৩,২০০</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <p className="text-xs text-gray-500">বর্তমান ফান্ড ব্যালেন্স</p>
                  <h3 className="text-2xl font-bold text-gray-800 my-1">৳ ২৮,২৮০.১৪</h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">ক্যাশ ও ব্যাংক মিলিয়ে</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <p className="text-xs text-gray-500">পেন্ডিং আবেদন</p>
                  <h3 className="text-2xl font-bold text-gray-800 my-1">00 টি</h3>
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