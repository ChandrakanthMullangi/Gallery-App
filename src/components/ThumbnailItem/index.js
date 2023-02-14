// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageObject, onClickButton, id} = props

  const {imageUrl, imageAltText} = imageObject

  const createClass = id !== imageObject.id ? 'highlight' : ''

  const onClickThumbnailButton = () => {
    onClickButton(imageUrl, imageAltText)
  }

  return (
    <li className="thumbnail">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnailButton}
      >
        <img
          src={imageObject.thumbnailUrl}
          className={`${createClass}`}
          alt={imageObject.thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
