import IconButton from '../IconButton'

export interface GalleryCardProps {
  src: string
  title: string
  subtitle?: string
  onClick?: () => void
}
const GalleryCard = (props: GalleryCardProps) => {
  const { src, title, subtitle, onClick } = props
  return (
    <div className="box-border h-full divide-y rounded-lg border-2 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 drop-shadow-lg">
      <img src={src ?? '/loading.gif'} className="" alt="loading" />
      <div className="flex flex-row items-center gap-2">
        <div className="flex grow flex-col px-4 py-1">
          <div>
            <h6>{title}</h6>
          </div>
          <div>
            <p>{subtitle}</p>
          </div>
        </div>
        <div className="flex-none px-3 py-1">
          <IconButton icon="mdi--more-vert" fontSize="text-2xl" />
        </div>
      </div>
    </div>
  )
}

export default GalleryCard
