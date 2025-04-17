import React from "react";

export default function ResumePage() {
  return (<div className="flex w-[50vw] ">
    <h1 className="text-3xl font-bold mb-2">Akash Ahmad Malik</h1>
    <p className="text-lg font-semibold">Full Stack Software Engineer</p>
    <div className="flex  justify-between items-center mt-2">
      <p>Maulana Mohammad Ali Jauhar Marg, Jamia Nagar, New Delhi - 110025</p>
     <div className=" space-x-4"> 
        <p>📞 <a href="tel:+919103597816" className="text-blue-500">9103597816</a></p>
        <p>📧 <a href="mailto:your.email@gmail.com" className="text-blue-500">Email</a></p>
        <p>💻 <a href="https://github.com/yourusername" className="text-blue-500">GitHub</a></p>
        <p>🌐 <a href="https://yourportfolio.com" className="text-blue-500">Portfolio</a></p>
        <p>🧠 <a href="https://leetcode.com/yourusername" className="text-blue-500">LeetCode</a></p>
      </div>
    </div>
  </div>


  )

}