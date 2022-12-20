import React from 'react'
import MainImg from '../../component/HomeComponents/MainImg'
import RecentStories from '../../component/HomeComponents/RecentStories'
import RogInAction from '../../component/HomeComponents/RogInAction'
import Slider from '../../component/HomeComponents/Slider'
import TheArt from '../../component/HomeComponents/TheArt'
import Navbar from '../../component/Navbar'

function Home() {
  return (
      <>
      <Navbar/>
      <MainImg/>
      <Slider/>
      <RecentStories/>
      <RogInAction/>
      <TheArt/>
    </>
  )
}

export default Home