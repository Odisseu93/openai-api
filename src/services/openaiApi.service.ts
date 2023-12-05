import OpenAI from 'openai'
import { config } from 'dotenv'

config()

const openAi = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

class OpenAiApiService {
  constructor(private _openaiClient: OpenAI) {}

  async productDescriptionGenerator(
    name: string,
    category: string,
    additionalInformation?: string
  ) {
    const chatCompletion = await this._openaiClient.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `Crie uma descrição para o anúncio de um produto para o meu e-commerce.
            Este anúncio de ver composto da seguinte forma: 
            - primeira linha com o título/nome do produto (1 linha);
            - segundo parágrafo uma descrição falando dos benefícios ao adiquirir o produto (5 linhas);
            - terceiro parágrafo específicações técnicas (máximo 7 linhas);
            - por último itens inclusos (máximo 3 linhas).
            
            segue os dados do produto: 
            - título (nome): ${name};
            - categoria: ${category};
            ${additionalInformation ? additionalInformation : ''}
          `,
        },
      ],
    })

    return chatCompletion
  }
}

const openAiApiService = new OpenAiApiService(openAi)

export { openAiApiService }
