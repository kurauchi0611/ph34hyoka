import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Chip from "@material-ui/core/Chip";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '2020/09/24', '眠いよ倉内( ˘ω˘)ｽﾔｧ', '日記'),
  createData(0, '2020/09/24', '画像のテスト', 'Javascript'),
  createData(0, '2020/09/24', '課題やばあああああああああああい', '学校'),
  createData(0, '2020/09/23', 'monster', 'モンスター'),
  createData(0, '2020/09/17', 'テスト', 'プログラミング'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>最近の投稿</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>日付</TableCell>
            <TableCell>タイトル</TableCell>
            <TableCell>カテゴリ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell><Chip
                label={row.shipTo}
                color="primary"
                // clickable
                size="small"
                variant="outlined"
              // className={classes.pos}
              />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          もっとみる
        </Link>
      </div>
    </React.Fragment>
  );
}
