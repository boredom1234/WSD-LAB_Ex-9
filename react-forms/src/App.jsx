import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selectedBook: "",
    review: "",
  });

  const [displayedFormData, setDisplayedFormData] = useState({
    name: "",
    email: "",
    selectedBook: "",
    review: "",
  });

  const handleSubmit = () => {
    localStorage.setItem("formData", JSON.stringify(formData));

    setDisplayedFormData({ ...formData });
  };

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("formData"));
    if (storedFormData) {
      setFormData(storedFormData);
      setDisplayedFormData(storedFormData);
    }
  }, []);

  const handleBookSelection = (book) => {
    setFormData({ ...formData, selectedBook: book });
    setIsDropdownOpen(false);
  };

  return (
    <>
      <h1 className="text-4xl font-bold">THE QUINKIE.</h1>
      <br></br>
      <div className="form-cont">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name: "
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <label className="label"></label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email-Id?</span>
          </label>
          <input
            type="text"
            placeholder="example@mail.com"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <label className="label"></label>
        </div>
        <label className="label">
          <span className="label-text">Select a Book 🔽</span>
        </label>
        <div style={{ textAlign: "center" }}>
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn s-1">
              {formData.selectedBook ? formData.selectedBook : "Select a Book"}
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  onClick={() =>
                    setFormData({
                      ...formData,
                      selectedBook: "Harry Potter and the Sorcerer's Stone",
                    })
                  }
                >
                  Harry Potter and the Sorcerer's Stone
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    setFormData({
                      ...formData,
                      selectedBook: "To Kill a Mockingbird",
                    })
                  }
                >
                  To Kill a Mockingbird
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    setFormData({ ...formData, selectedBook: "1984" })
                  }
                >
                  1984
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    setFormData({
                      ...formData,
                      selectedBook: "The Great Gatsby",
                    })
                  }
                >
                  The Great Gatsby
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    setFormData({
                      ...formData,
                      selectedBook: "The Catcher in the Rye",
                    })
                  }
                >
                  The Catcher in the Rye
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    setFormData({
                      ...formData,
                      selectedBook: "Pride and Prejudice",
                    })
                  }
                >
                  Pride and Prejudice
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    setFormData({
                      ...formData,
                      selectedBook: "The Lord of the Rings",
                    })
                  }
                >
                  The Lord of the Rings
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    setFormData({
                      ...formData,
                      selectedBook: "To Kill a Mockingbird",
                    })
                  }
                >
                  To Kill a Mockingbird
                </a>
              </li>
            </ul>
          </div>
        </div>
        <br></br>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Book Review</span>
          </label>
          <textarea
            className="textarea textarea-accent"
            placeholder="Write Review here"
            onChange={(e) =>
              setFormData({ ...formData, review: e.target.value })
            }
          ></textarea>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <input
          type="submit"
          value="Submit"
          className="btn"
          id="submit"
          onClick={handleSubmit}
        />
      </div>
      <div className="mockup-code bg-base-100 text-bg-neutral-content">
        <pre data-prefix=">">
          <code>Name: {displayedFormData.name}</code>
        </pre>
        <pre data-prefix=">">
          <code>Email: {displayedFormData.email}</code>
        </pre>
        <pre data-prefix=">">
          <code>Book: {displayedFormData.selectedBook}</code>
        </pre>
        <pre data-prefix=">">
          <code>Review: {displayedFormData.review}</code>
        </pre>
      </div>
    </>
  );
}

export default App;
