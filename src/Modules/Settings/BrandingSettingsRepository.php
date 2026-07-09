<?php

declare(strict_types=1);

namespace TydyPOS\Modules\Settings;

final class BrandingSettingsRepository
{
    public function __construct(private string $filePath)
    {
    }

    public function save(BrandingSettings $settings): void
    {
        $settings->validate();

        $payload = [
            'app_name' => $settings->appName,
            'logo_path' => $settings->logoPath,
            'business_address' => $settings->businessAddress,
            'invoice_footer' => $settings->invoiceFooter,
            'primary_color' => $settings->primaryColor,
        ];

        file_put_contents($this->filePath, json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    }

    public function load(): ?BrandingSettings
    {
        if (!is_file($this->filePath)) {
            return null;
        }

        $json = file_get_contents($this->filePath);
        if ($json === false || $json === '') {
            return null;
        }

        /** @var array<string, string> $data */
        $data = json_decode($json, true, 512, JSON_THROW_ON_ERROR);

        return new BrandingSettings(
            appName: $data['app_name'] ?? 'Tydy POS',
            logoPath: $data['logo_path'] ?? '',
            businessAddress: $data['business_address'] ?? '',
            invoiceFooter: $data['invoice_footer'] ?? '',
            primaryColor: $data['primary_color'] ?? '#2563EB',
        );
    }
}
