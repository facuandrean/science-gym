const getSignin = (req, res) => {
    res.render("signin", { title: "Science GYM", titleView: "SCIENCE GYM", descriptionView: "Ingrese al sistema." })
};

const getSignup = (req, res) => {
    res.render("signup", { title: "Science GYM", titleView: "SCIENCE GYM", descriptionView: "Regístrese en el sistema." })
};

const getSigninClient = (req, res) => {
    res.render("signin-client", { title: "Science GYM", titleView: "SCIENCE GYM", descriptionView: "¡Bienvenido a SG!" })
}

export default {
    getSignin,
    getSignup,
    getSigninClient
}