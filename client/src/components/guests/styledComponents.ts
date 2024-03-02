import styled from "styled-components";
import { GuestStatus } from "../../enums/guestStatus.enum";
import { Button, TextField } from "@mui/material";

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

export const StyledButton = styled(Button)({
  color: "white !important",
  background: "linear-gradient(#0dccea, #0d70ea)",
  height: "40px",
  width: "200px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Subtle shadow effect
  transition: "background 0.3s, transform 0.2s", // Smooth transition for hover effect
  "&:hover": {
    transform: "scale(1.1)", // Scale up the button slightly on hover
  },
});
