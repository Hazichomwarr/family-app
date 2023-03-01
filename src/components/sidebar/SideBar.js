import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilled,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons/";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilled className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/persons/ilias.jpeg"
              alt="person"
            />
            <span className="sidebarFriendName">Yamba Ilias</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/persons/papa.jpeg"
              alt="person"
            />
            <span className="sidebarFriendName">Baaba MARE</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/persons/maman.jpeg"
              alt="person"
            />
            <span className="sidebarFriendName">Delhpine GOUBA</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/persons/issa.jpeg"
              alt="person"
            />
            <span className="sidebarFriendName">Issa MARE</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/persons/abdiel.jpeg"
              alt="person"
            />
            <span className="sidebarFriendName">Abdiel le-boss</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/persons/moctar.jpeg"
              alt="person"
            />
            <span className="sidebarFriendName">Ladji Moctar</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/persons/omar.jpeg"
              alt="person"
            />
            <span className="sidebarFriendName">Omar tcheikouai</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
