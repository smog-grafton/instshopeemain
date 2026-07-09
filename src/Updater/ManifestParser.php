<?php

declare(strict_types=1);

namespace TydyPOS\Updater;

use InvalidArgumentException;

final class ManifestParser
{
    public function parse(string $json): Version
    {
        /** @var array<string, string> $decoded */
        $decoded = json_decode($json, true, 512, JSON_THROW_ON_ERROR);

        $current = $decoded['current'] ?? null;
        $latest = $decoded['latest'] ?? null;

        if (!is_string($current) || !is_string($latest)) {
            throw new InvalidArgumentException('Manifest must include string keys: current, latest');
        }

        return new Version($current, $latest);
    }
}
