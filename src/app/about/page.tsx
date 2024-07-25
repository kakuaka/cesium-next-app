import Content from './Content';

import { Suspense } from 'react';

export default function About() {

  return (
    <div className="h-full">
      <h1>About</h1>
      <p>模拟延迟2秒展示loading</p>

      <hr className="my-[20px]" />

      <Suspense fallback={<div>loading...</div>}>
        <Content />
      </Suspense>

      <p>展示suspense配合steaming进行流式渲染和选择性补水</p>
    </div>
  )
}


export async function generateMetadata(params: any) {
  await new Promise(r => setTimeout(r, 2000));
  return { title: 'About' };
}