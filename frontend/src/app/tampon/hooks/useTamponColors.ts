import { useMemo } from 'react';

import { useTheme } from 'styled-components';

import { ProductItemBase } from 'app/product/types';

import { randomColor } from '../functions';

export default function useTamponColors(tampons: ProductItemBase[]) {
  const theme = useTheme();
  const colors = useMemo(() => {
    let prevColor: string | null = null;

    return tampons.map(() => {
      const color = randomColor(theme.colors, [
        prevColor,
        theme.colors.secondaryBackground,
        theme.colors.primary,
      ]);

      prevColor = color;

      return color;
    });
  }, [tampons]);

  return colors;
}
