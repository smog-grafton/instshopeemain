# Tydy POS — Technical Blueprint v1

## 1) Product Goal
Tydy POS is a modular Laravel-first POS product optimized for CodeCanyon buyers who need:
- shared-hosting compatibility
- fast installation through custom installer
- built-in updater
- thermal-printer-ready receipts (58mm/80mm)
- easy branding and localization

## 2) Target Runtime
- PHP: 8.2+
- Framework target: Laravel 11
- Database: MySQL 8+ / MariaDB compatible
- Frontend model: Monolith (Blade + Livewire + Tailwind local assets)

## 3) Architecture
Monolith with domain modules.

### Core Modules
1. Core (settings, branding, environment checks)
2. Auth/RBAC
3. Products
4. Inventory
5. POS Checkout
6. Sales & Returns
7. Customers & Suppliers
8. Purchases
9. Reports
10. Receipts/Print Engine
11. Integrations
12. Installer
13. Updater
14. Branches (v1-ready)
15. Tenancy Prep (future)

## 4) Shared Hosting Constraints
- No symlink dependency for uploads
- Public uploads under `public/uploads`
- Queue graceful fallback (sync mode)
- Cron-optional behavior with admin warning

## 5) UI/UX System
- Style blend: Linear + Stripe + Shopify clarity
- Default palette:
  - primary #2563EB
  - primary_dark #1D4ED8
  - accent #F59E0B
  - success #16A34A
  - danger #DC2626
  - background #F8FAFC
  - surface #FFFFFF
  - text_primary #0F172A
  - text_muted #64748B
  - border #E2E8F0

## 6) Core Business Rules
- Tax mode per item: inclusive/exclusive
- Discounts: line and order-level
- Stock deduction only when sale completes
- Returns can restock as resellable/non-resellable
- Split payments enabled
- Register open/close sessions mandatory

## 7) Receipt Engine
- 58mm and 80mm templates
- A4 invoice template
- Configurable header/footer and printer width
- Wrapping and truncation rules for long product names
- Barcode/QR optional toggles

## 8) Localization
- Launch locales: en, es
- Locale architecture supports adding ar and RTL in v1.1+
- Translation packs import/export format: JSON

## 9) Database Starter Model (v1)
- users, roles, permissions
- branches
- products, product_categories, units
- stocks, stock_movements
- customers, suppliers
- sales, sale_items, sale_payments
- returns, return_items
- registers, register_sessions, cash_movements
- receipts
- settings
- translations
- app_versions

## 10) Delivery Milestones
### Milestone A — Foundation
- module registry, config contracts, app settings schema

### Milestone B — Transaction Core
- product/inventory/sales/receipt flow

### Milestone C — Productization
- installer + updater + docs + demo data

## 11) QA Focus
- receipt rendering tests (58mm, 80mm)
- permission gate tests
- stock movement integrity checks
- shared-hosting install smoke tests
