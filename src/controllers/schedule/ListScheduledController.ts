import { Response, Request } from "express"
import { ListScheduledService } from "../../services/schedule/ListScheduledService";

class ListScheduledController{
    async handle(request: Request, response: Response){
        const user_id = request.user_id;

        const listScheduled = new ListScheduledService();

        const scheduled = await listScheduled.execute({
            user_id
        })

        return response.json(scheduled);

    }
}

export { ListScheduledController }
