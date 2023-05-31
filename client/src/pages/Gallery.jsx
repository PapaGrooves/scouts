import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState, useEffect } from "react";
import axios from 'axios';

const Gallery = () => {
  const { user } = useAuthContext();
  const [selectedFile, setSelectedFile] = useState(null);
  const [images, setImages] = useState([]);


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    fetch('api/uploads', {
      method: 'POST',
      body: formData
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        // Do something with the result
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/uploads');
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
  

  useEffect(() => {
    fetchImages();
  }, []);
  // const images = [
  //   {
  //     original: "https://picsum.photos/id/1018/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1018/250/150/",
  //   },
  //   {
  //     original: "https://picsum.photos/id/1015/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1015/250/150/",
  //   },
  //   {
  //     original: "https://picsum.photos/id/1019/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1019/250/150/",
  //   },
  // ];

  const adminStatus = localStorage.getItem("user");
  const jsn = JSON.parse(adminStatus);

  return (
    <div className="galleryWrap">
      {/* <ImageGallery
        className="gallery"
        items={images}
        showPlayButton={true}
        showFullscreenButton={true}
        slideInterval={3000}
        slideOnThumbnailOver={true}
        showIndex={true}
      /> */}
 <div className="image-gallery">
      {images.map((image) => (
        <img
          key={image._id}
          src={`http://localhost:4000/api/uploads/${image.filename}`}
          // alt="Gallery Image"
        />
      ))}
    </div>
      {/* FIXME create code for image uploads */}
      {user && (
        <div>
          {/* This is the input for image selection */}
          <input
            type="file"
            className="uploadBTN"
            // onChange={(e) => setImage(e.target.files)}
            onChange={handleFileChange}
          ></input>
          {/* this button will serve as the actual upload */}
          <button onClick={handleUpload}>Upload</button>
        </div>
      )}
      {jsn.is_admin === 1 ? (
        <>
          <button className="pendingBTN">
            Pending
            <div className="counter">0</div>
          </button>
        </>
      ) : null}
    </div>
  );
};

export default Gallery;