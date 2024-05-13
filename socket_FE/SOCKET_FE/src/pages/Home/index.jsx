import React from 'react'
import '../Home/index.css'
import MenuContainer from '../../components/Menu/MenuContainer';
import MessageContainer from '../../components/Message/MessageContainer';
import { useSelector } from 'react-redux';
import useSocket from '../../hooks/useSocket';

const Home = () => {

  const {loading} = useSocket();  

  return (
    <div className='homepage'>
      <div className='homepage-menu' ><MenuContainer /></div>
      <div className='homepage-message'><MessageContainer /></div>
    </div>
  )
}

export default Home;