package com.eggstore.dto.product;

import java.math.BigDecimal;

public record ProductVariantResponse(
        Long id,
        Integer packSize,
        BigDecimal price,
        Integer stockQuantity,
        boolean inStock
) {}
