export const getAllQuestions=async()=>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/community/questions?limit=10&offset=0&sort=asc`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });

      return  response.json()
}


export const getQuestion=async(id)=>{
    // 'use client'
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/community/questions/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });

      return  response.json()
}


export const getQuestionAnswers=async(id)=>{

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/community/questions/${id}/answers?limit=10&offset=0&sort=asc`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });
      
      return  response.json()
}
