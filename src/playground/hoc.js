// Higher Order Component HOC that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrapperComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a private message. Please don't share!</p>}
            <WrapperComponent {...props} />
        </div>
    );
};

// requireAuthentication
const requireAuthentication = (WrapperComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrapperComponent {...props} />
            ) : (
                <p>Please Log in to view the info</p>
            )}
        </div>
    );
};


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={false} info="This are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="This are the details"/>, document.getElementById('app'));