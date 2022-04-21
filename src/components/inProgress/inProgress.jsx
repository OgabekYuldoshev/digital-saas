import React from 'react';
import razratobka_ds from '../../assets/images/razrabotka_ds.png';
import './Inprogress.scss';

const Inprogress = () => {
  return (
    <div className='inprogress__container'>
        <img className='inprogress__img' src={razratobka_ds} alt="razrabotka" />
        <h3 className='inprogress__title'>Этот раздел находится в разработке</h3>
    </div>
  )
}

export default Inprogress;