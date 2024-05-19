import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { PieItemIdentifier, DefaultizedPieValueType } from '@mui/x-charts/models';
import { Typography, Stack } from '@mui/material';

const items = [
  { value: 10, label: 'Cars in Rent ( no Id )' },
  { id: 'id_B', value: 15, label: 'Cars not in rent' },
  { id: 'id_C', value: 20, label: 'Cars Ordered' },
];

const formatObject = (obj: null | PieItemIdentifier) => {
  if (obj === null) {
    return '  undefined';
  }
  return JSON.stringify(obj, null, 2)
    .split('\n')
    .map((l) => `  ${l}`)
    .join('\n');
};
export default function CarRates() {
  const [identifier, setIdentifier] = React.useState<null | PieItemIdentifier>(null);
  const [id, setId] = React.useState<undefined | string | number>(undefined);

  const handleClick = (
    event: React.MouseEvent<SVGPathElement, MouseEvent>,
    itemIdentifier: PieItemIdentifier,
    item: DefaultizedPieValueType,
  ) => {
    setId(item.id);
    setIdentifier(itemIdentifier);
  };

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      alignItems={{ xs: 'flex-start', md: 'center' }}
      justifyContent="space-between"
      sx={{ width: '100%' }}
    >
      <Typography
        component="pre"
        sx={{ maxWidth: { xs: '100%', md: '50%', flexShrink: 1 }, overflow: 'auto' }}
      >
        {`item id: ${id ?? 'undefined'}

item identifier:
${formatObject(identifier)}`}
      </Typography>

      <PieChart
        series={[
          {
            data: items,
          },
        ]}
        onClick={handleClick}
        width={400}
        height={200}
        margin={{ right: 200 }}
      />
    </Stack>
  );
}
