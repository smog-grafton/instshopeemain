<?php

declare(strict_types=1);

namespace TydyPOS\Modules\Receipts;

final class ReceiptTemplateCatalog
{
    /**
     * @return array<int, array<string, mixed>>
     */
    public static function defaults(): array
    {
        return [
            [
                'code' => 'thermal_80_classic',
                'label' => 'Thermal 80mm — Classic Retail',
                'paper_width_mm' => 80,
                'supports_qr' => true,
                'supports_barcode' => true,
            ],
            [
                'code' => 'thermal_58_compact',
                'label' => 'Thermal 58mm — Compact Fast Checkout',
                'paper_width_mm' => 58,
                'supports_qr' => true,
                'supports_barcode' => false,
            ],
            [
                'code' => 'invoice_a4_standard',
                'label' => 'A4 Invoice — Standard',
                'paper_width_mm' => 210,
                'supports_qr' => true,
                'supports_barcode' => true,
            ],
        ];
    }
}
