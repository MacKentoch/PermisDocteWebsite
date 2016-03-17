'use strict';

import React                  from 'react';
// import ReactDOM               from 'react-dom';
import NavigationBar          from '../../components/navigation/NavigationBar.jsx';
import navigationModel        from '../../models/navigation.model.json';
import contactModel           from '../../models/contact.model.json';
import HomeCarouselSection    from '../../components/homeCarouselSection/HomeCarouselSection.jsx';
import HomeHeaderSection      from '../../components/homeHeaderSection/HomeHeaderSection.jsx';
import HomeHowItWorksSection  from '../../components/homeHowItWorksSection/HomeHowItWorksSection.jsx';
import GoAppStoreSection      from '../../components/goAppStoreSection/GoAppStoreSection.jsx';
import ContactSection         from '../../components/contactSection/ContactSection.jsx';
import BottomSection          from '../../components/bottomSection/BottomSection.jsx';
import classNames             from 'classnames';
import imagesModel            from '../../models/app.images.model.json';
import ViewContainer          from '../ViewContainer/ViewContainer.jsx';
import Waypoint               from 'react-waypoint';
import {
  PromisedTimeout
}                             from '../../services/PromisedTimeout';
import HowItWorksModel        from '../../models/section.howItWorks.model.json';
import Scroll                 from 'react-scroll';

