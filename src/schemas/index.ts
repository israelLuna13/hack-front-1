import {z} from 'zod'

export const DataSetAPIResponseSchema = z.object({
    id:z.number(),
    fecha:z.string(),
    vuelo:z.number(),
    capacidad:z.number(),
    vendido:z.number()

})

export const DataSetAPIResponseSchemaF = z.object({
    day: z.number(),
    flights: z.number(),
    passengers: z.number(),
    max_capacity: z.number()
})

export const DataSetAPIResponseSchema2 = z.object({
    day: z.number(),
    flights: z.number(),
    
})

export type Data = z.infer<typeof DataSetAPIResponseSchema>
export type DataSet = z.infer<typeof DataSetAPIResponseSchemaF>
export type DataSet2 = z.infer<typeof DataSetAPIResponseSchema2>
