<?php

declare(strict_types=1);

namespace TydyPOS\Updater;

final class UpdatePlanner
{
    /**
     * @return list<string>
     */
    public function steps(Version $version): array
    {
        if (!$version->updateAvailable()) {
            return ['No update required'];
        }

        return [
            'Enable maintenance mode',
            'Create backup snapshot',
            sprintf('Apply update package to %s', $version->latest),
            'Run database migrations',
            'Clear/cache warmup',
            'Disable maintenance mode',
        ];
    }
}
