import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import NominateItem from './NominateItem';
import '../styles/NominationList.css';
import { LocalActivity } from '@material-ui/icons';

export default function NominationList(props) {
  const tableHeader = ['Title', 'Year', ''];
  return (
    <div className="container">
      <h6 className="container-title">
        {<LocalActivity className="icon" />}Your nominations
      </h6>
      <Paper className="paper">
        <Table>
          <TableHead>
            <TableRow>
              {tableHeader.map((header) => (
                <TableCell>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {!!props.list &&
              props.list.map((movie) => (
                <NominateItem {...movie} denominate={props.denominate} />
              ))}
          </TableBody>
        </Table>
      </Paper>
      <h6>
        Your list is saved in your browser's storage so you can come back later.
      </h6>
    </div>
  );
}
