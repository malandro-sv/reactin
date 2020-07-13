import React from 'react';

var Card = ({name, email, id}) => {

    return (
        <div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
            <img 	src={`https://robohash.org/${id}?200x200`}
					alt='alt robo-pic' />
            <div>
                <h2>{name}</h2> {/* using {} */}
				<p>{email}</p> {/* as we're using js obj */}
            </div>
        </div>
    );
}

export default Card;
