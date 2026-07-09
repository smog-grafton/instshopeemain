<?php

declare(strict_types=1);

namespace TydyPOS\Modules\Localization;

final class LocaleCatalog
{
    /**
     * @return array<string, array<string, mixed>>
     */
    public static function defaults(): array
    {
        return [
            'en' => [
                'name' => 'English',
                'native' => 'English',
                'rtl' => false,
                'enabled' => true,
            ],
            'es' => [
                'name' => 'Spanish',
                'native' => 'Español',
                'rtl' => false,
                'enabled' => true,
            ],
            'ar' => [
                'name' => 'Arabic',
                'native' => 'العربية',
                'rtl' => true,
                'enabled' => false,
            ],
        ];
    }
}
