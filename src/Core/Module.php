<?php

declare(strict_types=1);

namespace TydyPOS\Core;

final class Module
{
    public function __construct(
        public readonly string $name,
        public readonly string $version,
        public readonly string $description,
        public readonly bool $enabledByDefault = true,
    ) {
    }
}
