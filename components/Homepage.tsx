'use client'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

export default function Homepage() {
  useEffect(()=>{
    AOS.init({})
  },[])
  return (
    <>
      {/* <div className="bg-slate-400"> */}
        <div data-aos="fade-down" className="inline-block text-9xl my-5 max-md:text-7xl mt-20">
          Sirada <br />
          Uthaiwat
        </div>
        <div className="mx-3">
          <p>Website's source code in GitHub</p>
          <br />
          <a
            href="https://github.com/SUiD07"
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-2 font-semibold text-white"
          >
            Click here
          </a>
        </div>
      {/* </div> */}
    </>
  );
}
