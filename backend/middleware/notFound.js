module.exports.notFoundHandler = (req, res, next) => {
    res.status(404).json({
        error: 'Route not found',
        message: `The requested route "${req.originalUrl}" does not exist.`,
    });
}