<?php

declare(strict_types=1);

namespace TydyPOS\Updater;

final class Version
{
    public function __construct(public string $current, public string $latest)
    {
    }

    public function updateAvailable(): bool
    {
        return version_compare($this->latest, $this->current, '>');
    }
}
