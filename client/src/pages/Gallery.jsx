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

  // const fetchImages = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:4000/api/uploads');
  //     setImages(response.data);
  //   } catch (error) {
  //     console.error('Error fetching images:', error);
  //   }
  // };

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

  const adminStatus = localStorage.getItem("user");
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
            src={`data:image/jpeg;base64,${image.imageData.toString("base64")}`}
          />
          </div>
        ))}
      </div>
      {/* FIXME create code for image uploads */}
     
    </div>
  );
};

export default Gallery;
