import React from 'react';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 my-8'>
            <div className=''>
                <img className='rounded-lg' src="https://i.ibb.co.com/XrD0DQHZ/428259959-1049583919456470-5932274881690033579-n.jpg" alt="" />
            </div>
            <div className="h-74">
                <img
                    src="https://i.ibb.co.com/DDbv4q69/484176661-1050460523789100-2658054001492228975-n.jpg"
                    alt=""
                    className="h-full w-full object-cover rounded-lg"
                />
            </div>

        </div>
    );
};

export default Home;