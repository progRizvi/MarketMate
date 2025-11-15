// handle errors globally
import { Request, Response, NextFunction } from "express";

export const handleException = (
	err: any,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	res.status(err.status || 500).json({
		message: err.message || "Internal Server Error",
		...(process.env.NODE_ENV === "development" && { stack: err.stack }),

		// store error in log file
	});
};
