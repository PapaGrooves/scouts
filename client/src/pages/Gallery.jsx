import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


const Gallery = () => {
    const images = [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/"
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/"
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/"
        }
      ];
    
      return (
        <div className="galleryWrap">
          <ImageGallery 
            className="gallery"
            items={images}
            showPlayButton={true}
            showFullscreenButton={true}
            slideInterval={3000}
            slideOnThumbnailOver={true}
            showIndex={true}
          />

{/* FIXME create code for image uploads */}
          <button className="uploadBTN">Upload</button>
         </div>
      );
}

export default Gallery;



