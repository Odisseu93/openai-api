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

    try {
      const { choices } = await openAiApiService.productDescriptionGenerator(
        name,
        category,
        additionalInformation || undefined
      )

      res.status(200).json({
        messege: 'Product description generated successfully!',
        description: choices[0]['message']['content'],
      })
    } catch (err: any) {
      res.status(500).json({ message: err.message })
    }
  }
}
