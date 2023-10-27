import Axios from "./Axios";

let coursesServices = {
  getAllCourses: async function (subProductType = "", productType = "") {
    const response = await Axios.get(
      `v2/storefront/products?filter[sub_product_type]=${subProductType}&filter[product_type]=${productType}`
    );
    return response;
  },
  getCourseDetails: async function (courseId = "") {
    const response = await Axios.get(`v2/storefront/products/${courseId}`);
    return response;
  },
};

export default coursesServices;
