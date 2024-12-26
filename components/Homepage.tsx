export default function Homepage() {
  return (
    <>
      <div className="inline-block hover:text-9xl hover:bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 hover:text-transparent hover:bg-clip-text duration-1000 text-8xl my-5 max-md:text-7xl mt-20">
        Sirada <br />
        Uthaiwat
      </div>
      <div className="rounded-md border-black p-4 shadow-md mx-10 max-md:my-5 inline-flex items-center">
        Mouse over this element and <br/>see what happen!
      </div>
      <div className="mx-3">
        <p>Found this website's source code in GitHub</p>
        <br />
        <a
          href="https://github.com/SUiD07"
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-2 font-semibold text-white"
        >
          Click here
        </a>
      </div>
    </>
  );
}
