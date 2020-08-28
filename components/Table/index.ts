import styled from "styled-components";
import { lighten } from "polished";

import theme from "../../theme";

const Table = styled.table`
  border-spacing: 0;
  font-size: 14px;
  thead {
    color: ${theme.text.color1};
    th {
      text-align: center;
      padding: 10px 20px;
      background-color: ${lighten(0.3, theme.colors.primary)};
      border-bottom: 3px solid ${theme.colors.primary};
    }
  }
  tbody {
    color: ${theme.text.color2};
    td {
      text-align: center;
      padding: 10px 20px;
    }

    tr:nth-child(even) {
      td {
        background-color: ${lighten(0.4, theme.colors.secondary)};
      }
    }
  }
`;

export default Table;
