import useForm from "../../hooks/useForms";

export default function Login(){
    const {values, onChange, onSubmit} = useForm({
        email:'',
    password:''
});
    return(
        <section id="login-page" className="auth">
        <form id="login" onSubmit={onSubmit}>

            <div className="container">
                <div className="brand-logo"></div>
                <h1>Login</h1>
                <label htmlFor="email">Email:</label>
                <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Sokka@gmail.com"
                value={values.email}
                onChange={onChange} />

                <label htmlFor="login-pass">Password:</label>
                <input 
                type="password" 
                id="login-password" 
                name="password" 
                value={values.password}
                onChange={onChange}/>
                
                <input type="submit" className="btn submit" value="Login" />
                <p className="field">
                    <span>If you don't have profile click <a href="#">here</a></span>
                </p>
            </div>
        </form>
    </section>
    );
}