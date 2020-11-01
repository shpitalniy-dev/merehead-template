import React, { Suspense } from 'react'
import Alert from 'react-s-alert';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Modal from '../Modal';
import AlertTemplate from '../../libs/AlertTemplate';
import { Loader } from '../../libs/Loader';
import routes from '../../routes';
import AuthWrapper from '../../libs/AuthWrapper';
import NotAuthWrap from '../../libs/NotAuthWrap'
import { getAuthIsLoading } from '../../redux/Auth/Auth.selectors';

const App = () => {
  const isLoading = useSelector(getAuthIsLoading);

  return (
    <>
      {isLoading ? <Loader /> :
        <>
          <div className="notifications">
            <Alert
              contentTemplate={AlertTemplate}
              stack={{ limit: 2 }}
              effect="scale"
              html={true}
              position="top-right"
              timeout={3000}
              offset={50}
            />
          </div>
          <Suspense fallback={<Loader />}>
            <Modal />
            <Switch>
              <NotAuthWrap path={routes.Root.path} component={routes.Root.component} exact />
            </Switch>
          </Suspense>
        </>}
    </>
  );
};

export default App;
