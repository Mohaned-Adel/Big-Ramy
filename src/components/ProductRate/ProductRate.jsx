import React from "react";
import "./ProductRate.scss";
import { AiOutlineStar } from "react-icons/ai";

export default function ProductRate({ reviewsNumber = 0 }) {
  return (
    <div className="course-rate my-2">
      <span className="flex justify-start items-center gap-1">
        <span>
          <AiOutlineStar />
        </span>
        <span>
          <AiOutlineStar />
        </span>
        <span>
          <AiOutlineStar />
        </span>
        <span>
          <AiOutlineStar />
        </span>
        <span>
          <AiOutlineStar />
        </span>
        <span className="rate-number">({reviewsNumber})</span>
      </span>
    </div>
  );
}
