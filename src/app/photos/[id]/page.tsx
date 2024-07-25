import Image from 'next/image'
import imageUrl from '@/assets/img/kinto.svg'

export default function Photo() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="w-[500px] bg-white">
        <Image src={imageUrl} width={500} alt="kinto" />
        <div className="mt-[20px]">
          <p className="text-2xl text-center">title</p>
          <p className="text-center">some text...</p>
        </div>
      </div>
    </div>
  );
}