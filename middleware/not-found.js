const notFound = (req, res) => {
    res.status(404).send('<h1 style="font-family:sans-serif" >Error 404 route not found<h1>')
};

module.exports = notFound;