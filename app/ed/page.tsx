import RightArrow from "@/components/rightArrow"
import ThreeTexts from "@/components/mainpage/threeText"
import Layout from "@/components/layyy"

export default function A() {
    return  <Layout> <div className="h-screen flex w-max">
      <ThreeTexts  nav="/pros" t1="B-Tech Computer Engineering" t2="Jamia Millia Islamia , New Delhi 110025." 
      t3={college}
      t4=" Aug 2022 - May 2026 " 
      links={[{l1:"https://drive.google.com/file/d/1VHfcJLD8fiaKNbQDGNS7KNHqO31dwKGE/view?usp=drive_link"  ,  l2:"💾 Drive"}]}></ThreeTexts>

      <ThreeTexts  nav="/pros" t1="JEE Mains and JEE Advanced" t2="Petronet Kashmir Super 30 , Srinagar Kashmir." 
      t3={data}
      t4={"Sept 2021 - Aug 2022"} 
      links={[{l1:"https://drive.google.com/drive/u/0/folders/1VBKGDT7q4WWNCuIjlHhReuCcu8uG2KJ5" , l2:"💾 Drive"}]}
></ThreeTexts>

      <ThreeTexts  nav="/pros" t1="PCMB 12th Boards" t2="Govt Higher Secondary School , Dangiwacha Rafiabad Baramulla Kashmir." 
      t3={school}
      t4="Sept 2019 - Sept 2021 "
      links={[{l1:"https://drive.google.com/file/d/1t3xIZu66qB-XvXVahJB-8ZZWbjffF9jp/view?usp=drive_link" , l2:"💾 Drive"}]}
></ThreeTexts>
          <div className="hidden md:flex"><RightArrow  linkk="/pros" /></div>
      
  </div></Layout>
}



const Mainspercentiles = [
  { 
    subject : "Physics" , 
    percentile : 95
  } , 
  { 
    subject : "Chemistry" , 
    percentile : 95
  } , 
  { 
    subject : "Math" , 
    percentile : 88
  } , 
]

const Advancedspercentiles = [
  { 
    subject : "Physics" , 
    marks : 48
  } , 
  { 
    subject : "Chemistry" , 
    percentile : 5
  } , 
  { 
    subject : "Math" , 
    percentile : 5
  } , 
]

