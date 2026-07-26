/**
 * Answer Engine Utility
 * Generates tailored, comprehensive responses for student queries based on category and question content.
 */

const KNOWLEDGE_BASE = {
  admission: {
    title: "Admission Guidance & Information",
    default: "For admissions, applications are accepted through the official portal. Eligibility criteria require a minimum of 60% in previous academic coursework. You will need high school marksheets, ID proof, and passport photos for document verification.",
    keywords: {
      fee: "Tuition fees can be paid in installments per semester. Fee structures and scholarship options (merit-based and financial aid) are available at the accounts desk.",
      date: "Admission deadlines and counselling schedules are updated on the college bulletin. Late applications are subject to seat availability.",
      cutoff: "Cut-off lists are generated based on entrance examination scores and previous academic board performance."
    }
  },
  infrastructure: {
    title: "Campus Infrastructure & Facilities",
    default: "Our campus provides modern smart classrooms, high-speed Wi-Fi, well-equipped computer & science laboratories, and high-tech auditoriums.",
    keywords: {
      wifi: "Campus-wide Wi-Fi access is available to all registered students. You can obtain your login credentials from the IT support desk.",
      lab: "Laboratories are open from 8:00 AM to 6:00 PM on weekdays. Lab safety guidelines must be strictly followed.",
      library: "The central library holds over 50,000 books, journals, and digital research subscriptions accessible via student ID."
    }
  },
  hostel: {
    title: "Hostel Accommodation Details",
    default: "Hostel rooms are assigned on a first-come, first-served basis. Facilities include 24/7 security, Wi-Fi, laundry facilities, study lounges, and nutritious meals.",
    keywords: {
      fee: "Hostel fee covers room rent, mess charges, and utility bills per semester.",
      curfew: "Hostel entry curfew is 9:30 PM for safety. Out-pass permissions are managed digitally.",
      room: "Double and triple sharing rooms are available with furnished beds, study desks, and wardrobes."
    }
  },
  canteen: {
    title: "Canteen & Food Services",
    default: "The main campus canteen operates from 8:00 AM to 8:00 PM serving fresh, hygienic vegetarian and non-vegetarian meals, snacks, and beverages.",
    keywords: {
      menu: "Daily menu items include breakfast combos, thalis, fresh juices, and evening snacks.",
      hygiene: "Regular food safety audits are conducted to maintain high hygiene standards."
    }
  },
  academics: {
    title: "Academic & Course Guidance",
    default: "Academic programs follow the updated university curriculum. Attendance of 75% is mandatory to be eligible for mid-term and end-term examinations.",
    keywords: {
      syllabus: "Detailed course syllabi and reference materials are uploaded on the student portal under LMS.",
      exam: "End-semester examinations are conducted twice a year. Exam schedules are published 3 weeks in advance.",
      result: "Semester results and GPA cards can be viewed directly on the student dashboard."
    }
  },
  sports: {
    title: "Sports & Physical Education",
    default: "We offer sports facilities for cricket, football, basketball, badminton, chess, and table tennis, along with a modern fitness gym.",
    keywords: {
      trial: "Annual sports team selection trials take place in August. Interested students can register with the Sports Director.",
      gym: "The campus gym is accessible from 6:00 AM to 8:00 AM and 5:00 PM to 8:00 PM."
    }
  },
  extracurricular: {
    title: "Clubs & Extracurricular Activities",
    default: "Students can join various student-run clubs including Cultural, Coding, Robotics, Drama, Literary, and Environmental societies.",
    keywords: {
      event: "Inter-college cultural and tech fests are hosted annually during the spring semester."
    }
  },
  environment: {
    title: "Campus Environment & Safety",
    default: "Our campus is a green, ragging-free zone equipped with 24/7 CCTV surveillance, eco-friendly solar lighting, and active student safety committees."
  },
  coordination: {
    title: "Teacher-Student Coordination & Mentorship",
    default: "Every student is assigned a Faculty Mentor for academic advisory, career counseling, and personal guidance during office hours."
  }
};

function generateAnswer(category, question) {
  const catKey = (category || "").toLowerCase().trim();
  const queryLower = (question || "").toLowerCase();
  
  const categoryData = KNOWLEDGE_BASE[catKey] || {
    title: "General Campus Assistance",
    default: "Thank you for reaching out. Our academic counseling team has recorded your question and will provide personalized guidance."
  };

  let specificDetail = "";
  if (categoryData.keywords) {
    for (const [kw, text] of Object.entries(categoryData.keywords)) {
      if (queryLower.includes(kw)) {
        specificDetail = `\n\nSpecific Information (${kw.toUpperCase()}): ${text}`;
        break;
      }
    }
  }

  const responseText = `Dear Student,\n\nRegarding your inquiry under [${categoryData.title}]:\n"${question}"\n\nGuidance & Solution:\n${categoryData.default}${specificDetail}\n\nFor further assistance, feel free to contact the campus helpdesk or reply to this email.`;

  return responseText;
}

module.exports = { generateAnswer };
