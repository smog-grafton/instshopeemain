<?php

declare(strict_types=1);

namespace TydyPOS\Modules\Settings;

use InvalidArgumentException;

final class BrandingSettings
{
    public function __construct(
        public string $appName,
        public string $logoPath,
        public string $businessAddress,
        public string $invoiceFooter,
        public string $primaryColor,
    ) {
    }

    public function validate(): void
    {
        if (trim($this->appName) === '') {
            throw new InvalidArgumentException('App name cannot be empty.');
        }

        if (!preg_match('/^#[A-Fa-f0-9]{6}$/', $this->primaryColor)) {
            throw new InvalidArgumentException('Primary color must be a 6-digit hex code.');
        }
    }
}
