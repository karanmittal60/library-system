import React from 'react';
import usePikachu from "../../hooks/usePikachu";

const Header = () => {

    const { userDetails} = usePikachu();

    return (
        <div className='header'>
            <div className="">
                <div className='text-center'>
                    Hello {userDetails}
                </div>
            </div>
        </div>
    );
};

export default Header;