const notFound = (req, res, next) => {
    res.status(404).send("404 error. Not found!");
};

export default notFound;