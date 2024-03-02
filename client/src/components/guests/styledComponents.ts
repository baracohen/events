import styled from "styled-components";
import { GuestStatus } from "../../enums/guestStatus.enum";
import { TextField } from "@mui/material";

type StatusTagProps = {
  status: string;
};

export const StyledStatusTag = styled.div<StatusTagProps>`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
  color: white;
  background-color: ${(props) => {
    switch (props.status) {
      case GuestStatus.Attending:
        return "green";
      case GuestStatus.Maybe:
        return "orange";
      case GuestStatus.NotAttending:
        return "red";
      default:
        return "gray";
    }
  }};
`;

export const SearchTextField = styled(TextField)`
  && {
    margin-bottom: 24px;
    width: 300px;

    & label {
      font-weight: bold;
    }

    & input {
      font-size: 14px;
    }
  }
`;

export const TableWrapper = styled.div`
  padding: 24px;
`;
