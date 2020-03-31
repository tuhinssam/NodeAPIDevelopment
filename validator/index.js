exports.createPostValidator = (req, res, next) => {
	//title
	req.check("title", "Write a Title").notEmpty();
	req.check("title","Title must be between 4 and 150 chars").isLength({
		min: 4,
		max: 150
	});
	//body
	req.check("title", "Write a Title").notEmpty()
	req.check("title","Body must be between 4 and 2000 chars").isLength({
		min: 4,
		max: 2000
	});
	
	//check for errors
	const errors = req.validationErrors();
	
	if(errors)
	{
		const firstError = errors.map(error => error.msg)[0];
		return res.status(400).json({error: firstError});
	}
	
	next();
};