const Element = Scroll.Element;
const Events  = Scroll.Events;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    /* eslint camelcase:0 */
    this.state = {
      navModel                        : navigationModel,
      navigationBarLighter            : false,
      HowItWorksModel                 : HowItWorksModel,
      permisDocteEmail                : contactModel.permisDocteEmail,
      twitterLink                     : contactModel.twitterLink,
      images                          : imagesModel,
      animated                        : true,
      headerRightTextHead_1_Animate   : false,
      headerRightTextSub_1_1_Animate  : false,
      headerRightTextSub_1_2_Animate  : false,
      headerRightTextHead_2_Animate   : false,
      headerRightTextSub_2_1_Animate  : false,
      headerRightTextHead_3_Animate   : false,
      headerRightTextSub_3_1_Animate  : false,
      headerRightTextSub_3_2_Animate  : false,
      animHomeCarousel                : false,
      animHomeHowTo                   : false
    };
  }

  componentDidMount() {
    this.processHeaderRightTextAnimationState();

    Events.scrollEvent.register('begin', ()=>this.handleScrollBegin());
    Events.scrollEvent.register('end', ()=>this.handleScrollEnd());
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  handleScrollBegin() {
    console.log("begin", arguments);
  }

  handleScrollEnd() {
    console.log("end", arguments);
  }
  // // scroll management
  // componentWillUpdate() {
  //   let node          = ReactDOM.findDOMNode(this);
  //   this.scrollHeight = node.scrollHeight;
  //   this.scrollTop    = node.scrollTop;
  // }

  // componentDidUpdate() {
  //   let node = ReactDOM.findDOMNode(this);
  //   node.scrollTop = this.scrollTop + (node.scrollHeight - this.scrollHeight);
  // }

  processHeaderRightTextAnimationState() {
    PromisedTimeout
      .delay(800)
      .then(() => {
        this.setState({
          headerRightTextHead_1_Animate: true
        });
        return PromisedTimeout.delay(400);
      })
      .then(() => {
        this.setState({
          headerRightTextHead_2_Animate : true
        });
        return PromisedTimeout.delay(400);
      })
      .then(() => {
        this.setState({
          headerRightTextHead_3_Animate : true
        });
        return PromisedTimeout.delay(400);
      })
      .then(() => {
        this.setState({
          headerRightTextSub_1_1_Animate : true,
          headerRightTextSub_1_2_Animate : true
        });
        return PromisedTimeout.delay(300);
      })
      .then(() => {
        this.setState({
          headerRightTextSub_2_1_Animate : true
        });
        return PromisedTimeout.delay(300);
      })
      .then(() => {
        this.setState({
          headerRightTextSub_3_1_Animate : true,
          headerRightTextSub_3_2_Animate : true
        });
      })
      ;
  }

  getHeaderRightTextHead1Class() {
    let headerRightTextHead_1_Classes = classNames({
      'animated'       : this.state.animated,
      'invisible'      : !this.state.headerRightTextHead_1_Animate,
      'fadeInRight'    : this.state.headerRightTextHead_1_Animate
    });
    return headerRightTextHead_1_Classes;
  }

  getHeaderRightTextSub11Class() {
    let headerRightTextSub_1_1_Classes = classNames({
      'animated'  : this.state.animated,
      'invisible' : !this.state.headerRightTextSub_1_1_Animate,
      'fadeIn'    : this.state.headerRightTextSub_1_1_Animate
    });
    return headerRightTextSub_1_1_Classes;
  }

  getHeaderRightTextSub12Class() {
    let headerRightTextSub_1_2_Classes = classNames({
      'animated'  : this.state.animated,
      'invisible' : !this.state.headerRightTextSub_1_2_Animate,
      'fadeIn'    : this.state.headerRightTextSub_1_2_Animate
    });
    return headerRightTextSub_1_2_Classes;
  }

  getHeaderRightTextHead2Class() {
    let headerRightTextHead_2_Classes = classNames({
      'marginTop50px'  : true,
      'animated'       : this.state.animated,
      'invisible'      : !this.state.headerRightTextHead_2_Animate,
      'fadeInRight'    : this.state.headerRightTextHead_2_Animate
    });
    return headerRightTextHead_2_Classes;
  }

  getHeaderRightTextSub21Class() {
    let headerRightTextSub_2_1_Classes = classNames({
      'animated'  : this.state.animated,
      'invisible' : !this.state.headerRightTextSub_2_1_Animate,
      'fadeIn'    : this.state.headerRightTextSub_2_1_Animate
    });
    return headerRightTextSub_2_1_Classes;
  }

  getHeaderRightTextHead3Class() {
    let headerRightTextHead_3_Classes = classNames({
      'marginTop50px'  : true,
      'animated'       : this.state.animated,
      'invisible'      : !this.state.headerRightTextHead_3_Animate,
      'fadeInRight'    : this.state.headerRightTextHead_3_Animate
    });
    return headerRightTextHead_3_Classes;
  }

  getHeaderRightTextSub31Class() {
    let headerRightTextSub_3_1_Classes = classNames({
      'animated'  : this.state.animated,
      'invisible' : !this.state.headerRightTextSub_3_1_Animate,
      'fadeIn'    : this.state.headerRightTextSub_3_1_Animate
    });
    return headerRightTextSub_3_1_Classes;
  }

  getHeaderRightTextSub32Class() {
    let headerRightTextSub_3_2_Classes = classNames({
      'animated'  : this.state.animated,
      'invisible' : !this.state.headerRightTextSub_3_2_Animate,
      'fadeIn'    : this.state.headerRightTextSub_3_2_Animate
    });
    return headerRightTextSub_3_2_Classes;
  }

  handleWaypointEnter(where) {
    /* eslint no-console:0 */
    if (where === 'waypointHeaderToCarousel') {
      // console.info(`entering waypointHeaderToCarousel`);
      this.setState({
        animHomeCarousel     : true,
        animHomeHowTo        : false
      });
    }
    if (where === 'waypointCarouselToHowItWorks') {
      // console.info(`entering waypointCarouselToHowItWorks`);
      this.setState({
        animHomeCarousel      : true, // in case of page refresh : re-animatate previous sections
        animHomeHowTo         : true

      });
    }
    if (where === 'waypointHowItWorksToGoAppStore') {
      // console.info(`entering waypointHowItWorksToGoAppStore`);
      this.setState({
        animHomeCarousel      : true, // in case of page refresh : re-animatate previous sections
        animHomeHowTo         : true
      });
    }
    if (where === 'waypointGoAppStoreToContact') {
      // console.info(`entering waypointGoAppStoreToContact`);
      this.setState({
        animHomeCarousel      : true, // in case of page refresh : re-animatate previous sections
        animHomeHowTo         : true
      });
    }
    if (where === 'waypointContactToBottom') {
      // console.info(`entering waypointContactToBottom`);
      this.setState({
        animHomeCarousel      : true, // in case of page refresh : re-animatate previous sections
        animHomeHowTo         : true
      });
    }
  }

  handleWaypointLeave(where) {
    // if (where === 'waypointHeaderToCarousel') {
    //   console.info(`leaving waypointHeaderToCarousel`);
    // }
    // if (where === 'waypointCarouselToHowItWorks') {
    //   console.info(`leaving waypointCarouselToHowItWorks`);
    // }
    // if (where === 'waypointHowItWorksToGoAppStore') {
    //   console.info(`leaving waypointHowItWorksToGoAppStore`);
    // }
    // if (where === 'waypointGoAppStoreToContact') {
    //   console.info(`leaving waypointGoAppStoreToContact`);
    // }
    // if (where === 'waypointContactToBottom') {
    //   console.info(`leaving waypointContactToBottom`);
    // }
  }

  render() {
    const navigationClasses       = classNames({
      'navbar'            : true,
      'navbar-default'    : true,
      'navbar-fixed-top'  : true,
      'navbar-lighter'    : false // this.state.navigationBarLighter
    });
    const homeHeaderSectionTitle  = `PermisDocte`;
    const carouselSectionTitle    = `C'est simple mais tellement pratique pour pas cher`;
    const howItWorksSectionTitle  = `Comment ça marche?`;
    const goAppStoreTitle         = `Télécharger gratuitement sur l'appStore`;
    const contactTitle            = `Contact`;

    return(
      <div
        id="homeView"
        key="homeView">
        <NavigationBar
          brand={this.state.navModel.brand}
          navModel={this.state.navModel}
          cssClass={navigationClasses}
        />
        <ViewContainer
          isAnimated={true}>
          <Element
            name="scrollToHOME"
            className="element">
            <HomeHeaderSection
              title={homeHeaderSectionTitle}
              imageIphoneHome={this.state.images.iphone[0]}
              storesImages={this.state.images.stores}
              triggerAnimation={this.state.animHomeCarousel}
              animationDelay={1500}
              head1Class={this.getHeaderRightTextHead1Class()}
              head11Class={this.getHeaderRightTextSub11Class()}
              head12Class={this.getHeaderRightTextSub12Class()}
              head2Class={this.getHeaderRightTextHead2Class()}
              head21Class={this.getHeaderRightTextSub21Class()}
              head3Class={this.getHeaderRightTextHead3Class()}
              head31Class={this.getHeaderRightTextSub31Class()}
              head32Class={this.getHeaderRightTextSub32Class()}
            />
          </Element>
          <Waypoint
            key="waypointHeaderToCarousel"
            onEnter={() => this.handleWaypointEnter('waypointHeaderToCarousel')}
            onLeave={() => this.handleWaypointLeave('waypointHeaderToCarousel')}
            threshold={0.2}
          />
          <Element
            name="scrollToPREVIEW"
            className="element">
            <HomeCarouselSection
              title={carouselSectionTitle}
              carousel={this.state.images.carousel}
              triggerAnimation={this.state.animHomeCarousel}
              animationDelay={1500}
            />
          </Element>
          <Waypoint
            key="waypointCarouselToHowItWorks"
            onEnter={() => this.handleWaypointEnter('waypointCarouselToHowItWorks')}
            onLeave={() => this.handleWaypointLeave('waypointCarouselToHowItWorks')}
            threshold={0.2}
          />
          <Element
            name="scrollToQUESTIONS"
            className="element">
            <HomeHowItWorksSection
              title={howItWorksSectionTitle}
              triggerAnimation={this.state.animHomeHowTo}
              HowItWorksModel={this.state.HowItWorksModel}
            />
          </Element>
          <Waypoint
            key="waypointHowItWorksToGoAppStore"
            onEnter={() => this.handleWaypointEnter('waypointHowItWorksToGoAppStore')}
            onLeave={() => this.handleWaypointLeave('waypointHowItWorksToGoAppStore')}
            threshold={0.2}
          />
          <GoAppStoreSection
            title={goAppStoreTitle}
            triggerAnimation={false}
            storesImages={this.state.images.stores}
          />
          <Waypoint
            key="waypointGoAppStoreToContact"
            onEnter={() => this.handleWaypointEnter('waypointGoAppStoreToContact')}
            onLeave={() => this.handleWaypointLeave('waypointGoAppStoreToContact')}
            threshold={0.2}
          />
          <Element
            name="scrollToCONTACT"
            className="element">
            <ContactSection
              title={contactTitle}
              triggerAnimation={false}
              mailBox={this.state.permisDocteEmail}
              twitterLink={this.state.twitterLink}
            />
          </Element>
          <Waypoint
            key="waypointContactToBottom"
            onEnter={() => this.handleWaypointEnter('waypointContactToBottom')}
            onLeave={() => this.handleWaypointLeave('waypointContactToBottom')}
            threshold={0.2}
          />
          <BottomSection />
        </ViewContainer>
      </div>
    );
  }
}

export default Home;
