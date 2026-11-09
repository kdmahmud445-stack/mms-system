import React, { useState } from 'react';
import { 
  Users, DollarSign, Heart, Calendar, Shield, 
  Code, Phone, X, ExternalLink, Crown, MapPin, User, 
  Mail, Globe, Droplet, Stethoscope, Utensils, BookOpen, 
  HelpCircle, AlertTriangle, TreePine, Sparkles, Briefcase, 
  Users2, CheckCircle2, UserPlus, Search 
} from 'lucide-react';

export default function Dashboard() {
  const [showDevModal, setShowDevModal] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

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

  // এক্সেল (weebb.xlsx) থেকে সংগৃহীত সম্পূর্ণ ১৩৬ জন সদস্যের তালিকা
  const [membersList] = useState([
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
    {"id": "MMS2026103", "name": "খায়রুল ইসলাম", "father": "আব্দুল ছালাম শেখ", "address": "বানকাইজ কড়ই তলা, লৌহজং মুন্সীগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026104", "name": "মোঃ মেহেদী হাসান", "father": "মোঃ হারুন অর রশীদ", "address": "পশ্চিম রাজদিয়া , সিরাজদিখান , মুন্সিগঞ্জ।", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026105", "name": "Abdul haq", "father": "Md abul kashem mondal", "address": "Mulchar,Dighirpar,Tongibari,Munshigonj", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026106", "name": "সাব্বির হোসেন রাজু", "father": "মোস্তফা প্রধানীয়া", "address": "হোসেন্দী , গজারিয়া , মুন্সিগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026107", "name": "মাসুম শেখ", "father": "মোঃ সেলিম শেখ", "address": "গ্রাম : বানকাইজ, ইউনিয়ন: কলমা, উপজেলা: লৌহজং, জেলা : মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026108", "name": "Abdullah Al Noman Sheikh", "father": "Sumon Sheikh", "address": "Bankaiz , Kolma, Louhajang, Munshiganj", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026109", "name": "মোঃ রিয়াদ হাসান", "father": "মোঃ দেলোয়ার হোসেন", "address": "হোসেন্দী, গজারিয়া, মুন্সিগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026110", "name": "মাওঃ মোঃ রবিউল হোসেন", "father": "মোঃ আনোয়ার হোসেন", "address": "গ্রাম-বড় বেতাকী, ডাকঘর-রাধানগর, উপজেলা-সিরাজদিখান, জেলা-মুন্সিগঞ্জ।", "phone": "N/A", "blood": "AB+"},
    {"id": "MMS2026111", "name": "মোঃ কাউছার শেখ", "father": "মোঃ জালাল শেখ", "address": "বানকাইজ, কলমা, লৌহজং, মুন্সীগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026112", "name": "আলিফ হোসেন", "father": "মোঃ ফারুক হোসেন", "address": "বানকাইজ,কলমা,লৌহজং,মুন্সিগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026113", "name": "তানজিনা আক্তার", "father": "মোঃ কবির হোসেন", "address": "হোসেন্দী, গজারিয়া, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026114", "name": "মোঃ আক্তার হোসেন", "father": "মোঃ আলফাজ উদ্দীন শেখ", "address": "বানকাইজ, কলমা, লৌহজং, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026115", "name": "Raijul Saem Raiyan", "father": "M. A. Gaffar", "address": "Shekharnagar, Sirajdikhan, Munshiganj", "phone": "N/A", "blood": "AB+"},
    {"id": "MMS2026116", "name": "মিজানুর রহমান", "father": "আঃ সালাম হাওলাদার", "address": "চরখিদিরপুর, কালিরচর, গজারিয়া, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026117", "name": "Md Raihan Ahamed", "father": "Md Mizanur rahaman", "address": "Chorkhidirpur, kalirchor,gajaria,munshigonj", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026118", "name": "Md  Shohag Hosen", "father": "Md  Manik Mia", "address": "Gram  islampur. Gujaria Munshiganj", "phone": "N/A", "blood": "AB+"},
    {"id": "MMS2026119", "name": "মোঃ আলামিন হেসেন", "father": "মোঃ সুলতান ভুঁইয়া", "address": "চরচাষী, গজারিয়া, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026120", "name": "মোঃ রিপন", "father": "আ: হালিম", "address": "বানকাইজ,কলমা,লৌহজং,মুন্সিগঞ্জ।", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026121", "name": "মোঃ শাকিব খন্দকার", "father": "মোঃ মফিজুল ইসলাম খন্দকার", "address": "হাতেখোরী, চরপাদোরপুর্, কালিরচোর, গজাড়িয়া, মুন্সিগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026122", "name": "মোঃ জাহিদুল ইসলাম মোল্লা (অপু)", "father": "মোঃ মালেক মোল্লা", "address": "গ্রামঃ দাসতিরবাগ, ইউঃ মধ্যপাড়া, উপজেলাঃ লৌহজং, জেলাঃ মুন্সিগঞ্জ।", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026123", "name": "সুমন ভুইয়া", "father": "মৃত বাবুল ভুইয়া", "address": "ইসা পুর ডাবর কোল্ট ষ্টোরেজ সাথে সিরাজদিখান মুন্সী গন্জ।", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026124", "name": "Md Sajib", "father": "Md Abul Kashem", "address": "Hosendi, Gajaria, Munshiganj", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026125", "name": "মোঃ রাব্বি", "father": "মোঃ সোলাইমান", "address": "ইসলামপুর গজারিয়া মুন্সিগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026126", "name": "মোঃ রানা সরকার", "father": "মোঃ মোশারফ হোসেন সরকার", "address": "ইসলামপুর,গজারিয়া,মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026127", "name": "মোঃ নাফিজ রহমান সায়েম", "father": "সাইদুর রহমান সাইদ", "address": "দাসতির বাগ মধ্যপাড়া লৌহজং মুন্সীগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026128", "name": "Hossen ahamed", "father": "Md noor ahamed mondol", "address": "Mulchar , dighirpar ,tongibari munshigonj", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026129", "name": "Md sojib", "father": "Md sobahan", "address": "Mulchar dighirpar tongibari munshigonj", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026130", "name": "Md shamim", "father": "Md mostofa", "address": "Mulchar dighirpar tongibari munshigonj", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026131", "name": "মোঃ সিফাত সরকার", "father": "মোঃ বাবুল সরকার", "address": "মিনারচর,গজারিয়া,মুন্সিগঞ্জ", "phone": "N/A", "blood": "AB+"},
    {"id": "MMS2026132", "name": "Md Rifat Sarkar", "father": "Md Babul Sarkar", "address": "Minarchor, Gujaria, Munshiganj", "phone": "N/A", "blood": "AB+"},
    {"id": "MMS2026133", "name": "তানজিল শেখ", "father": "মৃত জহিরুল ইসলাম শেখ", "address": "বানকাইজ কলমা লৌহজং মুন্সিগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026134", "name": "মোঃ আব্দুল্লাহ আল নোমান", "father": "মৃত বিল্লাল হোসেন", "address": "দাসতির বাগ, মধ্যপাড়া, লৌহজং, মুন্সীগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026135", "name": "আল মামুন শিমুল", "father": "হুমায়ুন কবির", "address": "রশুনিয়া, সিরাজদিখান, মুন্সিগঞ্জ।", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026136", "name": "Md  Sabbir hosan", "father": "Md  Belal Hossan", "address": "Garam.  Islampur  thana.  Gujaria  zila.  Munshiganj", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026137", "name": "মোঃ আরমান শেখ", "father": "মোঃ তোফায়েল শেখ", "address": "বানকাইজ কলমা লৌহজং মুন্সীগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026138", "name": "Md shihab khan", "father": "Masud khan", "address": "Gram : Dastir bag , Union : Moddopara , Thana : Lohajong , Munshigonj", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026139", "name": "রাহাত হাসান", "father": "আফজাল হোসেন", "address": "দাসতিরবাগ মধ্যপাড়া লৌহজং মুন্সীগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026140", "name": "মোঃ আশিকুর রহমান সাকিব", "father": "মোঃ সিরাজুল ইসলাম প্রামানিক", "address": "পশ্চিম রাজদিয়া , সিরাজদিখান , মুন্সিগঞ্জ।", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026141", "name": "ফারহানা আফরোজ মিমি", "father": "মোঃ ফিরোজ আহাম্মেদ", "address": "পশ্চিম রাজদিয়া , সিরাজদিখান , মুন্সিগঞ্জ।", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026142", "name": "মোঃ জাবেদ হোসাইন", "father": "মোঃ হাবিবুল্লাহ্", "address": "হোসেন্দী, গজারিয়া, মুন্সিগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026143", "name": "Md  Sumon Hosen", "father": "Md  Jamal mia", "address": "Islampur, Gajaria, Munshiganj", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026144", "name": "মৌমিতা আক্তার সেতু", "father": "সাত্তার বেপারী", "address": "দাসতিরবাগ , মধ্যপাড়া ,লৌহজং, মুন্সিগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026145", "name": "মোঃ সাইফুল ইসলাম সুজন", "father": "সোলেমান বেপারী", "address": "দাসতিরবাগ,মধ্যপাড়া,লৌহজং,মুন্সিগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026146", "name": "মোঃ মোশারফ হোসেন প্রামাণিক", "father": "মৃত নিজামুদ্দিন প্রামাণিক", "address": "পশ্চিম রাজদিয়া,সিরাজদিখান,মুন্সিগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026147", "name": "মোঃ তানজিল সেখ", "father": "মো মোশারফ সেখ", "address": "পশ্চিম রাজদিয়া, সিরাজদিখান, মুন্সিগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026148", "name": "MD Rony", "father": "MD Monir Hosen", "address": "Islampur Gajaria Munshigonj", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026149", "name": "মোঃ সিয়াম মিজি", "father": "মোঃ হেলাল মিজি", "address": "চরচাষী গজারিয়া মুন্সীগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026150", "name": "মোঃ সজল মোল্লা", "father": "মোঃ আক্তার হোসেন মোল্লা", "address": "মোকামকুটিয়া,কলমা,লৌহজং,মুন্সিগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026151", "name": "মোঃ সাব্বির হোসেন", "father": "মোঃ খোকন মিয়া", "address": "গ্রামঃ দাসতিরবাগ, ইউঃ মধ্যপাড়া, উপজেলাঃ লৌহজং, জেলাঃ মুন্সিগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026152", "name": "মোহাম্মদ আল আমিন চিশতী", "father": "মোহাম্মদ ইউসুফ চিশতী", "address": "মুকসেদপুর, বালিগাঁও, টংগীবাড়ী, মুন্সীগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026153", "name": "Md Eahian Khan Sanu", "father": "Md Mokarrom Hossain Khan", "address": "Village: Malkhanagar, P.O: Malkhanagar, Thana: Sirajdikhan, District: Munshiganj", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026154", "name": "মোঃ মোনতাছির রহমান ফাহিম", "father": "মোঃ জহিরুল ইসলাম রাজু", "address": "হোসেন্দী, গজারিয়া, মুন্সীগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026155", "name": "ফারহান আহমেদ স্বাধীন", "father": "আবু নাঈম প্রধান", "address": "নয়াকান্দা,গজারিয়া,মুন্সিগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026156", "name": "জিসান বেপারী", "father": "জনি বেপারী", "address": "দাসতিরবাগ, মধ্যপাড়া, লৌহজং, মুন্সীগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026157", "name": "মো: রিফাত হোসেন", "father": "মো: আনোয়ার হোসেন", "address": "ইসা পুর ডাবর কোল্ট ষ্টোরেজ সাথে সিরাজদিখান মুন্সী গন্জ।", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026158", "name": "মৃতঃ আব্দুল মান্নান ভুইয়া", "father": "মৃত হাজী আঃ জলিল ভুইয়া", "address": "হোসেন্দী, গজারিয়া, মুন্সিগঞ্জ।", "phone": "N/A", "blood": "AB+"},
    {"id": "MMS2026159", "name": "মোঃ সামিন ইয়াসার", "father": "কাউসার মাহমুদ", "address": "ফুরশাইল, মালখানগর, সিরাজদিখান, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026160", "name": "মোসাঃ মারিয়া কাউসার", "father": "কাউসার মাহমুদ", "address": "ফুরশাইল, মালখানগর, সিরাজদিখান, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026161", "name": "মোঃ আল হাসিব গোলদার", "father": "মোঃ সিরাজুল ইসলাম গোলদার", "address": "দাসতিরবাগ,মধ্যপাড়া,লৌহজং,মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026162", "name": "MD. YASIN ARAFAT", "father": "MD. KHALILUR RAHMAN KHAN", "address": "Gram : Dastir bag , Union : Moddopara , Thana : Lohajong , Munshigonj", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026163", "name": "MD SOBUJ AHAMED", "father": "MD SOLIMAN MIA", "address": "Village: Vater char, Thana: Gujaria, Dist: Munshiganj", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026164", "name": "মোঃ সানি ভুইঁয়া", "father": "মোঃ বাবুল ভূঁইয়া", "address": "দাসতিরবাগ মধ্যপাড়া লৌহজং মুন্সীগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026165", "name": "মোঃ সাব্বির শেখ", "father": "মোঃ ইসমাইল শেখ", "address": "বানকাইজ,কলমা,লৌহজং,মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026166", "name": "Md Mahim Sheikh", "father": "Md Sajjad Sheikh", "address": "Bankaiz, Kalma, Louhajang, Munshiganj", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026167", "name": "মোহাম্মদ বিল্লাল হোসেন", "father": "মোহাম্মদ লিয়াকত আলী", "address": "ইসা পুর ডাবর কোল্ট ষ্টোরেজ সাথে সিরাজদিখান মুন্সী গন্জ।", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026168", "name": "মোঃ জাহিদুল ইসলাম পিয়াস", "father": "মোঃ রাজু বেপারী", "address": "দাসতিরবাগ মধ্যপাড়া লৌহজং মুন্সীগঞ্জ", "phone": "N/A", "blood": "AB+"},
    {"id": "MMS2026169", "name": "Md: Roman Mollik", "father": "Md: Jamal Mollik", "address": "Hosendi, Gajaria, Munshiganj", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026170", "name": "Md Nazmul Hasan Nishad", "father": "Alomgir Sheikh", "address": "Armohal, Malkhanagar, Sirajdikhan, Munshiganj", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026171", "name": "মোঃ সাইদুল ইসলাম", "father": "মোঃ শাহ জালাল শিকদার", "address": "ফুরশাইল, মালখানগর, সিরাজদিখান, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026172", "name": "মাহমুদুল হাসান মুন্না", "father": "কামাল হোসেন", "address": "ইসলামপুর,গজারিয়া,মুন্সিগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026173", "name": "মো: রুবেল মিয়া", "father": "জয়নাল আবেদিন", "address": "হোসেন্দী, গজারিয়া, মুন্সিগঞ্জ।", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026174", "name": "সজিব খান", "father": "তোফাজ্জল হোসেন খান", "address": "দাসতিরবাগ, মধ্যপাড়া, লৌহজং, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026175", "name": "মোঃ ফাহাদ শেখ", "father": "শেখ মোঃ জহিরুল ইসলাম (হিরু)", "address": "দাসতিরবাগ, মধ্যপাড়া, লৌহজং, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026176", "name": "রেহান রবিন জুয়েল", "father": "মোঃ শফিকুুল ইসলাম বকুল", "address": "দাসতিরবাগ, মধ্যপাড়া, লৌহজং, মুন্সিগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026177", "name": "মোঃ সাকিব শেখ", "father": "মোহাম্মদ আল-আমীন শেখ", "address": "দাসতিরবাগ, মধ্যপাড়া, লৌহজং, মুন্সিগঞ্জ", "phone": "N/A", "blood": "AB+"},
    {"id": "MMS2026178", "name": "মঞ্জিলা আক্তার", "father": "হালিম সর্দার", "address": "দাসতিরবাগ, মধ্যপাড়া, লৌহজং, মুন্সিগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026179", "name": "মুহম্মদ হাবিবুল্লাহ্ জাহাঙ্গীর", "father": "মুহম্মদ শাফি উদ্দীন", "address": "রশুনীয়া, সিরাজদিখান, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026180", "name": "শেখ সাব্বির হোসাইন", "father": "শেখ কাউসার", "address": "দাসতিরবাগ, মধ্যপাড়া, লৌহজং, মুন্সিগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026181", "name": "মোঃ জাহিদ হাসান শান্ত", "father": "মোঃ শাহজাহান", "address": "দাসতিরবাগ, মধ্যপাড়া, লৌহজং, মুন্সিগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026182", "name": "MD Al-amin Sheikh", "father": "MD Faruk Sheikh", "address": "Shekharnagar, Sirajdikhan, Munshiganj", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026183", "name": "শেখ মাহিন আহমেদ জনি", "father": "শেখ শফিক", "address": "দাসতিরবাগ, মধ্যপাড়া, লৌহজং, মুন্সিগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026184", "name": "মোঃ ইয়াসিন শেখ", "father": "মোঃ জাকির শেখ", "address": "দাসতিরবাগ, মধ্যপাড়া, লৌহজং, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026185", "name": "মোঃ তামিম ইকবাল", "father": "আঃ সালাম হাওলাদার", "address": "চরখিদিরপুর, কালিরচর, গজারিয়া, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026186", "name": "সুপ্ত চন্দ্র হাওলাদার", "father": "গোপাল চন্দ্র হাওলাদার", "address": "কালিরচর, গজারিয়া, মুন্সিগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026187", "name": "মোঃ মিরাজ হোসেন", "father": "মোঃ বোরহান বেপারী", "address": "দাসতিরবাগ, মধ্যপাড়া, লৌহজং, মুন্সিগঞ্জ", "phone": "N/A", "blood": "AB+"},
    {"id": "MMS2026188", "name": "মোঃ সিয়াম মিজি", "father": "মোঃ জালাল মিজি", "address": "নয়াকান্দী, হোসেন্দী, গজারিয়া, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026189", "name": "মোঃ শরিফ হোসেন", "father": "মোঃ সোবাহান ভূঁইয়া", "address": "লতব্দী, সিরাজদিখান, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026190", "name": "হৃদয় বেপারী", "father": "মোতালেব বেপারী", "address": "দাসতিরবাগ, মধ্যপাড়া, লৌহজং, মুন্সিগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026191", "name": "MD Nayeem Mia", "father": "Md Abul Kashem", "address": "Hosendi, Gajaria, Munshiganj", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026192", "name": "মোঃ সানি শেখ", "father": "মোঃ সেন্টু শেখ", "address": "বানকাইজ,কলমা,লৌহজং,মুন্সিগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026193", "name": "আরিফুল ইসলাম জয়", "father": "নুরুজ্জামান জিয়াদ", "address": "নয়াকান্দী, হোসেন্দী, গজারিয়া, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026194", "name": "মারুফ খান", "father": "হালিম খান", "address": "বানকাইজ,কলমা,লৌহজং,মুন্সিগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026195", "name": "Md Naimur Rahaman Naim", "father": "Abdul Alim", "address": "Navagram, Baligaon, Tongibari, Munshiganj", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026196", "name": "Md Sabbir Hossain", "father": "Md Jahirul Haque", "address": "Village: Charkhidirpur, Post: Kalirchor, Thana: Gajaria, District: Munshiganj", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026197", "name": "ইমরান শেখ", "father": "রিন্টু শেখ", "address": "বানকাইজ,কলমা,লৌহজং,মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026198", "name": "মোঃ সিয়াম শিকদার", "father": "আবু আল সাইদ শিকদার", "address": "মৈশালা,লৌহজং,মুন্সীগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026199", "name": "MD ALAMIN", "father": "MD SHAH ALAM", "address": "CHAR CHASHI  GUJARIA MUNSHIGANJ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026200", "name": "মোঃ তামিম ইকবাল", "father": "মোঃ মোস্তাফা মিজি", "address": "চরচাষী গজারিয়া মুন্সীগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026201", "name": "MD FOYSAL KHAN", "father": "MD HOSSAIN KHAN", "address": "Village: Kalir char, P.O: Kalir char, P.S: Gajaria, Dist: Munshiganj", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026202", "name": "মোঃ বাপ্পি আহমেদ", "father": "মোঃ বাবুল শেখ", "address": "দাসতিরবাগ, মধ্যপাড়া, লৌহজং, মুন্সীগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026203", "name": "Md Mahim Mahmud Tanvir", "father": "M A Gaffar", "address": "Shekharnagar, Sirajdikhan, Munshiganj", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026204", "name": "মোঃ জাহিদুল ইসলাম পিয়াস", "father": "মোঃ রাজু বেপারী", "address": "দাসতিরবাগ মধ্যপাড়া লৌহজং মুন্সীগঞ্জ", "phone": "N/A", "blood": "AB+"},
    {"id": "MMS2026205", "name": "মোঃ মাহিন শেখ", "father": "মোঃ আলমগীর শেখ", "address": "দাসতিরবাগ, মধ্যপাড়া, লৌহজং, মুন্সীগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026206", "name": "মোঃ ইমাদুল হাসান সিফাত", "father": "মোঃ রফিক বেপারী", "address": "দাসতিরবাগ, মধ্যপাড়া, লৌহজং, মুন্সীগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026207", "name": "মো: রুবেল ইসলাম", "father": "মৃত: আবুল খায়ের", "address": "দাসতিরবাগ, মধ্যপাড়া, লৌহজং, মুন্সীগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026208", "name": "Md Saiful Islam", "father": "Late Md Shahjahan", "address": "Shekharnagar, Sirajdikhan, Munshiganj", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026209", "name": "মো সাব্বির আহমেদ", "father": "মো নাসির ভূঁইয়া", "address": "নয়াকান্দী, হোসেন্দী, গজারিয়া, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026210", "name": "মোঃ শাকিল আহাম্মেদ", "father": "মোঃ আঃ মালেক ভূইয়া", "address": "নয়াকান্দী, হোসেন্দী, গজারিয়া, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026211", "name": "মোঃ শিহাব শেখ", "father": "মৃত বাবুল শেখ", "address": "দাসতিরবাগ, মধ্যপাড়া, লৌহজং, মুন্সীগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026212", "name": "Md: Mehedi Hasan Tarafder", "father": "Md: Delwer Tarafder", "address": "Sultaniapara, Gazaria, Tongibari, Munshiganj.", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026213", "name": "রিফাতুল ইসলাম", "father": "মো: রফিকুল ইসলাম", "address": "ফুরশাইল, মালখানগর, সিরাজদিখান, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026214", "name": "Md. Nazmul Hassan", "father": "Late. Md. Sahajahan Sarkar", "address": "Charkhidirpur, kalirchor, Gajaria, Munshiganj", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026215", "name": "মোঃ হাবিবুল্লাহ সরকার", "father": "মৃত মোজাম্মেল হক সরকার", "address": "নারায়ণপুর, গজারিয়া, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026216", "name": "MD RASEL", "father": "MD AMAN ULLAH KHAN", "address": "Vill: Dastirbag, P.S: Lohajang, Dist: Munshiganj", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026217", "name": "মোঃ সামিন ইয়াসার", "father": "কাউসার মাহমুদ", "address": "ফুরশাইল, মালখানগর, সিরাজদিখান, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026218", "name": "মোসাঃ মারিয়া কাউসার", "father": "কাউসার মাহমুদ", "address": "ফুরশাইল, মালখানগর, সিরাজদিখান, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026219", "name": "নাজমুল খান", "father": "নুরুজ্জামান খান", "address": "দাসতিরবাগ, মধ্যপাড়া, লৌহজং, মুন্সিগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026220", "name": "আলিফ শেখ", "father": "আল-আমিন শেখ", "address": "দাসতিরবাগ, মধ্যপাড়া, লৌহজং, মুন্সিগঞ্জ", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026221", "name": "মোঃ রিয়াদ", "father": "মৃত জহিরুল ইসলাম শেখ", "address": "বানকাইজ কলমা লৌহজং মুন্সিগঞ্জ", "phone": "N/A", "blood": "B+"},
    {"id": "MMS2026222", "name": "মোঃ রাজু ভূঁইয়া", "father": "মৃত বাবুল ভূঁইয়া", "address": "দাসতিরবাগ, মধ্যপাড়া, লৌহজং, মুন্সীগঞ্জ", "phone": "N/A", "blood": "O+"},
    {"id": "MMS2026223", "name": "Md Siyam", "father": "Abdul Alim Tarafder", "address": "Tongibari Munshiganj", "phone": "N/A", "blood": "AB+"},
    {"id": "MMS2026224", "name": "Md Shahadat Hossain", "father": "Late Md Shahajan", "address": "Mirkadim Munshiganj", "phone": "N/A", "blood": "A+"},
    {"id": "MMS2026225", "name": "SM Saiful Islam", "father": "Md Sultan Ahmed", "address": "14 no kalunager hazaribagh Dhaka 1209", "phone": "N/A", "blood": "O+"},
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
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-left ${activeTab === 'members' ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <Users className="w-4 h-4" /> সদস্য ব্যবস্থাপনা
                </button>
                <button 
                  onClick={() => setActiveTab('donations')}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-left ${activeTab === 'donations' ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:bg-gray-50'}`}
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
          
          {/* যদি 'সদস্য ব্যবস্থাপনা' ট্যাব সিলেক্ট করা হয় */}
          {activeTab === 'members' ? (
            <div className="space-y-6">
              <div className="bg-emerald-800 rounded-2xl p-6 text-white shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">
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
                
                <div className="flex items-center gap-3">
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