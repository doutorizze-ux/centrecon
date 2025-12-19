import axios from 'axios';

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

export const generateAIResponse = async (text: string, userId: string) => {
    if (!process.env.OPENAI_API_KEY) {
        console.warn('OPENAI_API_KEY not set, AI disabled');
        return null;
    }

    try {
        const response = await axios.post(
            OPENAI_API_URL,
            {
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: `Você é o assistente virtual da Centrecon, uma empresa de Segurança do Trabalho. 
            Seu objetivo é ajudar clientes com agendamentos de exames (ASO, PCMSO, PPRA, LTCAT), 
            informações sobre documentos necessários e dúvidas gerais. 
            Seja profissional, amigável e responda sempre em Português do Brasil.
            Se não souber a resposta ou se o cliente quiser falar com um humano, diga que vai encaminhar para um atendente.`
                    },
                    { role: "user", content: text }
                ],
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error calling OpenAI:', error);
        return "Desculpe, tive um problema ao processar sua solicitação. Por favor, tente novamente mais tarde.";
    }
};
