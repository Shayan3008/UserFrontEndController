
class User {
    name: string
    email: string
    password: string
    phone: string
    constructor(name: string, email: string, password: string, phone: string) {
        this.name = name
        this.email = email
        this.password = password
        this.phone = phone
    }
    async userSignup(): Promise<string> {
        const response = await fetch(process.env.REACT_APP_API_URL + 'login/signup', {
            method: 'POST',
            body: JSON.stringify(this),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const body = await response.json()
        if (response.status === 200)
            return body.id
        return ''
        // fetch(process.env.REACT_APP_API_URL + 'login/signup', {
        //     method: 'POST',
        //     body: JSON.stringify(this),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // }).then(response => {
        //     if (response.status === 200)
        //         return response.json()
        // }).then(response => {
        //     if (response !== null)
        //         return response.id
        // })
        // return '';
    }
    static async userLogin(userName: string, Password: string): Promise<string> {
        const response = await fetch(process.env.REACT_APP_API_URL + 'login', {
            method: 'POST',
            body: JSON.stringify({
                user: userName,
                pass: Password
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const body = await response.json()
        // console.log(body)
        if (response.status === 200)
            return body.id
        return ''
    }
}

export { User }