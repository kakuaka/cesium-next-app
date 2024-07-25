import { NextResponse, NextRequest } from 'next/server'
export async function POST(request: NextRequest, response: NextResponse) {
  const formData = await request.formData()
  const username = formData.get('username')
  const password = formData.get('password')

  console.log('formData',  username, password)

  if (username === 'admin' && password === '1234') {
    const response = NextResponse.redirect(new URL('/', request.url));
    response.cookies.set('isLogin', '1');
    return response
  }

  return NextResponse.json({ error: '登陆错误' }, { status: 200 })
}