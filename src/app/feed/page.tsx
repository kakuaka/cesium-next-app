import Link from 'next/link'
import Image from 'next/image'
import imageUrl from '@/assets/img/kinto.svg'

export default function Feed() {
  return (
    <div className="flex">
      <Link href="photos/1" className="flex-none border border-solid border-dark">
        <Image src={imageUrl} height={50} alt="kinto" />
      </Link>
      <div className="flex-1">
        <p className="text-2xl">title</p>
        <p>some text...</p>
      </div>
    </div>
  );
}