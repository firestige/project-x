import GalleryCard from '~/components/GalleryCard'
import _ from 'lodash'

const Library = () => {
  const renderedItems = () =>
    _.range(0, 10).map((item) => (
      <GalleryCard
        key={item}
        src="/loading.gif"
        title={`${item}`}
        subtitle="1234567"
      />
    ))
  return (
    <div className="grid gap-3 md:container md:mx-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {renderedItems()}
    </div>
  )
}

export default Library
