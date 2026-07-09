<?php

declare(strict_types=1);

namespace TydyPOS\Config;

final class BusinessRules
{
    /**
     * @return array<string, mixed>
     */
    public static function defaults(): array
    {
        return [
            'tax_mode' => 'per_item_inclusive_or_exclusive',
            'discounts' => [
                'line_level' => true,
                'order_level' => true,
            ],
            'stock' => [
                'deduct_on_sale_completion' => true,
                'allow_negative_stock' => false,
                'return_restock_modes' => ['resellable', 'non_resellable'],
            ],
            'payments' => [
                'split_payments' => true,
                'partial_payments' => true,
            ],
            'register' => [
                'session_required' => true,
                'opening_float_required' => true,
            ],
        ];
    }
}
