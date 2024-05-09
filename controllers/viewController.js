const getSignin = (req, res) => {
    res.render("signin", { title: "Science GYM", titleView: "SCIENCE GYM", descriptionView: "Ingrese al sistema." })
};

const getSignup = (req, res) => {
    res.render("signup", { title: "Science GYM", titleView: "SCIENCE GYM", descriptionView: "Regístrese en el sistema." })
};

export default {
    getSignin,
    getSignup
}