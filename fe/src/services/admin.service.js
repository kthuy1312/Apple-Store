// import axios from "axios";
import axios from './axios.customize';

//user
const getAllUsers = () => {
    const URL_BACKEND = `/admin/users`;
    const token = localStorage.getItem("access_token");
    return axios.get(URL_BACKEND, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

//product
const getAllProduct = () => {
    const URL_BACKEND = `/api/products`;
    return axios.get(URL_BACKEND);
}

const createProduct = (data) => {

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("basePrice", data.basePrice);
    formData.append("description", data.description);
    formData.append("category_id", data.category_id);

    if (data.productImg && data.productImg[0]) {
        formData.append("productImg", data.productImg[0].originFileObj);
    }//dùng formData axios sẽ tự thêm header "Content-Type": "multipart/form-data; boundary=..."

    formData.append("variants", JSON.stringify(data.variants));

    const URL_BACKEND = `/admin/products`;
    const token = localStorage.getItem("access_token");
    return axios.post(URL_BACKEND, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
const updateProduct = (id, data) => {

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("basePrice", data.basePrice);
    formData.append("description", data.description);
    formData.append("category_id", data.category_id);

    if (data.productImg && data.productImg[0]) {
        formData.append("productImg", data.productImg[0].originFileObj);
    }//dùng formData axios sẽ tự thêm header "Content-Type": "multipart/form-data; boundary=..."

    formData.append("variants", JSON.stringify(data.variants));

    const URL_BACKEND = `/admin/products/${id}`;
    const token = localStorage.getItem("access_token");
    return axios.put(URL_BACKEND, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

const hideProduct = (id) => {
    const URL_BACKEND = `/admin/hide-product/${id}`;
    const token = localStorage.getItem("access_token");
    return axios.put(URL_BACKEND, {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    );
};


//orders
const getAllOrders = () => {
    const URL_BACKEND = `/admin/orders`;
    const token = localStorage.getItem("access_token");
    return axios.get(URL_BACKEND, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};



export {
    getAllUsers, getAllOrders, getAllProduct, createProduct, updateProduct, hideProduct
}