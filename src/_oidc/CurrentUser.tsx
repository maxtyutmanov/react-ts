import * as React from 'react';
import { User } from 'oidc-client';
import ApplicationState from 'src/models/AppState';
import { connect } from 'react-redux';

interface CurrentUserProps {
    user: User | null
}

class CurrentUser extends React.Component<CurrentUserProps, any> {
    public render() {
        const user = this.props.user;
        return (
            <span>{user && user.profile.sub}</span>
        )
    }
}

const mapStateToProps = (appState: ApplicationState) : CurrentUserProps => {
    const user = appState.userState.user;

    return {
        user: user || null
    };
}

export default connect(mapStateToProps)(CurrentUser);