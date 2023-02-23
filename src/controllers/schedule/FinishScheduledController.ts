import { Request, Response } from "express";
import { FinishScheduledService } from "../../services/schedule/FinishScheduledService";

class FinishScheduledController{
    async handle(request: Request, response: Response){
        const user_id =  request.user_id;
        const schedule_id = request.query.schedule_id as string;

        const finishScheduledService = new FinishScheduledService();

        const schedule = await finishScheduledService.execute({
            user_id,
            schedule_id
        })

        return response.json(schedule);

    }
}

export {FinishScheduledController}
