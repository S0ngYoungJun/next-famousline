import clientPromise from '@/app/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("moviedata");
    const datas = await db.collection('moviedata').find({}).toArray();

    // Response 객체를 사용하여 응답 생성
    return new Response(JSON.stringify(datas), {
      status: 200, // HTTP 상태 코드
      headers: {
        'Content-Type': 'application/json', // 응답 타입
      },
    });
  } catch (error) {
    const errorMessage = (error instanceof Error) ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ message: 'Failed to fetch posts', error: errorMessage }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}