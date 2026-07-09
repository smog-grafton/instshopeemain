<?php

declare(strict_types=1);

namespace TydyPOS\Modules\Localization;

use InvalidArgumentException;

final class TranslationPackManager
{
    /**
     * @param array<string, string> $translations
     */
    public function export(string $locale, array $translations, string $path): void
    {
        if ($locale === '') {
            throw new InvalidArgumentException('Locale cannot be empty.');
        }

        ksort($translations);

        $payload = [
            'locale' => $locale,
            'translations' => $translations,
        ];

        file_put_contents($path, json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    }

    /**
     * @return array{locale:string, translations: array<string, string>}
     */
    public function import(string $path): array
    {
        $json = file_get_contents($path);
        if ($json === false || trim($json) === '') {
            throw new InvalidArgumentException('Translation pack is empty.');
        }

        /** @var array{locale?:string, translations?:array<string, string>} $decoded */
        $decoded = json_decode($json, true, 512, JSON_THROW_ON_ERROR);

        $locale = $decoded['locale'] ?? '';
        $translations = $decoded['translations'] ?? [];

        if (!is_string($locale) || $locale === '') {
            throw new InvalidArgumentException('Translation pack locale is invalid.');
        }

        return [
            'locale' => $locale,
            'translations' => $translations,
        ];
    }
}
