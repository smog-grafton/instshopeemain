<?php

declare(strict_types=1);

namespace TydyPOS\Modules\Receipts;

final class ThermalReceiptRenderer
{
    /**
     * @param list<ReceiptLineItem> $items
     */
    public function render(
        string $storeName,
        array $items,
        float $subtotal,
        float $tax,
        float $total,
        int $paperWidth = 32,
    ): string {
        $lines = [];
        $lines[] = $this->center($storeName, $paperWidth);
        $lines[] = str_repeat('-', $paperWidth);
        $lines[] = $this->padColumns('ITEM', 'QTY', 'TOTAL', $paperWidth);
        $lines[] = str_repeat('-', $paperWidth);

        foreach ($items as $item) {
            $nameLines = $this->wrap($item->name, $paperWidth - 1);
            foreach ($nameLines as $idx => $line) {
                if ($idx === 0) {
                    $lines[] = $this->padColumns(
                        $line,
                        (string) $item->qty,
                        number_format($item->total, 2),
                        $paperWidth,
                    );
                    continue;
                }

                $lines[] = $line;
            }
        }

        $lines[] = str_repeat('-', $paperWidth);
        $lines[] = $this->padLabelAmount('Subtotal', $subtotal, $paperWidth);
        $lines[] = $this->padLabelAmount('Tax', $tax, $paperWidth);
        $lines[] = $this->padLabelAmount('TOTAL', $total, $paperWidth);
        $lines[] = str_repeat('-', $paperWidth);
        $lines[] = $this->center('Thank you!', $paperWidth);

        return implode(PHP_EOL, $lines) . PHP_EOL;
    }

    private function padColumns(string $name, string $qty, string $amount, int $width): string
    {
        $qtyWidth = 4;
        $amountWidth = 9;
        $nameWidth = max(1, $width - $qtyWidth - $amountWidth - 2);

        return sprintf(
            '%-' . $nameWidth . 's %' . $qtyWidth . 's %' . $amountWidth . 's',
            mb_strimwidth($name, 0, $nameWidth, ''),
            mb_strimwidth($qty, 0, $qtyWidth, ''),
            mb_strimwidth($amount, 0, $amountWidth, ''),
        );
    }

    private function padLabelAmount(string $label, float $amount, int $width): string
    {
        $formatted = number_format($amount, 2);
        $labelWidth = max(1, $width - strlen($formatted) - 1);

        return sprintf('%-' . $labelWidth . 's %s', $label, $formatted);
    }

    /**
     * @return list<string>
     */
    private function wrap(string $text, int $width): array
    {
        $chunks = wordwrap($text, $width, "\n", true);
        $parts = explode("\n", $chunks);

        return array_values(array_filter(array_map('trim', $parts), static fn (string $line): bool => $line !== ''));
    }

    private function center(string $text, int $width): string
    {
        return str_pad($text, $width, ' ', STR_PAD_BOTH);
    }
}
