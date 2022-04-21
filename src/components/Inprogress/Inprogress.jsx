import React from 'react'
import razrabotka_ds from '../../assets/images/razrabotka_ds.png';
import './Inprogress.scss';

const Inprogress = () => {
  return (
    <div className='inprogress__container'>
        <img className='inprogress__image' src={razrabotka_ds} alt="razrabotka_ds" />
        <h3 className='inprogress__title'>Этот раздел находится в разработке</h3>
    </div>
  )
}

export default Inprogress;