const asyncHandler = (fun) => {
  return async (req, res, next) => {
    try {
      await fun(req, res, next);
    } catch (error) {
      res.status(error.status || 500).json({
        status: false,
        message: error.message,
      });
    }
  };
};

// const asyncHandler = (fn) => {
//     (req, res, next) => {
//         Promise
//         .resolve(fn(req, res, next))
//         .catch((err) => next(err))
//     }
// }

export { asyncHandler };
