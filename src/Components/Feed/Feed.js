import React from 'react'
import '../../Pages/Feed/Feed.css'
import InputOption from '../Header/InputOption'
import Post from './Post'
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from "@mui/icons-material/Image"
import SubscriptionsIcon from "@mui/icons-material/Subscriptions"
import EventNoteIcon from "@mui/icons-material/EventNote"
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay"

function Feed() {
  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
            <CreateIcon />
            <form>
                <input type="text" placeholder="Start a post" />
                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
        <div className="feed__inputOptions">
            <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
            <InputOption Icon={SubscriptionsIcon} title="Video" color="#7FC15E" />
            <InputOption Icon={EventNoteIcon} title="Event" color="#E7A33E" />
            <InputOption
                Icon={CalendarViewDayIcon}
                title="Write article"
                color="#F5987E"
            />
        </div>
        <hr />
        <Post
            name="Anonymous User"
            description="Developer | Enthusiast"
            message="I've completed my totality corp frontend challenge!"
            photoUrl="https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/04/challenge-css.png?fit=1200%2C600&ssl=1"
        />
    </div>
  )
}

export default Feed