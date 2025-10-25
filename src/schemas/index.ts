import {z} from 'zod'

export const DataSetAPIResponseSchema = z.object({
    id:z.number(),
    fecha:z.string(),
    vuelo:z.number(),
    capacidad:z.number(),
    vendido:z.number()

})


export type Data = z.infer<typeof DataSetAPIResponseSchema>
