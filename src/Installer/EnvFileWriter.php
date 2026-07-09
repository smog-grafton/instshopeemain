<?php

declare(strict_types=1);

namespace TydyPOS\Installer;

final class EnvFileWriter
{
    /**
     * @param array<string, string> $variables
     */
    public function write(string $path, array $variables): void
    {
        ksort($variables);

        $lines = [];
        foreach ($variables as $key => $value) {
            $escaped = str_replace('"', '\\"', $value);
            $lines[] = sprintf('%s="%s"', strtoupper($key), $escaped);
        }

        file_put_contents($path, implode(PHP_EOL, $lines) . PHP_EOL);
    }
}
