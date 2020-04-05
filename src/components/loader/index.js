import React, {Fragment} from 'react';

function Loader (props){
    return (
        <Fragment>
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Fragment>
    );
}

export default Loader;