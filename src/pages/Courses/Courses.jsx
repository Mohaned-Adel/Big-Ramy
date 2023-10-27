import React, { useEffect, useState } from "react";
import "./Courses.scss";
import coursesServices from "../../services/coursesServices";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import PlaceHolderImg from "../../assets/imgs/placeholder.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import ProductRate from "../../components/ProductRate/ProductRate";

export default function Courses() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [coursesData, setCoursesData] = useState([]);
  const [productType, setProductType] = useState("");

  async function getAllCoursesHandler() {
    setLoading(true);
    try {
      const { data } = await coursesServices.getAllCourses(
        "course",
        productType
      );
      console.log(data);
      setLoading(false);
      data?.data?.length > 0 && setCoursesData(data?.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllCoursesHandler();
  }, [productType]);
  return (
    <>
      {loading && <LoadingSpinner />}
      <section className="courses-section container mx-auto px-6 my-6">
        <h1 className="main-title">Course</h1>
        <div className="courses-wrapper my-8">
          <div>
            <ul className="flex gap-2 justify-center">
              <li
                className="cursor-pointer"
                onClick={() => {
                  setProductType("");
                }}
              >
                All
              </li>
              <li
                className="cursor-pointer"
                onClick={() => {
                  setProductType("digital");
                }}
              >
                digital
              </li>
            </ul>
          </div>
          <div className="my-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
            {coursesData?.length > 0 &&
              coursesData?.map((course, index) => {
                return (
                  <div key={index} className="course-wrapper">
                    <div className="course-card">
                      <div
                        className="course-image-wrapper cursor-pointer"
                        onClick={(e) => {
                          navigate(`/courses/${course?.id}`);
                        }}
                      >
                        <img
                          src={course?.attributes?.course?.image_url}
                          alt="product card"
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = PlaceHolderImg;
                          }}
                        />
                      </div>
                      <div className="course-details-wrapper p-4">
                        <Link
                          to={`/courses/${course?.id}`}
                          className="course-title"
                        >
                          {course?.attributes?.name}
                        </Link>

                        <ProductRate
                          reviewsNumber={course?.attributes?.num_of_reviews}
                        />
                        <div className="course-price flex items-center justify-start gap-1">
                          <span className="price-unit">
                            {course?.attributes?.currency}
                          </span>
                          <span className="price-amount">
                            {course?.attributes?.price}
                          </span>
                        </div>
                        <div className="course-actions flex items-center justify-between gap-2 my-4">
                          <div className="pay-action flex-1">
                            <Button title="Pay" />
                          </div>
                          <div className="cart-action-wrapper flex">
                            <span className="cart-action inline-block p-2">
                              <AiOutlineShoppingCart />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
