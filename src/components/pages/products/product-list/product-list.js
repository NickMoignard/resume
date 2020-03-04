import React, {useContext, useEffect} from 'react'
import ProductsContext from ''
import ProductsPreview from ''

const ProductsList = () => {
    const productsContext = useContext(ProductsContext)
    useEffect(()=>{
        ProductsPreview.getProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const
}