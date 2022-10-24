import React from 'react'
import { Avatar } from '@mui/material'
import '../Pages/Sidebar.css'

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
)
  return (
    <div className="sidebar">
        <div className="sidebar__top">
          <img src="https://im.haberturk.com/2014/05/28/ver1401264839/952340_detay.jpg" alt=""/>
          <Avatar src="https://i.pinimg.com/originals/eb/1f/0c/eb1f0c6159c40fe38048c3e0b776f205.jpg" className="sidebar__avatar">
          </Avatar>
          <h2>Your Name</h2>
          <h4>example@gmail.com</h4>
        </div>
        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Connections</p>
            <p className="sidebar__statNumber">126</p>
          </div>
          <div className="sidebar__stat">
            <p>Who's viewed your profile</p>
            <p className="sidebar__statNumber">67</p>
          </div>
        </div>
        <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem('programming')}
          {recentItem('jobs')}
          {recentItem('fintech')}
          {recentItem('spaceX')}
          {recentItem('MongoDB')}
          <h4>Followed Hastags</h4>
          {recentItem('nodejs')}
          {recentItem('reactjs')}
          {recentItem('developer')}
          {recentItem('business')}
          {recentItem('tech')}
        </div>
    </div>
  )
}

export default Sidebar