import {z} from "zod";

export const formRegister = z.object(
{
    name:z.string().nonempty("O nome é obrigatório"),
    email:z.string().nonempty("O email é obrigatório").email("Forneça um email válido"),
    password: z
    .string()
    .nonempty("A senha tem que conter 8 cáracteres, letra maiúscula e minúscula").min( 8,  "São necessários pelo menos 8 cáracteres")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número."),
   confirmPassword: z.string().nonempty("É necessário confirmar a senha"),

})