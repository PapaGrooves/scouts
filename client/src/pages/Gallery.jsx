import "react-image-gallery/styles/css/image-gallery.css";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 } from 'uuid'


const Gallery = () => {
  const { user } = useAuthContext();
  const [selectedFile, setSelectedFile] = useState(null);
  const [images, setImages] = useState([]);
  // const [imageSrc, setImageSrc] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", selectedFile);

    fetch("/api/uploads", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        // Do something with the result
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/uploads");
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  // const adminStatus = localStorage.getItem("user");
  // const jsn = JSON.parse(adminStatus);

  return (
    <div className="galleryWrap">
       {user && (
        <div className="imageUpload">
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
      {/* {jsn.is_admin === 1 ? (
        <>
          <button className="pendingBTN">
            Pending
            <div className="counter">0</div>
          </button>
        </>
      ) : null} */}
      <div className="imageGallery">
        {images.map((image) => (
          <div key={v4()}>
          <img
            src={image.imageData}
            alt="scout cubs"
          />
          </div>
        ))}
      </div>
      {/* FIXME create code for image uploads */}
     
    </div>
  );
};

export default Gallery;
