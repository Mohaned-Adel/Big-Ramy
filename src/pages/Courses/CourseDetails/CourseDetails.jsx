import React, { useEffect, useState } from "react";
import "./CourseDetails.scss";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import coursesServices from "../../../services/coursesServices";
import { useParams } from "react-router";
import ProductRate from "../../../components/ProductRate/ProductRate";
import Button from "../../../components/Button/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import { BiRocket } from "react-icons/bi";

export default function CourseDetails() {
  const param = useParams();
  const courseId = param?.courseId;

  const [loading, setLoading] = useState(false);
  const [courseData, setCourseData] = useState();

  async function getCourseDetailsHandler() {
    setLoading(true);
    try {
      const { data } = await coursesServices.getCourseDetails(courseId);
      console.log(data);
      setLoading(false);
      setCourseData(data?.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getCourseDetailsHandler();
  }, []);
  return (
    <>
      {loading && <LoadingSpinner />}
      <section className="course-section">
        <div className="course-info flex justify-between items-center container mx-auto px-6 my-6">
          <div>
            <h4 className="main-title mb-4">{courseData?.attributes?.name}</h4>
            <ProductRate />
          </div>
          <div>
            <div className="course-price flex items-center justify-start gap-1">
              <span className="price-unit">
                {courseData?.attributes?.currency}
              </span>
              <span className="price-amount">
                {courseData?.attributes?.price}
              </span>
            </div>
            <div className="course-actions flex items-center justify-between gap-2 my-4 w-[200px]">
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
        <div className="course-vide-wrapper my-4 container mx-auto px-6">
          <div className="course-video">
            <video
              width="100%"
              height="240"
              controls
              tabIndex="-1"
              disablePictureInPicture
              src={courseData?.attributes?.course?.video_url}
            ></video>
          </div>
        </div>
        <div className="course-sub-sections container mx-auto px-6 my-6">
          <div className="sub-sections flex items-center gap-4 uppercase">
            <a href="#about">about</a>
            <a href="#content">content</a>
          </div>
          <div id="about">
            <div className="section-level mt-12 mb-10 flex flex-col justify-start items-start gap-2">
              <h4 className="main-title uppercase">level</h4>
              <p className="text-2xl capitalize opacity-75">
                {courseData?.attributes?.course?.level?.value}
              </p>
            </div>
            <div className="section-level mt-12 mb-10 flex flex-col justify-start items-start gap-2">
              <h4 className="main-title uppercase">DESCRIPTIONS</h4>
              <p className="text-2xl capitalize opacity-75">
                {courseData?.attributes?.course?.description}
              </p>
            </div>
          </div>
        </div>
        <div className="course-sub-info">
          <div className="container mx-auto px-6 my-6 py-11 flex flex-wrap gap-4">
            <div className="course-duration ">
              <div className="sub-info-icon">
                <GiSandsOfTime />
              </div>
              <div>
                <h4 className="main-title uppercase text-2xl mb-1">duration</h4>
                <p>
                  {courseData?.attributes?.course?.sessions_count} sessions (
                  {courseData?.attributes?.course?.duration_in_hours} hours)
                </p>
              </div>
            </div>
            <div className="course-duration ">
              <div className="sub-info-icon">
                <BiRocket />
              </div>
              <div>
                <h4 className="main-title uppercase text-2xl mb-1">
                  start date
                </h4>
                <p>{courseData?.attributes?.course?.start_date}</p>
              </div>
            </div>
          </div>
        </div>
        <div id="content" className="container mx-auto px-6 my-6 py-11">
          <h4 className="main-title uppercase">content</h4>
          <div className="my-5">
            {courseData?.attributes?.course?.sections?.length > 0 &&
              courseData?.attributes?.course?.sections?.map(
                (section, index) => {
                  return (
                    <div className="my-4" key={index}>
                      <h4>Week {index + 1}</h4>
                      {section?.sessions?.length > 0 &&
                        section?.sessions?.map((session, index) => (
                          <p key={index}>{session?.title}</p>
                        ))}
                    </div>
                  );
                }
              )}
          </div>
        </div>
      </section>
    </>
  );
}
