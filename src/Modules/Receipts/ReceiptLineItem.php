<?php

declare(strict_types=1);

namespace TydyPOS\Modules\Receipts;

final class ReceiptLineItem
{
    public function __construct(
        public string $name,
        public int $qty,
        public float $unitPrice,
        public float $total,
    ) {
    }
}
