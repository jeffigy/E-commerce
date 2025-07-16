import { API_URL } from "@/config/env.config";


export async function getProducts() {
    const res = await fetch(`${API_URL}/products`)

    const data = await res.json()

    return data
}

export async function getProductById(id: number) {
    const res = await fetch(`${API_URL}/products/${id}`)

    const data = await res.json()

    return data
}

