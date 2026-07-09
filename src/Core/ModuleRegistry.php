<?php

declare(strict_types=1);

namespace TydyPOS\Core;

final class ModuleRegistry
{
    /**
     * @return array<string, Module>
     */
    public static function default(): array
    {
        $modules = [
            new Module('core', '1.0.0', 'Core settings, branding, and runtime controls'),
            new Module('auth', '1.0.0', 'Authentication, roles, and permissions'),
            new Module('products', '1.0.0', 'Catalog, categories, and pricing'),
            new Module('inventory', '1.0.0', 'Stock movements and quantity controls'),
            new Module('pos', '1.0.0', 'Cart, checkout, and fast cashier actions'),
            new Module('sales', '1.0.0', 'Orders, invoices, payments, and returns'),
            new Module('receipts', '1.0.0', 'Thermal and A4 print templates'),
            new Module('localization', '1.0.0', 'Language packs and locale selection'),
            new Module('installer', '1.0.0', 'Guided installation wizard'),
            new Module('updater', '1.0.0', 'In-app update checks and migrations'),
            new Module('branches', '1.0.0', 'Branch-aware operations and reporting'),
            new Module('tenancy_prep', '1.0.0', 'Future multi-tenant readiness', false),
        ];

        $map = [];
        foreach ($modules as $module) {
            $map[$module->name] = $module;
        }

        return $map;
    }
}
