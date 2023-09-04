import React,{useEffect,useState} from 'react';
const Index = () => {
   const update = (e) => {
       const x = e.clientX || (e.touches && e.touches[0].clientX);
       const y = e.clientY || (e.touches && e.touches[0].clientY);
  
       document.documentElement.style.setProperty('--cursorX', x + 'px');
       document.documentElement.style.setProperty('--cursorY', y + 'px');
     };
     useEffect(() => {
       document.addEventListener('mousemove', update);
       document.addEventListener('touchmove', update);
  
       // Cleanup: Remove event listeners when the component unmounts
       return () => {
         document.removeEventListener('mousemove', update);
         document.removeEventListener('touchmove', update);
       };
     }, []);
   const inlineStyles = {
       root: {
           cursor: 'none',
       },
       rootBefore: {
           content: "''",
           display: 'block',
           width: '100%',
           height: '100%',
           position: 'fixed',
           pointerEvents: 'none',
           background: `radial-gradient(
           circle 10vmax at var(--cursorX, 50vw) var(--cursorY, 50vh),
           rgba(0, 0, 0, 0) 0%,
           rgba(0, 0, 0, 0.5) 80%,
           rgba(0, 0, 0, 0.95) 100%
         )`,
       },
   };


   return (
       <>
           <div style={inlineStyles.root}></div>
           <div style={inlineStyles.rootBefore}></div>


       </>
   );
};


export default Index;



