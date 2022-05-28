import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import { formInfo } from "../../context/context";
import Checkbox from "@mui/material/Checkbox";
import { secformInfo } from "../../context/context";

const TableComp = () => {
  const { indexVal } = useContext(secformInfo);
  const { setIndexVal } = useContext(secformInfo);
  const { isSecOpen } = useContext(secformInfo);
  const { setSecOpen } = useContext(secformInfo);

  const HandleDubbleClick = (e, index) => {
    setIndexVal(index);
    setSecOpen(!isSecOpen);
    console.log(e);
    console.log(index);
  };
  console.log(indexVal);
  const { products } = useContext(formInfo);
  return (
    <div>
      <Paper className="container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>image</TableCell>
              <TableCell>name</TableCell>
              <TableCell>mpns</TableCell>
              <TableCell>product</TableCell>
              <TableCell>manifactuler</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow
                className="data-row"
                key={index}
                onDoubleClick={(e) => HandleDubbleClick(e, index)}
              >
                <TableCell component="th" scope="row">
                  <Checkbox checked />
                  <img className="data-image " src={product.image} />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.mpns}</TableCell>
                <TableCell>{product.product}</TableCell>
                <TableCell>{product.manifactuler}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default TableComp;
