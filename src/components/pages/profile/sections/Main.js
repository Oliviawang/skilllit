import React from 'react';
import { Link } from 'react-scroll';
import AvatarAndTalkBubble from '../../../common/AvatarAndTalkBubble';
import ScrollablePages from '../../ScrollablePages';
import EditIcon from '../../../common/EditIcon';

const Main = ({site, home, className, callback}) => {

  return (<section className="home_section">
      {home.map((el,idx) => {
        return <div key={idx}>
          <EditIcon key="edit_icon" idx={idx} callback={callback} />
          <AvatarAndTalkBubble site={site} main={el} className={className} />
          <h1 className="site_title" dangerouslySetInnerHTML={{__html: `${el.title}`}} />
          <p dangerouslySetInnerHTML={{__html: `${el.tagline}`}} />
          {site.is_scrollable && <Link className="down_animation" activeClass="active" to="experience"
            spy={true} smooth={true}
            offset={0} duration={500}>
            <span className="down_arrow" />
          </Link>}
        </div>
      })}
    </section>);
};

export default Main;
