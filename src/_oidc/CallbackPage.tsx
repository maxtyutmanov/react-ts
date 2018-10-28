import * as React from 'react';
import userManager from './userManager';

class CallbackPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        userManager.signinRedirectCallback().then(_ => {
            this.props.history.push('/');
        })
        .catch(error => console.log(error));
    }

    public render() {
        return null;
    }
}

export default CallbackPage;