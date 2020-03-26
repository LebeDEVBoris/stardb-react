import React from 'react';
import { SWAPIServiceConsumer } from './../../context/SWAPIServiceContext';

const withSWAPIService = (mapMethodsToProps) => (Wrapped) => {

  return (props) => {
    return (
      <SWAPIServiceConsumer>
        {
          () => {
            return (
              <Wrapped {...props} />
            );
          }
        }
      </SWAPIServiceConsumer>
    );
  }
};

export default withSWAPIService;
