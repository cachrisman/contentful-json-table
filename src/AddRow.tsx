import React from 'react';
import { TableRow, TableCell, TextInput, IconButton } from '@contentful/forma-36-react-components';
import AddRowOverlay from './AddRowOverlay';
import { OnAdd } from './Rows';
import { styles as rowStyles, DragHandler } from './Row';
import { css } from 'emotion';

interface RowProps {
  onAdd: OnAdd;
}

export const styles = {
  mutedRow: css({
    '& > td': {
      opacity: 0.25
    }
  })
};

const Row = ({ onAdd }: RowProps) => {
  return (
    <TableRow className={`${rowStyles.row} ${styles.mutedRow}`}>
      <TableCell className={rowStyles.firstLastCell}>
        <DragHandler />
      </TableCell>
      <TableCell className={rowStyles.inputCell}>
        <TextInput disabled />
      </TableCell>
      <TableCell className={rowStyles.inputCell}>
        <TextInput disabled />
      </TableCell>
      <TableCell className={rowStyles.firstLastCell}>
        <IconButton
          buttonType="muted"
          iconProps={{
            icon: 'DeleteTrimmed'
          }}
          label="Remove row"
        />
      </TableCell>
      <AddRowOverlay onAdd={onAdd} />
    </TableRow>
  );
};

export default Row;
