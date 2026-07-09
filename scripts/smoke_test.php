<?php

declare(strict_types=1);

require dirname(__DIR__) . '/vendor/autoload.php';

use TydyPOS\Config\ThemeDefaults;
use TydyPOS\Core\App;
use TydyPOS\Installer\EnvFileWriter;
use TydyPOS\Installer\RequirementChecker;
use TydyPOS\Modules\Localization\TranslationPackManager;
use TydyPOS\Modules\Receipts\ReceiptLineItem;
use TydyPOS\Modules\Receipts\ThermalReceiptRenderer;
use TydyPOS\Modules\Settings\BrandingSettings;
use TydyPOS\Modules\Settings\BrandingSettingsRepository;
use TydyPOS\Updater\ManifestParser;
use TydyPOS\Updater\UpdatePlanner;

$app = new App();
assert($app->name() === 'Tydy POS');

$checker = new RequirementChecker();
$result = $checker->run(dirname(__DIR__));
assert(isset($result->checks['php_8_2_or_newer']));

$envPath = dirname(__DIR__) . '/.env.testing.generated';
(new EnvFileWriter())->write($envPath, [
    'app_name' => 'Tydy POS',
    'db_host' => '127.0.0.1',
]);
assert(is_file($envPath));
unlink($envPath);

$settingsPath = dirname(__DIR__) . '/storage_branding_test.json';
$repo = new BrandingSettingsRepository($settingsPath);
$repo->save(new BrandingSettings('Tydy POS', '/uploads/logo.png', 'Main street', 'Gracias', ThemeDefaults::palette()['primary']));
assert($repo->load()?->appName === 'Tydy POS');
unlink($settingsPath);

$renderer = new ThermalReceiptRenderer();
$output = $renderer->render(
    'Tydy POS',
    [new ReceiptLineItem('Chicken Shawarma Super Combo', 2, 6.5, 13.0)],
    13.0,
    1.3,
    14.3,
);
assert(str_contains($output, 'TOTAL'));

$translationsPath = dirname(__DIR__) . '/tmp.es.json';
$packManager = new TranslationPackManager();
$packManager->export('es', ['sale.pay' => 'Pagar'], $translationsPath);
$pack = $packManager->import($translationsPath);
assert($pack['locale'] === 'es');
unlink($translationsPath);

$manifest = json_encode(['current' => '1.0.0', 'latest' => '1.1.0'], JSON_THROW_ON_ERROR);
$version = (new ManifestParser())->parse($manifest);
$plan = (new UpdatePlanner())->steps($version);
assert(count($plan) > 1);

echo "Smoke test passed\n";
