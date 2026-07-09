<?php

declare(strict_types=1);

namespace TydyPOS\Config;

final class ThemeDefaults
{
    /**
     * @return array<string, string>
     */
    public static function palette(): array
    {
        return [
            'primary' => '#2563EB',
            'primary_dark' => '#1D4ED8',
            'accent' => '#F59E0B',
            'success' => '#16A34A',
            'danger' => '#DC2626',
            'background' => '#F8FAFC',
            'surface' => '#FFFFFF',
            'text_primary' => '#0F172A',
            'text_muted' => '#64748B',
            'border' => '#E2E8F0',
        ];
    }
}
