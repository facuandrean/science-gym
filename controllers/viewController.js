const getHome = (req, res) => {
    res.render("home", { title: "Science GYM", titleView: "¡Science GYM!", descriptionView: "Science GYM" })
};

export default {
    getHome
}