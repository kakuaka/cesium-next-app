import Image from 'next/image'
import Photo from '../../../photos/[id]/page'

export default function Modal() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)]">
      <Photo />
    </div>
  );
}