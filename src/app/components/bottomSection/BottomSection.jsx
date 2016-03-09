'use strict';

import React            from 'react';
import BlackSection     from '../blackSection/BlackSection.jsx';

class BottomSection extends React.Component {
  render() {
    return (
      <BlackSection
        overridePaddingTop={'15px'}
        overridePaddingBottom={'5px'}>
        <p className="text-right">
          © Erwan DATIN
        </p>
      </BlackSection>
    );
  }
}

export default BottomSection;
