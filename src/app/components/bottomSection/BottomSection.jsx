'use strict';

import React            from 'react';
import BlackSection     from '../backgrounds/blackSection/BlackSection.jsx';

class BottomSection extends React.Component {
  render() {
    return (
      <BlackSection
        overridePaddingTop={'15px'}
        overridePaddingBottom={'5px'}>
        <div className="container">
          <p className="text-right">
            © Erwan DATIN
          </p>
        </div>
      </BlackSection>
    );
  }
}

export default BottomSection;
