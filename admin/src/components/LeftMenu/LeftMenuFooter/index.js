import React from 'react';

import Wrapper from './Wrapper';

function LeftMenuFooter() {
  // PROJECT_TYPE is an env variable defined in the webpack config
  // eslint-disable-next-line no-undef
  const projectType = PROJECT_TYPE;

  return (
    <Wrapper>
      <div className="poweredBy">
        <span>Mantido por </span>
        <a key="website" href="https://github.com/douglaslb" target="_blank" rel="noopener noreferrer">
          Douglas Lima ❤️
        </a>
      </div>
    </Wrapper>
  );
}


export default LeftMenuFooter;
