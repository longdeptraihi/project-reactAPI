import { axiosClient } from './axiosClient';

const ProductAPI = {
    getAll() {
        const url = `/product`;
        return axiosClient.get(url);
    }
    /* get(id) {
        const url = `/product/${id}`
        return axiosClient.get(url);
    },
    add(product) {
        const url = `/product/add`
        return axiosClient.post(url);
    },
    remove(id) {
        const url = `/product/${id}`
        return axiosClient.delete(url)

            ;
    },
    update(id, data) {
        const url = `/product/${id}`
        return axiosClient.put(url, data);
    } */

}
export default ProductAPI;