"use client";
import {motion} from 'framer-motion';
interface HeadSecProps {
  header: string;
}
export default function HeadSec({ header }: HeadSecProps) {
  return (
    <>
      {/* <motion.div initial="hidden" animate="visible" variants={{
        hidden:{
          scale:.8,
          opacity:0
        },
        visible:{
          scale:1,
          opacity:1,
          transition:{
            delay:.4
          }
        }
      }} */}
      <div
      className="text-center">
        <div className="max-md:text-2xl my-5 text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text font-bold">
          {header}
        </div>
      {/* </motion.div> */}
      </div>
    </>
  );
}
