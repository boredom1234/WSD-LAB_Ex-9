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
    rating: "",
  });

  const [displayedFormData, setDisplayedFormData] = useState({
    name: "",
    email: "",
    selectedBook: "",
    review: "",
    rating: "",
  });

  const handleSubmit = () => {
    localStorage.setItem("formData", JSON.stringify(formData));

    setDisplayedFormData({ ...formData });
  };

  const clearData = () => {
    localStorage.setItem("formData", JSON.stringify(""));

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

  const handleRatingChange = (event) => {
    const ratingValue = event.target.value;
    setFormData({ ...formData, rating: ratingValue });
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost normal-case text-xl">
          THE "QUINKIE" REVIEWS
        </a>
      </div>
      <br></br>
      <div className="form-cont">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name: "
            className="input input-bordered input-info w-full max-w-xs"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <label className="label"></label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email-Id?</span>
          </label>
          <input
            type="email"
            placeholder="example@mail.com"
            className="input input-bordered input-info w-full max-w-xs"
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
        <div className="rating gap-2">
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-red-400"
            value="1"
            checked={formData.rating === "1"}
            onChange={handleRatingChange}
          />
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-orange-400"
            value="2"
            checked={formData.rating === "2"}
            onChange={handleRatingChange}
          />
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-yellow-400"
            value="3"
            checked={formData.rating === "3"}
            onChange={handleRatingChange}
          />
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-lime-400"
            value="4"
            checked={formData.rating === "4"}
            onChange={handleRatingChange}
          />
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-green-400"
            value="5"
            checked={formData.rating === "5"}
            onChange={handleRatingChange}
          />
        </div>
        <br></br>
      </div>
      <div class="flex justify-center space-x-4">
        <input
          type="submit"
          value="Submit"
          class="btn"
          id="submit"
          onClick={handleSubmit}
        />
        <input
          type="submit"
          value="Clear"
          class="btn"
          id="submit"
          onClick={clearData}
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
          <code>Review you made: {displayedFormData.review}</code>
        </pre>
        <pre data-prefix=">">
          <code>Rating: {displayedFormData.rating}/5</code>
        </pre>
      </div>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>The "Quinkie" © 2023 - All right reserved</p>
        </aside>
      </footer>
    </>
  );
}

export default App;
