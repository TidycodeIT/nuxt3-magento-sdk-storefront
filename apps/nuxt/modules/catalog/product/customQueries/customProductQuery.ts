export const customProductQuery = {
    products: 'products-custom-query',
    metadata: {
        fields: `items {
                        sku
                        name
                        media_gallery { 
                            url
                            label
                            position
                            disabled 
                        } 
                        price_range {
                            minimum_price {
                                 regular_price {
                                    value
                                    currency 
                                } 
                            }
                        }
                        review_count
                        rating_summary
                        reviews {
                            items {
                                summary
                                text
                                created_at
                                average_rating
                                nickname
                            }
                        }
                    }`
    }
};
