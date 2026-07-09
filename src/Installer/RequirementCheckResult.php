<?php

declare(strict_types=1);

namespace TydyPOS\Installer;

final class RequirementCheckResult
{
    /**
     * @param array<string, bool> $checks
     * @param list<string> $messages
     */
    public function __construct(
        public array $checks,
        public array $messages,
    ) {
    }

    public function passed(): bool
    {
        foreach ($this->checks as $ok) {
            if ($ok !== true) {
                return false;
            }
        }

        return true;
    }
}
