import prismaClient from "../../prisma";

interface ListScheduledRequest{
    user_id: string;
}

class ListScheduledService{
    async execute({ user_id }: ListScheduledRequest){

        const scheduled = await prismaClient.service.findMany({
            where:{
                user_id: user_id,
            },
            select:{
                id: true,
                customer: true,
                haircut: true
            }
        })

        return scheduled;

    }
}

export {ListScheduledService}