const data = (
  <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white shadow-sm p-4">
    <div className="list-decimal list-inside space-y-4">
      <div className="text-slate-700 font-medium text-sm md:text-base">
        <div className="flex justify-between px-4 py-2">
          <span className="font-bold text-lg">1. JEE Mains 2022</span>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex justify-between px-4 py-2 bg-slate-100 rounded-t-md border-b border-slate-300">
            <span className="font-semibold text-slate-700 text-sm md:text-base">Subject</span>
            <span className="font-bold text-slate-700 text-sm md:text-base">Percentile</span>
          </div>
          {Mainspercentiles.map((p, i) => (
            <div
              className="flex justify-between px-4 py-3 border-b border-slate-200 last:border-b-0 hover:bg-slate-50 transition-colors duration-150"
              key={i}
            >
              <span className="font-semibold text-slate-700 text-sm md:text-base">{p.subject}</span>
              <span className="font-bold text-slate-700 text-sm md:text-base">{p.percentile}</span>
            </div>
          ))}
          <div className="flex justify-between px-4 py-3 bg-slate-100 font-semibold text-slate-900 border-t border-slate-300 rounded-b-md">
            <span className="text-sm md:text-base">AIR RANK </span>
            <span className="text-sm md:text-base">44K</span>
          </div>
        </div>
      </div>
      <div className="text-slate-700 font-medium text-sm md:text-base">
        <div className="flex justify-between px-4 py-2">
          <span className="font-bold text-lg">2. JEE Advanced 2022 </span>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex justify-between px-4 py-2 bg-slate-100 rounded-t-md border-b border-slate-300">
            <span className="font-semibold text-slate-700 text-sm md:text-base">Subject</span>
            <span className="font-bold text-slate-700 text-sm md:text-base">Marks/Percentile</span>
          </div>
          {Advancedspercentiles.map((p, i) => (
            <div
              className="flex justify-between px-4 py-3 border-b border-slate-200 last:border-b-0 hover:bg-slate-50 transition-colors duration-150"
              key={i}
            >
              <span className="font-semibold text-slate-700 text-sm md:text-base">{p.subject}</span>
              <span className="font-bold text-slate-700 text-sm md:text-base">
                {p.marks !== undefined ? p.marks : p.percentile}
              </span>
            </div>
          ))}
          <div className="flex justify-between px-4 py-3 bg-slate-100 font-semibold text-slate-900 border-t border-slate-300 rounded-b-md">
            <span className="text-sm md:text-base">AIR RANK</span>
            <span className="text-sm md:text-base">26K</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SPIs = [7.14 ,7.12 , 6.91 , 7.54 , 8.23]
let totalSpi=0;
let divison =0;
SPIs.forEach((s,i)=>(
  totalSpi+=((i+2)/2*s),
  divison+=(i+2)/2
))

const college = (
  <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white shadow-sm p-4">
    <div className="flex justify-between px-4 py-2 bg-slate-100 rounded-t-md border-b border-slate-300">
      <span className="font-semibold text-slate-700 text-sm md:text-base">Semester</span>
      <span className="font-bold text-slate-700 text-sm md:text-base">SPI</span>
    </div>
    {SPIs.map((spi, index) => (
      <div
        className="flex justify-between px-4 py-3 border-b border-slate-200 last:border-b-0 hover:bg-slate-50 transition-colors duration-150"
        key={index}
      >
        <span className="font-semibold text-slate-700 text-sm md:text-base">
          Semester {index + 1}
        </span>
        <span className="font-bold text-slate-700 text-sm md:text-base">
          {spi.toFixed(2)}
        </span>
      </div>
    ))}
    <div className="flex justify-between px-4 py-3 bg-slate-100 font-semibold text-slate-900 border-t border-slate-300 rounded-b-md">
      <span className="text-sm md:text-base">Total SPI</span>
      <span className="text-sm md:text-base">{(totalSpi/divison).toFixed(2)}</span>
    </div>
  </div>
);


const schoolMarks = [
  {subject : "English" , 
    marks : 90
   },
  {subject : "Physics" , 
   marks : 85
  },
  {subject : "Chemistry" , 
    marks : 90
   },
   {subject : "Biology" , 
    marks : 78
   },
   {subject : "Math" , 
    marks : 90
   },
 
]
const school = (
  <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white shadow-sm p-4">
    <div className="flex flex-col space-y-4">
      <div className="text-slate-700 font-medium text-sm md:text-base">
        <div className="flex justify-between px-4 py-2">
          <span className="font-bold">Subject</span>
          <span className="font-bold">Grade 10</span>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex justify-between px-4 py-2 bg-slate-100 rounded-t-md border-b border-slate-300">
            <span className="font-semibold text-slate-700 text-sm md:text-base">Subject</span>
            <span className="font-bold text-slate-700 text-sm md:text-base">Marks</span>
          </div>
          {schoolMarks.map((s, i) => (
            <div
              className="flex justify-between px-4 py-3 border-b border-slate-200 last:border-b-0 hover:bg-slate-50 transition-colors duration-150"
              key={i}
            >
              <span className="font-semibold text-slate-700 text-sm md:text-base">{s.subject}</span>
              <span className="font-bold text-slate-700 text-sm md:text-base">{s.marks}</span>
            </div>
          ))}
          <div className="flex justify-between px-4 py-3 bg-slate-100 font-semibold text-slate-900 border-t border-slate-300 rounded-b-md">
            <span className="text-sm md:text-base">Total Marks</span>
            <span className="text-sm md:text-base">433</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
