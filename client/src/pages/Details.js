// import React, { useState } from "react";

// export default function ProfileEditorUI() {
//   const userId = "682ca86bda7da87f23317bd1"; // Replace with real user ID

//   const [personalEmail, setPersonalEmail] = useState("");
//   const [collegeEmail, setCollegeEmail] = useState("");
//   const [cgpa, setCgpa] = useState("");
//   const [sgpa, setSgpa] = useState("");
//   const [achievement, setAchievement] = useState("");
//   const [certification, setCertification] = useState("");
//   const [skill, setSkill] = useState("");

//   const updateField = async (endpoint, data) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/user/${endpoint}/${userId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });
//       if (res.ok) alert(`${Object.keys(data)[0]} updated successfully`);
//       else alert("Update failed");
//     } catch (error) {
//       console.error(error);
//       alert("Error occurred");
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 space-y-8 font-sans">
//       {/* Personal Email */}
//       <div>
//         <label className="block font-semibold mb-1">Personal Email</label>
//         <input
//           type="email"
//           value={personalEmail}
//           onChange={(e) => setPersonalEmail(e.target.value)}
//           className="border border-gray-300 rounded px-3 py-2 w-full"
//         />
//         <button
//           onClick={() => updateField("update-email", { email: [personalEmail] })}
//           className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Update Personal Email
//         </button>
//       </div>

//       {/* College Email */}
//       <div>
//         <label className="block font-semibold mb-1">College Email</label>
//         <input
//           type="email"
//           value={collegeEmail}
//           onChange={(e) => setCollegeEmail(e.target.value)}
//           className="border border-gray-300 rounded px-3 py-2 w-full"
//         />
//         <button
//           onClick={() => updateField("update-email", { email: [collegeEmail] })}
//           className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Update College Email
//         </button>
//       </div>

//       {/* SGPA */}
//       <div>
//         <label className="block font-semibold mb-1">SGPA</label>
//         <input
//           type="number"
//           step="0.01"
//           value={sgpa}
//           onChange={(e) => setSgpa(e.target.value)}
//           placeholder="Add new SGPA"
//           className="border border-gray-300 rounded px-3 py-2 w-full"
//         />
//         <button
//           onClick={() => updateField("add-sgpa", { sgpa: parseFloat(sgpa) })}
//           className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//         >
//           Add SGPA
//         </button>
//       </div>

//       {/* CGPA */}
//       <div>
//         <label className="block font-semibold mb-1">CGPA</label>
//         <input
//           type="text"
//           value={cgpa}
//           onChange={(e) => setCgpa(e.target.value)}
//           className="border border-gray-300 rounded px-3 py-2 w-full"
//         />
//         <button
//           onClick={() => updateField("update-cgpa", { cgpa })}
//           className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Update CGPA
//         </button>
//       </div>

//       {/* Achievements */}
//       <div>
//         <label className="block font-semibold mb-1">Achievements</label>
//         <input
//           type="text"
//           value={achievement}
//           onChange={(e) => setAchievement(e.target.value)}
//           placeholder="Add new achievement"
//           className="border border-gray-300 rounded px-3 py-2 w-full"
//         />
//         <button
//           onClick={() => updateField("add-achievement", { achievement })}
//           className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//         >
//           Add Achievement
//         </button>
//       </div>

//       {/* Certifications */}
//       <div>
//         <label className="block font-semibold mb-1">Certifications</label>
//         <input
//           type="text"
//           value={certification}
//           onChange={(e) => setCertification(e.target.value)}
//           placeholder="Add new certification"
//           className="border border-gray-300 rounded px-3 py-2 w-full"
//         />
//         <button
//           onClick={() => updateField("add-certification", { certification })}
//           className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//         >
//           Add Certification
//         </button>
//       </div>

//       {/* Skills */}
//       <div>
//         <label className="block font-semibold mb-1">Skills</label>
//         <input
//           type="text"
//           value={skill}
//           onChange={(e) => setSkill(e.target.value)}
//           placeholder="Add new skill"
//           className="border border-gray-300 rounded px-3 py-2 w-full"
//         />
//         <button
//           onClick={() => updateField("add-skill", { skill })}
//           className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//         >
//           Add Skill
//         </button>
//       </div>
//     </div>
//   );
// }





// // import React, { useEffect, useState } from "react";

// // export default function ProfileEditor() {
// //   // const [profile, setProfile] = useState(null);

// //   // const [newSgpa, setNewSgpa] = useState("");
// //   // const [newAchievement, setNewAchievement] = useState("");
// //   // const [newCertification, setNewCertification] = useState("");
// //   // const [newSkill, setNewSkill] = useState("");

// //   // useEffect(() => {
// //   //   fetch("http://localhost:5000/api/profile")
// //   //     .then((res) => res.json())
// //   //     .then((data) => setProfile(data))
// //   //     .catch((err) => alert("Error fetching profile"));
// //   // }, []);

// //   // const updateField = async (field, value) => {
// //   //   const updated = { ...profile, [field]: value };
// //   //   const response = await fetch("http://localhost:5000/api/profile", {
// //   //     method: "PUT",
// //   //     headers: { "Content-Type": "application/json" },
// //   //     body: JSON.stringify(updated),
// //   //   });
// //   //   if (response.ok) {
// //   //     setProfile(updated);
// //   //     alert(`${field} updated successfully`);
// //   //   } else {
// //   //     alert(`Failed to update ${field}`);
// //   //   }
// //   // };

