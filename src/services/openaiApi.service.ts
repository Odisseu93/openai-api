import { config } from 'dotenv'

import OpenAI from 'openai'

config()

class OpenAiApiService {
  private _openaiClient: OpenAI

  constructor(apiKey: string) {
    this._openaiClient = new OpenAI({ apiKey })
  }

  async productDescriptionGenerator(
    name: string,
    category: string,
    additionalInformation?: string
  ) {
    const userMessage = `Crie uma descrição para o anúncio de um produto para o meu e-commerce.
    Este anúncio deve seguir a seguinte estrutura: título/nome do produto (1 linha), 
    descrição geral do produto (2-3 linhas), benefícios ao adquirir o produto (1 linha), 
    informações adicionais (máximo 2 linhas), itens inclusos(1-2 linhas).

    aqui estão os dados do produto: 
    - título (nome): ${name};
    - categoria: ${category};
    ${additionalInformation ? additionalInformation : ''}
    `

    const stream = await this._openaiClient.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: userMessage }],
      stream: true,
    })

    return stream
  }

  async imageGenerator(imageDescription: string) {
    const image = await this._openaiClient.images.generate({
      model: 'dall-e-2',
      prompt: imageDescription,
      n: 1,
      size: '1024x1024',
    })

    return image.data
  }
}

const openAiApiService = new OpenAiApiService(process.env.OPENAI_API_KEY || '')

export { openAiApiService }
