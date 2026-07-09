<?php

declare(strict_types=1);

namespace TydyPOS\Core;

use RuntimeException;

final class App
{
    /**
     * @var array<string, mixed>
     */
    private array $config;

    public function __construct(?string $configPath = null)
    {
        $configPath ??= dirname(__DIR__, 2) . '/config/app.php';

        if (!is_file($configPath)) {
            throw new RuntimeException("App config not found at {$configPath}");
        }

        /** @var array<string, mixed> $config */
        $config = require $configPath;
        $this->config = $config;
    }

    /**
     * @return array<string, mixed>
     */
    public function config(): array
    {
        return $this->config;
    }

    public function name(): string
    {
        return (string) ($this->config['name'] ?? 'Tydy POS');
    }
}
