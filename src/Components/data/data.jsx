class UserData {
    constructor() {
        this._firstName = '';
        this._lastName = '';
        this._email = '';
        this._token = '';
    }

    setUserData(props) {
        this._firstName = props.firstName;
        this._lastName = props.lastName;
        this._email = props.email;
        this._token = props.token;
    }

    getUserData() {
        return {
            firstName: this._firstName,
            lastName: this._lastName,
            email: this._email,
            token: this._token
        };
    }
}

let userdata = new UserData();

export default userdata;
