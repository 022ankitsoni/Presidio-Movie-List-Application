import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateMovie = () => {
  const [name, setName] = useState("");
  const [director, setDirector] = useState("");
  const [year, setYear] = useState("");
  const [language, setLanguage] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      console.log(id);
      const response = await axios.put(
        `/update/movies/update/${id}`,
        {
          name,
          director,
          releaseYear: year,
          language,
          rating,
          imagePath: image,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("my response", response.data);
      toast.success("Movie Updated Successfully");
      setIsSuccess(true);
    } catch (error) {
      console.log("my error", error);
    }
  };
  const handleClose = (e) => {
    e.preventDefault();
    navigate("/");
  };
  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);
  return (
    <div
      className="updateContainer "
      style={{ backgroundColor: "rgba(52, 52, 52, 1)" }}
    >
      <form className="text-white my-5 updateForm bg-dark border border-white-2 ">
        <div className="mb-4">
          <h1>Update Movie</h1>
        </div>
        <div className="mb-3">
          <label className="form-label">Movie Id</label>
          <input
            type="Number"
            className="form-control bg-transparent text-white"
            value={id}
            disabled
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Movie name</label>
          <input
            type="text"
            className="form-control bg-transparent text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Director</label>
          <input
            type="text"
            className="form-control bg-transparent text-white"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Release Year</label>
          <input
            type="text"
            className="form-control bg-transparent text-white"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Language</label>
          <input
            type="text"
            className="form-control bg-transparent text-white"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Rating</label>
          <input
            type="text"
            className="form-control bg-transparent text-white"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image Link</label>
          <input
            type="text"
            className="form-control bg-transparent text-white"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-dark border border-white custSearchBtn"
          onClick={handleUpdate}
        >
          Update
        </button>
        <button
          type="submit"
          className="btn btn-dark border border-white custSearchBtn"
          onClick={handleClose}
        >
          Close
        </button>
      </form>
    </div>
  );
};

export default UpdateMovie;
