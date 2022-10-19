import { Request } from "@hapi/hapi";

export default class HapiAdapter {
	static create (fn) {
		return async function (req: Request) {
			const obj = await fn(req.params, req.payload);
			return obj;
		}
	}
}