import {Alert,Stack} from "@mui/material";

const MessageSuccess = ({ purchaseID }) => {
    return (
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="success">
          Gracias por su compra! su id de transacción es: {purchaseID}
        </Alert>
      </Stack>
    );
  };

export default MessageSuccess