import React from 'react';

var Card = ({name, email, id}) => {

    return (
        <div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
            <img 	src={`https://robohash.org/${id}?200x200`}
					alt='alt robo-pic' />
            <div>
<<<<<<< HEAD
                <h2>{props.name}</h2> {/* using {} */}
                <p>{props.email}</p> {/* as it's js obj*/}
=======
                <h2>{name}</h2> {/* using {} */}
				<p>{email}</p> {/* as we're using js obj */}
>>>>>>> 2af96be1680331d362298833ba459f44e514c9f6
            </div>
        </div>
    );
}

export default Card;
