// import React from 'react'
// import {FaGithub , FaLinkedin,} from 'react-icons/fa'
// import {HiOutlineMail} from 'react-icons/hi'
// import { BsFillPersonLinesFill} from 'react-icons/bs'

// const SocialLinks = () => {

//     const Links = [
//         {
//             id: 1,
//             child: (
//                 <>
//                 LinkedIn<FaLinkedin size={30}/>
//                 </>
//             ),
//             href:'https://www.linkedin.com/in/aman-kumar-63a167221/',
//             style:'rounded-tr-md'
//         },
//         {
//             id: 2,
//             child: (
//                 <>
//                 Github<FaGithub size={30}/>
//                 </>
//             ),
//             href:'https://github.com/kumaraman54',
            
//         },
//         {
//             id: 3,
//             child: (
//                 <>
//                 Mail<HiOutlineMail size={30}/>
//                 </>
//             ),
//             href:'mailto:routhaman831@gmail.com',
          
//         },
//         {
//             id: 4,
//             child: (
//                 <>
//                 Resume <BsFillPersonLinesFill size={30}/>
//                 </>
//             ),
//             href:'/cv.pdf',
//             style:'rounded-br-md',
//             download:true,
//             target:'_blank',
//             rel:'noreferrer' 
//         },
//     ]
//   return (
//     <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
//         <ul>
//         {Links.map(({id, child, href , style, download })=>(

//             <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' + " "+ style}>
//             <a href={href} className='flex justify-between items-center w-full text-white ' download={download} target='_blank'> 
//                 {child}
//              </a>
//              </li>
//         ))}
//         </ul>
//     </div>
//   )
// }

// export default SocialLinks
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'About'
    },
    {
      id: 3,
      link: 'portfolio'
    },
    {
      id: 4,
      link: 'experience'
    },
    {
      id: 5,
      link: 'contact'
    },
  ];

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
      <div>
        <h1 className='text-5xl font-signature ml-2'>AmanKumar</h1>
      </div>

      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
            <Link to={link} smooth duration={500} offset={-80} rel="noreferrer">{link}</Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
          {links.map(({ id, link }) => (
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
              <Link to={link} smooth duration={500} offset={-80} rel="noreferrer" onClick={() => setNav(false)}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
