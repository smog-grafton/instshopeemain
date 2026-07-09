<?php

declare(strict_types=1);

use TydyPOS\Config\BusinessRules;
use TydyPOS\Config\ThemeDefaults;
use TydyPOS\Core\ModuleRegistry;
use TydyPOS\Modules\Localization\LocaleCatalog;
use TydyPOS\Modules\Receipts\ReceiptTemplateCatalog;

return [
    'name' => 'Tydy POS',
    'version' => '1.0.0-alpha',
    'modules' => ModuleRegistry::default(),
    'theme' => ThemeDefaults::palette(),
    'rules' => BusinessRules::defaults(),
    'receipts' => ReceiptTemplateCatalog::defaults(),
    'locales' => LocaleCatalog::defaults(),
];
