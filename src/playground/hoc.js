import React from 'react';
import ReactDOM from 'react-dom';
const Info = (props) => (
    <div>
        <h1>info</h1>
        <p>the info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
      <div>
          {props.isAdmin && <p>this is PRIVATE info. please don't share!</p>}
        <WrappedComponent {...props}/>
      </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>Please Login to view the info</p>
            )}
        </div>
    );
};
const AuthInfo = requireAuthentication(Info);
const AdminInfo = withAdminWarning(Info);
/*ReactDOM.render(
    <AdminInfo isAdmin={false} info='this is the details'/>,
    document.getElementById('app'));*/
ReactDOM.render(
    <AuthInfo isAuthenticated={false} info='this is the details'/>,
    document.getElementById('app'));