// //   // if (!profile) return <div className="p-4">Loading...</div>;

// //   // const addToList = async (field, newItem, setter) => {
// //   //   if (newItem.trim()) {
// //   //     const updatedList = [...profile[field], newItem.trim()];
// //   //     await updateField(field, updatedList);
// //   //     setter("");
// //   //   }
// //   // };

// //   return (
// //     <div className="max-w-3xl mx-auto p-6 space-y-8 font-sans">
// //       {/* Emails */}
// //       <div>
// //         <label className="block font-semibold mb-1">Personal Email</label>
// //         <input
// //           type="email"
// //           // value={profile.personalEmail}
// //           // onChange={(e) => setProfile({ ...profile, personalEmail: e.target.value })}
// //           className="border border-gray-300 rounded px-3 py-2 w-full"
// //         />
// //         <button
// //           // onClick={() => updateField("personalEmail", profile.personalEmail)}
// //           className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// //         >
// //           Update Personal Email
// //         </button>
// //       </div>

// //       <div>
// //         <label className="block font-semibold mb-1">College Email</label>
// //         <input
// //           type="email"
// //           // value={profile.collegeEmail}
// //           // onChange={(e) => setProfile({ ...profile, collegeEmail: e.target.value })}
// //           className="border border-gray-300 rounded px-3 py-2 w-full"
// //         />
// //         <button
// //           // onClick={() => updateField("collegeEmail", profile.collegeEmail)}
// //           className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// //         >
// //           Update College Email
// //         </button>
// //       </div>

// //       {/* SGPA */}
// //       <div>
// //         <label className="block font-semibold mb-1">SGPA List</label>
// //         <div className="mb-2">
// //           {/* {profile.sgpaList.map((sgpa, i) => (
// //             <span key={i} className="inline-block bg-gray-200 text-gray-800 px-2 py-1 mr-2 rounded">
// //               {sgpa}
// //             </span>
// //           ))} */}
// //         </div>
// //         <input
// //           type="number"
// //           step="0.01"
// //           placeholder="Add new SGPA"
// //           // value={newSgpa}
// //           // onChange={(e) => setNewSgpa(e.target.value)}
// //           className="border border-gray-300 rounded px-3 py-2 w-full"
// //         />
// //         <button
// //           onClick={() => {
// //             // const val = parseFloat(newSgpa);
// //             // if (!isNaN(val)) addToList("sgpaList", val, setNewSgpa);
// //             // else alert("Enter a valid SGPA number");
// //           }}
// //           className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
// //         >
// //           Add SGPA
// //         </button>
// //       </div>

// //       {/* CGPA */}
// //       <div>
// //         <label className="block font-semibold mb-1">CGPA</label>
// //         <input
// //           type="text"
// //           // value={profile.cgpa}
// //           // onChange={(e) => setProfile({ ...profile, cgpa: e.target.value })}
// //           className="border border-gray-300 rounded px-3 py-2 w-full"
// //         />
// //         <button
// //           // onClick={() => updateField("cgpa", profile.cgpa)}
// //           className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// //         >
// //           Update CGPA
// //         </button>
// //       </div>

// //       {/* Achievements */}
// //       <div>
// //         <label className="block font-semibold mb-1">Achievements</label>
// //         <ul className="list-disc list-inside mb-2">
// //           {/* {profile.achievements.map((a, i) => (
// //             <li key={i}>{a}</li>
// //           ))} */}
// //         </ul>
// //         <input
// //           type="text"
// //           placeholder="Add new achievement"
// //           // value={newAchievement}
// //           // onChange={(e) => setNewAchievement(e.target.value)}
// //           className="border border-gray-300 rounded px-3 py-2 w-full"
// //         />
// //         <button
// //           // onClick={() => addToList("achievements", newAchievement, setNewAchievement)}
// //           className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
// //         >
// //           Add Achievement
// //         </button>
// //       </div>

// //       {/* Certifications */}
// //       <div>
// //         <label className="block font-semibold mb-1">Certifications</label>
// //         <ul className="list-disc list-inside mb-2">
// //           {/* {profile.certifications.map((c, i) => (
// //             <li key={i}>{c}</li>
// //           ))} */}
// //         </ul>
// //         <input
// //           type="text"
// //           placeholder="Add new certification"
// //           // value={newCertification}
// //           // onChange={(e) => setNewCertification(e.target.value)}
// //           className="border border-gray-300 rounded px-3 py-2 w-full"
// //         />
// //         <button
// //           // onClick={() => addToList("certifications", newCertification, setNewCertification)}
// //           className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
// //         >
// //           Add Certification
// //         </button>
// //       </div>

// //       {/* Skills */}
// //       <div>
// //         <label className="block font-semibold mb-1">Skills</label>
// //         <ul className="list-disc list-inside mb-2">
// //           {/* {profile.skills.map((s, i) => (
// //             <li key={i}>{s}</li>
// //           ))} */}
// //         </ul>
// //         <input
// //           type="text"
// //           placeholder="Add new skill"
// //           // value={newSkill}
// //           // onChange={(e) => setNewSkill(e.target.value)}
// //           className="border border-gray-300 rounded px-3 py-2 w-full"
// //         />
// //         <button
// //           // onClick={() => addToList("skills", newSkill, setNewSkill)}
// //           className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
// //         >
// //           Add Skill
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }
