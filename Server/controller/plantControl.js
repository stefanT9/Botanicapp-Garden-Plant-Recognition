const getPlant = (req,res,next) => {
    res.status(200).json({
        message:' Handling GET request '
    });
}

const postPlant = (req,res,next) => {
    res.status(200).json({
        message:' Handling POST request '
    });
}

exports.getPlant = getPlant;
exports.postPlant = postPlant;