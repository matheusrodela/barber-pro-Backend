import prismaClient from "../../prisma";

interface NewScheduleRequest{
    user_id: string;
    haircut_id: string;
    customer: string;
}

class NewScheduleService{
    async execute({user_id, haircut_id, customer}: NewScheduleRequest){

        if(customer === '' || haircut_id === ''){
            throw new Error("Você precisa adicionar nome e o tipo de serviço para continuar!")
        }

        const schedule = await prismaClient.service.create({
            data:{
                customer,
                haircut_id,
                user_id
            }
        })

        return schedule;

    }
}

export { NewScheduleService }
