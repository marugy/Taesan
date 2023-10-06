import React from 'react';

const Landing = () => {
    return (
        <div className='h-screen w-screen absolute top-0 left-0 bg-white'>
            <img src="landing.gif" alt="Landing" className='h-screen dt:w-[600px] tb:w-[500px] w-screen' />
            <img src="landingLogo.gif" alt="Logo" className='absolute top-[50%] right-[4%] h-[100px] w-[230px] z-10 dt:h-[260px] dt:w-[650px] dt:top-[20%] tb:h-[200px] tb:w-[420px]'/>
        </div>
    );
};

export default Landing;