import React from 'react';
import { SWAPIServiceConsumer } from './../../context/SWAPIServiceContext';

const withSWAPIService = (Wrapped, mapMethodsToProps) => {

  return (props) => {
    return (
      <SWAPIServiceConsumer>
        {
          (swapi) => {
            const serviceMethods = mapMethodsToProps(swapi);
            return (
              <Wrapped {...props} {...serviceMethods}/>
            );
          }
        }
      </SWAPIServiceConsumer>
    );
  }
};

export default withSWAPIService;
