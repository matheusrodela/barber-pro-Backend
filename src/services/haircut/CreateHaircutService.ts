import prismaClient from "../../prisma";

interface HaircutRequest{
    user_id: string;
    name: string;
    price: number;
}

//Verificar quantos modelos usuário já tem cadastrado
//Verificar se é premium. !premium -> limitar quantidade de cadastros

class CreateHaircutService{
    async execute({ user_id, name, price}: HaircutRequest){
        if(!name || !price){
            throw new Error("Nome e preço são obrigatórios");
        }

        //Verificando quantidade de modelos
        const myHaircuts = await prismaClient.haircut.count({
            where:{
                user_id: user_id
            }
        })

        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            },
            include:{
                subscriptions: true
            }
        })

        //Criando validação/limite
        if(myHaircuts >= 3 && user?.subscriptions?.status !== 'active'){
            throw new Error("Usuários free só podem cadastrar até 3 serviços.")
        }

        //Criando corte se validado
        const haircut = await prismaClient.haircut.create({
            data:{
                name: name,
                price: price,
                user_id: user_id
            }
        })

        return haircut;
    }
}

export { CreateHaircutService }
