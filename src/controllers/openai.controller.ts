import { Response } from 'express'
import { openAiApiService } from '../services/openaiApi.service'

interface TypedRequestBody<T> extends Express.Request {
  body: T
}

export class OpenaiController {
  static async generateDescription(
    req: TypedRequestBody<{
      name: string
      category: string
      additionalInformation: string
    }>,
    res: Response
  ) {
    const { name, category, additionalInformation } = req.body

    if (!name || !category)
      return res
        .status(400)
        .json({ message: 'The name and category are required!' })

    const startTime = new Date()
    try {
      const stream = await openAiApiService.productDescriptionGenerator(
        name,
        category,
        additionalInformation || undefined
      )

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content || ''
        res.status(200).write(content)
      }

      const endTime = new Date()
      const executionTime = endTime.getTime() - startTime.getTime()
      console.log('Tempo de execução:', executionTime, 'ms')

      res.end()
    } catch (err: any) {
      res.status(500).json({ message: err.message })
    }
  }
}
