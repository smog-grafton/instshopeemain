<?php

declare(strict_types=1);

namespace TydyPOS\Installer;

final class RequirementChecker
{
    public function run(string $projectRoot): RequirementCheckResult
    {
        $checks = [
            'php_8_2_or_newer' => version_compare(PHP_VERSION, '8.2.0', '>='),
            'ext_json' => extension_loaded('json'),
            'ext_mbstring' => extension_loaded('mbstring'),
            'ext_pdo' => extension_loaded('pdo'),
            'writable_project_root' => is_writable($projectRoot),
            'writable_public_uploads' => $this->ensureWritableUploads($projectRoot),
        ];

        $messages = [];
        foreach ($checks as $name => $ok) {
            $messages[] = sprintf('[%s] %s', $ok ? 'OK' : 'FAIL', $name);
        }

        return new RequirementCheckResult($checks, $messages);
    }

    private function ensureWritableUploads(string $projectRoot): bool
    {
        $uploadPath = rtrim($projectRoot, '/') . '/public/uploads';
        if (!is_dir($uploadPath)) {
            @mkdir($uploadPath, 0775, true);
        }

        return is_dir($uploadPath) && is_writable($uploadPath);
    }
}
