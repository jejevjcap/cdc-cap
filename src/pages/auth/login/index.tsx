export default function Login() {
    return (
        <div className="app app-auth-sign-in align-content-stretch d-flex flex-wrap justify-content-end">
            <div className="app-auth-background"></div>
            <div className="app-auth-container">
                <div className="logo">
                    <a href="index.html">CDC</a>
                </div>
                <p className="auth-description">
                    Please sign-in to your account and continue to the dashboard.
                    <br />
                    Don't have an account? <a href="sign-up.html">Sign Up</a>
                </p>
                <div className="auth-credentials m-b-xxl">
                    <label htmlFor="signInEmail" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control m-b-md"
                        id="signInEmail"
                        aria-describedby="signInEmail"
                        placeholder="example@neptune.com"
                    />
                    <label htmlFor="signInPassword" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="signInPassword"
                        aria-describedby="signInPassword"
                        placeholder="********"
                    />
                </div>
                <div className="auth-submit">
                    <a href="#" className="btn btn-primary">
                        Sign In
                    </a>
                    <a href="#" className="auth-forgot-password float-end">
                        Forgot password?
                    </a>
                </div>
            </div>
        </div>
    )
}
