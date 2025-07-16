import { getProducts, getProductById } from "@/api/products";
import { useQuery } from "@tanstack/react-query";

export const useProductsQuery = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: () => getProducts()
    })
}

export const useProductByIdQuery = (id: number) => {
    return useQuery({
        queryKey: ['product', id],
        queryFn: () => getProductById(id)
    })
}
