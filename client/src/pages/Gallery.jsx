import "react-image-gallery/styles/css/image-gallery.css";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 } from "uuid";

const Gallery = () => {
  const { user } = useAuthContext();
  const [selectedFile, setSelectedFile] = useState(null);
  const [images, setImages] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", selectedFile);

    axios
      .post("/api/uploads", formData)
      .then((response) => {
        console.log(response.data);
        alert("Uploaded successfully, refesh page to view");
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
          <input
            type="file"
            className="uploadBTN"
            onChange={handleFileChange}
          ></input>
          <button onClick={handleUpload}>Upload</button>
        </div>
      )}

      <div className="imageGallery">
        {images.map((image) => (
          <div key={v4()}>
            <img src={image.imagePath} alt={image.filename} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
