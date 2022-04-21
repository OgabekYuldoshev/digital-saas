import React from 'react';
import razratobka_ds from '../../assets/images/razrabotka_ds.png';
import './Inprogress.scss';

const Inprogress = () => {
  return (
    <div>
        <img className='inprogress__img' src={razratobka_ds} alt="razrabotka" />
    </div>
  )
}

export default Inprogress;