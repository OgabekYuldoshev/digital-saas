import React from 'react'
import logo from '../../assets/images/logo.png';
import style from './loading.module.scss';
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className={style.loading}>
        <img className={style.loading__img} src={logo} alt="logo" />
        <ReactLoading type={'spin'} color='#000' height={'50px'} width={'50px'}/>
    </div>
  )
}

export default Loading